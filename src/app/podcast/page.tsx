import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui";
import { LazyYouTube } from "@/components/lazy-youtube";
import { YouTubeIcon, SpotifyIcon, ApplePodcastsIcon } from "@/components/podcast-icons";
import { FEATURED_EPISODES, ARCHIVE_EPISODES } from "@/lib/podcast";
import { PODCAST, SOCIAL } from "@/lib/links";

export const metadata: Metadata = pageMetadata({
  title: "Podcast",
  description:
    "The Nexus Church Planting Podcast, hosted by Andrew Estes, equips church planters, pastors, and everyday leaders to multiply disciple-making communities. 40+ conversations with practitioners like Will Mancini, Tod Bolsinger, and Jessie Cruickshank.",
  path: "/podcast",
});

const PODCAST_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "Nexus Church Planting Podcast",
  url: "https://www.nexus.us/podcast",
  image: "https://www.nexus.us/img/Nexus-Podcast-Cover__largepreview__.webp",
  description:
    "The Nexus Church Planting Podcast, hosted by Andrew Estes, equips church planters, pastors, and everyday leaders to multiply disciple-making communities.",
  webFeed: PODCAST.legacyYoutubePlaylistFeed,
  actor: { "@type": "Person", name: "Andrew Estes" },
  sameAs: [SOCIAL.youtube, PODCAST.spotify, PODCAST.apple],
};

