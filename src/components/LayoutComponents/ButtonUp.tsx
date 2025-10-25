"use client";

import type { FC } from "react";

import { useState, useEffect } from "react";

import { Fade, Button } from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

/**
 * ButtonUp — a scroll-to-top button that appears after scrolling down the page:
 * - Appears when the user scrolls down 450px or more;
 * - Smoothly scrolls the page back to the top when clicked;
 * - Uses MUI Button and Fade for animation;
 * - Positioned fixed at the bottom-left corner.
 */
const ButtonUp: FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const eventScroll = () => {
      setVisible(window.scrollY >= 450);
    };

    window.addEventListener("scroll", eventScroll);

    return () => window.removeEventListener("scroll", eventScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fade in={visible} timeout={550} mountOnEnter unmountOnExit>
      <Button
        aria-label="button-up"
        size="small"
        color="info"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          zIndex: 2,
          left: "24px",
          bottom: "24px",
          minWidth: "40px",
          minHeight: "40px",
          borderRadius: "100%",
          padding: "0",
        }}
      >
        <KeyboardArrowUpIcon className="arrow" />
      </Button>
    </Fade>
  );
};

export default ButtonUp;
