import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { Section, SectionHeading, Button, Quote, CardGrid, Card, ImageSection, TextureSection } from "@/components/ui";
import { PCO, CONTACT } from "@/lib/links";

export const metadata: Metadata = pageMetadata({
  title: "Donate",
  description:
    "Your generosity goes directly toward planting new churches and caring for the leaders who guide them.",
  path: "/donate",
});

export default function DonatePage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
          Leave A Powerful Legacy
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg opacity-80">
          Your generosity goes directly toward planting new churches and
          caring for the leaders who guide them.
        </p>
        <div className="mt-8">
          <Button href={PCO.giving}>Make A Donation</Button>
        </div>
      </Section>

      <Section tone="accent">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <Image
            src="/img/IMG-1306-1024x1024__largepreview__.webp"
            alt="Phil Claycomb"
            width={140}
            height={140}
            className="mx-auto h-36 w-36 rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <h2 className="font-heading text-2xl font-bold">
              Together We&rsquo;re Better
            </h2>
            <p className="mt-4 text-white/85">
              &ldquo;You have a deep desire to leave a Kingdom impact—to be
              part of something bigger. Here at Nexus, we believe in that same
              mission. Having cared for hundreds of church leaders for nearly
              20 years, our goal is to see disciple-making communities
              multiply throughout the U.S. But we can&rsquo;t do it without
              your help. You deserve to see your faithful generosity stewarded
              well. We&rsquo;re committed to sharing the outcome of your
              impact so you can give with confidence. Together, we can launch
              new church plants, nurture tomorrow&rsquo;s leaders today, and
              encourage others across the country to pursue God&rsquo;s
              calling in their own communities. Thank you for your
              generosity. We realize that our church planting efforts succeed
              in great part because of your partnership.&rdquo;
            </p>
            <p className="mt-4 font-semibold">
              Phil Claycomb
              <span className="block text-sm font-normal text-white/70">
                Executive Director
              </span>
            </p>
            <div className="mt-6">
              <Button href={PCO.giving} variant="light">Make A Donation</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section className="text-center">
        <SectionHeading sub="Simple and secure. Give a single donation, or schedule a recurring donation using your checking account, credit card, or debit card.">
          Online Giving
        </SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl font-heading text-lg font-semibold text-accent">
          With us, you can give with complete confidence.
        </p>
        <div className="mt-6">
          <Button href={PCO.giving}>Give Now</Button>
        </div>
      </Section>

      <TextureSection>
        <SectionHeading>More Ways to Give</SectionHeading>
        <div className="mt-10">
          <CardGrid cols={2}>
            <Card title="Mail A Gift">
              <div className="mt-3 flex-1 text-sm leading-relaxed opacity-80">
                <p>Our mailing address for Nexus to receive checks is:</p>
                <address className="mt-3 not-italic font-semibold">
                  {CONTACT.orgName}
                  <br />
                  4100 W. ELDORADO PKWY STE 100,
                  <br />
                  #318 McKinney, TX 75070-4530
                </address>
              </div>
            </Card>
            <Card
              title="Give Assets"
              body={`Contact us at ${CONTACT.email} with any questions about giving assets to Nexus.`}
              href={`mailto:${CONTACT.email}`}
              cta="Email Us"
            />
          </CardGrid>
        </div>
      </TextureSection>

      <ImageSection image="/img/58384484_2310863282490919_88512717555499008_o-e1674497125285.webp" overlay="dark">
        <Quote
          heading="Nexus Is Worthy of Our Support"
          quote="Nexus is a biblically grounded, culturally relevant, relationally wired, and financially wise visionary church planting mission. Nexus provides church planters with the freedom to have wings and the leader care to ensure successful plants. Nexus is worth our attention and worthy of our support."
          attribution="Mark Scott, Lead Minister – Park Plaza Christian Church"
          image="/img/Mark-Scott-B10A2166-2x2-2021-EDITED-2048x2048-1-e1674497278269__mediumsquare__.webp"
        />
      </ImageSection>

      <Section>
        <SectionHeading sub="Together, our work is making a kingdom impact.">
          Advancing the Gospel Together
        </SectionHeading>
        <div className="mt-10">
          <CardGrid cols={3}>
            <Card title="Planting Churches" body="Because of your generosity, the team at Nexus partners with church-planting leaders, helping them launch churches designed to multiply so that they impact their community and beyond." />
            <Card title="Providing Leader Care" body="We don't launch new churches and send people on their way. Instead, your generosity fuels coaching, mentoring, training, community, and accountability to see pastors succeed throughout their entire church planting process." />
            <Card title="Launching and Partnering with Regional Networks" body="Our team utilizes your support to partner with pre-existing church planting networks across the country as well as help nurture new regional networks." />
          </CardGrid>
        </div>
      </Section>

      <ImageSection image="/img/adrianna-geo-x7oJQcDgtLg-unsplash-scaled-e1674496787377__largepreview__.webp" overlay="dark">
        <Quote
          quote="I have not been a part of anything this good before… genuinely. Nexus has been my fortress, my respite, in so many ways."
          attribution="Willie Tryon, Lead Pastor – Forge Christian Church"
        />
      </ImageSection>

      <Section tone="accent" className="text-center">
        <h2 className="font-heading text-3xl font-bold">Your Gift Leaves a Lasting Legacy</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/85">
          Know every dollar is hard at work making a difference — we believe
          keeping you informed is an act of stewardship. Watch your generosity
          plant new life-giving churches across the country.
        </p>
        <div className="mt-8">
          <Button href={PCO.giving} variant="light">Donate</Button>
        </div>
      </Section>
    </>
  );
}
