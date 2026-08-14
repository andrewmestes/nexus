/**
 * Blocks that repeat across many pages on the live site.
 * Copy here is verbatim — see CONTENT_INVENTORY.md.
 */
import { Section, SectionHeading, Button, ButtonRow, Card, CardGrid, ImageSection } from "./ui";
import { PCO } from "@/lib/links";

/** "Schedule a Discovery Call / Readiness Assessment / Plan, Plant, Launch" — appears on most Plant pages. */
export function NextStepsBand({
  heading,
  sub,
}: {
  heading: string;
  sub?: string;
}) {
  return (
    <Section tone="secondary">
      <SectionHeading sub={sub}>{heading}</SectionHeading>
      <div className="mt-10">
        <CardGrid cols={3}>
          <Card
            eyebrow="Step One"
            title="Schedule a Discovery Call"
            body="Together, we’ll discuss your vision and dream for your future church."
          />
          <Card
            eyebrow="Step Two"
            title="Complete Our Readiness Assessment"
            body="When you launch with Nexus, you become part of the family. We curate a proven process, including an audit, custom coaching, and ongoing care to position you and your team for success."
          />
          <Card
            eyebrow="Step Three"
            title="Plan, Plant, and Launch Your Church With Confidence"
            body="God entrusted a vision to you. See the power of having a trusted partner to bring that vision to life and launch a multiplying church."
          />
        </CardGrid>
        <div className="mt-10 flex justify-center">
          <Button href={PCO.interestForm}>Get Started</Button>
        </div>
      </div>
    </Section>
  );
}

/** Three short value props — the body copy differs per page. */
export function ThreeUp({
  heading,
  items,
}: {
  heading: string;
  items: { title: string; body: string }[];
}) {
  return (
    <Section>
      <SectionHeading>{heading}</SectionHeading>
      <div className="mt-10">
        <CardGrid cols={3}>
          {items.map((i) => (
            <Card key={i.title} title={i.title} body={i.body} />
          ))}
        </CardGrid>
      </div>
    </Section>
  );
}

/** "Plant The Church Within You" closing CTA. */
export function PlantTheChurchBand() {
  return (
    <Section tone="dark" className="text-center">
      <h2 className="font-heading text-3xl font-bold sm:text-4xl">
        Plant The Church Within You
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-white/80">
        Together with Nexus, you&rsquo;ll plant a church today designed to leave a
        lasting impact in your community tomorrow.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href={PCO.interestForm}>Get Started</Button>
      </div>
    </Section>
  );
}

/**
 * "Feeling called to plant a church?" closing band, appears on most (not all)
 * pages, each with its own background photo on the live site — not a single
 * fixed image, so this is called explicitly per-page rather than globally.
 */
export function CalledToPlantBand({ image }: { image: string }) {
  return (
    <ImageSection image={image} overlay="dark" className="text-center">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:text-left">
        <h2 className="font-heading text-2xl font-bold sm:text-3xl">
          Feeling called to plant a church? We can help!
        </h2>
        <ButtonRow>
          <Button href="/church-planter-pathway" variant="light">
            Learn More
          </Button>
        </ButtonRow>
      </div>
    </ImageSection>
  );
}
