import type { TypeLinks } from "../LayoutComponents.types";

import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MenuIcon from "@mui/icons-material/Menu";

const LINKS: TypeLinks = {
  support: { Icon: SupportAgentIcon, link: "/support", name: "Support" },
  menu: { Icon: MenuIcon, link: "/menu", name: "Menu" },
};

export default LINKS;
