// import { Link } from "@tanstack/react-router";

// export function SiteFooter() {
//   return (
//     <footer className="relative border-t border-pink-hot/10 bg-canvas">
//       <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
//         <div>
//           <p className="font-display italic text-3xl">Elena Vane.</p>
//           <p className="text-sm text-ink/60 mt-3 max-w-xs">
//             A sun-drenched atelier of pink prayers, painted slowly and loud.
//           </p>
//         </div>
//         <div className="font-mono text-[11px] uppercase tracking-widest space-y-2">
//           <p className="text-gold mb-3">Navigate</p>
//           <Link to="/gallery" className="block hover:text-pink-hot">Gallery</Link>
//           <Link to="/collections" className="block hover:text-pink-hot">Collections</Link>
//           <Link to="/studio" className="block hover:text-pink-hot">Studio</Link>
//           <Link to="/contact" className="block hover:text-pink-hot">Contact</Link>
//         </div>
//         <div className="font-mono text-[11px] uppercase tracking-widest space-y-2">
//           <p className="text-gold mb-3">Elsewhere</p>
//           <a href="#" className="block hover:text-pink-hot">Instagram</a>
//           <a href="#" className="block hover:text-pink-hot">Artsy</a>
//           <a href="#" className="block hover:text-pink-hot">Newsletter</a>
//         </div>
//       </div>
//       <div className="h-1 bg-gradient-to-r from-pink-soft via-pink-hot to-gold" />
//       <p className="text-center text-[10px] font-mono uppercase tracking-[0.3em] text-ink/40 py-4">
//         © 2026 Elena Vane Studio — Paris
//       </p>
//     </footer>
//   );
// }

import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-pink-hot/10 bg-canvas overflow-hidden mt-20">
      {/* إضاءة خلفية ناعمة لتعطي عمق للفوتر */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-soft/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-16">
        
        {/* الجزء العلوي: اسم الفنانة وزر التواصل الاحترافي */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
          <div className="group cursor-default">
            <p className="font-mono text-[12px] uppercase tracking-widest text-gold mb-4 font-semibold">Let's Create Together</p>
            <h2 className="font-display italic text-6xl md:text-8xl text-ink leading-none transition-colors duration-500 hover:text-pink-hot">
              Alyaa Elsayed.
            </h2>
          </div>
          
          {/* زر تواصل دائري بتأثير ملء (Fill Animation) مبهر */}
          <Link 
            to="/contact" 
            className="group relative inline-flex items-center justify-center size-28 md:size-36 bg-pink-hot text-white rounded-full overflow-hidden transition-transform duration-500 hover:scale-105 shadow-xl shadow-pink-hot/20 flex-shrink-0"
          >
            <div className="absolute inset-0 bg-ink translate-y-full rounded-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 font-mono text-xs md:text-sm uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">
              Say Hello
            </span>
          </Link>
        </div>

        {/* الجزء الأوسط: الوصف والروابط */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-ink/10 pt-16">
          <div className="md:col-span-2">
            <p className="text-base md:text-lg text-ink/75 max-w-md leading-relaxed">
              A sun-drenched atelier of pink prayers, painted slowly and loud. Exploring botanical chaos and tactile femininity through contemporary art.
            </p>
          </div>
          
       {/* قائمة الروابط مع تأثير تمدد الخط */}
        <div className="space-y-5">
          <p className="font-mono text-[12px] uppercase tracking-widest text-gold font-bold mb-6">Navigate</p>
          {[
            { name: "Gallery", to: "/gallery" as const },
            { name: "Collections", to: "/collections" as const },
            { name: "Studio", to: "/studio" as const },
            { name: "Contact", to: "/contact" as const }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.to} 
              className="group flex items-center gap-3 text-ink/80 hover:text-pink-hot transition-colors duration-300 w-fit"
            >
              <span className="h-px w-0 bg-pink-hot transition-all duration-300 ease-out group-hover:w-6" />
              <span className="font-mono text-[13px] md:text-sm uppercase tracking-widest">{item.name}</span>
            </Link>
          ))}
        </div>
          <div className="space-y-5">
            <p className="font-mono text-[12px] uppercase tracking-widest text-gold font-bold mb-6">Elsewhere</p>
            {['Instagram', 'Behance', 'Newsletter'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className="group flex items-center gap-3 text-ink/80 hover:text-pink-hot transition-colors duration-300 w-fit"
              >
                <span className="h-px w-0 bg-pink-hot transition-all duration-300 ease-out group-hover:w-6" />
                <span className="font-mono text-[13px] md:text-sm uppercase tracking-widest">{item}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* الشريط السفلي (حقوق النشر) */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-soft via-pink-hot to-gold opacity-30 h-px top-0" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] text-ink/50 text-center">
            © {currentYear} Alyaa Elsayed Studio — All Rights Reserved
          </p>
          <p className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] text-ink/50 text-center">
            Crafted With ♥
          </p>
        </div>
      </div>
    </footer>
  );
}