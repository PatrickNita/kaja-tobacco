import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAJA",
  description: "KAJA product presentation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link href="https://use.typekit.net" rel="preconnect" />
        <link href="https://use.typekit.net/nbc2obq.css" rel="stylesheet" />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
