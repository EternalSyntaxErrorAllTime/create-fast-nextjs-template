"use client";

import type { FC } from "react";

import { useSession } from "next-auth/react";
import { useMediaQuery } from "@mui/material";
import { usePathname } from "next/navigation";

import { Link, Badge, Typography } from "@mui/material";
import Image from "next/image";

import LoginIcon from "@mui/icons-material/Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

/**
 * ProfileUser — displays a link to the user's profile or a link to log in, depending on the session status:
 * - Uses `next-auth` to verify user authentication
 * - Displays a “Log in” link with an icon if the user is not logged in;
 * - Displays the user's name and avatar if the user is logged in.
 */
const ProfileUser: FC = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isMedia = useMediaQuery("(min-width: 600px)");

  if (!session) {
    return (
      <Link
        href="/user/auth"
        variant={"/user/auth" === pathname ? "link-active" : "link-center"}
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "10px",
        }}
      >
        {isMedia && <span>Sing In</span>}
        <LoginIcon />
      </Link>
    );
  }

  return (
    <Badge color="secondary" variant="dot" badgeContent={0}>
      <Link
        href="/user/profile"
        variant={
          pathname.startsWith("/user/profile") ? "link-active" : "link-center"
        }
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: "8px",
        }}
      >
        <Typography>{session.user.name}</Typography>
        {!session.user.image ? (
          <AccountCircleIcon />
        ) : (
          <Image
            alt="user-avatar"
            src={`${session.user?.image}`}
            width={32}
            height={32}
            sizes="100%"
            style={{ borderRadius: "100%" }}
          />
        )}
      </Link>
    </Badge>
  );
};

export default ProfileUser;
