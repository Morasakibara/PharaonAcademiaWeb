import { MetadataRoute } from "next";

const lastModified = new Date("2026-10-22");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pharaonacademia.com",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://pharaonacademia.com/about",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
