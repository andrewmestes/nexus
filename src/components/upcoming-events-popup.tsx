"use client";

import { useEffect, useState } from "react";
import { PCO } from "@/lib/links";

const DISMISS_KEY = "nexus-events-popup-dismissed";

/**
 * Sitewide "Upcoming Events" popup, matching the live Church Co site.
 * Improvement over the original: the dismissal sticks for the session
 * instead of reappearing on every page load.
 */
export function UpcomingEventsPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-5 z-50 w-[280px] rounded-[10px] bg-white p-4 text-base-text shadow-elevated ring-1 ring-black/5">
      <button
        type="button"
        aria-label="Close notification"
        onClick={() => {
          sessionStorage.setItem(DISMISS_KEY, "1");
          setVisible(false);
        }}
        className="absolute right-2 top-2 px-1.5 py-0.5 text-lg leading-none opacity-50 hover:opacity-100"
      >
        ×
      </button>
      <p className="pr-4 font-heading text-sm font-semibold">Upcoming Events</p>
      <p className="mt-1 text-xs leading-relaxed opacity-80">
        Don&apos;t miss out on upcoming events! Click here to learn more and
        register.
      </p>
      <a
        href={PCO.registrations}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-xs font-semibold uppercase tracking-wide text-accent"
      >
        Read more →
      </a>
    </div>
  );
}
