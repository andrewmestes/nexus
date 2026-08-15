import type { MetadataRoute } from "next";

const BASE_URL = "https://www.nexus.us";

const ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/church-planter-pathway", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/assessment", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/training", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/aos", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/thinknext", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/coaching", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/untangled", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/podcast", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/resources", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/the-clarity-project", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/bonhoeffer", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/leadership-institute", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/partner-with-us", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/get-involved", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact-us", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/donate", priority: 0.9, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
