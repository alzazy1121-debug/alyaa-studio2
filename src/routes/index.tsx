import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, FloatingBlobs } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import bloom from "@/assets/artwork-bloom.jpg";
import peonies from "@/assets/artwork-peonies.jpg";
import muse from "@/assets/artwork-muse.jpg";
import silk from "@/assets/artwork-silk.jpg";
import pigment from "@/assets/artwork-pigment.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alyaa Elsayed — Pink is a Wild Prayer" },
      { name: "description", content: "Contemporary oil paintings by Elena Vane. A Parisian atelier of pink prayers, botanical chaos, and gold leaf." },
      { property: "og:title", content: "Alyaa Elsayed — Pink is a Wild Prayer" },
      { property: "og:description", content: "Contemporary oil paintings exploring femininity and botanical chaos." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink relative">
      <FloatingBlobs />
      <SiteHeader />

      {/* HERO */}
      <header className="relative z-10 px-6 md:px-10 pt-8 md:pt-12 pb-24 md:pb-32 max-w-7xl mx-auto grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7 animate-entrance">
          <h1 className="font-display italic text-6xl sm:text-7xl md:text-8xl lg:text-[11rem] leading-[0.85] text-balance mb-10">
            Pink is a <span className="text-pink-hot">Wild</span> Prayer.
          </h1>
          <p className="max-w-md font-body text-lg leading-relaxed text-ink/80">
            Contemporary oil works exploring the intersection of tactile femininity and raw botanical chaos. Based in a sun-drenched atelier in Paris.
          </p>
          <div className="mt-10 flex gap-4 flex-wrap">
            <Link to="/gallery" className="px-7 py-3.5 bg-pink-hot text-white rounded-full font-mono text-[11px] uppercase tracking-widest hover:scale-[1.03] active:scale-95 transition-transform shadow-lg shadow-pink-hot/20">
              Enter the Gallery
            </Link>
            <Link to="/studio" className="px-7 py-3.5 bg-white text-ink rounded-full font-mono text-[11px] uppercase tracking-widest border border-pink-hot/20 hover:border-pink-hot transition-colors">
              Meet the Artist
            </Link>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0 animate-entrance" style={{ animationDelay: "200ms" }}>
          <div className="relative group">
            <div className="absolute -inset-4 bg-pink-hot rotate-3 -z-10 opacity-10 group-hover:rotate-6 group-hover:opacity-20 transition-all duration-700 rounded-3xl" />
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-pink-hot/10 shadow-2xl shadow-pink-hot/10">
              <img src={bloom} alt="The Bloom No. 4 — hot pink oil paint with gold leaf" width={800} height={1024} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-5 shadow-xl shadow-pink-hot/10 rounded-xl border border-pink-hot/5 max-w-[220px]">
              <span className="font-mono text-[10px] uppercase text-gold block mb-2">Current Exhibition</span>
              <p className="text-sm font-medium leading-tight">Musée d'Art Moderne, Paris — Oct '26</p>
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE STRIP */}
      <div className="relative z-10 overflow-hidden border-y border-pink-hot/10 bg-pink-soft/40 py-5">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-display italic text-3xl md:text-5xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span>Peonies</span><span className="text-pink-hot">✿</span>
              <span>Pigment</span><span className="text-gold">✦</span>
              <span>Petals</span><span className="text-pink-hot">✿</span>
              <span>Prayer</span><span className="text-gold">✦</span>
              <span>Paris</span><span className="text-pink-hot">✿</span>
              <span>Painting</span><span className="text-gold">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* COLLAGE GALLERY */}
      <section className="relative z-10 px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
            <div>
              <span className="font-mono text-[11px] text-gold uppercase tracking-[0.3em]">01 — The Works</span>
              <h2 className="font-display italic text-5xl md:text-6xl mt-3">Selected Works</h2>
            </div>
            <Link to="/gallery" className="font-mono text-[11px] uppercase tracking-widest text-pink-hot underline underline-offset-8 decoration-2">
              View Full Gallery →
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-12 md:col-span-8">
              <div className="relative group overflow-hidden rounded-3xl">
                <img src={peonies} alt="L'Éveil — abstract peonies in fuchsia and coral" width={1280} height={832} loading="lazy" className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-pink-hot/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white font-display italic text-4xl">L'Éveil →</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 flex flex-col gap-6 md:gap-8">
              <div className="bg-coral/20 p-8 rounded-3xl flex flex-col justify-between aspect-square">
                <div className="font-mono text-[11px] text-pink-hot">01 // TECHNIQUE</div>
                <h3 className="font-display italic text-2xl md:text-3xl">Layered Glazing & Gold Infusions</h3>
                <p className="text-sm leading-relaxed text-ink/70">Every piece begins with a wash of rose madder, built slowly over months.</p>
              </div>
              <div className="rounded-3xl overflow-hidden">
                <img src={pigment} alt="Pigment study — hot pink powder" width={640} height={640} loading="lazy" className="w-full aspect-square object-cover hover:scale-110 transition-transform duration-1000" />
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 md:mt-12">
              <div className="rounded-3xl overflow-hidden">
                <img src={muse} alt="The Muse Series — portrait amidst pink petals" width={640} height={960} loading="lazy" className="w-full aspect-[2/3] object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <p className="font-mono text-[11px] mt-4 text-gold uppercase tracking-widest">The Muse Series</p>
            </div>

            <div className="col-span-12 md:col-span-8 md:mt-32">
              <div className="relative">
                <div className="absolute -top-12 -right-12 size-48 bg-pink-hot/10 rounded-full blur-2xl" />
                <div className="rounded-3xl overflow-hidden">
                  <img src={silk} alt="Motion Study II — pink silk in motion" width={1280} height={640} loading="lazy" className="w-full aspect-[2/1] object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
                <p className="font-mono text-[11px] mt-4 text-gold uppercase tracking-widest">Motion Study II</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO CALLOUT */}
      <section className="relative z-10 px-6 md:px-10 py-24 md:py-32 bg-pink-soft/40">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono text-[11px] text-gold uppercase tracking-[0.3em]">02 — The Manifesto</span>
          <p className="font-display italic text-3xl md:text-5xl leading-snug mt-6 text-balance">
            "I paint the colour of a prayer whispered in a peony's ear — loud, tender, and unrepentant."
          </p>
          <p className="font-mono text-[11px] mt-8 uppercase tracking-widest text-ink/50">— Elena Vane, 2026</p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
