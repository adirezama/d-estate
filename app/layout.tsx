import { Footer } from "@components/Footer";
import { Navigation } from "@components/Home/Navigation";
import "@styles/globals.css";
import type { Metadata } from "next";
import { Aleo, Manrope, Nunito } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

const nunito = Nunito({
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-raleway",
});
export const metadata: Metadata = {
  title: {
    template: "%s | D'estate",
    default: "D'estate",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${nunito.variable} `}>
        <Navigation />
        {children}
        <Footer classname="bg-white py-10 md:py-24" />
      </body>
    </html>
  );
}
