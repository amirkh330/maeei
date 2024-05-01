"use client";
import "./globals.css";
import ChakraTheme from "../chakra-ui.theme";
import { ChakraProvider } from "@chakra-ui/react";
import NavBarLayout from "@/components/NavBarLayout/NavBarLayout";
import { createContext, useState } from "react";

export const DataContext = createContext<any>("data");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dataList, setDataList] = useState<any>([]);
  return (
    <html>
      <body dir="rtl">
        <DataContext.Provider value={{ dataList, setDataList }}>
          <ChakraProvider theme={ChakraTheme}>
            <NavBarLayout>{children}</NavBarLayout>
          </ChakraProvider>
        </DataContext.Provider>
      </body>
    </html>
  );
}
