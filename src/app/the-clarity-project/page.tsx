import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, Button, ButtonRow, Quote, CardGrid, Card } from "@/components/ui";
import { TIDYCAL_DISCOVERY, VISION_CLARITY } from "@/lib/links";

export const metadata: Metadata = { title: "The Clarity Project" };

const PATHS = [
  {
    title: "Disciple-Making Vision",
    body: "Reframe your church's future with a disciple-making vision that is clear, compelling, and actionable.",
    bullets: ["Define your God-given mission.", "Align your ministries with your unique vision.", "Create pathways for disciple-making."],
    href: VISION_CLARITY.funnelFusion,
  },
  {
    title: "Team Building",
    body: "Develop healthy teams that work together with trust, clarity, and execution.",
    bullets: ["Tools like The 6 Types of Working Genius.", "Workshops for staff and leadership teams.", "Coaching for alignment and accountability."],
    href: VISION_CLARITY.teamLeadership,
  },
  {
    title: "Personal Calling (Younique Life Plan)",
    body: "Help leaders discover and live into their God-given design and calling.",
    bullets: ["Clarify personal vision and values.", "Gain confidence in decision-making.", "Multiply leaders who live with focus and joy."],
    href: VISION_CLARITY.younique,
    image: "/img/Square-Thumbprint__mediumsquare__.webp",
  },
];

const FAQ = [
  {
    q: "What is The Clarity Project?",
    a: "The Clarity Project is a coaching ministry created by Andrew Estes, the Director of Training for Nexus Church Planting & Leader Care. It is designed to help pastors and church planters gain breakthrough clarity in three key areas: disciple-making vision, team building, and personal calling. Instead of offering a one-size-fits-all model, we walk alongside you to uncover your church's God-given design and provide tools that turn vision into action.",
  },
  {
    q: "Who is The Clarity Project for?",
    a: "The Clarity Project is for pastors, church planters, and ministry leaders who want to move beyond programs and busyness to focus on multiplying disciples. Whether you are starting a new church, leading an established congregation, or simply trying to bring your team into alignment, The Clarity Project provides the coaching and tools you need to gain direction and momentum.",
  },
  {
    q: "How much time does it take?",
    a: "Each pathway of The Clarity Project is designed to be flexible. A church-wide vision process typically unfolds over 3–6 months, while team workshops can bring breakthroughs in just a single day. Personal Life Plan coaching usually takes place in a 2-day intensive, followed by ongoing support. The pace is tailored to fit your church's needs so that clarity doesn't stay theoretical — it becomes actionable.",
  },
  {
    q: "How is it different from other church coaching programs?",
    a: "Many coaching programs apply pre-packaged strategies that may or may not fit your context. The Clarity Project is different. We use proven frameworks like Vision Frame, Younique Life Planning, and The 6 Types of Working Genius, but we always adapt them to your unique church. The goal isn't to copy another ministry's success — it's to help you live into the unique calling God has placed on your church, your team, and your leaders.",
  },
  {
    q: "What results can I expect?",
    a: "Churches that go through The Clarity Project often experience renewed passion, stronger leadership alignment, and greater disciple-making impact. Leaders consistently report greater confidence in their decision-making, clearer next steps for their teams, and a deep sense of unity around God's mission for their church.",
  },
];

