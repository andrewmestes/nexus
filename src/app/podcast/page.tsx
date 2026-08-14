import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import { getEpisodes } from "@/lib/podcast";
import { PODCAST } from "@/lib/links";

export const metadata: Metadata = { title: "Podcast" };

export default async function PodcastPage() {
  const episodes = await getEpisodes();

  return (
    <>
      <PageHero title="Nexus Church Planting Podcast" />

      <Section>
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-[220px_1fr] sm:items-center">
          <Image
            src="/img/Nexus-Podcast-Cover__largepreview__.webp"
            alt="Nexus Church Planting Podcast"
            width={220}
            height={220}
            className="mx-auto rounded-[20px] shadow-soft"
          />
          <div>
            <h2 className="font-heading text-xl font-bold">About</h2>
            <p className="mt-3 text-primary">
              The Nexus Church Planting Podcast is where church planters,
              pastors, and everyday leaders are equipped to multiply
              disciple-making communities. This podcast features conversations
              with practitioners and thought leaders on topics like
              disciple-making movements, leadership development, gospel
              clarity, practical ministry, church resources, and more.
              Whether you&rsquo;re just starting your church plant or leading
              an established congregation, you&rsquo;ll find encouragement,
              clarity, and practical tools to advance the mission of Jesus.
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-accent">
              Hosted by Andrew Estes
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <a href={PODCAST.apple} target="_blank" rel="noopener noreferrer">
                <img
                  src="/img/Listen-on-Apple-Podcast-Logo-Vector.svg-__largepreview__.webp"
                  alt="Listen on Apple Podcasts"
                  className="h-10 w-auto"
                />
              </a>
              <a href={PODCAST.spotify} target="_blank" rel="noopener noreferrer">
                <img
                  src="/img/spotify-podcast-badge-blk-grn-660x160__largepreview__.webp"
                  alt="Listen on Spotify"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="secondary">
        <SectionHeading>Episodes</SectionHeading>
        <div className="mt-10 mx-auto max-w-3xl divide-y divide-secondary-dark/30">
          {episodes.map((ep) => (
            <article key={ep.number} className="flex gap-5 py-6">
              {ep.image ? (
                <Image
                  src={ep.image}
                  alt=""
                  width={160}
                  height={90}
                  className="h-[90px] w-40 flex-shrink-0 rounded-[10px] object-cover"
                />
              ) : (
                <div className="h-[90px] w-40 flex-shrink-0 rounded-[10px] bg-tertiary/10" />
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  Episode {ep.number} ·{" "}
                  {new Date(ep.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="mt-1 font-heading text-lg font-semibold">
                  {ep.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  {ep.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm opacity-60">
          Full episode archive available on{" "}
          <a href={PODCAST.apple} className="font-semibold text-accent">
            Apple Podcasts
          </a>{" "}
          and{" "}
          <a href={PODCAST.spotify} className="font-semibold text-accent">
            Spotify
          </a>
          .
        </p>
      </Section>
    </>
  );
}
