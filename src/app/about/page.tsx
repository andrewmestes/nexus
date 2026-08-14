import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading, Button, ButtonRow, CardGrid, Card, ImageSection, TextureSection } from "@/components/ui";
import { TeamGrid, type TeamMember } from "@/components/team";
import { CalledToPlantBand } from "@/components/shared-sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "Over the past two decades, Nexus has helped more than 80 church leaders plant life-giving, multiplying churches across North America.",
};

const VALUES = [
  { title: "Passion", body: "Salvation hangs in the balance" },
  { title: "Just Lead", body: "Go with the Goers!!" },
  { title: "Risk-Taking", body: "Run with Scissors!" },
  { title: "Nurture", body: "Leaders are our Legacy" },
  { title: "Selflessness", body: "Giving without an expectation of return" },
  { title: "ThinkNext", body: "Fail Fast-Recover Faster" },
];

const UNIQUE = [
  {
    title: "Coaches",
    body: "Our COACHES are church planters who bring experience and guidance, ask the right questions, and walk you through the art of church planting.",
    image: "/img/management__mediumsquare__.webp",
  },
  {
    title: "Mentors",
    body: "Our MENTORS are seasoned leaders who become a steady voice in your life. They walk alongside you, help you prioritize what matters, and remind you that God wants to work IN you even as He is working THROUGH you.",
    image: "/img/mentoring__mediumsquare__.webp",
  },
  {
    title: "Training",
    body: "Our TRAINING is designed to provide you with the key elements every pastor needs to launch a life-giving, multiplying church.",
    image: "/img/training__mediumsquare__.webp",
  },
  {
    title: "Community",
    body: "Our COMMUNITY is what sets us apart. You enter into a family of church-planting companions who learn together as we work alongside one another.",
    image: "/img/success__mediumsquare__.webp",
  },
  {
    title: "Accountability",
    body: "Our ACCOUNTABILITY structure is built around love and guidance to ensure you and your church are in it for the long haul.",
    image: "/img/help__mediumsquare__.webp",
  },
];

