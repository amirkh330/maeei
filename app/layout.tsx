"use client";
import NavBarLayout from "@/components/NavBarLayout/NavBarLayout";
import { ChakraProvider } from "@chakra-ui/react";
import ChakraTheme from "../chakra-ui.theme"

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body dir="rtl">
        <ChakraProvider  theme={ChakraTheme}>
          <NavBarLayout>{children}</NavBarLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
