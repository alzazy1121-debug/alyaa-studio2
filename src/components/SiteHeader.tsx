// import { Link } from "@tanstack/react-router";

// export function SiteHeader() {
//   return (
//     <nav className="relative z-50 flex items-center justify-between px-10 md:px-6 py-6 mix-blend-multiply">
//       <Link to="/" className="font-display italic text-2xl font-black tracking-tighter">
//         Alyaa Elsayed.
//       </Link>
//       <div className="hidden md:flex gap-10 font-mono text-[15px] uppercase tracking-widest">
//         <Link to="/gallery" className="hover:text-pink-hot transition-colors" activeProps={{ className: "text-pink-hot underline underline-offset-4" }}>
//           Gallery
//         </Link>
//         <Link to="/collections" className="hover:text-pink-hot transition-colors" activeProps={{ className: "text-pink-hot underline underline-offset-4" }}>
//           Collections
//         </Link>
//         <Link to="/studio" className="hover:text-pink-hot transition-colors" activeProps={{ className: "text-pink-hot underline underline-offset-4" }}>
//           Studio
//         </Link>
//         <Link to="/contact" className="hover:text-pink-hot transition-colors" activeProps={{ className: "text-pink-hot underline underline-offset-4" }}>
//           Contact
//         </Link>
//       </div>
//       <Link
//         to="/contact"
//         className="size-10 bg-pink-hot rounded-full flex items-center justify-center text-white ring-8 ring-pink-hot/10 hover:scale-110 transition-transform"
//         aria-label="Contact"
//       >
//         <span className="text-lg leading-none">+</span>
//       </Link>
//     </nav>
//   );
// }

// export function FloatingBlobs() {
//   return (
//     <div aria-hidden className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
//       <div className="absolute -top-20 -left-20 size-96 bg-pink-soft rounded-full blur-3xl animate-float" />
//       <div className="absolute top-1/2 -right-20 size-80 bg-lilac rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
//       <div className="absolute bottom-0 left-1/4 size-96 bg-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-5s" }} />
//     </div>
//   );
// }
import { useState } from "react";
import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  // حالة للتحكم في فتح وإغلاق قائمة الموبايل
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // دالة لإغلاق القائمة عند الضغط على أي رابط في الموبايل
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative">
      <nav className="relative z-50 flex items-center justify-between px-10 md:px-6 py-6 mix-blend-multiply bg-transparent">
        {/* اللوجو */}
        <Link to="/" className="font-display italic text-2xl font-black tracking-tighter" onClick={closeMenu}>
          Alyaa Elsayed.
        </Link>

        {/* قائمة الديسكتوب (تختفي في الموبايل) */}
        <div className="hidden md:flex gap-10 font-mono text-[20px] uppercase tracking-widest">
          <Link to="/gallery" className="hover:text-pink-hot transition-colors" activeProps={{ className: "text-pink-hot underline underline-offset-4" }}>
            Gallery
          </Link>
          <Link to="/collections" className="hover:text-pink-hot transition-colors" activeProps={{ className: "text-pink-hot underline underline-offset-4" }}>
            Collections
          </Link>
          <Link to="/studio" className="hover:text-pink-hot transition-colors" activeProps={{ className: "text-pink-hot underline underline-offset-4" }}>
            Studio
          </Link>
          <Link to="/contact" className="hover:text-pink-hot transition-colors" activeProps={{ className: "text-pink-hot underline underline-offset-4" }}>
            Contact
          </Link>
        </div>

        {/* زر الـ Contact للديسكتوب وزر الهمبرجر للموبايل */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:flex size-10 bg-pink-hot rounded-full items-center justify-center text-white ring-8 ring-pink-hot/10 hover:scale-110 transition-transform"
            aria-label="Contact"
          >
            <span className="text-lg leading-none">+</span>
          </Link>

          {/* زر الهمبرجر (يظهر في الموبايل فقط) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 space-y-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* قائمة الموبايل (تظهر فقط عندما تكون isMenuOpen تساوي true) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 font-mono text-xl uppercase tracking-widest md:hidden">
          <Link to="/gallery" onClick={closeMenu} className="hover:text-pink-hot transition-colors" activeProps={{ className: "text-pink-hot underline underline-offset-4" }}>
            Gallery
          </Link>
          <Link to="/collections" onClick={closeMenu} className="hover:text-pink-hot transition-colors" activeProps={{ className: "text-pink-hot underline underline-offset-4" }}>
            Collections
          </Link>
          <Link to="/studio" onClick={closeMenu} className="hover:text-pink-hot transition-colors" activeProps={{ className: "text-pink-hot underline underline-offset-4" }}>
            Studio
          </Link>
          <Link to="/contact" onClick={closeMenu} className="hover:text-pink-hot transition-colors" activeProps={{ className: "text-pink-hot underline underline-offset-4" }}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

export function FloatingBlobs() {
  return (
    <div aria-hidden className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div className="absolute -top-20 -left-20 size-96 bg-pink-soft rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 -right-20 size-80 bg-lilac rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
      <div className="absolute bottom-0 left-1/4 size-96 bg-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-5s" }} />
    </div>
  );
}