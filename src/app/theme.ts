import type { CSSObject } from "@mui/material";

import { createTheme, responsiveFontSizes } from "@mui/material";
import NextLink from "next/link";

const WEIGHT = 700;

const settings = createTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
      },
    },
    dark: {
      palette: {
        mode: "dark",
      },
    },
  },
  cssVariables: {
    cssVarPrefix: "mui",
    colorSchemeSelector: ".theme-%s",
  },
  typography: { fontFamily: "var(--font-roboto)" },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: WEIGHT,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: NextLink,
        variant: "link-center",
        color: "textPrimary",
        underline: "none",
      },
      variants: [
        {
          props: { variant: "link-center" },
          style: {
            position: "relative",
            textDecoration: "none",
            fontWeight: WEIGHT,
            "&::before": {
              content: '""',
              position: "absolute",
              display: "block",
              width: "100%",
              height: "2px",
              bottom: "-5px",
              left: 0,
              backgroundColor: "currentColor",
              borderRadius: 100,
              transform: "scaleX(0)",
              transition: "transform 0.3s ease",
            },
            "@media (pointer: fine) and (hover: hover)": {
              "&:hover::before": { transform: "scaleX(1)" },
            },
            "@media (pointer: coarse) and (hover: none)": {
              "&:focus::before": { transform: "scaleX(1)" },
            },
          },
        },
        {
          props: { variant: "link-active" },
          style: {
            position: "relative",
            textDecoration: "none",
            color: "inherit",
            fontWeight: WEIGHT,
            "&::before": {
              content: '""',
              position: "absolute",
              display: "block",
              width: "100%",
              height: "2px",
              bottom: "-5px",
              left: 0,
              backgroundColor: "currentColor",
              borderRadius: 100,
              transform: "scaleX(1)",
            },
          },
        },
        {
          props: { variant: "link-off" },
          style: {
            "&::before": { content: '""', transform: "scaleX(0)" },
            "@media (pointer: fine) and (hover: hover)": {
              "&:hover::before": { transform: "scaleX(0)" },
            },
            "@media (pointer: coarse) and (hover: none)": {
              "&:focus::before": { transform: "scaleX(0)" },
            },
          },
        },
      ],
    },
    MuiButton: {
      defaultProps: {
        color: "primary",
        variant: "contained",
        size: "default",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const baseStyle: CSSObject = {
            fontWeight: WEIGHT,
            textTransform: "none",
            whiteSpace: "nowrap", // maybe delete next time
          };

          if (ownerState.size !== "default") return baseStyle;

          return {
            ...baseStyle,
            fontSize: "0.9375rem",
            lineHeight: "26.25px",
            padding: "6.5px 16px",
            boxSizing: "border-box",
            [theme.breakpoints.down("xl")]: {
              padding: "6px 14px",
              lineHeight: "25.75px",
            },
            [theme.breakpoints.down("lg")]: {
              padding: "5.5px 12px",
              lineHeight: "23.75px",
            },
            [theme.breakpoints.down("md")]: {
              padding: "5.5px 11px",
              lineHeight: "22.75px",
            },
            [theme.breakpoints.down("sm")]: {
              padding: "5.5px 11px",
              lineHeight: "22px",
            },
          };
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        color: "inherit",
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "standard",
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: WEIGHT,
        },
      },
    },
  },
});

const theme = responsiveFontSizes(settings, {
  factor: 2,
  breakpoints: ["xs", "sm", "md", "lg"],
});

export default theme;
