import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const organizationAddress =
  "The Fortune Bilash, House #28/A, Road #10, Bachelor Gate, JU Ambagan, Savar, Dhaka-1344";

export const metadata: Metadata = {
  title: "The Fortune Enterprise | Bangladesh's Diversified Business Group",
  description:
    "The Fortune Enterprise is a diversified business group in Bangladesh focused on agriculture, manufacturing, trade, transportation, and community development.",
  keywords: [
    "The Fortune Enterprise",
    "Bangladesh business group",
    "agriculture",
    "livestock",
    "manufacturing",
    "investment",
  ],
  alternates: {
    canonical: "https://thefortuneenterprise.com",
  },
  openGraph: {
    title: "The Fortune Enterprise | Bangladesh's Diversified Business Group",
    description:
      "Premium corporate website for a diversified business group in Bangladesh.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Fortune Enterprise",
              legalName: "The Fortune Enterprise",
              url: "https://thefortuneenterprise.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: organizationAddress,
                addressLocality: "Savar",
                addressRegion: "Dhaka",
                postalCode: "1344",
                addressCountry: "BD",
              },
              telephone: "+8801736460303",
              email: "info@thefortuneenterprise.com",
              description:
                "Bangladesh's diversified business group specializing in agriculture, livestock, manufacturing, trade, transportation, and community development.",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
