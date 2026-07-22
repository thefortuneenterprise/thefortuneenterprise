"use client";

import Image from "next/image";
import { useState } from "react";

const IMAGES = [
  "/gallery/g1.jpg",
  "/gallery/g2.jpg",
  "/gallery/g3.jpg",
  "/gallery/g4.jpg",
  "/gallery/g5.jpg",
  "/gallery/g6.jpg",
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Gallery</p>
        <h2 className="font-heading text-3xl font-semibold text-primary sm:text-4xl">A glimpse of our operations and presence.</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {IMAGES.map((src, idx) => (
          <button
            key={src}
            type="button"
            className={`group relative overflow-hidden rounded-[1.5rem] ${idx % 2 === 0 ? "md:mt-8" : ""}`}
            onClick={() => setOpen(idx)}
          >
            <Image
              src={src}
              alt={`Farm image ${idx + 1}`}
              width={900}
              height={560}
              className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
              unoptimized
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6" onClick={() => setOpen(null)}>
          <button type="button" className="absolute inset-0" />
          <div className="relative mx-auto max-w-[90vw] max-h-[90vh] overflow-hidden rounded-3xl border border-white/20 bg-slate-900">
            <Image
              src={IMAGES[open]}
              alt={`Farm preview ${open + 1}`}
              width={1600}
              height={900}
              className="h-auto w-full object-contain"
              unoptimized
            />
          </div>
        </div>
      )}
    </section>
  );
}
