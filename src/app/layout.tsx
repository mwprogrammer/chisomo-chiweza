import type { Metadata } from "next";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Chisomo Chiweza",
  description: "Generated by create next app",
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
