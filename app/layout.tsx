import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://magajilaw.com"),
  title: { default: "Magaji Law Research", template: "%s | Magaji Law Research" },
  description: "Nigerian judicial authorities, carefully examined and practically applied.",
  openGraph: { title: "Magaji Law Research", description: "What did the court actually decide?", type: "website" },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
