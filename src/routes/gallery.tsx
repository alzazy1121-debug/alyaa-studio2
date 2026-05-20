import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, FloatingBlobs } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import peonies from "@/assets/artwork-peonies.jpg";
import bloom from "@/assets/artwork-bloom.jpg";
import muse from "@/assets/artwork-muse.jpg";
import silk from "@/assets/artwork-silk.jpg";
import pigment from "@/assets/artwork-pigment.jpg";
import coral from "@/assets/artwork-coral.jpg";
import garden from "@/assets/artwork-garden.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Alyaa Elsayed." },
      { name: "description", content: "Browse selected oils, sketches and mixed-media works by contemporary painter Elena Vane." },
      { property: "og:title", content: "Gallery — Alyaa Elsayed." },
      { property: "og:description", content: "Selected oils, sketches and mixed-media works." },
    ],
  }),
  component: Gallery,
});

type Category = "ALL" | "OILS" | "SKETCHES" | "MIXED";

const works = [
  { src: peonies, title: "L'Éveil", year: 2026, cat: "OILS", aspect: "aspect-[4/5]", w: 1280, h: 832 },
  { src: bloom, title: "The Bloom No. 4", year: 2025, cat: "MIXED", aspect: "aspect-[3/4]", w: 800, h: 1024 },
  { src: muse, title: "The Muse", year: 2025, cat: "OILS", aspect: "aspect-[2/3]", w: 640, h: 960 },
  { src: coral, title: "Rouge Vif", year: 2024, cat: "SKETCHES", aspect: "aspect-[3/4]", w: 960, h: 1280 },
  { src: silk, title: "Motion Study II", year: 2024, cat: "MIXED", aspect: "aspect-[2/1]", w: 1280, h: 640 },
  { src: garden, title: "Jardin Rose", year: 2025, cat: "OILS", aspect: "aspect-square", w: 1024, h: 1024 },
  { src: pigment, title: "Pigment I", year: 2024, cat: "SKETCHES", aspect: "aspect-square", w: 640, h: 640 },
] as const;

function Gallery() {
  const [cat, setCat] = useState<Category>("ALL");
  const [open, setOpen] = useState<number | null>(null);
  const filtered = works.filter((w) => cat === "ALL" || w.cat === cat);

  return (
    <div className="min-h-screen bg-canvas text-ink relative">
      <FloatingBlobs />
      <SiteHeader />

      <section className="relative z-10 px-6 md:px-10 pt-12 pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[11px] text-gold uppercase tracking-[0.3em]">The Archive</span>
        <h1 className="font-display italic text-6xl md:text-8xl mt-4 leading-none">Gallery</h1>
        <p className="max-w-xl mt-6 text-ink/70 leading-relaxed">
          A living archive of works from 2024 onwards. Click any piece to enter the lightbox.
        </p>

        <div className="flex flex-wrap gap-3 mt-10 font-mono text-[10px]">
          {(["ALL", "OILS", "SKETCHES", "MIXED"] as Category[]).map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2.5 rounded-full uppercase tracking-widest transition-colors ${
                cat === c ? "bg-pink-hot text-white" : "bg-white text-ink/50 hover:bg-pink-hot/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 md:px-10 pb-32 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 [column-fill:_balance]">
          {filtered.map((w, i) => (
            <button
              key={w.title}
              onClick={() => setOpen(works.indexOf(w))}
              className="group block w-full mb-6 md:mb-8 break-inside-avoid text-left"
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img src={w.src} alt={w.title} width={w.w} height={w.h} loading="lazy" className={`w-full ${w.aspect} object-cover group-hover:scale-105 transition-transform duration-1000`} />
                <div className="absolute inset-0 bg-pink-hot/50 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity flex items-end p-6">
                  <span className="text-white font-display italic text-2xl">View →</span>
                </div>
              </div>
              <div className="mt-3 flex items-baseline justify-between">
                <h3 className="font-display italic text-xl">{w.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">{w.cat} · {w.year}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {open !== null && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] bg-ink/80 backdrop-blur-xl flex items-center justify-center p-6 animate-entrance"
        >
          <button onClick={() => setOpen(null)} className="absolute top-6 right-6 size-12 rounded-full bg-white text-ink font-mono text-xs">CLOSE</button>
          <div className="max-w-5xl max-h-full">
            <img src={works[open].src} alt={works[open].title} className="max-h-[80vh] w-auto rounded-2xl shadow-2xl shadow-pink-hot/30" />
            <p className="font-display italic text-white text-3xl mt-6 text-center">
              {works[open].title} <span className="text-pink-soft text-lg">— {works[open].year}</span>
            </p>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