const TESTIMONIALS = [
  {
    heading: "I have no doubt he will bless your team.",
    quote: "[Andrew's] ability to facilitate the training and planning sessions have made him a powerful asset to any team that wants to discern and articulate a clear vision. His ability to carefully and tactfully lead teams, even when engaging with highly driven and opinionated leaders, has proven quite effective… I have no doubt he will bless your team.",
    attribution: "Phil Claycomb, Director of Nexus",
  },
  {
    heading: "I trust him with my friends.",
    quote: "Andrew is an effective, relatable developer of people. He is the best kind of coach – the kind who meets you where you are and successfully guides you forward. Andrew is a clear communicator who is both client-focused and Jesus-led. I trust him with my friends.",
    attribution: "Jessie Cruickshank, Co-founder of the 5Q Collective & co-author, Activating 5Q: A User's Guide",
  },
  {
    heading: "Humble, Intelligent, Effective",
    quote: "I've seen Andrew at work on several occasions, and every time he delivers a relatable, effective experience that engages leaders in vision planning. Andrew delivers a successful process that allows your leaders to participate in discerning God's will for the future of your church. Andrew is a humble, intelligent, effective communicator and is highly skilled at drawing out leaders to do their vision-casting and planning work. I've been glad when I've hired Andrew and I will continue to do so!",
    attribution: "Ryan Nilsen, Associate Director of CLB North American Mission",
  },
  {
    heading: "Andrew Estes and the God Dreams process is a God-send.",
    quote: "Church leaders get distracted often with the rigors of doing ministry. Andrew Estes and the God Dreams process is a God send! Andrew does a phenomenal job guiding discussion, asking compelling questions, and allowing teams to work through the process of the vision frame. Having my team work with Andrew has pointed us in a direction where we are all on the same page and has kept us accountable to the vision God has for our church.",
    attribution: "Patrick Lightfoot, Lead Pastor – Traverse Christian Church",
  },
  {
    heading: "He led our team into discovering and honoring our God dream.",
    quote: "Having Andrew Estes lead our team through Will Mancini's 'God Dreams' was incredibly valuable. Andrew's ability to disseminate an incredible amount of information in a brief amount of time while keeping our team on task is truly a passion and gifting. He led our team into discovering and honing our God Dream. Andrew can help your team dream a God Dream that will change you, your leadership, your church, your community, and the world.",
    attribution: "Adam Coop, Vision Pastor – Whitewater Christian Church",
  },
];

export default function ClarityProjectPage() {
  return (
    <>
      <PageHero
        title="Clarity Changes Everything."
        subtitle="Lead with confidence. Align your team. Multiply your Kingdom impact."
      >
        <p className="mx-auto mb-6 max-w-2xl text-white/70">
          Most leaders feel stuck in the fog of competing priorities, unclear
          vision, and constant demands. Without clarity, teams lose focus,
          leaders lose confidence, and the mission loses momentum.
        </p>
        <Button href={TIDYCAL_DISCOVERY}>Schedule A Discovery Call</Button>
      </PageHero>

      <Section className="text-center">
        <SectionHeading sub="Through proven frameworks like Vision Frame, God Dreams, Younique, and team-building tools like Working Genius, we help ministry and marketplace leaders:">
          The Clarity Project exists to cut through the noise.
        </SectionHeading>
        <div className="mt-10">
          <CardGrid cols={3}>
            <Card title="Discover" body="Discover their God-given calling and organizational identity" />
            <Card title="Align" body="Align teams around a shared vision and language" />
            <Card title="Focus" body="Focus on what matters most and create measurable results" />
          </CardGrid>
        </div>
        <p className="mx-auto mt-10 max-w-xl text-primary">
          With clarity, you&rsquo;ll move from spinning wheels to making
          progress. From trying harder to leading smarter. From uncertainty to
          confidence.
        </p>
        <div className="mt-6">
          <Button href={TIDYCAL_DISCOVERY}>
            👉 Book a Free Discovery Call
          </Button>
        </div>
      </Section>

      <Section tone="secondary">
        <SectionHeading>Paths to Clarity</SectionHeading>
        <div className="mt-10">
          <CardGrid cols={3}>
            {PATHS.map((p) => (
              <Card key={p.title} title={p.title} body={p.body} href={p.href} image={p.image}>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm opacity-80">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </CardGrid>
        </div>
      </Section>

      <Section>
        <SectionHeading sub="The Clarity Project is built on years of experience in church planting, leadership coaching, and disciple-making churches. Our process integrates proven tools like the Vision Frame, Younique, The 6 Types of Working Genius, and The 4 Disciplines of Execution to deliver lasting results for leaders in various contexts.">
          Trusted by Churches and Leaders Nationwide
        </SectionHeading>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <Quote key={t.attribution} heading={t.heading} quote={t.quote} attribution={t.attribution} />
          ))}
        </div>
      </Section>

      <Section tone="dark" className="text-center">
        <h2 className="font-heading text-3xl font-bold">
          Clarity isn&rsquo;t optional. It&rsquo;s the foundation of
          leadership.
        </h2>
        <p className="mt-3 text-white/80">Stop guessing. Start leading with confidence.</p>
        <ButtonRow>
          <div className="mt-8 flex flex-wrap justify-center gap-4 w-full">
            <Button href={TIDYCAL_DISCOVERY}>Schedule A Discovery Call</Button>
            <Button href={VISION_CLARITY.home} variant="outline">
              Visit VisionClarity.org for More Details
            </Button>
          </div>
        </ButtonRow>
      </Section>

      <Section>
        <SectionHeading>FAQ</SectionHeading>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-secondary-dark/30">
          {FAQ.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="font-heading font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
