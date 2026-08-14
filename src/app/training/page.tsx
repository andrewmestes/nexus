import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, Button, Quote, CardGrid, Card } from "@/components/ui";
import { NextStepsBand } from "@/components/shared-sections";
import { PCO } from "@/lib/links";

export const metadata: Metadata = { title: "Training" };

const PROGRAMS = [
  {
    title: "Church Planter Training",
    body: "This 3-phase training is a proven process that equips church planters with the support and education you need to plant the church God has placed in their heart. The Art of The Start ensures church planters like you are ready for Kingdom impact.\n\nYou will gain: Clarity around your calling, guidance on how to develop disciple-makers, insight into crafting a clear and compelling vision, and so much more!",
    quote: "We love working with Nexus because they truly have a kingdom perspective! Their open-handed and open-hearted approach to starting churches all over the United States makes it a joy to partner with them. Their encouragement and support has been a huge help as we plant churches in Florida.",
    attribution: "Jeff Swearingen, Director – Florida Church Planters",
  },
  {
    title: "Leadership Summit (ThinkNEXT)",
    body: "Twice a year, we converge to equip and encourage one another on this journey in ministry. ThinkNEXT allows you to connect with like-minded leaders who can guide you in your mission to make strong disciples. We're better together — and ThinkNEXT helps us continue to dream, plan, and lead ourselves, our families, and our churches.",
    quote: "I could see how in church planting you could feel very alone if you weren't careful. Nexus has done a good job of removing that possibility for me.",
    attribution: "Steve Bolin, Lead Minister – Thrive Church",
  },
  {
    title: "Discipleship Training (The Bonhoeffer Project)",
    body: "The Bonhoeffer Project is a year-long leadership development virtual cohort to help you reclaim the 'Discipleship-First Gospel,' craft a disciple-making plan, and change the world — one person at a time. This 10-month process will challenge and equip you to intentionally develop disciple-makers.\n\nParticipants learn to: reclaim the discipleship gospel, craft a disciple-making plan, change the world one person at a time, and more…",
    quote: "The Bonhoeffer Project has been a refreshing look at the very words of Jesus in light of what discipleship should be. It truly helped me to put into practice what I had been struggling to do for years. The Bonhoeffer Project has brought joy back to the ministry God has called me to do.",
    attribution: "Brian Snyder, Executive Minister, Boone Creek Christian",
    href: "/bonhoeffer",
  },
  {
    title: "Visionary Leadership Training (The Clarity Project)",
    body: "The Clarity Project ensures individuals and leadership teams gain clarity regarding who they are and what God has called them to do as a church, organization, or person.\n\nWith the guidance of The Clarity Project, you will experience: Freedom, Confidence, and Clarity — and more!",
    quote: "Andrew (the leader of this project) is an effective, relatable developer of people. He is the best kind of coach—the kind who meets you where you are and successfully guides you forward. Andrew is a clear communicator who is both client-focused and Jesus-led. I trust him with my friends.",
    attribution: "Jessie Cruickshank, Author of Ordinary Discipleship",
    href: "/the-clarity-project",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="The Training You Need to See Your Disciple-Making Vision Come to Life"
        subtitle="Our training is designed to help you launch and lead a life-giving, multiplying church."
      />

      <Section>
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold">
              Fulfill the Vision God Placed in Your Heart
            </h2>
            <p className="mt-4 text-primary">
              Planting a church is incredibly rewarding — though rarely an easy
              process. So many people are behind you, but few understand the
              unique dynamics of leading and growing something from scratch.
              That&rsquo;s what our training is designed for. We help you avoid
              common pitfalls of church planting, step into your God-given
              leadership potential, and craft a plan to move forward and plant
              your life-giving church.
            </p>
            <div className="mt-6">
              <Button href={PCO.interestForm}>Start Your Journey</Button>
            </div>
          </div>
          <Quote
            quote="(Nexus) was huge from day one! Just to have that ongoing partnership in ministry and that extra motivating factor to keep pressing on, to keep doing, to keep growing, to keep thinking."
            attribution="Mike Moser, Lead Pastor – Connection Christian Church"
          />
        </div>
      </Section>

      {PROGRAMS.map((p, i) => (
        <Section key={p.title} tone={i % 2 === 0 ? "secondary" : "light"}>
          <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold">{p.title}</h2>
              {p.body.split("\n\n").map((para) => (
                <p key={para.slice(0, 20)} className="mt-4 text-primary">
                  {para}
                </p>
              ))}
              {p.href && (
                <div className="mt-6">
                  <Button href={p.href}>Learn More</Button>
                </div>
              )}
            </div>
            <Quote quote={p.quote} attribution={p.attribution} />
          </div>
        </Section>
      ))}

      <Section className="text-center">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-semibold uppercase tracking-wide text-accent">
          <span>Grow As a Leader</span>
          <span>Clarify Your Vision</span>
          <span>Focus Your Attention On God</span>
        </div>
        <Quote
          quote="Church leaders get distracted often with the rigors of doing ministry. This process is a Godsend and has kept us accountable to the vision God has for our church."
          attribution="Patrick Lightfoot, Lead Pastor – Traverse Christian Church"
        />
      </Section>

      <NextStepsBand
        heading="Continue Your Journey in Ministry With Confidence"
        sub="Whether you're a church network leader or a church planter, the next step beyond our trainings is partnering with Nexus to launch your next church planting movement."
      />

      <Section>
        <SectionHeading>Nexus Is Here to Guide You in Your Church Planting Mission</SectionHeading>
        <div className="mt-10">
          <CardGrid cols={3}>
            <Card title="Develop Your Skills" body="Our training positions you for long-term success, equipping you with the skills needed to grow your church." />
            <Card title="Create an Action Plan" body="With Nexus, you'll have the plan you need to continue changing lives and fight the good fight." />
            <Card title="Access Insight From Experienced Leaders" body="You'll have the support you've been looking for as you learn from church leaders with decades of experience." />
          </CardGrid>
        </div>
      </Section>
    </>
  );
}