function PlatformButton({
  href,
  icon,
  children,
  primary,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-250 hover:-translate-y-0.5 hover:shadow-lg ${
        primary
          ? "bg-accent text-white hover:bg-accent-dark"
          : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
      }`}
    >
      {icon}
      {children}
    </a>
  );
}

export default function PodcastPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PODCAST_JSON_LD) }}
      />

      {/* ---------------------------------------------------------------- hero */}
      <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-tertiary text-white">
        <Image
          src="/img/LUK05612-copy-scaled-e1674494573168-1024x683__largepreview__.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tertiary/70 via-tertiary/60 to-tertiary" />

        <div className="reveal relative mx-auto grid max-w-[1145px] gap-10 px-5 py-24 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent-light">
              A podcast hosted by Andrew Estes
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl font-bold leading-[1.05] sm:text-6xl">
              The Nexus Church
              <br />
              Planting <em className="text-accent-light not-italic">Podcast.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Unfiltered conversations with the practitioners and thinkers shaping how
              churches are planted, led, and multiplied &mdash; 40+ episodes and counting.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PlatformButton href={SOCIAL.youtube} icon={<YouTubeIcon />} primary>
                Watch on YouTube
              </PlatformButton>
              <PlatformButton href={PODCAST.spotify} icon={<SpotifyIcon />}>
                Spotify
              </PlatformButton>
              <PlatformButton href={PODCAST.apple} icon={<ApplePodcastsIcon />}>
                Apple Podcasts
              </PlatformButton>
            </div>
          </div>

          <Image
            src="/img/Nexus-Podcast-Cover__largepreview__.webp"
            alt="Nexus Church Planting Podcast cover art"
            width={220}
            height={220}
            className="hidden rounded-[20px] shadow-elevated rotate-3 transition-transform duration-500 hover:rotate-0 lg:block"
          />
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 sm:flex">
          <span>Scroll</span>
          <span className="h-8 w-px animate-pulse bg-white/40" />
        </div>
      </section>

      {/* ----------------------------------------------------------- statement */}
      <Section className="text-center">
        <div className="mx-auto max-w-3xl">
          <p className="font-heading text-2xl font-semibold leading-snug sm:text-3xl">
            Where church planters, pastors, and everyday leaders are equipped to{" "}
            <em className="text-accent not-italic">multiply</em> disciple-making
            communities.
          </p>
          {/* Verbatim "About" copy from the live site — kept so the page still
              carries the show's own description, not just the redesigned framing. */}
          <p className="mt-6 text-lg leading-relaxed opacity-80">
            The Nexus Church Planting Podcast is where church planters, pastors, and
            everyday leaders are equipped to multiply disciple-making communities. This
            podcast features conversations with practitioners and thought leaders on
            topics like disciple-making movements, leadership development, gospel
            clarity, practical ministry, church resources, and more. Whether
            you&rsquo;re just starting your church plant or leading an established
            congregation, you&rsquo;ll find encouragement, clarity, and practical tools
            to advance the mission of Jesus.
          </p>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            Hosted by Andrew Estes
          </p>
        </div>
      </Section>

      {/* ------------------------------------------------------------- featured */}
      <Section tone="secondary">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              01 &mdash; Start Here
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
              Most popular conversations.
            </h2>
          </div>
          <p className="text-sm opacity-60">Five episodes listeners return to again and again.</p>
        </div>

        <div className="mt-12 flex flex-col gap-16">
          {FEATURED_EPISODES.map((ep, i) => (
            <article
              key={ep.youtubeId}
              className={`reveal grid items-center gap-8 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <LazyYouTube
                id={ep.youtubeId}
                title={ep.title}
                className="shadow-elevated"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                  Featured &middot; {ep.duration}
                </span>
                <h3 className="mt-2 font-heading text-2xl font-semibold leading-tight">
                  {ep.title}
                </h3>
                <p className="mt-3 leading-relaxed opacity-80">{ep.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${ep.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-accent hover:text-accent-dark"
                  >
                    Watch episode
                    <span className="inline-block transition-transform duration-250 group-hover/link:translate-x-1">
                      &rarr;
                    </span>
                  </a>
                  <div className="flex items-center gap-3">
                    <a
                      href={ep.appleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Listen on Apple Podcasts"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-tertiary text-white transition-transform hover:scale-110"
                    >
                      <ApplePodcastsIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={PODCAST.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Listen on Spotify"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1db954] text-white transition-transform hover:scale-110"
                    >
                      <SpotifyIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={`https://www.youtube.com/watch?v=${ep.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Watch on YouTube"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white transition-transform hover:scale-110"
                    >
                      <YouTubeIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* -------------------------------------------------------------- archive */}
      <Section>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              02 &mdash; The Archive
            </span>
            <h2 className="mt-2 font-heading text-3xl font-bold sm:text-4xl">
              Every episode.
            </h2>
          </div>
          <p className="text-sm opacity-60">All conversations, newest first.</p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {ARCHIVE_EPISODES.map((ep) => (
            <article key={ep.title} className="reveal">
              {ep.youtubeId ? (
                <LazyYouTube id={ep.youtubeId} title={ep.title} duration={ep.duration} />
              ) : ep.image ? (
                <div className="relative aspect-video w-full overflow-hidden rounded-[10px] shadow-soft">
                  <Image
                    src={ep.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full rounded-[10px] bg-tertiary/10" />
              )}
              <h3 className="mt-4 font-heading text-base font-semibold leading-snug">
                {ep.title}
              </h3>
              {ep.date && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  {new Date(ep.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              )}
              {ep.description && (
                <p className="mt-2 text-sm leading-relaxed opacity-70">{ep.description}</p>
              )}
              {(ep.youtubeId || ep.appleUrl) && (
                <div className="mt-3 flex gap-4 text-sm font-semibold">
                  {ep.youtubeId && (
                    <a
                      href={`https://www.youtube.com/watch?v=${ep.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-dark"
                    >
                      Watch &nearr;
                    </a>
                  )}
                  {ep.appleUrl && (
                    <a
                      href={ep.appleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-dark"
                    >
                      Listen &nearr;
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------ subscribe */}
      <section className="relative overflow-hidden bg-tertiary text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-dark/40 via-tertiary to-tertiary" />
        <div className="reveal relative mx-auto flex max-w-2xl flex-col items-center gap-5 px-5 py-20 text-center">
          <Image
            src="/img/Nexus-Podcast-Cover__largepreview__.webp"
            alt="Nexus Church Planting Podcast cover art"
            width={110}
            height={110}
            className="rounded-[16px] shadow-elevated"
          />
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Never miss a <em className="text-accent-light not-italic">conversation.</em>
          </h2>
          <p className="text-white/75">
            Subscribe on your favorite platform and get every new episode as it drops.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <PlatformButton href={SOCIAL.youtube} icon={<YouTubeIcon />} primary>
              Watch on YouTube
            </PlatformButton>
            <PlatformButton href={PODCAST.spotify} icon={<SpotifyIcon />}>
              Spotify
            </PlatformButton>
            <PlatformButton href={PODCAST.apple} icon={<ApplePodcastsIcon />}>
              Apple Podcasts
            </PlatformButton>
          </div>
          <Link
            href="/get-involved"
            className="mt-4 text-sm font-semibold text-white/60 underline-offset-4 hover:text-white hover:underline"
          >
            Want to be a guest or suggest a topic? Get in touch &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
