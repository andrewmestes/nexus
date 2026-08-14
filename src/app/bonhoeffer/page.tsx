import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, Button, CardGrid, Card, Quote } from "@/components/ui";
import { PCO } from "@/lib/links";

export const metadata: Metadata = { title: "The Bonhoeffer Project" };

const TESTIMONIALS = [
  {
    heading: "I didn't want a cookie-cutter approach to disciple-making.",
    quote: "I jumped into The Bonhoeffer Project because I didn't want a cut-and-paste, cookie-cutter approach to disciple-making. Having always been in church planting, I wanted to create our process so it would reflect our values, vision, and mission. TBP helped me articulate how we will make disciple-making disciples and preach Jesus' discipleship gospel. The cohort community is a great experience.",
    attribution: "Phil Claycomb, Director of Nexus",
  },
  {
    heading: "It has brought joy back to the ministry God has called me to do.",
    quote: "The Bonhoeffer Project has been a refreshing look at the very words of Jesus in light of what discipleship should be. I have enjoyed The Bonhoeffer Project because it truly helped me to put into practice what I had been struggling to do for years. As James tells us (James 1:22) don't just listen to the Word – do what it says. The Bonhoeffer Project gives us the push to “do what it says” in regards to discipleship.",
    attribution: "Brian Snyder, Lead Pastor – The Well",
    image: "/img/brian-snyder-1__mediumsquare__.webp",
  },
  {
    heading: "What I learned is transforming how we make disciples.",
    quote: "The Bonhoeffer Project challenged me to really look at the gospel of Jesus in a completely different way. What I learned is transforming how we make disciples who make disciples in our church. For the first time in many years of ministry, I have a clear picture of how we are living out the mission of Jesus!",
    attribution: "Robi Brust, Lead Pastor – Adventure Church",
    image: "/img/Robi-Brust-Headshot-scaled-e1611088509535-150x115__mediumsquare__.webp",
  },
  {
    heading: "It teaches leaders… to make disciples in their context.",
    quote: "For the last several years I have been wrestling with myself and God about making disciples. The mission of the church is to make disciples and if I'm honest, I have not done well with the one thing God has given with my time here on earth. The Bonhoeffer Project is not a curriculum or strategy, it teaches leaders like myself to make disciples in their context.",
    attribution: "Patrick Lightfoot, Lead Pastor – Traverse Christian Church",
  },
  {
    heading: "Now I feel empowered to make disciples of Jesus Christ!",
    quote: "My favorite thing about the Bonhoeffer Project is that it's not a “one size fits all” plug and play program, but rather a process of training a leader to be a focused disciple-maker in his/her context. I've read so much on discipleship in the past but I was still stuck. Now I feel empowered to make disciples of Jesus Christ!",
    attribution: "Jeremiah Holcomb, Lead Pastor – The Refuge Christian Church",
    image: "/img/Jeremiah__mediumsquare__.webp",
  },
];

export default function BonhoefferPage() {
  return (
    <>
      <PageHero
        eyebrow="A Year-long Leadership Development Community"
        title="We Turn Leaders Into Disciple Makers"
        subtitle="Reclaim the Discipleship-First Gospel | Craft Your Disciple-Making Plan | Change the World"
      >
        <Button href={PCO.thinkNextEvent}>Register</Button>
      </PageHero>

      <Section>
        <CardGrid cols={3}>
          <Card
            title="Reclaim The Discipleship-First Gospel"
            body="With all the false “gospels” circulating in the world today, we're equipping leaders to put the gospel of discipleship first."
            image="/img/the-why__mediumsquare__.webp"
          />
          <Card
            title="Craft a Personal Disciple-Making Plan"
            body="Everyone needs a plan in order to make disciples. Through our process, you will walk away with an actionable plan."
            image="/img/the-what__mediumsquare__.webp"
          />
          <Card
            title="Change the World, One Person at a Time"
            body="The Kingdom of God is a world-wide movement, and by investing into it one person at a time, you can change the world."
            image="/img/the-how__mediumsquare__.webp"
          />
        </CardGrid>
      </Section>

      <Section tone="secondary" className="text-center">
        <SectionHeading>What is The Bonhoeffer Project?</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-primary">
          The Bonhoeffer Project is a 10-month virtual cohort designed to help
          you craft an intentional disciple-making plan for your local
          context. You will be challenged to study and articulate the why, the
          what, and the how of true disciple-making.
        </p>
        <p className="mt-2 font-semibold">New groups typically form each year in March.</p>
      </Section>

      <Section>
        <SectionHeading>What Nexus Leaders Are Saying…</SectionHeading>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <Quote key={t.attribution} {...t} />
          ))}
        </div>
      </Section>

      <Section tone="secondary">
        <SectionHeading>The Discipleship Gospel Webinar</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-primary">
          Many pastors today preach a gospel that makes converts but not
          disciples. This results from &ldquo;non-discipleship gospels,&rdquo;
          which exclude the necessity to follow Jesus from their message.
          Making disciples requires intentionality, starting with the
          foundation of what we teach those in our care. In this webinar, Ben
          Sobels, author of The Discipleship Gospel, walks us through the key
          elements of Jesus&rsquo; Kingdom Gospel, our response, and the
          implications in our church&rsquo;s discipleship strategy.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="https://www.youtube.com/watch?v=2m6UeNBMWe8">
            Watch the Replay
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeading>The Bonhoeffer Project Podcast</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-primary">
          Phil Claycomb comes on the podcast to discuss his experience with The
          Bonhoeffer Project and how it takes time, sometimes even years, to
          shift the culture in a church to a focus on disciple-making.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="https://www.youtube.com/watch?v=TCN6TDsabkI">
            Watch the Replay
          </Button>
        </div>
      </Section>

      <Section tone="dark" className="text-center">
        <h2 className="font-heading text-3xl font-bold">
          The Bonhoeffer Project is a 10-month virtual cohort
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">
          Designed to help you craft an intentional disciple-making plan for
          your local context. New groups typically form each year in March.
        </p>
        <div className="mt-8">
          <Button href={PCO.thinkNextEvent}>Register</Button>
        </div>
      </Section>
    </>
  );
}
