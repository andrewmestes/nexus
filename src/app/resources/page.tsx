import type { Metadata } from "next";
import { Section, SectionHeading, CardGrid, Card, VideoCard, ImageSection, TextureSection } from "@/components/ui";
import { CalledToPlantBand } from "@/components/shared-sections";
import { PCO, SOCIAL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Training Resources",
  description:
    "On demand resources — videos, books, and podcasts — to help church leaders multiply their Kingdom impact.",
};

const TRAINING_VIDEOS = [
  { id: "142DzDT0T6g", title: "Vision Frame Overview Pt. 1", handout: "/docs/vision-frame-overview-cheat-sheet.pdf", body: "Introduction to the Vision Frame. Critical training on how to develop your visionary language for your church plant." },
  { id: "PX2-E5SI4_w", title: "Vision Frame Overview Pt. 2", body: "Further introduction to Will Mancini's Vision Frame. Understanding the different sides of the Vision Frame and how they all fit together is critical in order to be clear as a leader." },
  { id: "SPtvdUIGQS8", title: "The Horizon Storyline (God Dreams)", body: "The Horizon Storyline takes the concept of how we physically see and translates it to leadership by adding a specific timeframe to each horizon. It is the best visionary planning tool offering the right amount of vision content at the right amount of time in the future for the entire leadership team." },
  { id: "0L8eephqomM", title: "The 12 Vision Templates (God Dreams)", body: "You are a visionary leader and your church probably has a vision statement. Yet most churches are stuck in a trap of generic communication without a truly visionary plan." },
  { id: "rirvU1kRIU0", title: "The Discipleship Gospel", handout: "/docs/the-discipleship-gospel.pdf", body: "Join Pastor Ben Sobels as he shares a powerful session from one of our 2020 ThinkNEXT Conferences on \"Keeping the Church on Target.\" Using the metaphor of the Choluteca Bridge in Honduras, he illustrates how outdated methods can make ministries irrelevant." },
  { id: "k42ZpRc5Rog", title: "The 3 Circles Gospel Presentation", body: "Phil Claycomb shares a tool to help train your people to share the Gospel. The 3 circles are an evangelistic tool used to explain the Gospel of Jesus." },
  { id: "IIjpinPyz2w", title: "Strategic Evaluation & Planning (The Funnel)", handout: "/docs/strategic-evaluation-planning-the-funnel.pdf", body: "Andrew Estes and Phil Claycomb discuss the assimilation funnel as a strategic tool for church growth and community engagement." },
  { id: "qrcyk2my2bE", title: "Branding & Marketing", handout: "/docs/branding-marketing.pdf", body: "Andrew Estes discusses the intersection of marketing and ministry within the church context — branding, digital presence, website design, social media, photography, and reviews." },
  { id: "XqxP1uw7C9M", title: "Why Our Churches Struggle to Reach People Today: Understanding The E Scale", body: "It is possible to successfully launch a church that is misaligned with the community, the culture, or even the calling of the planter." },
  { id: "cDDWvj_q-o8", title: "Cleveland Clinic Case Study: Empathy", body: "A great reminder to never assume and always see people the way God sees them — patient care is more than healing, it's building a connection that encompasses mind, body, and soul." },
];

const TESTIMONY_VIDEOS = [
  { id: "B9t5Xgco_u0", title: "Vision & Calling", body: "Planters share the importance of recognizing and living into their calling." },
  { id: "zNHMkq9qkqI", title: "Prayer Team Formation", body: "Planters share about how they formed a team and prayed intentionally for the launch of the church." },
  { id: "7GXnD5l4clQ", title: "Fundraising & Support", body: "Planters share their journey in raising support and partners for their plant." },
  { id: "SoJcHLa8uL4", title: "Building a Launch Team", body: "Planters share how they connected with people in their community to build a launch team." },
  { id: "vT5cUEV1qzg", title: "Training a Launch Team", body: "Planters share their experience and reflections on how to go about training a launch team." },
  { id: "lJlGaCQGo2Q", title: "Discipleship Strategy", body: "Planters share about their intentional disciple-making strategy and how easily launching a church can take over and distract from the mission." },
  { id: "IpPa5mzOP5I", title: "Launch Strategy", body: "Planters share practical insights in how to launch a church." },
  { id: "3UIHq-s5v6g", title: "Unexpected Challenges", body: "Planting a church is hard work. In this video, planters share their experience of overcoming unexpected challenges in planting." },
];

const BOOKS = [
  { title: "Starfish Movement", author: "Dan Grider", image: "/img/Starfish-Movement__trust__.webp" },
  { title: "Conversion & Discipleship", author: "Bill Hull", image: "/img/Conversion-Discipleship__trust__.webp" },
  { title: "The Discipleship Gospel", author: "Bill Hull & Ben Sobels", image: "/img/The-Discipleship-Gospel__trust__.webp" },
  { title: "Learning to Live and Love Like Jesus", author: "Brandon Cook", image: "/img/Learning-To-Live-and-Love-Like-Jesus__trust__.webp" },
  { title: "Cultivating A Life For God", author: "Neil Cole", image: "/img/Cultivating-a-Life-For-God__trust__.webp" },
  { title: "Spent Matches", author: "Roy Moran", image: "/img/Spent-Matches__trust__.webp" },
  { title: "Becoming a Level Five Multiplying Church", author: "Todd Wilson, Dave Ferguson, with Alan Hirsch", image: "/img/Becoming-a-Level-Five-Multiplying-Church__trust__.webp" },
  { title: "Church Plantology", author: "Peyton Jones", image: "/img/Church-Plantology__trust__.webp" },
];

