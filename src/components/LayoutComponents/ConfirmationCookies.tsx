"use client";

import type { FC } from "react";

import { useEffect, useState } from "react";

import { Snackbar, Button } from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";

const text = `Our website uses cookies that are 
necessary for the proper functioning of the site. 
By continuing to use the site, you agree to the use of cookies.`;

const KEY = "CheckCookieConsentKey";

const saveConsent = () => {
  localStorage.setItem(
    KEY,
    JSON.stringify({
      date: Date.now(),
      exp: Date.now() + 1000 * 60 * 60 * 24 * 30, // 1 month
    })
  );
};

const hasConsent = (): boolean => {
  try {
    const d = JSON.parse(localStorage.getItem(KEY) || "false");
    return d && Date.now() < d.exp;
  } catch {
    return false;
  }
};

/**
 * ConfirmationCookies — a cookie consent notification banner:
 * - Displays a Snackbar at the bottom-center of the screen;
 * - Shows a message about the website using cookies;
 * - Provides an "Accept" button with a check icon;
 * - Stores consent in localStorage for 30 days;
 * - Automatically hides if consent is already given.
 */
const ConfirmationCookies: FC = () => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!hasConsent()) {
      setOpen(true);
    }
  }, []);

  if (!mounted) return;

  if (!open) return;

  const onCLick = () => {
    saveConsent();
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      style={{ width: "80%", maxWidth: "1100px" }}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      message={text}
      action={
        <Button
          size="small"
          endIcon={<CheckIcon />}
          onClick={onCLick}
          sx={{ marginRight: "5px" }}
        >
          Accept
        </Button>
      }
    />
  );
};

export default ConfirmationCookies;
