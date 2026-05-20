// import { createFileRoute } from "@tanstack/react-router";
// import { useState } from "react";
// import { SiteHeader, FloatingBlobs } from "@/components/SiteHeader";
// import { SiteFooter } from "@/components/SiteFooter";

// export const Route = createFileRoute("/contact")({
//   head: () => ({
//     meta: [
//       { title: "Contact — Alyaa Elsayed" },
//       { name: "description", content: "Inquire about acquisitions, commissions, or press for Elena Vane Studio." },
//       { property: "og:title", content: "Contact — Alyaa Elsayed." },
//       { property: "og:description", content: "Inquire about acquisitions, commissions, or press." },
//     ],
//   }),
//   component: Contact,
// });

// function Contact() {
//   const [sent, setSent] = useState(false);

//   return (
//     <div className="min-h-screen bg-canvas text-ink relative">
//       <FloatingBlobs />
//       <SiteHeader />

//       <section className="relative z-10 px-6 md:px-10 pt-16 pb-32 max-w-3xl mx-auto text-center">
//         <span className="font-mono text-[12px] text-gold uppercase tracking-[0.3em] block mb-8">Inquiries</span>
//         <h1 className="font-display italic text-6xl md:text-8xl mb-8 leading-[0.9]">
//           Let's <span className="text-pink-hot">Dream</span> Together.
//         </h1>
//         <p className="text-ink/70 max-w-md mx-auto mb-16 leading-relaxed">
//           For acquisitions, commissions, press, or exhibition proposals — a single conversation begins it all.
//         </p>

//         {sent ? (
//           <div className="bg-white p-12 rounded-3xl shadow-xl shadow-pink-hot/10 border border-pink-hot/10 animate-entrance">
//             <p className="font-display italic text-3xl text-pink-hot">Merci.</p>
//             <p className="text-ink/60 mt-4">Your message is petalling its way to the atelier. I'll be in touch soon.</p>
//           </div>
//         ) : (
//           <form
//             onSubmit={(e) => { e.preventDefault(); setSent(true); }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
//           >
//             <input required type="text" placeholder="Name" className="bg-pink-soft/50 border-none p-5 rounded-2xl outline-none placeholder:text-pink-hot/40 focus:ring-2 focus:ring-pink-hot transition" />
//             <input required type="email" placeholder="Email" className="bg-pink-soft/50 border-none p-5 rounded-2xl outline-none placeholder:text-pink-hot/40 focus:ring-2 focus:ring-pink-hot transition" />
//             <select className="md:col-span-2 bg-pink-soft/50 border-none p-5 rounded-2xl outline-none text-ink/70 focus:ring-2 focus:ring-pink-hot transition font-mono text-sm">
//               <option>Inquiry type — Acquisition</option>
//               <option>Inquiry type — Commission</option>
//               <option>Inquiry type — Press</option>
//               <option>Inquiry type — Exhibition</option>
//             </select>
//             <textarea required placeholder="Project details — tell me about the space, the feeling, the story." className="md:col-span-2 bg-pink-soft/50 border-none p-5 rounded-2xl outline-none placeholder:text-pink-hot/40 h-40 focus:ring-2 focus:ring-pink-hot transition resize-none" />
//             <button type="submit" className="md:col-span-2 bg-ink text-white p-5 rounded-2xl font-mono text-xs uppercase tracking-widest hover:bg-pink-hot transition-colors">
//               Send Spark ✦
//             </button>
//           </form>
//         )}

//         <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 text-left">
//           <div>
//             <p className="font-mono text-[10px] uppercase tracking-widest text-gold mb-2">Studio</p>
//             <p className="text-sm">14 Rue de Sévigné<br />75004 Paris, France</p>
//           </div>
//           <div>
//             <p className="font-mono text-[10px] uppercase tracking-widest text-gold mb-2">Email</p>
//             <p className="text-sm">studio@elenavane.art</p>
//           </div>
//           <div>
//             <p className="font-mono text-[10px] uppercase tracking-widest text-gold mb-2">Press</p>
//             <p className="text-sm">press@elenavane.art</p>
//           </div>
//         </div>
//       </section>

