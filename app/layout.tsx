"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import NavBar from "./components/NavBar";
import AnimatedCursor from "react-animated-cursor";
import { MantineProvider } from '@mantine/core';




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname(); 
  return (
    <html lang="en">
      <body
        className={` antialiased bg-black `}
      >
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          
          innerStyle={{
            backgroundColor: 'rgb(204,42,26)'
          }}
          outerStyle={{
            border: '3px solid rgb(204,42,26)'
          }}
        />
        {pathname==="/" || pathname==="/profiles" ?<></>:<NavBar></NavBar>}
        <MantineProvider >
        {children}
        </MantineProvider>
      </body>
    </html>
  );
}
