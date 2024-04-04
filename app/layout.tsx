import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import backgroundImage from './bg-layout.svg';

export const metadata = {
  title: "Web3 Mini Games",
  description: "A collection of mini games, to inspire the Sui community.",
  metadataBase: new URL("https://mini-games-app-examples.vercel.app/"),
  themeColor: "#FFF",
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full" style={{
          backgroundPosition: 'bottom center',
          backgroundSize: 'cover',
          backgroundImage: `url(${backgroundImage.src})`,
          filter: 'brightness(0.4)',
        }} />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
