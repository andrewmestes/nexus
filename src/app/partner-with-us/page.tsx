import type { Metadata } from "next";
import { PageHero, Section, SectionHeading, Button, CardGrid, Card, Quote } from "@/components/ui";

export const metadata: Metadata = { title: "Partner With Us" };

export default function PartnerWithUsPage() {
  return (
    <>
      <PageHero
        title="Partner With Us"
        subtitle="Achieve Your Church-Planting Vision in Your Region and Beyond"
      >
        <p className="mx-auto max-w-2xl text-white/70">
          Our partnership provides strategic guidance and peace of mind, so you
          can continue launching church-planting movements throughout North
          America.
        </p>
      </PageHero>

      <Section>
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold">
              Nurturing Tomorrow&rsquo;s Leaders Together
            </h2>
            <p className="mt-4 text-primary">
              We understand your vision for starting life-giving,
              disciple-making churches in your region. Unfortunately,
              there&rsquo;s a ton on your plate, and with limited time and
              resources, you might wonder, &ldquo;How can we get this
              done?&rdquo;
            </p>
            <p className="mt-4 text-primary">
              Nexus is here to help. We desire to see every region across the
              nation saturated with healthy new churches making disciples. We
              work alongside existing churches, ministries, and networks like
              yours to provide a proven path to launch multiplying churches
              with confidence.
            </p>
            <div className="mt-6">
              <Button href="/contact-us">Contact Us</Button>
            </div>
          </div>
          <Quote
            quote="Nexus was an answer to our many questions. It gave us tools to assess potential church planters and the coaching needed for our planters to succeed. NPEA has seen much value in the relationship with Nexus and cherishes the many friendships that will last a lifetime!"
            attribution="Craig Faussett, NPEA Board Member & Coordinator"
          />
        </div>
      </Section>

      <Section tone="secondary">
        <SectionHeading sub="When you partner with Nexus, you're joining a family of networks and congregations who have discovered that we're better together! It's our desire to help you achieve your church-planting and disciple-making vision in your region and beyond.">
          Partner With Nexus
        </SectionHeading>
        <div className="mt-10">
          <CardGrid cols={4}>
            <Card
              title="Church Planting Assessment Center"
              body="If you want leaders to avoid the pitfalls of church planting, our assessment process is perfectly designed to set them up for long-term success, as well as a life-long relationship with you and your network."
              href="/assessment"
            />
            <Card
              title="Training: The Art of the Start"
              body="This 3-phase training is a proven process guiding church planters inside your network, equipping them with the support and education they need to plant the church God has placed in their heart."
              href="/training"
            />
            <Card
              title="The Bonhoeffer Project"
              body="This 10-month leadership development community is designed to help your leaders craft an intentional discipleship plan for their local context."
              href="/bonhoeffer"
            />
            <Card
              title="The Clarity Project"
              body="At Nexus, we believe leaders are our legacy. That's why we've invested in Andrew Estes as our Director of Training. His ministry, The Clarity Project, ensures that individuals and leadership teams understand who they are and what God has called them to do."
              href="/the-clarity-project"
            />
          </CardGrid>
        </div>
      </Section>

      <Section>
        <Quote
          quote="Our goal is to encourage leaders, train disciples, and plant new churches. This is hard work and not to be taken lightly. Therefore, it is absolutely essential for potential church-planting couples to go through an assessment and training before they are released and sent out to plant. The assessment process and the church planting training Nexus offers is by far some of the best experiences and tools we have participated in preparing future church planters to make disciples and plant reproducing churches."
          attribution="Sean Thomé, Executive Director – Expand NW"
        />
      </Section>

      <Section tone="secondary">
        <SectionHeading sub="Together, we can ensure your network and church plants stay focused on what's most important.">
          Let&rsquo;s Multiply Our Kingdom Impact
        </SectionHeading>
        <div className="mt-6 flex justify-center">
          <Button href="/contact-us">Contact Us</Button>
        </div>
        <div className="mt-10">
          <CardGrid cols={3}>
            <Card title="Schedule a Discovery Call" body="We'll get to know you and your vision and discover the best way to pursue it together." />
            <Card title="Partner With Us" body="We'll customize a path forward that provides you with the guidance and expertise you're looking for." />
            <Card title="Plan and Launch More Multiplying Churches With Confidence" body="God has entrusted each of us with a vision. Let's allow God to show us that we're better together." />
          </CardGrid>
        </div>
      </Section>

      <Section>
        <SectionHeading>Key Partners</SectionHeading>
        <div className="mt-10 space-y-10">
          <div className="grid gap-6 sm:grid-cols-[200px_1fr] sm:items-center">
            <img
              src="/img/NewChurch_Network_Logo_Final-06-1024x146__largepreview__.webp"
              alt="NewChurch Network"
              className="h-auto w-full rounded-[10px] bg-secondary p-4"
            />
            <div>
              <h3 className="font-heading text-lg font-semibold">NewChurch Network</h3>
              <p className="mt-2 text-sm text-primary">
                Nexus is a founding partner in the NewChurch Network. This
                network of church-planting partners wants you to succeed.
                Believing in best practices, they will support you from the
                beginning (calling) to the end (self-sufficiency). Most of
                these partners are focused on a specific state or geographic
                region, and all are committed to planting healthy churches.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold">Assessment Centers</h3>
            <p className="mt-2 text-sm text-primary">
              To coordinate our Assessment &amp; Discovery Centers, we partner
              with Dr. Matthew LaGrange of His-Story Coaching &amp;
              Counseling, Grapevine, TX. Matthew serves as the psychologist in
              our Assessment processes. Matthew has the unique advantage of
              having gone through the process in 2006. In addition, he served
              as a campus pastor at a new site while in local ministry.
            </p>
            <a href="mailto:matthew@his-story.org" className="mt-2 inline-block text-sm font-semibold text-accent">
              Contact Matthew →
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-[200px_1fr] sm:items-center">
            <img
              src="/img/GCR-Logo-small-1__largepreview__.webp"
              alt="Golf Course Road Church of Christ"
              className="h-auto w-full rounded-[10px] bg-secondary p-4"
            />
            <div>
              <h3 className="font-heading text-lg font-semibold">Special Partnership</h3>
              <p className="mt-2 text-sm text-primary">
                Nexus enjoys a close relationship with Golf Course Road Church
                of Christ in Midland, TX. Phil Claycomb, the Nexus Director,
                serves on GCR&rsquo;s North American Missions Committee and is
                the Coordinator of GCR&rsquo;s church-planting mission. In
                functional terms, Nexus and GCR collaborate so tightly that it
                is sometimes difficult to determine precisely where Nexus ends
                and GCR begins.
              </p>
              <a href="https://www.gcrchurch.com/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold text-accent">
                Learn more about GCR →
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="secondary">
        <SectionHeading>We Can Do More Together</SectionHeading>
        <div className="mt-6 flex justify-center">
          <Button href="/contact-us">Contact Us</Button>
        </div>
        <div className="mt-10">
          <CardGrid cols={3}>
            <Card title="Grow Your Network of Churches" body="Gain peace of mind as we assist—not replace—your network in multiplying churches in your region." />
            <Card title="Optimize Your Planting Process" body="Our proven system positions you for success, gaining confidence while enabling your network to launch more life-giving churches." />
            <Card title="Fulfill God's Mission For You" body="With Nexus, you'll have the support you need to plant the church that God has called you to plant." />
          </CardGrid>
        </div>
      </Section>
    </>
  );
}
