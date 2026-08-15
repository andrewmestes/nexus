import Link from "next/link";
import Image from "next/image";
import type { ReactNode, CSSProperties } from "react";
import { LazyYouTube } from "./lazy-youtube";

/* ------------------------------------------------------------------ layout */

type Tone = "light" | "secondary" | "dark" | "accent" | "accent-light";

const TONE: Record<Tone, string> = {
  light: "bg-base-bg text-base-text",
  secondary: "bg-secondary text-base-text",
  dark: "bg-tertiary text-white",
  accent: "bg-accent text-white",
  "accent-light": "bg-accent-light text-white",
};

/**
 * Photo-background sections, matching the live site's pattern of full-bleed
 * imagery behind text (hero bands, quotes, CTA strips). A soft dark scrim is
 * layered under the content so white text stays legible regardless of the
 * source photo's own tonal range — the live site relies on consistently
 * dark-toned photography to get the same effect.
 */
export function ImageSection({
  children,
  image,
  className = "",
  id,
  overlay = "medium",
}: {
  children: ReactNode;
  image: string;
  className?: string;
  id?: string;
  overlay?: "light" | "medium" | "dark";
}) {
  const scrim = {
    light: "from-black/40 to-black/40",
    medium: "from-black/55 to-black/65",
    dark: "from-black/70 to-black/80",
  }[overlay];
  return (
    <section
      id={id}
      className={`relative bg-cover bg-center text-white ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${scrim}`} />
      <div className="reveal relative mx-auto max-w-[1145px] px-5 py-16 sm:py-20">
        {children}
      </div>
    </section>
  );
}

/** Subtle tiled texture the live site uses on light sections — barely-there diagonal lines. */
export function TextureSection({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`bg-base-bg text-base-text ${className}`}
      style={{ backgroundImage: "url(/img/funky-lines.png)", backgroundRepeat: "repeat" }}
    >
      <div className="reveal mx-auto max-w-[1145px] px-5 py-16 sm:py-20">{children}</div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  tone = "light",
  id,
  style,
  noReveal = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  id?: string;
  style?: CSSProperties;
  noReveal?: boolean;
}) {
  return (
    <section id={id} className={`${TONE[tone]} ${className}`} style={style}>
      <div
        className={`mx-auto max-w-[1145px] px-5 py-16 sm:py-20 ${noReveal ? "" : "reveal"}`}
      >
        {children}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- typography */

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <Section tone="dark" className="text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
          {eyebrow}
        </p>
      )}
      <h1 className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">{subtitle}</p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </Section>
  );
}

