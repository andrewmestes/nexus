import type { Metadata } from "next";

export const SITE_URL = "https://www.nexus.us";
export const SITE_NAME = "Nexus Church Planting & Leader Care";

/**
 * Builds a page's full metadata: canonical URL plus OpenGraph/Twitter cards.
 * Next merges the title template from the root layout, so `title` here is the
 * bare page name. `image` defaults to the sitewide OG card.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  /** Route path with leading slash, e.g. "/podcast". Use "/" for home. */
  path: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const ogImage = image ?? "/opengraph-image.png";
  // Home uses the bare site name; inner pages get the "%s | Site" template.
  const fullTitle = path === "/" ? SITE_NAME : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

/** BreadcrumbList JSON-LD. Pass the trail after Home, e.g. [{name:"Podcast",path:"/podcast"}]. */
export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      ...trail.map((t, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: t.name,
        item: `${SITE_URL}${t.path}`,
      })),
    ],
  };
}
