import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./Layout.sass";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "6ixarchive",
  description: "Menswear archive",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="lofi">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.6.1/dist/full.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
