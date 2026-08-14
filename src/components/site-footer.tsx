import Link from "next/link";
import Image from "next/image";
import { NAV } from "@/lib/nav";
import { CONTACT, SOCIAL } from "@/lib/links";

export function SiteFooter() {
  return (
    <footer className="bg-tertiary text-white">
      <div className="mx-auto max-w-[1145px] px-5 pt-12">
        <Image
          src="/img/Nexus-Logo-White__largepreview__.webp"
          alt="Nexus"
          width={140}
          height={40}
          className="h-9 w-auto"
        />
      </div>

      <div className="mx-auto grid max-w-[1145px] gap-8 px-5 py-10 sm:grid-cols-3">
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">
            Email
          </h3>
          <a href={`mailto:${CONTACT.email}`} className="text-sm">
            {CONTACT.email}
          </a>

          <h3 className="mt-6 mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">
            Mailing Address
          </h3>
          <p className="text-sm">
            {CONTACT.addressLine1}
            <br />
            {CONTACT.addressLine2}
          </p>

          <div className="mt-6 flex gap-4">
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white">
              Facebook
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white">
              Instagram
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/60">
            Plant
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link href="/church-planter-pathway">Church Planter Pathway</Link>
            </li>
            <li>
              <Link href="/assessment">Assessment</Link>
            </li>
            <li>
              <Link href="/training">Training</Link>
            </li>
            <li>
              <Link href="/coaching">Coaching</Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2 text-sm">
            {NAV.filter((i) => i.label !== "Plant").map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
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
