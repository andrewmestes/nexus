"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV, PCO } from "@/lib/nav";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-tertiary text-white transition-[background-color,box-shadow] duration-300 ${
        scrolled ? "header-scrolled shadow-soft" : ""
      }`}
    >
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
            className="link-underline hidden text-sm font-semibold uppercase tracking-wide sm:inline hover:text-accent-light"
          >
            Plant a Church
          </Link>
          <Link
            href="/donate"
            className="link-underline hidden text-sm font-semibold uppercase tracking-wide sm:inline hover:text-accent-light"
          >
            Donate
          </Link>
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2.5 flex h-11 w-11 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 top-full overflow-hidden bg-white text-tertiary shadow-elevated transition-[grid-template-rows] duration-300 ease-out grid ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 max-h-[calc(100vh-72px)] overflow-y-auto">
          <nav className="mx-auto max-w-[1145px] px-5 py-6">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => {
                const active =
                  pathname === item.href || item.children?.some((c) => c.href === pathname);
                return (
                  <li key={item.label} className="border-b border-secondary-dark/30">
                    <div className="flex items-center justify-between py-3">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                          active ? "text-accent" : "hover:text-accent"
                        }`}
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
                          <span
                            className={`inline-block transition-transform duration-200 ${
                              expanded === item.label ? "rotate-180" : ""
                            }`}
                          >
                            ▾
                          </span>
                        </button>
                      )}
                    </div>
                    {item.children && (
                      <ul
                        className={`grid overflow-hidden pl-4 transition-[grid-template-rows] duration-200 ${
                          expanded === item.label ? "mb-3 grid-rows-[1fr] gap-2" : "grid-rows-[0fr]"
                        }`}
                      >
                        <li className="min-h-0 overflow-hidden">
                          <ul className="flex flex-col gap-2 pb-1">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <Link
                                  href={child.href}
                                  onClick={() => setOpen(false)}
                                  className="text-sm text-primary transition-colors hover:text-accent"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    )}
                  </li>
                );
              })}
              <li className="pt-4">
                <a
                  href={PCO.registrations}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-[10px] bg-accent px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dark"
                >
                  Upcoming Events
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
