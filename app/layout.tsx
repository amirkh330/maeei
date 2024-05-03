"use client";
import "./globals.css";
import ChakraTheme from "../chakra-ui.theme";
import { ChakraProvider } from "@chakra-ui/react";
import NavBarLayout from "@/components/NavBarLayout/NavBarLayout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body dir="rtl">
      <script src="/service-worker.js" defer></script>
          <ChakraProvider theme={ChakraTheme}>
            <NavBarLayout>{children}</NavBarLayout>
          </ChakraProvider>
      </body>
    </html>
  );
}
