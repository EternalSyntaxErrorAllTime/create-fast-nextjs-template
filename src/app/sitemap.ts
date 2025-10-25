import type { MetadataRoute } from "next";

const baseUrl = `${process.env.NEXT_PUBLIC_URL_WEB_SITE}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
