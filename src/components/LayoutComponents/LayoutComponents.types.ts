import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SvgIconTypeMap } from "@mui/material";

type TypeItemLink = {
  Icon?: OverridableComponent<SvgIconTypeMap>;
  link: string;
  name?: string;
};

export type TypeLinks = Record<string, TypeItemLink>;
