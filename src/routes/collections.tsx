import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, FloatingBlobs } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import peonies from "@/assets/artwork-peonies.jpg";
import bloom from "@/assets/artwork-bloom.jpg";
import garden from "@/assets/artwork-garden.jpg";
import coral from "@/assets/artwork-coral.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections —  Alyaa Elsayed" },
      { name: "description", content: "Petal Drift, Gilded Air, Lilac Hour — limited-edition collections by Elena Vane." },
      { property: "og:title", content: "Collections —  Alyaa Elsayed" },
      { property: "og:description", content: "Limited-edition painting collections." },
    ],
  }),
  component: Collections,
});

const collections = [
  { tag: "Limited Series", title: "Petal Drift", year: "2025", img: garden, desc: "Small-scale intimate studies of individual botanical structures, painted in soft watercolor and rose madder.", pieces: 12 },
  { tag: "Signature", title: "Gilded Air", year: "2026", img: bloom, desc: "Large-format canvases incorporating hand-applied 24k gold leaf, suspended in vibrant fuchsia oils.", pieces: 8 },
  { tag: "Atelier", title: "L'Éveil", year: "2026", img: peonies, desc: "The flagship series — abstract peonies in coral, fuchsia, and a hint of azure unrest.", pieces: 6 },
  { tag: "Upcoming", title: "Rouge Vif", year: "2026", img: coral, desc: "Bold sweeping brushstrokes — a meditation on confidence, painted entirely in one breath.", pieces: 10 },
];

function Collections() {
  return (
    <div className="min-h-screen bg-canvas text-ink relative">
      <FloatingBlobs />
      <SiteHeader />

      <section className="relative z-10 px-6 md:px-10 pt-12 pb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[11px] text-gold uppercase tracking-[0.3em]">Curated Series</span>
        <h1 className="font-display italic text-6xl md:text-8xl mt-4 leading-none">Collections</h1>
      </section>

      <section className="relative z-10 px-6 md:px-10 pb-32 max-w-7xl mx-auto space-y-24">
        {collections.map((c, i) => (
          <article key={c.title} className={`grid grid-cols-12 gap-6 md:gap-12 items-center ${i % 2 ? "" : ""}`}>
            <div className={`col-span-12 md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
              <div className="relative group">
                <div className="absolute -inset-3 bg-pink-hot rounded-3xl -z-10 opacity-10 group-hover:opacity-20 group-hover:rotate-2 transition-all duration-700" />
                <div className="overflow-hidden rounded-3xl">
                  <img src={c.img} alt={c.title} loading="lazy" className="w-full aspect-[16/11] object-cover group-hover:scale-105 transition-transform duration-1000" />
                </div>
              </div>
            </div>
            <div className={`col-span-12 md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-mono text-[10px] text-pink-hot uppercase tracking-widest bg-pink-soft px-3 py-1.5 rounded-full">
                  {c.tag}
                </span>
                <span className="font-mono text-[10px] text-ink/40">{c.year}</span>
              </div>
              <h2 className="font-display italic text-5xl md:text-6xl mb-5">{c.title}</h2>
              <p className="text-ink/70 leading-relaxed mb-8">{c.desc}</p>
              <div className="flex items-center gap-6 text-sm font-mono">
                <span className="text-ink/50 uppercase tracking-widest text-[11px]">{c.pieces} Pieces</span>
                <button className="text-pink-hot uppercase tracking-widest text-[11px] underline underline-offset-8 decoration-2">
                  Discover →
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
