"use client";

import type { FC } from "react";

import { schemaEmail } from "./scheme.zod";
import { signIn } from "next-auth/react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";
import { useState, useEffect } from "react";
import { useColorScheme } from "@mui/material";

import { Typography, Button, IconButton } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import InputField from "./_components/InputField";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

import "./page.scss";

const AuthPage: FC = () => {
  const { mode } = useColorScheme();
  const session = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [textHelp, setTextHelp] = useState(" ");
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/user/profile");
    }
  }, [session, router]);

  const validate = () => {
    const parse = schemaEmail.safeParse(email);
    if (parse.success) {
      setTextHelp(" ");
      setStatus("idle");
      return true;
    }

    if (!parse.success) {
      const message = parse.error.issues[0].message;
      setTextHelp(message);
      setStatus("error");
    }
  };

  const submitEmail = async () => {
    if (!validate()) return;

    const res = await signIn("email", { email, redirect: false });
    if (res?.error) {
      enqueueSnackbar(res.error ?? "Authorization error!", {
        variant: "error",
      });
    } else {
      setStatus("sent");
      setTextHelp("The letter has been sent — please check your email");
    }
  };

  return (
    <div id="AuthPage">
      <div className={`wrapper ${mode}`}>
        <Typography variant="h5" component="h1" className="title">
          <span>Log in to the site </span>
          <span className="secondRow">
            using your email address
            <EmailIcon />
          </span>
        </Typography>
        <div className="container">
          <InputField
            label="Email"
            value={email}
            setValue={setEmail}
            StartIcon={EmailIcon}
            name="email"
            id="email"
            isError={status === "error"}
            helperText={textHelp}
            disabled={status === "sent"}
          />
          <Button
            onClick={submitEmail}
            loading={status === "sent"}
            endIcon={<SendIcon />}
          >
            Send a letter
          </Button>
        </div>
        <div className="otherLogin">
          <Typography variant="h6">Log in using:</Typography>
          <div>
            <IconButton
              onClick={() => signIn("google")}
              aria-label="auth-with-googl"
            >
              <GoogleIcon />
            </IconButton>
            <IconButton
              onClick={() => signIn("github")}
              aria-label="auth-with-github"
            >
              <GitHubIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
