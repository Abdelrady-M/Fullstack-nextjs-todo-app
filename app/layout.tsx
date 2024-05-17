import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import {
  ClerkProvider
} from '@clerk/nextjs'
import Nav from "@/components/Nav";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Full-Stack Todo App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
          
          <div className="container mx-auto flex flex-col space-y-8 items-center justify-center lg:w-3/4">
          <Nav/>
            {children}
          </div>
          </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
