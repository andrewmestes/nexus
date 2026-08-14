import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Section, SectionHeading, Button, CardGrid, Card, Quote } from "@/components/ui";
import { PCO } from "@/lib/links";

export const metadata: Metadata = { title: "Get Involved" };

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero title="Nurturing Tomorrow's Leaders Together" subtitle="Together We're Better" />

      <Section>
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <Image
            src="/img/IMG-1306-1024x1024__largepreview__.webp"
            alt="Phil Claycomb"
            width={140}
            height={140}
            className="mx-auto h-36 w-36 rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <p className="text-primary">
              You have a deep desire to leave a Kingdom impact—to be part of
              something bigger. Here at Nexus, we believe in that same
              mission. Having cared for hundreds of church leaders for nearly
              20 years, our goal is to see disciple-making communities
              multiply throughout the U.S. But we can&rsquo;t do it without
              your help.
            </p>
            <p className="mt-4 text-primary">
              We realize that our church planting efforts succeed in great
              part because of your partnership.
            </p>
            <p className="mt-4 font-semibold">
              Phil Claycomb
              <span className="block text-sm font-normal text-primary">
                Executive Director
              </span>
            </p>
          </div>
        </div>
      </Section>

      <Section tone="secondary">
        <SectionHeading>3 Ways to Get Involved</SectionHeading>
        <div className="mt-10">
          <CardGrid cols={3}>
            <Card title="Pray" body="Join our monthly prayer gathering as we pray through the Psalms together, asking the Lord to do a great work in our lives, our leaders, and through the church plants in our network!" href="/contact-us" cta="Learn More" />
            <Card title="Provide" body="Together, we can launch new church plants, nurture tomorrow's leaders today, and encourage others across the country to pursue God's calling in their own communities!" href="/donate" cta="Make a Donation" />
            <Card title="Participate" body="Meet the incredible church planting leaders you support, grow together, and be challenged in your life and leadership at one of our upcoming events!" href={PCO.registrations} cta="Learn More" />
          </CardGrid>
        </div>
        <div className="mt-10 flex justify-center">
          <Button href={PCO.emailList}>Subscribe to Nexus Newsletter</Button>
        </div>
      </Section>

      <Section className="text-center">
        <SectionHeading sub="Simple and secure. Give a single donation, or schedule a recurring donation using your checking account, credit card, or debit card.">
          Online Giving
        </SectionHeading>
        <div className="mt-6">
          <Button href="/donate">Make a Donation</Button>
        </div>
      </Section>

      <Section tone="secondary">
        <Quote
          quote="I have not been a part of anything this good before… genuinely. Nexus has been my fortress, my respite, in so many ways."
          attribution="Willie Tryon, Lead Pastor – Forge Christian Church"
        />
      </Section>

      <Section className="text-center">
        <SectionHeading sub="Join us at one of our live events. ThinkNEXT is an incredible time as we gather our network to encourage and equip one another to live out the church-planting vision God called us to. We would love to see you there!">
          Get Inspired
        </SectionHeading>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button href={PCO.thinkNextEvent}>Register for ThinkNEXT</Button>
          <Button href="/about" variant="outline">
            Learn More About All We Do
          </Button>
        </div>
      </Section>
    </>
  );
}
