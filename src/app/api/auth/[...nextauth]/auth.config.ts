"use node";
export const runtime = "nodejs";
import "server-only";

import type { NextAuthOptions } from "next-auth";

import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

import { TypeORMAdapter } from "@auth/typeorm-adapter";
import { pgConfig } from "@database/data-source";
import AuthEntities from "@database/entities/auth";
import { getServerSession } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_HOST!,
        port: process.env.EMAIL_PORT!,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER!,
          pass: process.env.EMAIL_PASS!,
        },
      },
      from: process.env.EMAIL_FROM!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  adapter: TypeORMAdapter(pgConfig, { entities: AuthEntities }),
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/user/auth" },
  session: {
    strategy: "database",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    updateAge: 24 * 60 * 60, // 24 hour's
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) session.user.id = user.id;
      return session;
    },
  },
};

/**
 * Retrieves the current `NextAuth` server session.
 *
 * This function is used in a server environment to retrieve
 * information about the current user based on the `authOptions` authentication settings.
 */
export const getSessionServer = async () => {
  return getServerSession(authOptions);
};
