import type { Metadata } from "next";

import "@/styles/index.scss";

export const metadata: Metadata = {
  title: "Sha256 Guess",
  description: "Just Guess a random Sha256. GLHF :D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"App"}>{children}</body>
    </html>
  );
}
