import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Joe's Pizza Palace — Brooklyn's Finest Since 1995",
  description:
    "Family-owned Italian restaurant in Brooklyn, NY serving authentic New York-style brick oven pizza and homemade pasta. Three generations of flavor, one unforgettable experience.",
  keywords: [
    "pizza",
    "Brooklyn pizza",
    "Italian restaurant",
    "brick oven pizza",
    "NYC pizza",
    "homemade pasta",
    "catering Brooklyn",
    "Joe's Pizza Palace",
  ],
  openGraph: {
    title: "Joe's Pizza Palace — Authentic Brooklyn Pizza Since 1995",
    description:
      "Brick oven pizza, handmade pasta, and a secret sauce recipe passed down three generations. Visit us in Brooklyn or order delivery today.",
    type: "website",
    locale: "en_US",
    siteName: "Joe's Pizza Palace",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe's Pizza Palace — Brooklyn's Finest Pizza",
    description:
      "Authentic New York-style pizza from our family to yours. Brick oven baked, handmade daily in Brooklyn since 1995.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
