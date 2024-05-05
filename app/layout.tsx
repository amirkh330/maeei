"use client";
import "./globals.css";
import ChakraTheme from "../chakra-ui.theme";
import { ChakraProvider } from "@chakra-ui/react";
import NavBarLayout from "@/components/NavBarLayout/NavBarLayout";
import { Metadata } from "next";
import Head from "next/head";
import { Helmet } from "react-helmet";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="manifest" href="/manifest.json" />
      </Helmet>
      <body dir="rtl">
        <script src="/service-worker.js" defer></script>
        <ChakraProvider theme={ChakraTheme}>
          <NavBarLayout>{children}</NavBarLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
