import type { Metadata } from "next";
import { Section, SectionHeading, Button, Quote, CardGrid, Card, ImageSection, TextureSection } from "@/components/ui";
import { CalledToPlantBand } from "@/components/shared-sections";
import { PCO } from "@/lib/links";

export const metadata: Metadata = { title: "Church Planter Pathway" };

export default function ChurchPlanterPathwayPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
          Bring your Church-Planting Vision to life.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg opacity-80">
          The Church Planter Pathway will help you plant a church today designed
          to leave a lasting impact in your community tomorrow.
        </p>
      </Section>

      <Section tone="accent">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold">
              Launch a Life-Giving, Multiplying Church
            </h2>
            <p className="mt-4 text-white/85">
              When you&rsquo;re planting a church, it feels like everyone is for
              you, but no one is with you. We&rsquo;re here to provide the
              tangible care and support you need to plant a life-giving,
              long-lasting church. Nexus is your trusted partner to provide you
              with the support and guidance to launch a healthy, multiplying
              church without sacrificing your health along the way.
            </p>
            <div className="mt-6">
              <Button href={PCO.interestForm} variant="light">
                Get Started
              </Button>
            </div>
          </div>
          <blockquote className="rounded-[20px] bg-white/10 p-8">
            <p className="font-heading text-lg italic">
              &ldquo;(Nexus) was huge from day one! Just to have that ongoing
              partnership in ministry and that extra motivating factor to keep
              pressing on, to keep doing, to keep growing, to keep
              thinking.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-white/70">
              Mike Moser, Lead Pastor – Connection Christian Church
            </footer>
          </blockquote>
        </div>
      </Section>

      <ImageSection image="/img/IMG_7680.jpg">
        <SectionHeading>Utilize The Church Planter Pathway</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/85">
          The Church Planter Pathway is our proven process to help pastors like
          you take a journey of launching your church in a healthy, sustainable
          way.
        </p>
      </ImageSection>

      <TextureSection>
        <CardGrid cols={4}>
          <Card eyebrow="Determine Readiness" title="Assessment" body="Interested in church planting? This collaborative assessment process determines your readiness to plant and includes an online assessment along with a 3-day onsite." href="/assessment" />
          <Card eyebrow="Ongoing Preparation" title="Training" body="Our training will equip you with the tools you need to see your disciple-making vision come alive! We'll help you avoid the pitfalls of church planting so you can lead a lifegiving, multiplying church." href="/training" />
          <Card eyebrow="Intentional Mentoring" title="Coaching" body="Every leader needs a coach. Every Timothy needs a Paul. Our coaches are there at every step to mentor, guide, and hold you accountable as you see the vision God placed in your heart come to life." href="/coaching" />
          <Card eyebrow="Nurturing Leaders" title="Care" body="Leader care is our secret sauce. When you join Nexus, you're joining a family! We're here to act as a steadying voice, leading you closer to God and how He is working through you to launch the church He's entrusted to you." />
        </CardGrid>
      </TextureSection>

      <Section className="text-center">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold uppercase tracking-wide text-accent">
          <span>Stand in the Center of Your Calling</span>
          <span>Launch Your Church With Confidence</span>
          <span>Work With a Trusted Partner</span>
        </div>
      </Section>

      <ImageSection image="/img/adrianna-geo-x7oJQcDgtLg-unsplash-scaled-e1674496787377__largepreview__.webp" overlay="dark">
        <Quote
          quote="I have not been a part of anything this good before… genuinely. Nexus has been my fortress, my respite, in so many ways."
          attribution="Willie Tryon, Lead Pastor – Forge Christian Church"
        />
      </ImageSection>

      <TextureSection>
        <SectionHeading sub="From clarifying your call to developing a clear vision, Nexus is here to care for you as a leader.">
          Multiply Disciples in Your Community and Beyond
        </SectionHeading>
        <div className="mt-6 flex justify-center">
          <Button href={PCO.interestForm}>Get Started</Button>
        </div>
      </TextureSection>

      <Section tone="secondary">
        <SectionHeading>Testimonies From Nexus Planters</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-primary">
          The heartbeat of Nexus is to plant churches and care for those called
          to that difficult task. We are a family that helps coach, train,
          mentor, and guide planters to plant a life-giving and multiplying
          church.
        </p>
      </Section>

      <ImageSection image="/img/Screen-Shot-2022-12-16-at-9.47.07-AM-copy.jpg">
        <SectionHeading>Nexus is here to ensure you and your church are thriving</SectionHeading>
        <div className="mt-10">
          <CardGrid cols={3}>
            <Card title="Develop a Clear Vision" body="Our team is here to bring the mission God placed in your heart to life." />
            <Card title="Join a Family" body="With Nexus, you're part of a group of church-planting companions who learn together as we work alongside each other." />
            <Card title="Plant the Church Within You" body="Our support is designed to give you the key elements needed to launch a life-giving, multiplying church." />
          </CardGrid>
        </div>
      </ImageSection>

      <CalledToPlantBand image="/img/Screen-Shot-2021-06-22-at-4.01.21-PM-e1624401191981.png" />
    </>
  );
}
