import type { Metadata } from "next";
import "./globals.css";
import './assets/css/styles.css'
import './assets/css/colors.css'

export const metadata: Metadata = {
  title: "Real Estate One Stop Solutions – Find Your Perfect Property",
  description: "Real Estate One Stop Solutions offers a comprehensive platform to explore, buy, and invest in the best properties. Trusted agents and curated listings to help you find your perfect home or investment.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="blue-skin">
        {children}
      </body>
    </html>
  );
}
