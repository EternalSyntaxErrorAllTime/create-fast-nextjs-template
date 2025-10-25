"use client";

import type { FC } from "react";

import LINKS from "./links";

import { useScrollTrigger, useMediaQuery } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Slide, AppBar, Link, IconButton, Drawer } from "@mui/material";
import SwitcherTheme from "../SwitcherTheme";
import ProfileUser from "../ProfileUser";

import Logo from "@icons/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

import s from "./HeaderWebSite.module.scss";

/**
 * HeaderWebSite — website header component with adaptive navigation.
 * - Display of the logo and site name;
 * - Navigation links - from the `LINKS` object;
 * - Theme switcher - `SwitcherTheme` component;
 * - User profile - `ProfileUser` component.
 */
const HeaderWebSite: FC = () => {
  const triggerScroll = useScrollTrigger();
  const pathname = usePathname();
  const isMedia = useMediaQuery("(max-width: 900px)");

  const [menu, setMenu] = useState(false);

  return (
    <>
      <Slide appear={false} direction="down" in={!triggerScroll}>
        <AppBar className={s.HeaderWebSite}>
          <div className={s.container}>
            <div className={s.logoContainer}>
              {isMedia && (
                <IconButton
                  size="medium"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                  onClick={() => setMenu(true)}
                >
                  <MenuIcon />
                </IconButton>
              )}

              <Link href="/" className={s.logo}>
                <Logo />
                <p className={s.text}>{process.env.NEXT_PUBLIC_SITE_NAME}</p>
              </Link>
            </div>
            <nav className={s.navigation}>
              {!isMedia &&
                Object.keys(LINKS).map((v) => {
                  const { Icon, link, name } = LINKS[v];
                  return (
                    <Link
                      href={link}
                      key={v}
                      className={s.linkElement}
                      variant={
                        link === pathname ? "link-active" : "link-center"
                      }
                    >
                      {Icon && <Icon />}
                      {name && <span>{name}</span>}
                    </Link>
                  );
                })}
            </nav>
            <SwitcherTheme />
            <ProfileUser />
          </div>
        </AppBar>
      </Slide>
      {isMedia && (
        <Drawer open={menu} onClose={() => setMenu(false)} anchor="left">
          <div className={s.DrawerContainer}>
            <div className={s.logoContainer}>
              {isMedia && (
                <IconButton
                  size="medium"
                  edge="start"
                  color="inherit"
                  sx={{ mr: 2 }}
                  onClick={() => setMenu(false)}
                >
                  <MenuIcon />
                </IconButton>
              )}

              <Link href="/" className={s.logo}>
                <Logo />
                <p className={s.text}>{process.env.NEXT_PUBLIC_SITE_NAME}</p>
              </Link>
            </div>
            <nav className={s.navigation}>
              {Object.keys(LINKS).map((v) => {
                const { Icon, link, name } = LINKS[v];
                return (
                  <Link
                    href={link}
                    key={v}
                    className={s.linkElement}
                    variant={link === pathname ? "link-active" : "link-center"}
                  >
                    {Icon && <Icon />}
                    {name && <span>{name}</span>}
                  </Link>
                );
              })}
            </nav>
          </div>
        </Drawer>
      )}
    </>
  );
};

export default HeaderWebSite;
