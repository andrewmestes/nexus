import type { Metadata } from "next";
import { Oswald, Merriweather } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { UpcomingEventsPopup } from "@/components/upcoming-events-popup";
import { CalledToPlantBand } from "@/components/shared-sections";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexus.us"),
  title: {
    default: "Nexus Church Planting & Leader Care",
    template: "%s | Nexus Church Planting & Leader Care",
  },
  description:
    "Nexus is a church-planting organization built to help pastors and church leaders stand in the center of their calling and multiply disciples in their community and beyond.",
  openGraph: {
    siteName: "Nexus Church Planting & Leader Care",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
        <CalledToPlantBand />
        <SiteFooter />
        <UpcomingEventsPopup />
      </body>
    </html>
  );
}
