"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV, PCO } from "@/lib/nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-tertiary text-white">
      <div className="mx-auto flex max-w-[1145px] items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/img/Nexus-Logo-White__largepreview__.webp"
            alt="Nexus"
            width={140}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/church-planter-pathway"
            className="hidden text-sm font-semibold uppercase tracking-wide sm:inline hover:text-accent-light"
          >
            Plant a Church
          </Link>
          <Link
            href="/donate"
            className="hidden text-sm font-semibold uppercase tracking-wide sm:inline hover:text-accent-light"
          >
            Donate
          </Link>
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
          >
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto bg-white text-tertiary shadow-elevated">
          <nav className="mx-auto max-w-[1145px] px-5 py-6">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.label} className="border-b border-secondary-dark/30">
                  <div className="flex items-center justify-between py-3">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-sm font-semibold uppercase tracking-wide"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        aria-label={`${expanded === item.label ? "Collapse" : "Expand"} ${item.label} submenu`}
                        onClick={() =>
                          setExpanded((v) => (v === item.label ? null : item.label))
                        }
                        className="px-2 py-1 text-xs"
                      >
                        {expanded === item.label ? "▴" : "▾"}
                      </button>
                    )}
                  </div>
                  {item.children && expanded === item.label && (
                    <ul className="mb-3 flex flex-col gap-2 pl-4">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="text-sm text-primary"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={PCO.registrations}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[10px] bg-accent px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white"
                >
                  Upcoming Events
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
