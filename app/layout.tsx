import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kyle Thornton",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-100 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-100`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