export function SectionHeading({
  children,
  sub,
  align = "center",
  as: Tag = "h2",
  eyebrow,
  rule = false,
  light = false,
}: {
  children: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
  /** Use "h1" when this is a page's opening heading — every page needs exactly one. */
  as?: "h1" | "h2";
  /** Small uppercase label above the heading. */
  eyebrow?: string;
  /** Short accent rule beneath the heading. */
  rule?: boolean;
  /** Use the lighter accent — for headings sitting on dark/photo backgrounds. */
  light?: boolean;
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  const ruleCls = rule
    ? `rule-accent ${align === "center" ? "rule-center" : ""} ${light ? "rule-light" : ""}`
    : "";
  return (
    <div className={`${a} max-w-3xl`}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${light ? "text-accent-light" : "text-accent"}`}>
          {eyebrow}
        </p>
      )}
      <Tag className={`font-heading text-3xl font-bold sm:text-4xl ${ruleCls}`}>
        {children}
      </Tag>
      {sub && <p className="mt-4 text-lg opacity-80">{sub}</p>}
    </div>
  );
}

/* -------------------------------------------------------------------- button */

export function Button({
  href,
  children,
  variant = "primary",
  external,
  style,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  external?: boolean;
  style?: CSSProperties;
}) {
  const styles = {
    primary: "bg-accent text-white hover:bg-accent-dark",
    outline: "border-2 border-current hover:bg-black/5",
    light: "bg-white text-tertiary hover:bg-white/90",
  }[variant];

  const cls = `inline-block rounded-[10px] px-7 py-4 text-sm font-semibold uppercase tracking-wide transition-all duration-250 hover:-translate-y-0.5 hover:shadow-lg ${styles}`;

  // Church Center modal links and other external URLs need a plain anchor.
  const isExternal = external ?? /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a href={href} className={cls} style={style} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} style={style}>
      {children}
    </Link>
  );
}

export function ButtonRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-4">{children}</div>;
}

/** Text link with the sliding-underline + arrow-nudge treatment used across the reference sites. */
export function ArrowLink({
  href,
  children,
  external,
  className = "",
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const cls = `group inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide transition-colors ${className}`;
  const inner = (
    <>
      {children}
      <span className="inline-block transition-transform duration-250 group-hover:translate-x-1">
        →
      </span>
    </>
  );
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/* ---------------------------------------------------------------- testimonial */

export function Quote({
  quote,
  attribution,
  heading,
  image,
}: {
  quote: string;
  attribution: string;
  heading?: string;
  image?: string;
}) {
  return (
    <figure className="reveal mx-auto max-w-2xl text-center">
      {image && (
        <Image
          src={image}
          alt=""
          width={96}
          height={96}
          className="mx-auto mb-5 h-24 w-24 rounded-full object-cover"
        />
      )}
      {heading && (
        <p className="mb-4 font-heading text-xl font-semibold">{heading}</p>
      )}
      <blockquote className="text-lg italic leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm opacity-70">{attribution}</figcaption>
    </figure>
  );
}

/* ---------------------------------------------------------------------- cards */

export function CardGrid({
  children,
  cols = 3,
}: {
  children: ReactNode;
  cols?: 2 | 3 | 4;
}) {
  const c = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[cols];
  // `reveal reveal-stagger` makes the cards cascade in rather than snapping
  // as one block once the grid scrolls into view.
  return <div className={`reveal reveal-stagger grid gap-8 ${c}`}>{children}</div>;
}

export function Card({
  title,
  body,
  href,
  cta = "Learn More",
  image,
  eyebrow,
  children,
}: {
  title?: string;
  body?: ReactNode;
  href?: string;
  cta?: string;
  image?: string;
  eyebrow?: string;
  children?: ReactNode;
}) {
  const isExternal = href ? /^https?:\/\//.test(href) : false;
  return (
    <div className="group flex flex-col overflow-hidden rounded-[20px] bg-white shadow-soft transition-shadow duration-300 hover:shadow-elevated">
      {image && (
        <div className="overflow-hidden">
          <Image
            src={image}
            alt=""
            width={600}
            height={400}
            className="h-48 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-7">
        {eyebrow && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            {eyebrow}
          </p>
        )}
        {title && (
          <h3 className="font-heading text-xl font-semibold">{title}</h3>
        )}
        {body && <div className="mt-3 flex-1 text-sm leading-relaxed opacity-80">{body}</div>}
        {children}
        {href &&
          (isExternal ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:text-accent-dark"
            >
              {cta}
              <span className="inline-block transition-transform duration-250 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          ) : (
            <Link
              href={href}
              className="group/link mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-accent transition-colors hover:text-accent-dark"
            >
              {cta}
              <span className="inline-block transition-transform duration-250 group-hover/link:translate-x-1">
                →
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- video */

/** Self-hosted mp4 player, matches the live site's plain `<video controls>` treatment. */
export function VideoPlayer({ src, className = "" }: { src: string; className?: string }) {
  return (
    <video
      src={src}
      controls
      preload="metadata"
      className={`mx-auto w-full max-w-[1000px] rounded-[10px] shadow-soft ${className}`}
    />
  );
}

/** @deprecated use LazyYouTube — kept for reference, no longer used (see performance note in LazyYouTube). */
export function YouTubeEmbed({ id, title }: { id: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[10px] bg-black shadow-soft">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export function VideoCard({
  id,
  title,
  body,
  handout,
}: {
  id: string;
  title: string;
  body?: string;
  handout?: string;
}) {
  return (
    <div className="flex flex-col">
      <LazyYouTube id={id} title={title} />
      <h3 className="mt-4 font-heading text-lg font-semibold">{title}</h3>
      {handout && (
        <a
          href={handout}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-sm font-semibold text-accent hover:text-accent-dark"
        >
          CLICK HERE to download the handout for this session.
        </a>
      )}
      {body && <p className="mt-2 text-sm leading-relaxed opacity-80">{body}</p>}
    </div>
  );
}
