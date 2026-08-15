import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { TextureSection, Button } from "@/components/ui";
import { CalledToPlantBand } from "@/components/shared-sections";
import { PCO, CONTACT } from "@/lib/links";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Looking to plant a church, partner with Nexus, or find coaching or training? Reach out and let us know how we can help.",
  path: "/contact-us",
});

export default function ContactUsPage() {
  return (
    <>
      <TextureSection className="text-center">
        <h1 className="font-heading text-4xl font-bold sm:text-5xl">
          Thanks For Reaching Out!
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-primary">
          If you&rsquo;re looking to plant a church, partner with Nexus on a
          church plant, or you&rsquo;re looking for coaching or training, let
          us know! Click the button below to fill out our interest form:
        </p>
        <div className="mt-6">
          <Button href={PCO.interestForm}>Get Started</Button>
        </div>

        <div className="mx-auto mt-14 max-w-md rounded-[20px] bg-white p-8 shadow-soft">
          <h2 className="font-heading text-xl font-semibold">Contact</h2>
          <a href={`mailto:${CONTACT.email}`} className="mt-2 block text-primary">
            {CONTACT.email}
          </a>

          <h2 className="mt-6 font-heading text-xl font-semibold">Mailing Address</h2>
          {/* Live spells the org with a colon in this block specifically. */}
          <address className="mt-2 not-italic text-primary">
            Nexus: Church Planting &amp; Leader Care
            <br />
            {CONTACT.addressLine1}
            <br />
            {CONTACT.addressLine2}
          </address>
        </div>
      </TextureSection>

      <CalledToPlantBand image="/img/Screen-Shot-2021-06-22-at-12.47.28-PM.png" />
    </>
  );
}
