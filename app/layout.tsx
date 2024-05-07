"use client";
import NavBarLayout from "@/components/NavBarLayout/NavBarLayout";
import { ChakraProvider } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import ChakraTheme from "../chakra-ui.theme";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Maeei</title>
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
