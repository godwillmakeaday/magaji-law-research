import type { MetadataRoute } from "next";
import { notes, topics } from "./data";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://magajilaw.com";
  const routes = ["", "/research-notes", "/research-index", "/citation-check", "/doctrinal-trails", "/doctrinal-trails/possession-and-trespass", "/topics", "/weekly-digest", "/methodology", "/corrections", "/about", "/commission-research", "/disclaimer", "/privacy", "/terms"];
  return [...routes.map(url => ({ url: base + url, lastModified: new Date() })), ...notes.map(n => ({ url: `${base}/research-notes/${n.slug}`, lastModified: new Date("2026-07-20") })), ...topics.map(([name]) => ({ url: `${base}/topics/${name.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`, lastModified: new Date() }))];
}
