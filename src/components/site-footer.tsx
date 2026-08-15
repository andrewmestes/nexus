import Link from "next/link";
import Image from "next/image";
import { CONTACT, SOCIAL } from "@/lib/links";
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  LinkedInIcon,
} from "@/components/social-icons";

/** "Plant" column — matches the live site's footer grouping. */
const PLANT_LINKS = [
  { label: "Church Planter Pathway", href: "/church-planter-pathway" },
  { label: "Assessment", href: "/assessment" },
  { label: "Training", href: "/training" },
  { label: "Coaching", href: "/coaching" },
];

/** Second column, in the live site's exact order. */
const SITE_LINKS = [
  { label: "Partner With Us", href: "/partner-with-us" },
  { label: "Nexus Leadership Institute", href: "/leadership-institute" },
  { label: "Church-Planting Wives", href: "/untangled" },
  { label: "Podcast", href: "/podcast" },
  { label: "The Bonhoeffer Project", href: "/bonhoeffer" },
  { label: "The Clarity Project", href: "/the-clarity-project" },
  { label: "About", href: "/about" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Donate", href: "/donate" },
];

const SOCIALS = [
  { href: SOCIAL.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: SOCIAL.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SOCIAL.youtube, label: "YouTube", Icon: YouTubeIcon },
  { href: SOCIAL.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
];

export function SiteFooter() {
  return (
    <footer className="bg-tertiary text-white">
      <div className="mx-auto max-w-[1145px] px-5 pt-14">
        <Link href="/" className="inline-block">
          <Image
            src="/img/Nexus-Logo-White__largepreview__.webp"
            alt="Nexus Church Planting & Leader Care"
            width={140}
            height={40}
            className="h-9 w-auto transition-opacity hover:opacity-80"
          />
        </Link>
      </div>

      <div className="mx-auto grid max-w-[1145px] gap-10 px-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
            Email
          </h2>
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-sm transition-colors hover:text-accent-light"
          >
            {CONTACT.email}
          </a>

          <h2 className="mt-7 mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
            Mailing Address
          </h2>
          <p className="text-sm leading-relaxed text-white/80">
            {CONTACT.addressLine1}
            <br />
            {CONTACT.addressLine2}
          </p>

          <div className="mt-7 flex gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-250 hover:-translate-y-0.5 hover:bg-accent"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
            Plant
          </h2>
          <ul className="flex flex-col gap-2.5 text-sm">
            {PLANT_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 transition-colors hover:text-accent-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2.5 text-sm">
            {SITE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/80 transition-colors hover:text-accent-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {CONTACT.orgName}
      </div>
    </footer>
  );
}
