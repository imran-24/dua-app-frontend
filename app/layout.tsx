import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dua & Ruqya",
  description: "Dua & Ruqya App",
  icons:{
    icon:[
      {
        media: "(prefers-color-scheme: light)",
        url: "/hand-logo.png",
        href: "/hand-logo.png"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/hand-logo.png",
        href: "/hand-logo.png"
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className=" h-full ">
          {children}
        </main>
      </body>
    </html>
  );
}