const PODCASTS = [
  { title: "Movements with Steve Addison", body: "Stories and insights from the field on multiplying disciples and churches. Everywhere.", image: "/img/Movements-Podcast__mediumsquare__.webp" },
  { title: "Sent Ones Podcast", body: "The Sent Ones Podcast is where we help disciples of Jesus discover their calling, develop their skills as disciple-makers, and deploy to the field to which God is calling them.", image: "/img/sent-ones-podcast__mediumsquare__.webp" },
  { title: "The Craig Groeschel Leadership Podcast", body: "Personal, practical coaching lessons that take the mystery out of leadership.", href: "https://www.life.church/leadershippodcast/" },
  { title: "The Bonhoeffer Project Podcast", body: "Discussions on discipleship, culture, and The Church.", image: "/img/TBP-Podcast__mediumsquare__.webp" },
  { title: "The Carey Nieuwhof Leadership Podcast", body: "Helping you live in a way today that will help you thrive tomorrow.", image: "/img/Carey-Nieuwhof-Podcast__mediumsquare__.webp" },
  { title: "New Churches Q&A Podcast", body: "Practical answers to your real ministry questions.", image: "/img/New-Churches-QA-Podcast__mediumsquare__.webp" },
  { title: "The Team Leadership Podcast", body: "Newbreed Training's Team Leadership Podcast is designed to help activate and equip your team to be the spiritual powerhouse God intended.", image: "/img/The-Team-Leadership-Podcast__mediumsquare__.webp" },
  { title: "The Practical Church Planting Podcast", body: "Practical tips, advice and encouragement when it comes to planting and growing healthy churches.", image: "/img/The-Practical-Church-Planting-Podcast__mediumsquare__.webp" },
];

export default function ResourcesPage() {
  return (
    <>
      <TextureSection className="text-center">
        <h1 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
          On Demand Resources to Help Church Leaders Multiply Their Kingdom
          Impact
        </h1>
      </TextureSection>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold">
            Preaching &amp; Teaching Jesus&rsquo; Discipleship Gospel eBook
          </h2>
          <p className="mt-4 text-primary">
            What if the gospel message we&rsquo;ve been sharing isn&rsquo;t the
            one Jesus intended us to use for making disciples of all nations?
            Phil Claycomb challenges us with this question, reminding us that
            the wrong message leads to the wrong results — whether in personal
            conversations or larger settings. Through a thought-provoking
            journey, he combines storytelling, reasoning, and biblical insights
            while posing challenging questions.
          </p>
          <a
            href="/docs/the-discipleship-gospel.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-[10px] bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white hover:bg-accent-dark"
          >
            Download the Ebook
          </a>
        </div>
      </Section>

      <Section tone="accent">
        <SectionHeading sub="Tools and resource training videos from The Art of the Start.">
          Training Videos
        </SectionHeading>
        <p className="mt-2 text-center text-sm">
          <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline">
            Visit our YouTube Channel for More →
          </a>
        </p>
        <div className="mt-10">
          <CardGrid cols={3}>
            {TRAINING_VIDEOS.map((v) => (
              <VideoCard key={v.id} {...v} />
            ))}
          </CardGrid>
        </div>
      </Section>

      <Section>
        <SectionHeading sub="Listen to planters share their experience on a number of topics related to launching their church.">
          Planter Testimony Videos
        </SectionHeading>
        <div className="mt-10">
          <CardGrid cols={3}>
            {TESTIMONY_VIDEOS.map((v) => (
              <VideoCard key={v.id} {...v} />
            ))}
          </CardGrid>
        </div>
      </Section>

      <Section tone="accent">
        <SectionHeading>Recommended Books</SectionHeading>
        <div className="mt-10">
          <CardGrid cols={4}>
            {BOOKS.map((b) => (
              <Card key={b.title} image={b.image} title={b.title} body={`By ${b.author}`} />
            ))}
          </CardGrid>
        </div>
      </Section>

      <Section>
        <SectionHeading>Nexus Church Planting Podcast</SectionHeading>
        <p className="mx-auto mt-4 max-w-xl text-center text-primary">
          Learn more about advancing the gospel from church leaders who have
          been in your shoes.
        </p>
        <div className="mt-4 flex justify-center">
          <a href="/podcast" className="text-sm font-semibold uppercase tracking-wide text-accent">
            Learn More →
          </a>
        </div>

        <h3 className="mt-14 text-center font-heading text-xl font-bold">
          Other Podcast Resources
        </h3>
        <div className="mt-8">
          <CardGrid cols={4}>
            {PODCASTS.map((p) => (
              <Card key={p.title} image={p.image} title={p.title} body={p.body} href={p.href} cta="Listen" />
            ))}
          </CardGrid>
        </div>
      </Section>

      <ImageSection image="/img/Q7A2553-scaled-e1674764647470-2.webp" className="text-center">
        <h2 className="font-heading text-3xl font-bold">Stay Connected</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/85">
          Join our email list to learn more about our latest training,
          coaching, and resources for church planters.
        </p>
        <a
          href={PCO.emailList}
          className="mt-8 inline-block rounded-[10px] bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white hover:bg-accent-dark"
        >
          Join Our Email List
        </a>
      </ImageSection>

      <Section tone="secondary" className="text-center">
        <h2 className="font-heading text-3xl font-bold">Plant The Church Within You</h2>
        <p className="mx-auto mt-3 max-w-xl text-primary">
          Together with Nexus, you&rsquo;ll plant a church today designed to
          leave a lasting impact in your community tomorrow.
        </p>
        <a
          href={PCO.interestForm}
          className="mt-8 inline-block rounded-[10px] bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white hover:bg-accent-dark"
        >
          Get Started
        </a>
      </Section>

      <CalledToPlantBand image="/img/Greg-Teaching-ThinkNEXT-e1624372694557__largepreview__.webp" />
    </>
  );
}
