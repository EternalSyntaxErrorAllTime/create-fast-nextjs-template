import "reflect-metadata";

import type { TypeLayout } from "basic.types";

import { metadata, viewport } from "./metadata";
import { Roboto } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import LayoutClient from "./layout-client";
import {
  HeaderWebSite,
  ButtonUp,
  FooterWebSite,
  ConfirmationCookies,
} from "@components/LayoutComponents";

const roboto = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export { metadata, viewport };

import "@styles/reset.css";
import "./index.scss";

const RootLayout: TypeLayout = ({ children }) => {
  return (
    <html lang={`${process.env.NEXT_PUBLIC_LANG}`} className={roboto.variable}>
      <body>
        <AppRouterCacheProvider>
          <LayoutClient>
            <HeaderWebSite />
            <main>{children}</main>
            <FooterWebSite />
            <ButtonUp />
            <ConfirmationCookies />
          </LayoutClient>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
