"use client";

import { useEffect } from "react";

/**
 * Sitewide scroll-reveal: observes every .reveal element and adds .in when
 * it enters the viewport. Same lightweight IntersectionObserver pattern
 * already proven on visionclarity.org — no animation library, ~15 lines.
 * Re-scans on route change (App Router doesn't remount this component) and
 * whenever new .reveal nodes are added (client-rendered content).
 */
export function RevealInit() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    const observeAll = () => {
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    };
    observeAll();

    // Catch elements that mount after the initial pass (route changes, lazy content).
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
