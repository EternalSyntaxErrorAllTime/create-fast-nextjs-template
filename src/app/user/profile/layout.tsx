import type { TypeLayout } from "basic.types";
import type { Metadata } from "next";

import { getSessionServer } from "@auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfileLayout: TypeLayout = async ({ children }) => {
  const session = await getSessionServer();
  if (!session) return redirect("/user/auth");
  return children;
};

export default ProfileLayout;
