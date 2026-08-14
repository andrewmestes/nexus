"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Click-to-load YouTube facade. Renders only a static thumbnail + play button
 * until clicked, then swaps in the real iframe. With 40+ podcast episodes on
 * one page, eagerly mounting that many iframes would each pull YouTube's
 * player JS/CSS on load — this keeps the initial page to plain images.
 */
export function LazyYouTube({
  id,
  title,
  className = "",
  duration,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: {
  id: string;
  title: string;
  className?: string;
  duration?: string;
  sizes?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className={`overflow-hidden rounded-[10px] bg-black shadow-soft ${className}`}>
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Play: ${title}`}
      className={`group relative block aspect-video w-full overflow-hidden rounded-[10px] bg-black shadow-soft ${className}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        fill
        unoptimized
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        sizes={sizes}
      />
      <span className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-transform duration-300 ease-out group-hover:scale-110">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      {duration && (
        <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-semibold text-white">
          {duration}
        </span>
      )}
    </button>
  );
}
