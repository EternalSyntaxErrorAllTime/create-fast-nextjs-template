import type { TypeLinks } from "../LayoutComponents.types";

import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const LINKS_INFO: TypeLinks = {
  service_rules: { link: "/service_rules", name: "Rules of service" },
  support: { link: "/support", name: "Support" },
};

export const LINKS_SOCIAL: TypeLinks = {
  telegram: { link: "/tg.com", Icon: TelegramIcon },
  you_tube: { link: "/youtube.com", Icon: YouTubeIcon },
};
