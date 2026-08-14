import type { Metadata } from "next";
import { Section, SectionHeading, Button, Quote, CardGrid, Card, ImageSection, TextureSection } from "@/components/ui";
import { TeamGrid, type TeamMember } from "@/components/team";
import { CalledToPlantBand } from "@/components/shared-sections";
import { PCO } from "@/lib/links";

export const metadata: Metadata = {
  title: "Coaching",
  description:
    "Our coaches guide you through the highs and lows of launching a life-giving, multiplying church.",
};

const COACHES: TeamMember[] = [
  {
    name: "Greg Garcia",
    photo: "/img/Greg-Garcia-Nexus-Church-Planting-Leader-Care-Associate-Director-of-Coaching-1024x985__largepreview__.webp",
    bio: "Greg and Karen Garcia serve Creekside Christian Fellowship, in Needville TX, a church founded by the Garcia's in 2005. Greg has never been more than ½ time with his congregation, guiding them through rapid growth and its attendant challenges. Greg spends the other half of his time interviewing prospective church planters for Nexus, and leading Nexus' coaching system.",
  },
  {
    name: "Matt Branum",
    photo: "/img/119954484_10224167147985876_2391340752915156516_n__largepreview__.webp",
    bio: "Matt and his wife Becky moved to Spearfish, SD in 2004 from Cincinnati, where he was on staff at a Christian university, to start North Point Christian Church. Matt loves seeing people grow in their relationship with Christ and helping them achieve their full potential as a child of God.",
    website: { label: "North Point Christian Church", href: "https://northpointcc.net/" },
  },
  {
    name: "Robi Brust",
    photo: "/img/unnamed__largepreview__.webp",
    bio: "Robi started out life in the Los Angeles area but as a teenager he moved to the booming metropolis of Tyro, Kansas (pop. 250). He attended Ozark Christian College in Joplin, Missouri and graduated in 1984. He has spent most of his adult life in Oklahoma as a Youth Pastor, College Pastor, and Senior Pastor. In July of 2016, he and his wife Sandy moved with their family to Bentonville, AR to launch Adventure Church.",
  },
  {
    name: "Patrick Lightfoot",
    photo: "/img/tempImagegqdbuf-e1614099499285-800x800-1__largepreview__.webp",
    bio: "God called both Patrick and his wife Hannah to leave their sales careers of twelve years and go into full-time ministry. Four years later, in 2015, they followed God's call to plant Traverse Christian Church in Windsor, CO where it has been their joy as an ambassador for Christ to bring His restorative love to their community.",
    website: { label: "Traverse Christian Church", href: "https://www.traversechristian.com/" },
  },
  {
    name: "Jesse Crawford",
    photo: "/img/Jesse-2__largepreview__.webp",
  },
  {
    name: "Clint Burns",
    photo: "/img/clint-burns-1__largepreview__.webp",
    bio: "Clint and Kat Burns have been actively in ministry since 2004. They grew up in West Texas, and met in the youth group. Dating through high school and college, ministry has been a constant shared passion between them. Working with churches in rural Texas and Oklahoma, they have always sought to fearlessly pursue God's calling for their lives and ministry. It was this calling that led them to NE Arkansas in July of 2016 to plant Restore Church. Their passion is to share God's love with people in authentic and transformative ways.",
    website: { label: "Restore Church", href: "https://restorenea.com/" },
  },
  {
    name: "John Honold",
    photo: "/img/1554263609968__largepreview__.webp",
  },
];

export default function CoachingPage() {
  return (
    <>
      <TextureSection>
        <SectionHeading sub="Our coaches guide you through the highs and lows of launching a life-giving, multiplying church.">
          Coaching to Help Pastors and Leaders Excel in Their Ministry
        </SectionHeading>
      </TextureSection>

      <ImageSection image="/img/IMG_2599-scaled-e1674679190881__largepreview__.webp">
        <SectionHeading>Every Leader Needs a Coach.</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/85">
          Church planting takes determination, strategy, and support. After
          all, this process is complex, and it&rsquo;s tough to go at it alone.
          Every Timothy needs a Paul in their life. That&rsquo;s where our
          coaches can help.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href={PCO.interestForm} variant="light">
            Get Started
          </Button>
        </div>
      </ImageSection>

      <Section tone="accent">
        <h2 className="text-center font-heading text-3xl font-bold">Meet Our Coaches</h2>
        <div className="mt-10 [&_p]:text-white/85 [&_a]:text-white">
          <TeamGrid members={COACHES} />
        </div>
      </Section>

      <Section>
        <CardGrid cols={3}>
          <Card
            eyebrow="0-2 Years"
            title="Coaching"
            image="/img/Q7A2568-edited__mediumsquare__.webp"
            body="If you're starting out on your church planting journey, our coaches are here to guide you each step of the way. We'll help you lay the foundation for a thriving church planting experience, being there to answer questions as you move through the process."
          />
          <Card
            eyebrow="2-5 Years"
            title="Coaching"
            image="/img/IMG_1856-scaled__mediumsquare__.webp"
            body="Once you pass the two-year mark, you'll work with a new set of coaches who help you establish eldership and avoid losing the church planter heart for multiplication. We'll ensure you don't settle — breaking through your comfort zone to create a live-giving impact."
          />
          <Card
            eyebrow="5+ Years"
            title="Mentorship & Accountability"
            image="/img/Q7A2576-edited-scaled__mediumsquare__.webp"
            body="You will never walk alone. Nexus isn't here to help start your church and leave you in the dust. You're family! Our team will still act as mentors as you continue your journey, helping you develop as a leader, and guiding you in multiplication."
          />
        </CardGrid>
      </Section>

      <ImageSection image="/img/Q7A2553-scaled-e1674764647470__largepreview__.webp" overlay="dark">
        <Quote
          heading="Nexus Proved That We Still Mattered"
          quote="If it hadn't been for Nexus, I'm not sure I'd still be in ministry. Nexus affirmed that we still mattered and that we still had something to give."
          attribution="Robi Brust, Executive Director of Arkansas Church Planting Network"
        />
      </ImageSection>

      <TextureSection>
        <SectionHeading sub="No matter where you're at in your journey, our coaches are here to help you stay focused, encouraging you to plant the life-giving church of your dreams.">
          See the Vision God Placed in Your Heart Come to Life
        </SectionHeading>
      </TextureSection>

      <Section>
        <SectionHeading sub="At Nexus, coaching is not just for church planters. We coach any leader who is starting a new church, reviving or relaunching a struggling church, or in need of new life and purpose in their established church.">
          Coaching Leaders Throughout Their Journey in Ministry
        </SectionHeading>
      </Section>

      <ImageSection image="/img/306780691_191242693352010_1888523972930920139_n.jpg">
        <SectionHeading>Ensuring You and Your Church Are in It for the Long Haul</SectionHeading>
        <div className="mt-10">
          <CardGrid cols={3}>
            <Card title="Broaden Your Skillset" body="Our coaching helps you develop the skills needed to plant and grow a successful church." />
            <Card title="Work 1:1 With Experienced Leaders" body="At Nexus, our coaches are church planters with years of experience, holding you accountable throughout your journey." />
            <Card title="Launch Your Church With Confidence" body="We'll provide you with the support and guidance to launch a healthy, multiplying church without sacrificing your health along the way." />
          </CardGrid>
        </div>
      </ImageSection>

      <CalledToPlantBand image="/img/Greg-Teaching-ThinkNEXT-e1624372694557__largepreview__.webp" />
    </>
  );
}
