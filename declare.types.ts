import "@mui/material/Typography";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "link-center": true;
    "link-active": true;
    "link-off": true;
  }
}

import "@mui/material/Button";
declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    default: true;
  }
}

import "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: string;
  }
}
