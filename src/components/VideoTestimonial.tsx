"use client";

import Image from "next/image";
import { useState } from "react";

// Shows the YouTube thumbnail first and only loads YouTube's player when
// someone taps play, so the video adds nothing to page load time.
export function VideoTestimonial({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-ink shadow-[0_6px_0_var(--color-sky)]">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={`https://i.ytimg.com/vi/${id}/oar2.jpg`}
            alt=""
            fill
            sizes="(min-width: 768px) 320px, 80vw"
            className="object-cover"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" aria-hidden />
          <span className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-alarm-strong text-white shadow-lg transition-transform group-hover:scale-105" aria-hidden>
            <svg viewBox="0 0 24 24" className="ml-1 h-9 w-9" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
          </span>
          <span className="absolute inset-x-0 bottom-0 p-5 text-left font-bold text-white">Watch a homeowner’s story</span>
        </button>
      )}
    </div>
  );
}
