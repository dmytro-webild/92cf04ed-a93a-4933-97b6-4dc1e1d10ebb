import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Shoreside Terrace Cafe | Coastal Mediterranean Dining in La Mercy',
  description: 'Experience luxury dining at Shoreside Terrace Cafe. Ocean views, premium seafood, and Mediterranean-inspired flavors in La Mercy, Durban North Coast.',
  openGraph: {
    "title": "Shoreside Terrace Cafe | Coastal Mediterranean Dining",
    "description": "Experience luxury dining at Shoreside Terrace Cafe. Ocean views, premium seafood, and Mediterranean-inspired flavors.",
    "siteName": "Shoreside Terrace Cafe",
    "type": "website"
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
