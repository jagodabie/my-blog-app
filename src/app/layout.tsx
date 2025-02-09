import type { Metadata } from "next";
import "./globals.css";
import { AppHeader } from "@/components/AppHeader/AppHeader";
import { Navigation } from "@/components/Navigation/Navigation";

export const metadata: Metadata = {
  title: "Blog Edukacyjny",
  description: "Fikcyjny Blog Edukacyjny, fikcyjnej jednostki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <AppHeader />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
