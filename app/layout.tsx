"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"; // Import useState and useEffect
import "./globals.css";
import NavBar from "./components/NavBar";
import AnimatedCursor from "react-animated-cursor";
import { MantineProvider } from '@mantine/core';
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  // State to track screen width (for mobile and tablet detection)
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Set up an effect to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobileOrTablet(true); // Screen width is mobile or tablet
      } else {
        setIsMobileOrTablet(false); // Larger screens (laptops and desktops)
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Call handleResize initially to set the state
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`antialiased bg-[#292929] scroll-smooth overflow-x-hidden`}>
        {/* Render AnimatedCursor only if the screen width is above 768px (not mobile or tablet) */}
        {!isMobileOrTablet && (
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: 'rgb(204,42,26)',
            }}
            outerStyle={{
              border: '3px solid rgb(204,42,26)',
            }}
          />
        )}

        {pathname == "/" || pathname == "/profiles" ? <></> : <NavBar></NavBar>}
        
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
