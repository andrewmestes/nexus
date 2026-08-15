import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Section, SectionHeading, Button, CardGrid, ImageSection } from "@/components/ui";
import { PCO } from "@/lib/links";

export const metadata: Metadata = pageMetadata({
  title: "Church-Planting Wives (Untangled)",
  description:
    "Untangled is a unique community designed for church-planting wives — a safe place to explore the daily challenges of living out your faith in ministry.",
  path: "/untangled",
});

const WEEKS = [
  { title: "Week 1", body: "Introductions / What is spiritual formation / Lectio Divina" },
  { title: "Week 2", body: "What is my picture of God? / Prayer" },
  { title: "Week 3", body: "What is the picture of my heart? / Hiding scripture in your heart" },
  { title: "Week 4", body: "What is my truth in Christ? / Solitude" },
  { title: "Week 5", body: "Do I want to be Well? / Examen" },
  { title: "Week 6", body: "What is my picture of the Gospel? / Gratitude" },
];

export default function UntangledPage() {
  return (
    <>
      <Section className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          A Community For Nexus Church-Planting Wives
        </p>
        <h1 className="font-heading text-5xl font-bold">UNTANGLED</h1>
        <p className="mt-3 text-lg opacity-80">Join a Cohort</p>
        <div className="mt-8">
          <Button href={PCO.untangledCohort}>Join a Cohort</Button>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-primary">
            Untangled is a unique community designed for church-planting wives.
            It is a safe place to explore the daily challenges of living out
            your faith, growing in Christ, and helping others do the same. This
            community is designed to help you overcome the obstacles you face
            in ministry and will connect you with other church-planting wives
            who share your struggles and experiences.
          </p>
          <p className="mt-4 text-primary">
            Our community is inspired by Hebrews 12:1-3, which encourages us to
            throw off anything that hinders us and to run with perseverance the
            race marked out for us, fixing our eyes on Jesus, the author and
            perfecter of our faith. As we become more connected to
            God&rsquo;s love, we will become bolder in sharing that love with
            others. Our time together will be informational, experiential, and,
            most of all, conversational.
          </p>
        </div>
      </Section>

      <Section tone="accent-light">
        <SectionHeading sub="The first step is to join a Spiritual formation Cohort. This 6-week small group online gathering will explore 6 main topics and spiritual practices.">
          Want to get involved?
        </SectionHeading>
        <div className="mt-6 flex justify-center">
          <Button href={PCO.untangledCohort} variant="light">Join a Cohort</Button>
        </div>
        <div className="mt-10">
          <CardGrid cols={3}>
            {WEEKS.map((w) => (
              <div key={w.title} className="rounded-[20px] bg-white/15 p-6">
                <h3 className="font-heading font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-white/85">{w.body}</p>
              </div>
            ))}
          </CardGrid>
        </div>
      </Section>

      <Section>
        <SectionHeading>Overview — Untangled</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-primary">
          Untangled is a place designed for you! We are a community of women
          serving Jesus through church planting. We are a unique tribe, bonded
          by the common thread of uprooting our lives and saying yes to Jesus
          through starting a new church. We know the pain of goodbyes (both our
          own and those in the churches we serve), the upheaval of change, the
          redefining of self. There are times when this call leaves us scared
          and feeling alone. We have a deep longing to be known and to know we
          are not alone. To have deep, safe relationships with other women that
          get us.
        </p>
      </Section>

      <ImageSection image="/img/pexels-fox-1595391-scaled__largepreview__.webp" className="text-center">
        <h2 className="font-heading text-3xl font-bold">Connection Cohort</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/85">
          Untangled is a place designed for you! Untangled Connection Cohorts
          are designed to take those principles from the Spiritual Direction
          Cohorts and walk together in community. To mentor and to be
          mentored. This is your place to share, encourage, pray and to stay
          connected!
        </p>
        <div className="mt-8">
          <Button href={PCO.untangledCohort} variant="light">Get Connected — Register Today</Button>
        </div>
      </ImageSection>
    </>
  );
}
