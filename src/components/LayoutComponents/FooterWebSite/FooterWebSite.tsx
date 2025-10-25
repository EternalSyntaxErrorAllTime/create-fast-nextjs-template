"use client";

import type { FC } from "react";

import { LINKS_INFO, LINKS_SOCIAL } from "./link";

import { AppBar, Link, Typography } from "@mui/material";

import Logo from "@icons/logo.svg";

import s from "./FooterWebSite.module.scss";

/**
 * FooterWebSite — website footer component displaying:
 * - Site logo and name;
 * - Informational links - `LINKS_INFO`;
 * - Social media links - `LINKS_SOCIAL`;
 * - Copyright notice with current year.
 */
const FooterWebSite: FC = () => {
  const year = new Date().getFullYear();

  return (
    <AppBar component="footer" className={s.FooterWebSite} position="static">
      <div className={s.container}>
        <div className={s.info}>
          <Link href="/" className={s.logo}>
            <Logo />
            <Typography variant="h6">
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </Typography>
          </Link>
          {Object.keys(LINKS_INFO).map((v) => {
            const { link, name, Icon } = LINKS_INFO[v];
            return (
              <Link href={link} key={v} className={s.links}>
                {name}
                {Icon && <Icon />}
              </Link>
            );
          })}
        </div>
        <div className={s.socialData}>
          {Object.keys(LINKS_SOCIAL).map((v) => {
            const { link, name, Icon } = LINKS_SOCIAL[v];
            return (
              <Link href={link} key={v} className={s.links}>
                {name && name}
                {Icon && <Icon />}
              </Link>
            );
          })}
        </div>
        <Typography className={s.copyright}>
          <span>{`© ${year} ${process.env.NEXT_PUBLIC_SITE_NAME}`}</span>
          <span>All rights reserved</span>
        </Typography>
      </div>
    </AppBar>
  );
};

export default FooterWebSite;