//       <SiteFooter />
//     </div>
//   );
// }

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, FloatingBlobs } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alyaa Elsayed" },
      { name: "description", content: "Inquire about acquisitions, commissions, or press for Alyaa Elsayed Studio." },
      { property: "og:title", content: "Contact — Alyaa Elsayed" },
      { property: "og:description", content: "Inquire about acquisitions, commissions, or press." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink relative overflow-x-hidden">
      <FloatingBlobs />
      <SiteHeader />

      {/* الكونتينر الرئيسي مقسم لـ 12 عمود ليعطي طابع المجلات الفنية */}
      <section className="relative z-10 px-6 md:px-10 pt-12 pb-28 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* العمود الأيسر: النصوص والبيانات الأساسية */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32">
          <div>
            <span className="font-mono text-[11px] text-gold uppercase tracking-[0.3em] block mb-4 font-semibold">Inquiries</span>
            <h1 className="font-display italic text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.05] text-ink">
              Let's <span className="text-pink-hot animate-pulse">Dream</span> Together.
            </h1>
            <p className="text-ink/70 text-base md:text-lg leading-relaxed max-w-md">
              For acquisitions, private commissions, press, or global exhibition proposals — a single conversation begins the alchemy.
            </p>
          </div>

          {/* معلومات التواصل بتصميم شبكي صغير وأنيق */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-pink-hot/10">
            <div className="group">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold mb-2 font-bold">The Atelier</p>
              <p className="text-sm text-ink/80 leading-relaxed transition-colors group-hover:text-pink-hot">
                14 Rue de Sévigné<br />75004 Paris, France
              </p>
            </div>
            <div className="group">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold mb-2 font-bold">General & Sales</p>
              <a href="mailto:studio@alyaaelsayed.art" className="text-sm text-ink/80 block hover:text-pink-hot transition-colors break-words">
                studio@alyaaelsayed.art
              </a>
            </div>
            <div className="group sm:col-span-2">
              <p className="font-mono text-[10px] uppercase tracking-widest text-gold mb-2 font-bold">Press & Media</p>
              <a href="mailto:press@alyaaelsayed.art" className="text-sm text-ink/80 block hover:text-pink-hot transition-colors">
                press@alyaaelsayed.art
              </a>
            </div>
          </div>
        </div>

        {/* العمود الأيمن: الفورم الزجاجي الاحترافي */}
        <div className="lg:col-span-7 w-full">
          {sent ? (
            /* كارت النجاح المصمم كبطاقة دعوة فاخرة */
            <div className="bg-white/70 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] shadow-2xl shadow-pink-hot/5 border border-pink-hot/10 text-center space-y-6 transform scale-100 transition-all duration-500">
              <div className="size-16 bg-pink-soft text-pink-hot rounded-full flex items-center justify-center text-2xl mx-auto shadow-inner shadow-pink-hot/10">
                ✦
              </div>
              <h2 className="font-display italic text-4xl text-ink">Merci, mon ami.</h2>
              <p className="text-ink/70 max-w-sm mx-auto leading-relaxed text-sm md:text-base">
                Your message is petalling its way to Alyaa's atelier. Expect a thoughtful response within 48 hours.
              </p>
              <button 
                onClick={() => setSent(false)} 
                className="font-mono text-[11px] uppercase tracking-widest text-gold hover:text-pink-hot transition-colors pt-4 block mx-auto underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            /* الفورم التفاعلي */
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-pink-hot/5 border border-white/60 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              <div className="sm:col-span-1">
                <input 
                  required 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-canvas/40 border border-pink-hot/10 focus:border-pink-hot focus:bg-white p-4 md:p-5 rounded-2xl outline-none placeholder:text-pink-hot/30 text-ink transition-all duration-300 text-sm md:text-base shadow-sm" 
                />
              </div>
              <div className="sm:col-span-1">
                <input 
                  required 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-canvas/40 border border-pink-hot/10 focus:border-pink-hot focus:bg-white p-4 md:p-5 rounded-2xl outline-none placeholder:text-pink-hot/30 text-ink transition-all duration-300 text-sm md:text-base shadow-sm" 
                />
              </div>
              <div className="sm:col-span-2">
                <select 
                  className="w-full bg-canvas/40 border border-pink-hot/10 focus:border-pink-hot focus:bg-white p-4 md:p-5 rounded-2xl outline-none text-ink/70 focus:text-ink transition-all duration-300 font-mono text-xs md:text-sm shadow-sm cursor-pointer appearance-none"
                  style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'24\' h=\'24\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23b38c5f\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'><polyline points=\'6 9 12 15 18 9\'></polyline></svg>")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 20px center', backgroundSize: '16px' }}
                >
                  <option>Inquiry Type — Artwork Acquisition</option>
                  <option>Inquiry Type — Private Commission</option>
                  <option>Inquiry Type — Gallery Exhibition</option>
                  <option>Inquiry Type — Press & Interview</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <textarea 
                  required 
                  placeholder="Tell Alyaa about your space, the desired feeling, or the story you wish to capture..." 
                  className="w-full bg-canvas/40 border border-pink-hot/10 focus:border-pink-hot focus:bg-white p-4 md:p-5 rounded-2xl outline-none placeholder:text-pink-hot/30 text-ink h-44 focus:ring-0 transition-all duration-300 text-sm md:text-base resize-none shadow-sm" 
                />
              </div>

              {/* زر الإرسال بأنيميشن ملء احترافي */}
              <div className="sm:col-span-2 pt-2">
                <button 
                  type="submit" 
                  className="relative overflow-hidden group w-full bg-ink text-white p-5 rounded-2xl font-mono text-xs uppercase tracking-[0.2em] transition-transform duration-300 active:scale-[0.99] shadow-lg shadow-ink/10"
                >
                  <span className="absolute inset-0 bg-pink-hot translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                    Send Spark <span className="inline-block transition-transform duration-300 group-hover:rotate-12">✦</span>
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}