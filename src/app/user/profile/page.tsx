"use client";

import type { FC } from "react";

import { signOut } from "next-auth/react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Button } from "@mui/material";

const ProfilePage: FC = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/user/profile");
    }
  }, [session, router]);

  return (
    <div id="ProfilePage">
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
};

export default ProfilePage;
