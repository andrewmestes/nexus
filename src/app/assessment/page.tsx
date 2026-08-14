import type { Metadata } from "next";
import { Section, SectionHeading, Button, Quote, CardGrid, Card, ImageSection, TextureSection } from "@/components/ui";
import { CalledToPlantBand } from "@/components/shared-sections";
import { PCO } from "@/lib/links";

export const metadata: Metadata = {
  title: "Assessment",
  description:
    "The Nexus Assessment Center is designed to help pastors and church leaders determine their readiness to plant.",
};

export default function AssessmentPage() {
  return (
    <>
      <TextureSection>
        <SectionHeading sub="The Nexus Assessment Center is designed to help pastors and church leaders determine their readiness to plant.">
          Helping Pastors and Leaders Prepare for the Church Planting Process
        </SectionHeading>
      </TextureSection>

      <ImageSection image="/img/IMG_4087.jpg">
        <SectionHeading sub="That's why we're here — to equip pastors and church leaders to multiply Kingdom impact in everything they do. Our team will determine your readiness, position you to avoid the pitfalls of church planting, and set you up for long-term success.">
          Plant a Life-Giving, Multiplying Church
        </SectionHeading>
        <div className="mt-10">
          <CardGrid cols={2}>
            <Card title="Hi, I'm a Leader Looking to Plant." href={PCO.interestForm} cta="Start Your Journey" />
            <Card title="Hi, I'm a Church or Network Leader Looking For An Assessment Center." href="/partner-with-us" cta="Get Connected" />
          </CardGrid>
        </div>
      </ImageSection>

      <Section>
        <Quote
          quote="Highly recommend Nexus for any church planter or church planting couple to work with. They not only care about what God has called you to and help you clarify that, but they care about YOU."
          attribution="Brandon Kelley, Church Planter – Venture Christian Church"
        />
      </Section>

      <ImageSection image="/img/yt-bg-G5Dr31rP0ZA.jpg">
        <SectionHeading>Feel Equipped to Plant the Church God Has Placed in Your Heart</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/85">
          Our assessment process is thorough, transparent, and rigorous, yet the
          environment is warm, collaborative, friendly, and inviting. There are
          three possible outcomes for our assessment participants:
        </p>
      </ImageSection>

      <Section tone="accent">
        <CardGrid cols={3}>
          <div className="rounded-[20px] bg-white/10 p-8 text-center">
            <Image400Icon src="/img/Green-150x150__mediumsquare__.webp" />
            <h3 className="mt-3 font-heading text-xl font-semibold">Green</h3>
            <p className="mt-2 text-sm text-white/85">You&rsquo;re ready to begin this incredible adventure! Your calling and gifts are affirmed, and we believe you&rsquo;re ready to plant a life-giving, multiplying church.</p>
          </div>
          <div className="rounded-[20px] bg-white/10 p-8 text-center">
            <Image400Icon src="/img/Yellow-150x150__mediumsquare__.webp" />
            <h3 className="mt-3 font-heading text-xl font-semibold">Yellow</h3>
            <p className="mt-2 text-sm text-white/85">You have the gifts and abilities required for church planting — they simply need some fine-tuning. We will identify and coach you to take the next best step in your life and leadership.</p>
          </div>
          <div className="rounded-[20px] bg-white/10 p-8 text-center">
            <Image400Icon src="/img/Red-150x150__mediumsquare__.webp" />
            <h3 className="mt-3 font-heading text-xl font-semibold">Red</h3>
            <p className="mt-2 text-sm text-white/85">There are some core areas we need to address before we&rsquo;re confident you are ready for the rigors of church planting. We believe in you and understand your desire to plant a thriving church.</p>
          </div>
        </CardGrid>
      </Section>

      <Section className="text-center">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold uppercase tracking-wide text-accent">
          <span>Determine Your Emotional Preparedness</span>
          <span>Pursue Your Unique Vision</span>
          <span>Understand God&rsquo;s Plan For You</span>
        </div>
      </Section>

      <ImageSection image="/img/Q7A2553-scaled-e1674764647470__largepreview__.webp" overlay="dark">
        <Quote
          quote="The assessment process and the church planting training Nexus offers are by far some of the best experiences and tools we have participated in to prepare future church planters to make disciples and plant reproducing churches. As a church planting organization, we have greatly benefited from their wisdom, experience, and partnership in expanding God's kingdom."
          attribution="Sean Thomé, Executive Director – Expand NW"
        />
      </ImageSection>

      <TextureSection>
        <SectionHeading>We&rsquo;re Here to Set You up for Long-Term Success</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-primary">
          Our team will help you avoid the pitfalls of church planting,
          equipping you with the skills needed to plant a multiplying church.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href={PCO.interestForm}>Get Started</Button>
        </div>
      </TextureSection>

      <ImageSection image="/img/yt-bg-4I6VIZI79HE.jpg">
        <SectionHeading>Nexus Is Here to Help You Multiply Your Kingdom Impact</SectionHeading>
        <div className="mt-10">
          <CardGrid cols={3}>
            <Card title="Avoid Crucial Mistakes" body="The church-planting process isn't always easy, so we'll help you avoid mistakes that would hinder your progress." />
            <Card title="Plant Reproducing Churches" body="We don't just want you to plant any church — we're here to help you plant a church that impacts others for days to come." />
            <Card title="Work With a Dependable Team" body="When you join Nexus, you join a family. We'll be there to guide you throughout your faith journey." />
          </CardGrid>
        </div>
      </ImageSection>

      <CalledToPlantBand image="/img/Greg-Teaching-ThinkNEXT-e1624372694557__largepreview__.webp" />
    </>
  );
}

function Image400Icon({ src }: { src: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" className="mx-auto h-16 w-16 rounded-full" />;
}
