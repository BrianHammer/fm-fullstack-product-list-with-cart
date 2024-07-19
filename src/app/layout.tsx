import type { Metadata } from "next";
import { Red_Hat_Text as MainFont } from "next/font/google";
import "./globals.css";
import FMAttribution from "@/components/global/FMAttribution";

const font = MainFont({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "FM Shopping Cart",
  description: "A frontend mentor challenge ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} font-c-normal text-black bg-rosey-50 w-full min-h-screen relative`}
      >
        {children}

        {/** Always on the bottom of the screen */}
        
        <FMAttribution
          name="Brian Hammer"
          link="https://www.github.com/BrianHammer"
        />
      </body>
    </html>
  );
}
