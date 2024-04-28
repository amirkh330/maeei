"use client";
import NavBarLayout from "@/components/NavBarLayout/NavBarLayout";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body dir="rtl">
        <ChakraProvider>
          <NavBarLayout>{children}</NavBarLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
