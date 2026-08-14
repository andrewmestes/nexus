import type { Metadata } from "next";
import { PageHero, Section, Button } from "@/components/ui";
import { PCO, CONTACT } from "@/lib/links";

export const metadata: Metadata = { title: "Contact Us" };

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Thanks For Reaching Out!"
      >
        <p className="mx-auto max-w-xl text-white/70">
          If you&rsquo;re looking to plant a church, partner with Nexus on a
          church plant, or you&rsquo;re looking for coaching or training, let
          us know! Click the button below to fill out our interest form:
        </p>
        <div className="mt-6">
          <Button href={PCO.interestForm}>Get Started</Button>
        </div>
      </PageHero>

      <Section className="text-center">
        <h2 className="font-heading text-xl font-semibold">Contact</h2>
        <a href={`mailto:${CONTACT.email}`} className="mt-2 block text-primary">
          {CONTACT.email}
        </a>

        <h2 className="mt-8 font-heading text-xl font-semibold">Mailing Address</h2>
        <p className="mt-2 text-primary">
          {CONTACT.orgName}
          <br />
          {CONTACT.addressLine1}
          <br />
          {CONTACT.addressLine2}
        </p>
      </Section>
    </>
  );
}
