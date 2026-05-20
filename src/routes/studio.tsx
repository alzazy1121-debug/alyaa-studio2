
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, FloatingBlobs } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import portrait from "@/assets/artist-portrait.jpg";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "The Studio — Alyaa Elsayed" },
      { name: "description", content: "Inside the Parisian atelier of painter Alyaa Elsayed — her story, process, and exhibition history." },
      { property: "og:title", content: "The Studio — Alyaa Elsayed" },
      { property: "og:description", content: "The story, process, and exhibition history of painter Alyaa Elsayed." },
      { property: "og:image", content: portrait },
    ],
  }),
  component: Studio,
});

const timeline = [
  { year: "2018", title: "The Silk Ribbon Study", body: "An exploration of movement through fabric. Capturing the way light dances on fuchsia silk during the morning hour." },
  { year: "2021", title: "L'Atelier Bloom Opens", body: "Opening the private studio in the Marais. The transition from figurative representation to the gradient dreamscape aesthetic." },
  { year: "2024", title: "Gilded Air Series", body: "First gallery show at Galerie Perrotin, Paris. Awarded the Prix de la Jeune Création." },
  { year: "2026", title: "Musée d'Art Moderne", body: "Solo exhibition opening this October. The largest body of work to date — 32 pieces, all in pink." },
];

const exhibitions = [
  { city: "Paris", venue: "Musée d'Art Moderne — Solo", date: "Oct 2026" },
  { city: "London", venue: "The Petal's Edge — Saatchi", date: "Jan 2027" },
  { city: "New York", venue: "Magenta Dreams — Lehmann Maupin", date: "Mar 2027" },
  { city: "Tokyo", venue: "Pink Prayer — Mori Art Museum", date: "Sep 2027" },
];

function Studio() {
  return (
    // استخدام overflow-x-hidden هنا هو السر لمنع قص الشاشة في الموبايل
    <div className="min-h-screen bg-canvas text-ink relative overflow-x-hidden">
      <FloatingBlobs />
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-10 pt-8 md:pt-16 pb-20 md:pb-24 max-w-7xl mx-auto flex flex-col-reverse md:grid md:grid-cols-12 gap-12 md:gap-10 items-center md:items-end">
        
        {/* Text Area */}
        <div className="w-full md:col-span-7 text-center md:text-left">
          <span className="font-mono text-[10px] md:text-[11px] text-gold uppercase tracking-[0.3em] font-semibold">The Artist</span>
          <h1 className="font-display italic text-5xl sm:text-6xl md:text-8xl mt-4 leading-[1.1] md:leading-[0.9]">
            Alyaa  <span className="text-pink-hot">Elsayed</span>
          </h1>
          <p className="mt-6 md:mt-8 max-w-xl mx-auto md:mx-0 text-base md:text-lg leading-relaxed text-ink/80">
            Born in Lyon, trained at the Beaux-Arts, and now painting from a sun-drenched atelier in Le Marais. Alyaa's work is a confessional in pink — equal parts botanical chaos, tactile femininity, and slow alchemy.
          </p>
        </div>

        {/* Image Area */}
        <div className="w-full max-w-sm md:max-w-none mx-auto md:col-span-5">
          <div className="relative group">
            {/* تم تقليل الـ inset في الموبايل لمنع خروجه عن الشاشة */}
            <div className="absolute -inset-3 md:-inset-4 bg-coral/30 rounded-[2rem] -z-10 -rotate-3 md:-rotate-2 transition-transform duration-500 group-hover:rotate-0" />
            <img 
              src={portrait} 
              alt="Alyaa Elsayed in her atelier" 
              width={832} 
              height={1024} 
              className="w-full aspect-4/5 object-cover rounded-3xl shadow-xl shadow-pink-hot/10 transition-transform duration-500 group-hover:-translate-y-1" 
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 px-6 md:px-10 py-20 md:py-32 bg-pink-soft/20 backdrop-blur-sm border-y border-pink-hot/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-left mb-16 md:mb-24">
            <span className="font-mono text-[10px] md:text-[11px] text-gold uppercase tracking-[0.3em] font-semibold">The Narrative</span>
            <h2 className="font-display italic text-4xl md:text-6xl mt-3">A Slow Bloom</h2>
          </div>

          <div className="space-y-12 md:space-y-20 relative">
            {/* الخط الزمني المتدرج والمحسّن */}
            <div className="absolute left-[15px] md:left-[136px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-pink-hot/40 via-pink-hot/10 to-transparent" />
            
            {timeline.map((t) => (
              <div key={t.year} className="flex flex-col md:flex-row gap-3 md:gap-16 items-start relative pl-12 md:pl-0 group">
                
                {/* Year & Dot */}
                <div className="md:w-36 flex-shrink-0 relative flex items-center md:justify-end">
                  {/* النقطة (Dot) الخاصة بالزمن (تظهر في الموبايل والديسكتوب) */}
                  <div className="absolute left-[-40px] md:left-auto md:-right-[9px] top-[10px] md:top-1/2 md:-translate-y-1/2 size-3.5 rounded-full bg-pink-hot ring-4 ring-canvas shadow-sm transition-transform duration-300 group-hover:scale-125" />
                  <span className="font-display italic text-2xl md:text-4xl text-gold/90 transition-colors group-hover:text-gold">{t.year}</span>
                </div>

                {/* Content */}
                <div className="flex-1 md:pt-1">
                  <h3 className="font-display italic text-xl md:text-2xl mb-2 md:mb-3 text-ink transition-colors duration-300 group-hover:text-pink-hot">{t.title}</h3>
                  <p className="text-ink/75 leading-relaxed max-w-xl text-sm md:text-base">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions Section */}
      <section className="relative z-10 px-6 md:px-10 py-20 md:py-32 max-w-5xl mx-auto">
        <div className="text-center md:text-left mb-12 md:mb-16">
          <span className="font-mono text-[10px] md:text-[11px] text-gold uppercase tracking-[0.3em] font-semibold">Currently & Upcoming</span>
          <h2 className="font-display italic text-4xl md:text-6xl mt-3">Exhibitions</h2>
        </div>

        <div className="divide-y divide-pink-hot/10">
          {exhibitions.map((e) => (
            <div key={e.venue} className="py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 group cursor-pointer transition-colors hover:bg-pink-hot/5 -mx-6 px-6 rounded-2xl">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-pink-hot">{e.city}</span>
                <h3 className="font-display italic text-2xl md:text-3xl mt-1 md:mt-2 transition-transform duration-300 md:group-hover:translate-x-4">{e.venue}</h3>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink/50 mt-1 md:mt-0">{e.date}</span>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}