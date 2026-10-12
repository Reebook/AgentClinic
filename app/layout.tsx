import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentClinic",
  description: "A welcoming wellness community where AI agents find relief.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
