import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, Button, ButtonRow, Quote, CardGrid, Card } from "@/components/ui";
import { NextStepsBand } from "@/components/shared-sections";
import { PCO } from "@/lib/links";

export const metadata: Metadata = { title: "Assessment" };

export default function AssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Church Planter Assessment"
        title="Helping Pastors and Leaders Prepare for the Church Planting Process"
        subtitle="The Nexus Assessment Center is designed to help pastors and church leaders determine their readiness to plant."
      />

      <Section>
        <SectionHeading>Plant a Life-Giving, Multiplying Church</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-primary">
          Healthy churches thrive through healthy leaders. That&rsquo;s why
          we&rsquo;re here — to equip pastors and church leaders to multiply
          Kingdom impact in everything they do. Our team will determine your
          readiness, position you to avoid the pitfalls of church planting, and
          set you up for long-term success.
        </p>
        <div className="mt-10">
          <CardGrid cols={2}>
            <Card title="Hi, I'm a Leader Looking to Plant." href={PCO.interestForm} cta="Start Your Journey" />
            <Card title="Hi, I'm a Church or Network Leader Looking For An Assessment Center." href="/partner-with-us" cta="Get Connected" />
          </CardGrid>
        </div>
      </Section>

      <Section tone="secondary">
        <Quote
          quote="Highly recommend Nexus for any church planter or church planting couple to work with. They not only care about what God has called you to and help you clarify that, but they care about YOU."
          attribution="Brandon Kelley, Church Planter – Venture Christian Church"
        />
      </Section>

      <Section>
        <SectionHeading sub="Our assessment process is thorough, transparent, and rigorous, yet the environment is warm, collaborative, friendly, and inviting. There are three possible outcomes for our assessment participants:">
          Feel Equipped to Plant the Church God Has Placed in Your Heart
        </SectionHeading>
        <div className="mt-10">
          <CardGrid cols={3}>
            <Card image="/img/Green-150x150__mediumsquare__.webp" title="Green" body="You're ready to begin this incredible adventure! Your calling and gifts are affirmed, and we believe you're ready to plant a life-giving, multiplying church." />
            <Card image="/img/Yellow-150x150__mediumsquare__.webp" title="Yellow" body="You have the gifts and abilities required for church planting — they simply need some fine-tuning. We will identify and coach you to take the next best step in your life and leadership." />
            <Card image="/img/Red-150x150__mediumsquare__.webp" title="Red" body="There are some core areas we need to address before we're confident you are ready for the rigors of church planting. We believe in you and understand your desire to plant a thriving church. We're here to help you get there." />
          </CardGrid>
        </div>
      </Section>

      <Section tone="secondary" className="text-center">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold uppercase tracking-wide text-accent">
          <span>Determine Your Emotional Preparedness</span>
          <span>Pursue Your Unique Vision</span>
          <span>Understand God&rsquo;s Plan For You</span>
        </div>
        <Quote
          quote="The assessment process and the church planting training Nexus offers are by far some of the best experiences and tools we have participated in to prepare future church planters to make disciples and plant reproducing churches. As a church planting organization, we have greatly benefited from their wisdom, experience, and partnership in expanding God's kingdom."
          attribution="Sean Thomé, Executive Director – Expand NW"
        />
      </Section>

      <NextStepsBand heading="We're Here to Set You up for Long-Term Success" sub="Our team will help you avoid the pitfalls of church planting, equipping you with the skills needed to plant a multiplying church." />

      <Section>
        <SectionHeading>Nexus Is Here to Help You Multiply Your Kingdom Impact</SectionHeading>
        <div className="mt-10">
          <CardGrid cols={3}>
            <Card title="Avoid Crucial Mistakes" body="The church-planting process isn't always easy, so we'll help you avoid mistakes that would hinder your progress." />
            <Card title="Plant Reproducing Churches" body="We don't just want you to plant any church — we're here to help you plant a church that impacts others for days to come." />
            <Card title="Work With a Dependable Team" body="When you join Nexus, you join a family. We'll be there to guide you throughout your faith journey." />
          </CardGrid>
        </div>
        <ButtonRow>
          <div className="mt-10 flex justify-center w-full">
            <Button href={PCO.interestForm}>Get Started</Button>
          </div>
        </ButtonRow>
      </Section>
    </>
  );
}