const TEAM: TeamMember[] = [
  {
    name: "Phil Claycomb",
    role: "Executive Director",
    photo: "/img/IMG-1306-1024x1024__largepreview__.webp",
    bio: "Phil, alongside his wife, Barb, started their first church straight out of seminary and consider themselves missionaries to North America. Their first assignment was to “start a church for unchurched people using only unchurched people to do it.” It was an exciting ride! The Claycomb’s stayed in hands-on church planting for 13 years, planting 2 churches, each of which planted a daughter church. In 2001 Phil and Barb transitioned into a coaching and training role, helping other church planters pursue their own callings. Phil worked with Stadia: new church strategies from 2001-2005. He and Barb moved to Texas in 2006 and launched Nexus: church planting leadership. Phil enjoys working with his wife to support church-planting couples and families.",
    email: "phil@nexus.us",
    facebook: "https://www.facebook.com/philip.claycomb.3",
  },
  {
    name: "Clint Burns",
    role: "Director of Coaching",
    photo: "/img/IMG_5539__largepreview__.webp",
    bio: "After a decade of fruitful ministry in Texas, Clint Burns and his wife, Kat, felt called to plant Restore Church in Brookland, Arkansas, in 2016. Clint brings extensive experience to Nexus: Church Planting & Leader Care, having coached church planters since 2021 and serving on the board of the Arkansas Church Planting Network. As our Director of Coaching, Clint is passionate about equipping and empowering church planters and ministry leaders to fulfill the unique vision God has placed on their hearts. When he's not leading at Restore or coaching leaders, you'll find Clint enthusiastically cheering on his teenage son at the baseball field.",
    email: "clint@nexus.us",
    facebook: "https://www.facebook.com/clint.burns.161",
  },
  {
    name: "Andrew Estes",
    role: "Director of Training",
    photo: "/img/Andrew-Headshot-Color__largepreview__.webp",
    bio: "Andrew’s role as the Director of Training here at Nexus comes after a decade of serving on multiple church staffs. He uses that experience to bring clarity and focus to the God-given mission inside every church planter and pastor. Andrew also serves churches and leaders nationwide through The Clarity Project as a Certified Navigator in the Church Unique, God Dreams, and Future Church processes and is a Life Coach & Master Trainer in the Younique personal vision journey. He also serves as the Visionary Planning Lead and Coach Vision Coach for the RunFree.Co and coaches teams in The 6 Types of Working Genius and the 4 Disciplines of Execution. Andrew lives in Loveland, CO, with his wife, Megan, and four children.",
    email: "andrew@nexus.us",
    linkedin: "https://www.linkedin.com/in/andrew-estes-a79b2240/",
    facebook: "https://www.facebook.com/andrewmestes",
    website: { label: "The Clarity Project", href: "https://www.visionclarity.org/" },
  },
  {
    name: "Barb Claycomb",
    role: "Director of HR & Executive Assistant",
    photo: "/img/P8-e1671644319446__largepreview__.webp",
    bio: "Barb officially joined Nexus in June 2012 as the Executive Assistant to add additional structure and organization to the Nexus team. Prior to starting with Nexus, she worked as an Administrative Assistant for a CPA, life insurance company, and research and development facility. She then spent 13 years as an Elementary teacher – primarily in Kindergarten and First Grade, having plenty of experience in organizing, mothering, and cleaning up messes. But today, she loves working alongside her husband, Phil, in ministry.",
    email: "barb@nexus.us",
    facebook: "https://www.facebook.com/barb.claycomb",
  },
  {
    name: "Andrew Wauchope",
    role: "Director of Operations",
    photo: "/img/Wachope-Headshot__largepreview__.webp",
    bio: "Andrew joined the Nexus team in 2023, after meeting and partnering with Nexus to replant the 200 year old church he served in for over a decade. Working with Nexus to replant quickly changed his ministry mindset and grew a love for church planting. With Nexus, Andrew works to build scaffolding for church planters and church planting network partners as new churches are planned and started. Andrew lives near Indianapolis with his wife Amanda and their son Knox.",
    email: "andreww@nexus.us",
    facebook: "https://www.facebook.com/andrew.wauchope",
  },
  {
    name: "Rowlie Hutton",
    role: "Leader Care Associate",
    photo: "/img/Rowlie__largepreview__.webp",
    bio: "Rowlie Hutton spent over 35 years preaching in The Dakotas, Montana, and Nebraska. He is a graduate of Dakota Bible College and Montana State University-Northern. Rowlie and his wife, Suzette, have five children and eight grandchildren. While preaching in Havre, MT, Rowlie served one session in the Montana State Senate focusing on the Sanctity of Life bills. Rowlie enjoys laughing with his friends over a stout cup of coffee, reading good books, and pouring into the next generation of “young guns.”",
    email: "rowlie@nexus.us",
  },
  {
    name: "Carl \"Spark\" Ball",
    role: "Operations Specialist",
    photo: "/img/Spark-Profile-Picture-Option-2-e1607625855192__largepreview__.webp",
    bio: "Carl “Spark” Ball joined the Nexus team in 2019 as the full-time Director of Operations. Spark and his wife, Cindy, have been married for over 34 years. They have 2 adopted children, Buddy and Renee. Both have deep roots in church planting. In 1989 they began to attend the Northwest Christian Community (the first church plant of Phil and Barb) and were baptized on December 30, 1990. Spark and Cindy were also part of the launch team for a daughter church of NWCC. From January 2004 – April 2018, Spark served as Executive Director of Love INC of Lake County. He saw the Lord grow the number of churches working together to impact their communities for Christ. Spark is excited to have his ministry focus return to church planting.",
    email: "spark@nexus.us",
    facebook: "https://www.facebook.com/spark.ball",
    linkedin: "https://www.linkedin.com/in/carl-spark-ball-89a0752a/",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              About Nexus
            </p>
            <h1 className="font-heading text-3xl font-bold">Our Story</h1>
            <p className="mt-4 text-primary">
              Over the past two decades, we have helped more than 80 church
              leaders plant life-giving, multiplying churches. Our goal is to
              plant churches and truly care for those called to this
              challenging task.
            </p>
            <p className="mt-4 text-primary">
              By working with leaders across North America, we&rsquo;re seeing
              communities rooted in faith see their disciple-making vision come
              alive.
            </p>
            <p className="mt-4 text-primary">
              Our name says it all — as a &ldquo;nexus,&rdquo; we pride
              ourselves on becoming the connection between church-planting
              leaders and supportive partners. And with our background in the
              Restoration Movement, we&rsquo;re intentionally establishing
              churches grounded in the New Testament.
            </p>
            <p className="mt-4 text-primary">
              Together, we can ensure that churches planted today are leaving a
              lasting impact tomorrow.
            </p>
            <ButtonRow>
              <div className="mt-6 flex gap-4">
                <Button href="/contact-us">Contact Us</Button>
                <Button href="/donate" variant="outline">
                  Donate
                </Button>
              </div>
            </ButtonRow>
          </div>
          <Image
            src="/img/LUK05612-copy-scaled__mediumsquare__.webp"
            alt=""
            width={600}
            height={600}
            className="rounded-[20px] object-cover shadow-soft"
          />
        </div>
      </Section>

      <ImageSection image="/img/LUK05612-copy-scaled-e1674494573168.jpg">
        <CardGrid cols={3}>
          <div className="rounded-[20px] bg-white/10 p-7">
            <h3 className="font-heading text-xl font-semibold">Our Mission</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">We start disciple-making communities that start disciple-making communities! If we make healthy disciples who continue to make other disciples, these faith communities will soon be starting even more faith communities.</p>
          </div>
          <div className="rounded-[20px] bg-white/10 p-7">
            <h3 className="font-heading text-xl font-semibold">Our Vision</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">To launch church-planting movements in all 50 states. Our end game is not to create one monolithic church-planting entity but to launch multiple networks that voluntarily collaborate and partner to launch more churches in their regions.</p>
          </div>
          <div className="rounded-[20px] bg-white/10 p-7">
            <h3 className="font-heading text-xl font-semibold">Our Heritage</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/85">Nexus&rsquo; leadership comes from the networks of churches known as the Restoration Movement. In keeping with the history of this movement, we commit to embracing unity with all like-minded congregations and other Christian networks and groups.</p>
          </div>
        </CardGrid>
      </ImageSection>

      <Section>
        <SectionHeading>Our Values</SectionHeading>
        <div className="mt-10">
          <CardGrid cols={3}>
            {VALUES.map((v) => (
              <Card key={v.title} title={v.title} body={v.body} />
            ))}
          </CardGrid>
        </div>
      </Section>

      <TextureSection>
        <SectionHeading sub="The team at Nexus prides itself on being both thoughtful and intentional. It's why you won't see us focusing solely on the numbers. With us, it's about building churches that will last for decades to come — not padding an annual report with new churches that aren't sustainable. Here's how we do that.">
          What Makes Us Unique?
        </SectionHeading>
        <div className="mt-10">
          <CardGrid cols={3}>
            {UNIQUE.map((u) => (
              <Card key={u.title} image={u.image} title={u.title} body={u.body} />
            ))}
          </CardGrid>
        </div>
      </TextureSection>

      <Section className="text-center">
        <SectionHeading>Our Name Says It All</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-primary">
          As a &ldquo;NEXUS,&rdquo; we pride ourselves on becoming the
          connection between church-planting leaders and supportive partners.
          And with our background in the Restoration Movement, we also aim to
          establish churches grounded in the New Testament. We&rsquo;re here to
          ensure you can stand in the center of your calling and multiply
          disciples in your community and beyond.
        </p>
      </Section>

      <Section tone="secondary">
        <SectionHeading sub="We Are Here To Serve You.">Meet The Team</SectionHeading>
        <div className="mt-10">
          <TeamGrid members={TEAM} />
        </div>
      </Section>

      <CalledToPlantBand image="/img/IMG_7905-scaled-e1674238483735.jpeg" />
    </>
  );
}
