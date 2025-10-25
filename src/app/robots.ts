import type { MetadataRoute } from "next";

const baseUrl = `${process.env.NEXT_PUBLIC_URL_WEB_SITE}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/user/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
