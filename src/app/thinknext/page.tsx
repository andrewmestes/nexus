import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { Section, SectionHeading, Button, ImageSection } from "@/components/ui";
import { CalledToPlantBand } from "@/components/shared-sections";
import { PCO } from "@/lib/links";

export const metadata: Metadata = pageMetadata({
  title: "ThinkNEXT Leadership Summit",
  description:
    "Twice a year, Nexus converges to equip and encourage church planters and their teams. ThinkNEXT connects you with like-minded leaders on the journey of making strong disciples.",
  path: "/thinknext",
});

/** Sponsor logos, in the order the live page lists them. */
const SPONSORS = [
  { src: "/img/gloo-1__trust__.webp", name: "Gloo" },
  { src: "/img/GCR-Logo-small-1__trust__.webp", name: "GCR" },
  { src: "/img/solomonLogo__trust__.webp", name: "The Solomon Foundation" },
  { src: "/img/CFR1-e1673973021411__trust__.webp", name: "CFR" },
  {
    src: "/img/Screen-Shot-2023-01-17-at-9.39.18-AM__trust__.webp",
    name: "ThinkNEXT sponsor",
  },
  { src: "/img/DCC-Logo-NEW__trust__.webp", name: "DCC" },
];

export default function ThinkNextPage() {
  return (
    <>
      <ImageSection image="/img/Q7A2553-scaled-e1674764647470__largepreview__.webp" overlay="dark">
        <div className="text-center">
          <Image
            src="/img/ThinkNEXT-Logo_white-1024x320__largepreview__.webp"
            alt="ThinkNEXT"
            width={520}
            height={163}
            priority
            className="mx-auto w-full max-w-[420px]"
          />
          <h1 className="mt-8 font-heading text-3xl font-bold sm:text-4xl">
            Leadership Summit
          </h1>
        </div>
      </ImageSection>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
          <Image
            src="/img/Phil-Claycomb_Nexus-church-planting-e1675459540781__mediumsquare__.webp"
            alt="Phil Claycomb speaking at ThinkNEXT"
            width={320}
            height={320}
            className="mx-auto w-full max-w-[280px] rounded-[20px] object-cover shadow-soft"
          />
          <div>
            <SectionHeading align="left" rule>
              Equipping and Encouraging Church Planters and Their Teams
            </SectionHeading>
            <p className="mt-6 text-primary">
              Twice a year, we converge to equip and encourage one another on this
              journey in ministry. ThinkNEXT allows you to connect with like-minded
              leaders who can guide you in your mission to make strong disciples.
              We&rsquo;re better together — and ThinkNEXT helps us continue to dream,
              plan, and lead ourselves, our families, and our churches.
            </p>
            <div className="mt-8">
              <Button href={PCO.registrations}>Learn More &amp; Register</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="secondary" className="text-center">
        <SectionHeading
          rule
          sub="We couldn't host this free event for church planters and their teams. We're so thankful for our sponsors over the years."
        >
          Sponsors &amp; Partners
        </SectionHeading>
        <div className="reveal reveal-stagger mt-12 grid grid-cols-2 items-center gap-8 sm:grid-cols-3">
          {SPONSORS.map((s) => (
            <div
              key={s.src}
              className="flex items-center justify-center rounded-[20px] bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-elevated"
            >
              <Image
                src={s.src}
                alt={s.name}
                width={220}
                height={120}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Section>

      <ImageSection image="/img/Q7A2467-scaled-e1675457354928__largepreview__.webp" overlay="dark">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Register for Our Next Event
          </h2>
          <div className="mt-8 flex justify-center">
            <Button
              href="https://nexuschurchplanting.churchcenter.com/registrations/events/category/90802"
              variant="light"
            >
              Learn More &amp; Register
            </Button>
          </div>
        </div>
      </ImageSection>

      <CalledToPlantBand image="/img/Q7A2568-edited__largepreview__.webp" />
    </>
  );
}
