import Image from "next/image";
import { Section, SectionHeading, Button, Quote, Card, CardGrid, ImageSection, TextureSection, VideoPlayer } from "@/components/ui";
import { CalledToPlantBand } from "@/components/shared-sections";
import { PCO } from "@/lib/links";

export default function HomePage() {
  return (
    <>
      {/* Full-bleed video hero — no text overlay, matches the live site's logo-reveal-into-footage treatment */}
      <div className="relative h-[70vh] min-h-[420px] overflow-hidden bg-black">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/video/Nexus-Website-Background-compressed.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Headline band — solid accent blue, matches rgb(0,96,156) on the live site */}
      <Section tone="accent" className="text-center">
        <h1 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
          Plant a Church today and leave a lasting impact tomorrow.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-white/85">
          Nexus is a church-planting organization built to help pastors and
          church leaders stand in the center of their calling and multiply
          disciples in their community and beyond.
        </p>
      </Section>

      {/* 3 pillars over photo background */}
      <ImageSection image="/img/Screen-Shot-2022-06-14-at-11.36.06-AM__largepreview__.webp" className="text-center">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-lg font-heading font-semibold">
          <span>Plant Thriving Churches</span>
          <span>Receive Long-Term Leader Care</span>
          <span>Multiply Kingdom Impact</span>
        </div>
      </ImageSection>

      <Section>
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold">
              Bring your Church-Planting Vision to life.
            </h2>
            <p className="mt-4 text-primary">
              Since 2006, we&rsquo;ve partnered with leaders and donors to plant
              65+ churches and counting throughout the United States. We believe
              our role to be that of a &ldquo;Nexus&rdquo; — the point where
              linkage or connection occurs — between church planters, leaders,
              and the partners they need to make it all happen. Whether you lead
              a network, want to give, or are looking to plant a church,
              there&rsquo;s a place for you here. Together with Nexus,
              you&rsquo;ll plant a church today designed to leave a lasting
              impact tomorrow. We&rsquo;re so grateful you&rsquo;re here and
              can&rsquo;t wait to work together to launch more multiplying
              churches.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              {
                q: "Hi, I want to plant a church.",
                cta: "Get Started",
                href: PCO.interestForm,
              },
              { q: "Hi, I want to donate.", cta: "Give Today", href: "/donate" },
              {
                q: "Hi, our church network needs a partner.",
                cta: "Let's Launch Together",
                href: "/partner-with-us",
              },
            ].map((card) => (
              <div key={card.q} className="rounded-[20px] bg-tertiary p-6 text-white shadow-soft">
                <p className="font-heading font-semibold">{card.q}</p>
                <a
                  href={card.href}
                  className="mt-3 inline-block text-sm font-semibold uppercase tracking-wide text-accent-light"
                >
                  {card.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <VideoPlayer src="/video/Nexus-Intro-Video.mp4" />
        </div>
      </Section>

      <ImageSection image="/img/yt-bg-ShCVvQbQBDk.jpg" overlay="dark">
        <Quote
          quote="I have not been a part of anything this good before… genuinely. Nexus has been my fortress, my respite, in so many ways."
          attribution="Willie Tryon, Lead Pastor – Forge Christian Church"
        />
      </ImageSection>

      <TextureSection>
        <SectionHeading sub="Together, we can provide the resources to make that dream a reality.">
          Plant the Church God Placed in Your Heart
        </SectionHeading>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div className="rounded-[20px] bg-white p-8 text-center shadow-soft">
            <h3 className="font-heading text-xl font-semibold">
              Schedule a Discovery Call
            </h3>
            <p className="mt-3 text-sm text-primary">
              Together, we&rsquo;ll discuss your vision and dream for your future
              church.
            </p>
          </div>
          <div className="rounded-[20px] bg-white p-8 text-center shadow-soft">
            <h3 className="font-heading text-xl font-semibold">
              Complete Our Readiness Assessment
            </h3>
            <p className="mt-3 text-sm text-primary">
              When you launch with Nexus, you become part of the family. We curate
              a proven process, including an audit, custom coaching, and ongoing
              care to position you and your team for success.
            </p>
          </div>
        </div>
      </TextureSection>

      <Section>
        <h2 className="text-center font-heading text-3xl font-bold">
          Programs Designed With Church Planters In Mind
        </h2>
        <div className="mt-10">
          <CardGrid cols={3}>
            <Card
              image="/img/documents__mediumsquare__.webp"
              title="Church Planting Assessment Center"
              body="Our Assessment Center has helped pastors and church networks across the U.S. identify leaders ready for church planting since 2006. We're here to ensure they are equipped to multiply Kingdom impact in everything they do."
              href="/assessment"
            />
            <Card
              image="/img/training__mediumsquare__.webp"
              title="Training: The Art of the Start"
              body="This 3-part training is a proven process guiding church planters through a journey equipping them with the support and education they need to plant the church God has placed in their heart."
              href="/training"
            />
            <Card
              image="/img/management__mediumsquare__.webp"
              title="Coaching"
              body="Planting or leading a church requires grit and guidance. Whether you're starting a new plant or leading an established ministry, working alongside a Nexus coach ensures you have the support needed to lead a life-giving, multiplying church with confidence."
              href="/coaching"
            />
            <Card
              image="/img/mentoring__mediumsquare__.webp"
              title="Mentoring"
              body="Mentoring through Nexus is all about seasoned leaders providing a steady voice in your life. They help you prioritize what matters and help you foster a deeper level of ministry."
              href="/coaching"
            />
            <Card
              image="/img/help__mediumsquare__.webp"
              title="Leader Care"
              body="Nexus provides the best possible care for church-planting couples and their teams looking to launch new faith communities. We're here to act as a steadying voice, leading you closer to God and how He is working through you to launch the church He's entrusted to you."
              href="/about"
            />
          </CardGrid>
        </div>
      </Section>

      <ImageSection image="/img/yt-bg-1dGMs4hhcVA.jpg" className="text-center" overlay="dark">
        <p className="text-5xl font-heading font-bold">80+</p>
        <p className="mt-2 text-lg">Churches Planted</p>
        <p className="mt-1 text-sm text-white/80">
          Advancing the Gospel together throughout North America
        </p>
      </ImageSection>

      <Section>
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-[auto_1fr] sm:items-center">
          <Image
            src="/img/IMG-1306-1024x1024__largepreview__.webp"
            alt="Phil Claycomb"
            width={160}
            height={160}
            className="mx-auto h-40 w-40 rounded-full object-cover"
          />
          <div className="text-center sm:text-left">
            <h2 className="font-heading text-2xl font-bold">We&rsquo;re Better, Together</h2>
            <p className="mt-4 text-primary">
              &ldquo;You have a deep desire to leave a Kingdom impact—to be part
              of something bigger. Here at Nexus, we believe in that same
              mission. Having cared for hundreds of church leaders for nearly 20
              years, our goal is to see disciple-making communities multiply
              throughout the U.S. Together, we can launch new church plants,
              nurture tomorrow&rsquo;s leaders today, and encourage others
              across the country to pursue God&rsquo;s calling in their own
              communities. Thank you for being here. We can&rsquo;t wait to
              learn more about how we can partner to make an even greater
              impact.&rdquo;
            </p>
            <p className="mt-4 font-semibold">
              Phil Claycomb
              <span className="block text-sm font-normal text-primary">
                Executive Director
              </span>
            </p>
            <div className="mt-6">
              <Button href="/about">About Nexus</Button>
            </div>
          </div>
        </div>
      </Section>

      <ImageSection image="/img/yt-bg-4V1dC_eoCwg.jpg" overlay="dark">
        <Quote
          heading="Nexus Reminded Us That We Still Mattered"
          quote="If it hadn't been for Nexus, I'm not sure I'd still be in ministry. Nexus affirmed that we still mattered and that we still had something to give."
          attribution="Robi Brust, Executive Director of Arkansas Church Planting Network"
        />
      </ImageSection>

      <Section tone="accent-light" className="text-center">
        <h2 className="font-heading text-3xl font-bold">
          Plant Your Next Church With Confidence
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">
          Together with Nexus, you&rsquo;ll plant a church today designed to leave a
          lasting impact in your community tomorrow.
        </p>
        <div className="mt-8">
          <Button href="/contact-us" variant="light">
            Contact Us
          </Button>
        </div>
      </Section>

      <TextureSection className="text-center">
        <SectionHeading sub="The heartbeat of Nexus is to not only plant churches but to truly care for those called to that difficult task. We are a family that helps coach, train, mentor, and guide planters along the journey to plant a life-giving and multiplying church.">
          Testimonies From Nexus Planters
        </SectionHeading>
        <div className="mt-10">
          <VideoPlayer src="/video/What-Has-Nexus-Meant-To-You.mp4" />
        </div>
        <div className="mt-8">
          <Button href="/church-planter-pathway">Church Planter Pathway</Button>
        </div>
      </TextureSection>

      <CalledToPlantBand image="/img/Screen-Shot-2021-06-22-at-12.47.28-PM.png" />
    </>
  );
}
