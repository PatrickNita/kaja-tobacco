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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
