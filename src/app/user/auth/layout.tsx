import type { TypeLayout } from "basic.types";
import type { Metadata } from "next";

import { getSessionServer } from "@auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Authorization",
  description: `Authorization to the site ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  openGraph: {
    title: "Authorization",
    description: `Authorization to the site ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  },
};

const AuthLayout: TypeLayout = async ({ children }) => {
  const session = await getSessionServer();
  if (session) return redirect("/user/profile");
  return children;
};

export default AuthLayout;
