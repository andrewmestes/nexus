import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ layout */

type Tone = "light" | "secondary" | "dark" | "accent";

const TONE: Record<Tone, string> = {
  light: "bg-base-bg text-base-text",
  secondary: "bg-secondary text-base-text",
  dark: "bg-tertiary text-white",
  accent: "bg-accent text-white",
};

export function Section({
  children,
  className = "",
  tone = "light",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  id?: string;
}) {
  return (
    <section id={id} className={`${TONE[tone]} ${className}`}>
      <div className="mx-auto max-w-[1145px] px-5 py-16 sm:py-20">{children}</div>
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
}: {
  children: ReactNode;
  sub?: ReactNode;
  align?: "center" | "left";
}) {
  const a = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${a} max-w-3xl`}>
      <h2 className="font-heading text-3xl font-bold sm:text-4xl">{children}</h2>
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
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light";
  external?: boolean;
}) {
  const styles = {
    primary: "bg-accent text-white hover:bg-accent-dark",
    outline: "border-2 border-current hover:bg-black/5",
    light: "bg-white text-tertiary hover:bg-white/90",
  }[variant];

  const cls = `inline-block rounded-[10px] px-7 py-4 text-sm font-semibold uppercase tracking-wide transition-colors ${styles}`;

  // Church Center modal links and other external URLs need a plain anchor.
  const isExternal = external ?? /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ButtonRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-4">{children}</div>;
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
    <figure className="mx-auto max-w-2xl text-center">
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
  return <div className={`grid gap-8 ${c}`}>{children}</div>;
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
    <div className="flex flex-col overflow-hidden rounded-[20px] bg-white shadow-soft">
      {image && (
        <Image
          src={image}
          alt=""
          width={600}
          height={400}
          className="h-48 w-full object-cover"
        />
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
              className="mt-5 inline-block text-sm font-semibold uppercase tracking-wide text-accent"
            >
              {cta} →
            </a>
          ) : (
            <Link
              href={href}
              className="mt-5 inline-block text-sm font-semibold uppercase tracking-wide text-accent"
            >
              {cta} →
            </Link>
          ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- video */

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
      <YouTubeEmbed id={id} title={title} />
      <h3 className="mt-4 font-heading text-lg font-semibold">{title}</h3>
      {handout && (
        <a
          href={handout}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-sm font-semibold text-accent"
        >
          CLICK HERE to download the handout for this session.
        </a>
      )}
      {body && <p className="mt-2 text-sm leading-relaxed opacity-80">{body}</p>}
    </div>
  );
}
