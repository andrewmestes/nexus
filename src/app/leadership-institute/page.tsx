import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { Section, SectionHeading, Button, CardGrid, Card, Quote, ImageSection, TextureSection } from "@/components/ui";
import { CalledToPlantBand } from "@/components/shared-sections";
import { PCO } from "@/lib/links";

export const metadata: Metadata = pageMetadata({
  title: "Nexus Leadership Institute",
  description:
    "A 2-year leadership cohort, in partnership with local churches, to mentor, train, and equip emerging leaders for a lifetime of ministry.",
  path: "/leadership-institute",
});

export default function LeadershipInstitutePage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="mx-auto max-w-3xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
          Equipping Leaders for a Lifetime of Ministry
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg opacity-80">
          The Nexus Leadership Institute is an intentional effort to mentor,
          train, and equip emerging leaders. This 2-year leadership cohort, in
          partnership with local churches, helps to develop and train emerging
          leaders.
        </p>
      </Section>

      <ImageSection image="/img/surface-8HPLpr3hebU-unsplash-1-scaled.jpg" className="text-center">
        <SectionHeading sub="Everyone is called and used by God to advance the Gospel. We're here to help you accelerate your growth as a spiritual leader! We know the harvest is plentiful and the workers are few, so we pray diligently for more workers (Luke 10:2), but we are also deliberately investing in the lives of future leaders (2 Tim. 2:2).">
          Do you feel God calling you to something greater?
        </SectionHeading>
        <div className="mt-6">
          <Button href={PCO.nliCategory} variant="light">Start Your Journey</Button>
        </div>
      </ImageSection>

      <Section tone="accent" className="text-center">
        <SectionHeading sub="Are you looking for the next step in training emerging leaders? Not every church has the capacity or resources to launch a full-scale residency for those interested in deeper development. That's where we can help! In partnership with Nexus, you'll receive guidance that will help you develop your leaders, and your leaders will be exposed to pastors all across the country living out the mission of God.">
          Church Leaders!
        </SectionHeading>
        <div className="mt-6">
          <Button href={PCO.nliCategory} variant="light">Start Your Journey</Button>
        </div>
      </Section>

      <ImageSection image="/img/priscilla-du-preez-Q7wGvnbuwj0-unsplash-scaled__largepreview__.webp">
        <SectionHeading>Who is this for?</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/85">
          Leadership development is not just for senior leaders and potential
          church planters. We&rsquo;re here to equip men and women in any
          ministry at every level of church leadership! Great candidates
          include but are not limited to:
        </p>
        <ul className="mx-auto mt-6 max-w-xl list-inside list-disc space-y-2 text-white/85">
          <li>College or graduate students interested in ministry.</li>
          <li>Individuals sensing God&rsquo;s calling to vocational ministry.</li>
          <li>Current church leaders interested in church planting.</li>
          <li>
            Current church leaders who desire to grow in their character and
            competencies as ministry leaders.
          </li>
        </ul>
        <p className="mt-4 text-center text-sm italic text-white/60">
          *All applicants must be 18+ yrs old.
        </p>
      </ImageSection>

      <TextureSection>
        <SectionHeading>How It Works</SectionHeading>
        <p className="mx-auto mt-4 max-w-2xl text-center text-primary">
          This 2-year journey is delivered in partnership with Nexus through
          three environments:
        </p>
        <div className="mt-10">
          <CardGrid cols={3}>
            <Card title="Local Investment" body="Potential leaders will meet 2-3 times a month with a local pastor or mentor as they process material and gain hands-on experience in ministry." />
            <Card title="Virtual Cohort" body="Leaders will collaborate in a monthly cohort with leaders around the country as we partner together to equip and train leaders." />
            <Card title="Course Work" body="Leaders will be assigned books, online courses, and other materials as they grow in several key areas of leadership and ministry." />
          </CardGrid>
        </div>
      </TextureSection>

      <Section>
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold">Local Investment</h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-accent">
              Customized Leadership Development Right Where You Are!
            </p>
            <p className="mt-4 font-semibold">EVERY LEADER NEEDS A COACH.</p>
            <p className="mt-2 text-primary">
              Jesus helped his disciples grow through on-the-ground training.
              You can&rsquo;t teach someone to swim in a classroom alone; at
              some point, you have to get in the pool! That&rsquo;s why local
              investment is critical.
            </p>
            <p className="mt-4 text-primary">
              Every participant in the NLI will be required to meet with a
              pastor or mentor a minimum of twice a month for intentional and
              personal development.
            </p>
            <p className="mt-4 font-semibold">
              AND WE&rsquo;RE NOT JUST FOCUSED ON FUTURE CHURCH PLANTERS!
            </p>
            <p className="mt-2 text-primary">
              If you&rsquo;re in Children&rsquo;s, Worship, Youth, Recovery,
              Adults, Small Groups, or any other ministry, the Nexus Leadership
              Institute is for you!
            </p>
          </div>
          <Image
            src="/img/pexels-photo-935949__mediumsquare__.webp"
            alt=""
            width={600}
            height={600}
            className="rounded-[20px] object-cover shadow-soft"
          />
        </div>
      </Section>

      <Section tone="secondary">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <Image
            src="/img/man-in-white-shirt-using-tablet-computer__mediumsquare__.webp"
            alt=""
            width={600}
            height={600}
            className="order-2 rounded-[20px] object-cover shadow-soft sm:order-1"
          />
          <div className="order-1 sm:order-2">
            <h2 className="font-heading text-2xl font-bold">Virtual Cohort</h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-accent">
              Collaborative Learning With Like-Minded Leaders
            </p>
            <p className="mt-4 font-semibold">LET&rsquo;S GROW TOGETHER.</p>
            <p className="mt-2 text-primary">
              We believe we&rsquo;re better together! NLI offers a unique,
              collaborative learning experience so we can partner to develop
              the next generation of leadership in the Church.
            </p>
            <p className="mt-4 text-primary">
              Even though we&rsquo;re all independent churches, it doesn&rsquo;t
              mean we&rsquo;re alone! This incredible experience will allow you
              to be invested locally as your pastor, coach, or mentor invests
              in your life. But it also allows you the opportunity to learn
              from pastors and leaders in different contexts nationwide.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold">Course Work</h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-accent">
              Online Resources to Accelerate Your Growth!
            </p>
            <p className="mt-4 font-semibold">MAKE A PERSONAL INVESTMENT</p>
            <p className="mt-2 text-primary">
              The Nexus Leadership Institute will expose you to thought leaders and
              practitioners worldwide. We&rsquo;ll give you the best of the best
              resources and leaders we have to offer!
            </p>
            <p className="mt-4 text-primary">
              You will grow and be challenged in your leadership through books,
              articles, videos, and more. Our deepest desire is to equip you for a
              lifetime of ministry impact. You may not always be at the church
              you&rsquo;re at now, but Lord willing, you will always serve the Kingdom!
              The skills and knowledge you acquire now can impact generations.
            </p>
            <p className="mt-4 text-primary">
              Each month, in preparation for our virtual cohort time, you will process
              curated material ahead of time to help accelerate our learning time
              together.
            </p>
          </div>
          <Image
            src="/img/Nexus-Leadership-Institute_NLI-Logo-1536x338__largepreview__.webp"
            alt="Nexus Leadership Institute"
            width={600}
            height={132}
            className="rounded-[10px] bg-tertiary p-8 object-contain"
          />
        </div>
      </Section>

      <Section tone="secondary" id="two-emphases">
        <SectionHeading sub="To create movement, leaders need to develop both discipling and directional leadership skills.">
          Two Emphases in Leadership Development
        </SectionHeading>
        <p className="mx-auto mt-6 max-w-2xl text-center text-primary">NLI will help you gain:</p>
        <ul className="mx-auto mt-4 max-w-xl list-inside list-disc space-y-2 text-primary">
          <li>Clarity around your calling</li>
          <li>Guidance on how to develop disciple-makers</li>
          <li>Insight into crafting a clear and compelling vision</li>
          <li>Skills to lead effective ministry teams</li>
          <li>And so much more!</li>
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm italic opacity-80">
          If you have Directional leadership only, you may be able to build an
          organization, but at what cost? The Ant Hill analogy is relevant
          because the ants are there to serve the queen (primary leader). So
          we focus on both Directional and Discipling leadership to equip
          leaders to multiply their leadership and Gospel impact! *Adapted
          from Starfish Movement by Dan Grider.
        </p>
      </Section>

      <ImageSection image="/img/LUK05612-copy-scaled-e1674494573168-1024x683__largepreview__.webp" overlay="dark">
        <Quote
          quote="I cannot thank the people at Nexus enough. Your training prepares leaders to communicate a clear and compelling vision. The care you provide church planters is inspiring… Thank you for partnering with us and helping us to grow people and God's Kingdom in our region."
          attribution="Chad Halbach, Director – Christian Evangelistic Mission"
        />
      </ImageSection>

      <Section className="text-center">
        <h2 className="font-heading text-3xl font-bold">2 Years of Challenging Content</h2>
        <p className="mx-auto mt-3 max-w-2xl text-primary">
          NLI is organized to be a 2-year rotating curriculum. The content in
          both years stands alone so that leaders can join at the beginning of
          any year!
        </p>
        <div className="mt-8">
          <Button href={PCO.nliCategory}>Sign Up Now!</Button>
        </div>
      </Section>

      <Section>
        <CardGrid cols={2}>
          <Card
            eyebrow="Year One"
            title="Spiritual Formation & Servant Leadership"
            body="Spiritual Formation: Spiritual leadership involves the whole person: heart, mind, soul, & spirit. Cultivating our spiritual disciplines is key. Servant Leadership: This content will focus on leading yourself, leading others, leading leaders, and leading the church through practical tools and training."
          />
          <Card
            eyebrow="Year Two"
            title="Biblical Foundations & Disciple-Making"
            body={
              <>
                <strong>Biblical Foundation:</strong> This section will focus on the
                foundations of Christian doctrine. Helping leaders understand the
                overall story of scripture and the distinctives of the Bible and the
                Restoration Movement.
                <br />
                <br />
                <strong>Disciple-Making:</strong> This is the Great Commission. Making
                disciple-makers in our churches to multiply disciple-making
                communities. This section will train leaders in practical, reproducible
                tools for making multiplying disciples. Through the 4 fields, 411
                training, and understanding the Gospel, we&rsquo;ll give leaders a big
                vision, a clear pathway, and simple tools.
              </>
            }
          />
        </CardGrid>
      </Section>

      <Section tone="accent" className="text-center">
        <SectionHeading sub="The Nexus Leadership Institute is a unique and collaborative opportunity that's waiting for you! Now is the time to take your next step as a leader.">
          Are You Ready to Grow as a Leader?
        </SectionHeading>
        <div className="mt-6">
          <Button href={PCO.nliCategory} variant="light">Get Started</Button>
        </div>
      </Section>

      <CalledToPlantBand image="/img/IMG_7905-scaled-e1674238483735__largepreview__.webp" />
    </>
  );
}
