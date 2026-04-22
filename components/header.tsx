"use client"
import { useState, useEffect } from "react"
import { Phone } from "lucide-react"

export default function Header({ lang, setLang }: { lang: "en" | "ar", setLang: (l: "en" | "ar") => void }) {
  const [scrolled, setScrolled] = useState(false)
  const isAr = lang === "ar"

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const links = isAr
    ? [{ name: "عن سوديك", id: "about" }, { name: "المشاريع", id: "projects" }, { name: "East Vale", id: "eastvale" }, { name: "June", id: "june" }, { name: "VYE", id: "vye" }, { name: "تواصل", id: "contact" }]
    : [{ name: "About", id: "about" }, { name: "Projects", id: "projects" }, { name: "East Vale", id: "eastvale" }, { name: "June", id: "june" }, { name: "VYE", id: "vye" }, { name: "Contact", id: "contact" }]

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header dir={isAr ? "rtl" : "ltr"} className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm border-b border-border" : "bg-primary"}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-14 lg:h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className={`text-xl font-black tracking-widest ${scrolled ? "text-primary" : "text-white"}`}>SODIC</span>
        </div>
        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => scrollTo(e, l.id)}
              className={`text-xs font-semibold tracking-wide transition-colors ${scrolled ? "text-foreground/60 hover:text-primary" : "text-white/70 hover:text-white"}`}>
              {l.name}
            </a>
          ))}
        </nav>
        {/* Right */}
        <div className="flex items-center gap-3">
          <button onClick={() => setLang(isAr ? "en" : "ar")}
            className={`text-xs font-black px-3 py-1.5 border transition-all ${scrolled ? "border-primary text-primary hover:bg-primary hover:text-white" : "border-white/40 text-white hover:bg-white/10"}`}>
            {isAr ? "EN" : "AR"}
          </button>
          <a href="tel:+201034442613" className={`hidden sm:block text-sm font-black ${scrolled ? "text-foreground" : "text-white"}`} dir="ltr">01034442613</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) }}
            className={`hidden sm:block text-xs font-black px-5 py-2 tracking-wide transition-colors ${scrolled ? "bg-primary text-white" : "bg-white text-primary"}`}>
            {isAr ? "استفسر الآن" : "ENQUIRE NOW"}
          </a>
          <a href="tel:+201034442613" className={`sm:hidden p-2.5 ${scrolled ? "bg-primary text-white" : "bg-white text-primary"}`}><Phone className="w-4 h-4" /></a>
        </div>
      </div>
    </header>
  )
}
