import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, Button, Quote, CardGrid, Card } from "@/components/ui";
import { NextStepsBand } from "@/components/shared-sections";
import { PCO } from "@/lib/links";

export const metadata: Metadata = { title: "Church Planter Pathway" };

export default function ChurchPlanterPathwayPage() {
  return (
    <>
      <PageHero
        eyebrow="Church Planter Pathway"
        title="Bring your Church-Planting Vision to life."
        subtitle="The Church Planter Pathway will help you plant a church today designed to leave a lasting impact in your community tomorrow."
      >
        <Button href={PCO.interestForm}>Get Started</Button>
      </PageHero>

      <Section>
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold">
              Launch a Life-Giving, Multiplying Church
            </h2>
            <p className="mt-4 text-primary">
              When you&rsquo;re planting a church, it feels like everyone is for
              you, but no one is with you. We&rsquo;re here to provide the
              tangible care and support you need to plant a life-giving,
              long-lasting church. Nexus is your trusted partner to provide you
              with the support and guidance to launch a healthy, multiplying
              church without sacrificing your health along the way.
            </p>
            <div className="mt-6">
              <Button href={PCO.interestForm}>Get Started</Button>
            </div>
          </div>
          <Quote
            quote="(Nexus) was huge from day one! Just to have that ongoing partnership in ministry and that extra motivating factor to keep pressing on, to keep doing, to keep growing, to keep thinking."
            attribution="Mike Moser, Lead Pastor – Connection Christian Church"
          />
        </div>
      </Section>

      <Section tone="secondary">
        <SectionHeading>Utilize The Church Planter Pathway</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-primary">
          The Church Planter Pathway is our proven process to help pastors like
          you take a journey of launching your church in a healthy, sustainable
          way.
        </p>
        <div className="mt-10">
          <CardGrid cols={4}>
            <Card eyebrow="Determine Readiness" title="Assessment" body="Interested in church planting? This collaborative assessment process determines your readiness to plant and includes an online assessment along with a 3-day onsite." href="/assessment" />
            <Card eyebrow="Ongoing Preparation" title="Training" body="Our training will equip you with the tools you need to see your disciple-making vision come alive! We'll help you avoid the pitfalls of church planting so you can lead a lifegiving, multiplying church." href="/training" />
            <Card eyebrow="Intentional Mentoring" title="Coaching" body="Every leader needs a coach. Every Timothy needs a Paul. Our coaches are there at every step to mentor, guide, and hold you accountable as you see the vision God placed in your heart come to life." href="/coaching" />
            <Card eyebrow="Nurturing Leaders" title="Care" body="Leader care is our secret sauce. When you join Nexus, you're joining a family! We're here to act as a steadying voice, leading you closer to God and how He is working through you to launch the church He's entrusted to you." />
          </CardGrid>
        </div>
      </Section>

      <Section className="text-center">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold uppercase tracking-wide text-accent">
          <span>Stand in the Center of Your Calling</span>
          <span>Launch Your Church With Confidence</span>
          <span>Work With a Trusted Partner</span>
        </div>
        <Quote
          quote="I have not been a part of anything this good before… genuinely. Nexus has been my fortress, my respite, in so many ways."
          attribution="Willie Tryon, Lead Pastor – Forge Christian Church"
        />
      </Section>

      <NextStepsBand
        heading="Multiply Disciples in Your Community and Beyond"
        sub="From clarifying your call to developing a clear vision, Nexus is here to care for you as a leader."
      />

      <Section>
        <CardGrid cols={3}>
          <Card title="Develop a Clear Vision" body="Our team is here to bring the mission God placed in your heart to life." />
          <Card title="Join a Family" body="With Nexus, you're part of a group of church-planting companions who learn together as we work alongside each other." />
          <Card title="Plant the Church Within You" body="Our support is designed to give you the key elements needed to launch a life-giving, multiplying church." />
        </CardGrid>
      </Section>
    </>
  );
}
