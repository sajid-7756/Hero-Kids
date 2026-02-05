import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "800"],
});

const banglaFont = localFont({
  src: "./../fonts/mayaboti-normal.ttf",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hero-kids-mu.vercel.app"),

  title: {
    default: "HeroKids - Educational Toys & Kids Products",
    template: "%s | HeroKids",
  },

  description:
    "HeroKids provides safe, fun and educational toys designed to help children learn through play.",

  keywords: [
    "kids toys",
    "educational toys",
    "learning toys",
    "children products",
    "kids costume",
    "STEM toys",
    "Bangladesh kids store",
  ],

  authors: [{ name: "HeroKids Team" }],
  creator: "HeroKids",
  publisher: "HeroKids",

  applicationName: "HeroKids",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "HeroKids - Educational Toys & Kids Products",

    description:
      "Fun and safe educational toys that help children grow through play.",

    url: "https://hero-kids-mu.vercel.app",

    siteName: "HeroKids",

    images: [
      {
        url: "https://i.ibb.co.com/357kgMW6/home-preview.png",
        width: 1200,
        height: 630,
        alt: "HeroKids Homepage",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "HeroKids - Educational Toys",

    description:
      "Discover fun and safe educational toys for kids.",

    images: ["https://i.ibb.co.com/357kgMW6/home-preview.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "ecommerce",

  other: {
    "theme-color": "#ffffff",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${banglaFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
