import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import {
  Section,
  SectionHeading,
  Button,
  ButtonRow,
  ImageSection,
  TextureSection,
} from "@/components/ui";
import { CalledToPlantBand } from "@/components/shared-sections";
import { PCO } from "@/lib/links";

export const metadata: Metadata = pageMetadata({
  title: "The Art of the Start",
  description:
    "The Art of the Start equips you and your team to launch well — delivered online, onsite, and ongoing, built around the Four Fields and the Vision Frame.",
  path: "/aos",
});

const LEARN = [
  "The power of knowing your calling",
  "How to articulate and cast a clear and compelling vision",
  "How to plan strategically",
  "How to craft culture and Build teams",
  "How to truly make disciple-makers",
  "And so much more!",
];

const DELIVERY = [
  {
    title: "Online",
    body: "The Art of The Start begins online with essential preparatory work before our onsite gathering.",
  },
  {
    title: "Onsite",
    body: "This three-day gathering is an excellent opportunity to get to know other like-minded planters as we learn and grow together.",
  },
  {
    title: "Ongoing",
    body: "After our onsite gathering, we will be following up with calls and coaching to help you begin the implementation process for all you've learned.",
  },
];

const CORE_CONCEPTS = [
  "First, we'll introduce you to a Disciple-Making Movement tool called the 4-fields. The entire Art of The Start journey is broken down and organized around the concepts in this tool.",
  "Then, we move into a time of dreaming about what 'could be' by Start With The End In Mind.",
  "We'll also address our fundamental understanding of what our actual goals should be by Making Missional Shifts",
  "Vision isn't everything, but it does change everything. We'll introduce you to an incredible tool used to bring clarity to you and your team called the Vision Frame.",
  "And lastly, before crafting any vision or mission statements, we'll help you understand that vision should start with investigation, not imitation, through a tool called The Kingdom Concept.",
];

export default function AosPage() {
  return (
    <>
      <ImageSection image="/img/pexels-photo-5702419.jpeg" overlay="dark">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">
            Equipping you and your team to launch well
          </h1>
          <p className="mt-6 text-lg text-white/85">
            Nexus will be with you every step of the way to coach, mentor, train, and
            care for you, your family, and your team.
          </p>
        </div>
      </ImageSection>

      <Section className="text-center">
        <p className="eyebrow text-accent">Starting Well Matters</p>
        <div className="mt-4">
          <SectionHeading rule>Designing Multiplying Churches</SectionHeading>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-primary">
          During our time together, you will learn things like:
        </p>
        <ul className="reveal reveal-stagger mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
          {LEARN.map((l) => (
            <li
              key={l}
              className="flex items-start gap-3 rounded-[10px] bg-secondary px-5 py-4 text-sm"
            >
              <span aria-hidden="true" className="mt-0.5 font-bold text-accent">
                ✓
              </span>
              {l}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <Button href={PCO.registrations}>Register For The Art of The Start</Button>
        </div>
      </Section>

      <ImageSection image="/img/IMG_1856-scaled__mediumsquare__.webp" overlay="dark">
        <SectionHeading light rule>
          This training will be delivered in three sections:
        </SectionHeading>
        <div className="reveal reveal-stagger mt-10 grid gap-6 md:grid-cols-3">
          {DELIVERY.map((d) => (
            <div key={d.title} className="rounded-[20px] bg-white/10 p-7 backdrop-blur-sm">
              <h3 className="font-heading text-xl font-semibold">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">{d.body}</p>
            </div>
          ))}
        </div>
      </ImageSection>

      <TextureSection>
        <SectionHeading rule>
          Core concepts designed to accelerate our on-site time together.
        </SectionHeading>
        <ol className="reveal reveal-stagger mx-auto mt-10 grid max-w-4xl gap-5">
          {CORE_CONCEPTS.map((c, i) => (
            <li
              key={c}
              className="flex gap-5 rounded-[20px] bg-white p-6 shadow-soft transition-shadow duration-300 hover:shadow-elevated"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-heading font-bold text-white"
              >
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-primary">{c}</p>
            </li>
          ))}
        </ol>
      </TextureSection>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="media-frame bg-secondary p-8">
            <Image
              src="/img/Nexus-4-Fields__mediumsquare__.webp"
              alt="The Four Fields disciple-making diagram"
              width={600}
              height={600}
              className="mx-auto w-full max-w-md"
            />
          </div>
          <div>
            <SectionHeading align="left" rule>
              The Four Fields
            </SectionHeading>
            <p className="mt-6 text-primary">
              Nexus isn&rsquo;t just after planting your church; we&rsquo;re planting
              churches! Multiplying disciple-making communities is at the heart of our
              training, and The Four Fields are the guide through which we train
              leaders. This training will help you focus on more than just starting a
              church service. It helps you focus on going out, spreading the Gospel,
              nurturing disciples, caring for and equipping them as you gather, and
              training them to go and do the same.
            </p>
            <div className="mt-8">
              <ButtonRow>
                <Button href="https://youtu.be/cxWTmbaT68k">
                  Watch An Overview of The Four Fields
                </Button>
              </ButtonRow>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="secondary">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading align="left" rule>
              The Vision Frame
            </SectionHeading>
            <p className="mt-6 text-primary">
              Vision isn&rsquo;t everything, but it changes everything. Thinking way
              beyond the grand opening to see the multiplication potential of the
              people you lead is imperative. In The Art of The Start, you will be led
              by a Vision Frame certified navigator to help you articulate your
              mission, vision, values, and disciple-making strategy.
            </p>
          </div>
          <div className="media-frame order-1 bg-white p-8 lg:order-2">
            <Image
              src="/img/Vision-Frame__mediumsquare__.webp"
              alt="The Vision Frame diagram"
              width={600}
              height={600}
              className="mx-auto w-full max-w-md"
            />
          </div>
        </div>
      </Section>

      <CalledToPlantBand image="/img/yt-bg-1dGMs4hhcVA.jpg" />
    </>
  );
}
