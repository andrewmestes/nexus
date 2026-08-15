import type { Metadata } from "next";
import { Oswald, Merriweather } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { UpcomingEventsPopup } from "@/components/upcoming-events-popup";
import { RevealInit } from "@/components/reveal-init";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const GTM_ID = "GTM-K9HBN36K";

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Nexus Church Planting & Leader Care",
  url: "https://www.nexus.us/",
  logo: "https://www.nexus.us/img/Nexus-Logo-White__largepreview__.webp",
  description:
    "Nexus is a church-planting organization built to help pastors and church leaders stand in the center of their calling and multiply disciples in their community and beyond.",
  email: "info@nexus.us",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4100 W. Eldorado Pkwy Ste 100 #318",
    addressLocality: "McKinney",
    addressRegion: "TX",
    postalCode: "75070-4530",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/nexuschurchplanting/",
    "https://www.instagram.com/nexus_church_planting/",
    "https://www.linkedin.com/company/nexus-church-planting-leader-care/",
    "https://www.youtube.com/channel/UCd5AMLFOOTjdiQ8wiwMW51Q",
  ],
};

const SITE_DESCRIPTION =
  "Nexus is a church-planting organization built to help pastors and church leaders stand in the center of their calling and multiply disciples in their community and beyond.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexus.us"),
  title: {
    default: "Nexus Church Planting & Leader Care",
    template: "%s | Nexus Church Planting & Leader Care",
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nexus Church Planting & Leader Care",
    description: SITE_DESCRIPTION,
    url: "https://www.nexus.us/",
    siteName: "Nexus Church Planting & Leader Care",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Nexus Church Planting & Leader Care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Church Planting & Leader Care",
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <RevealInit />
        {/* Google Tag Manager — container carried over from the Church Co site.
            GTM's own config routes to GA4 (G-QY0HRC0982 et al) and Google Ads (AW-573200046). */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Church Center modal script — makes ?open-in-church-center-modal=true links
            open PCO forms in an overlay instead of navigating away. */}
        <Script
          src="https://js.churchcenter.com/modal/v1"
          strategy="afterInteractive"
        />

        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <UpcomingEventsPopup />
      </body>
    </html>
  );
}
