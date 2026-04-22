"use client"
import React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/toaster"

// ── Real images from sodicegy.org ──────────────────
const IMGS = {
  logo: "/images/SE-Lockupd.png",
  aboutRight: "/images/xaxaxaxax-6.jpg",
  caesarLogo: "/images/Caesar-Logo.png",
  caesarRight: "/images/xaxaxaxax-1.jpg",
  vyeLogo: "/images/Vye-logo-new-rdcqyjccxq5v3drltpdy7jmegwovlvs7gnnign8o7u.png",
  vyeRight: "/images/About-VYE-01.jpg",
  heroImg: "/images/BB-FINAL-1-1280x640-1.jpg",
}

const CAESAR_SLIDES = [
  { img: "/images/Caesar-01-Wave-one-story-Villa-892x593-1.jpg", label: "WAVE ONE STORY VILLA" },
  { img: "/images/Caesar-04-Ocean-Villa-879x588-1.jpg", label: "OCEAN VILLA" },
  { img: "/images/Caesar-07-Reef-Villa-879x588-1.jpg", label: "REEF VILLA" },
]
const VYE_SLIDES = [
  { img: "/images/Nova-Main-Image-892x593-1.jpg", label: "NOVA" },
  { img: "/images/Vye-Main-Image.jpg", label: "NEO" },
  { img: "/images/Sol-Homes-Main-Image-1-879x588-1.jpg", label: "SOL HOMES" },
  { img: "/images/Sol-Villas-Main-Image-1-879x588-1.jpg", label: "SOL VILLAS" },
]

const PHONE = "+201034442613"
const WA_BASE = "https://wa.me/201034442613"

// ── WA + Call icon buttons ──────────────────────────
function ContactBtns({ waMsg }: { waMsg: string }) {
  return (
    <div className="flex gap-3 mt-4">
      <a href={`${WA_BASE}?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:opacity-85 transition-opacity">
        <svg viewBox="0 0 448 512" className="w-5 h-5 fill-white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
      </a>
      <a href={`tel:${PHONE}`}
        className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center hover:opacity-85 transition-opacity">
        <svg viewBox="0 0 512 512" className="w-4 h-4 fill-white"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/></svg>
      </a>
    </div>
  )
}

// ── Underline Input ─────────────────────────────────
function UInput({ placeholder, type="text", dir: d }: { placeholder: string, type?: string, dir?: string }) {
  return (
    <input type={type} placeholder={placeholder} dir={d}
      className="w-full border-0 border-b border-gray-300 py-3 text-sm outline-none focus:border-gray-700 bg-transparent placeholder:text-gray-400 transition-colors" />
  )
}

// ── Lead Form ───────────────────────────────────────
function LeadForm({ subject, light=false }: { subject: string, light?: boolean }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    try {
      const res = await fetch("https://formsubmit.co/ajax/apkzoz85@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: fd.get("name"), phone: fd.get("phone"), email: fd.get("email"),
          _subject: subject, _captcha: "false", _template: "table",
          _cc: "leads@grandeur-spaces.com"
        }),
      })
      if (res.ok) router.push("/thank-you")
      else throw new Error()
    } catch { toast({ title: "Error", variant: "destructive" }); setLoading(false) }
  }

  const btnClass = light
    ? "w-full py-3.5 text-sm font-bold tracking-widest uppercase bg-gray-900 text-white hover:bg-gray-700 transition-colors"
    : "w-full py-3.5 text-sm font-bold tracking-widest uppercase bg-[#1B7B8A] text-white hover:opacity-85 transition-opacity"

  return (
    <form onSubmit={submit} className="space-y-1">
      <UInput placeholder="Full Name" type="text" />
      <input type="hidden" name="name" />
      <UInput placeholder="Mobile" type="tel" dir="ltr" />
      <input type="hidden" name="phone" />
      <UInput placeholder="Email" type="email" />
      <input type="hidden" name="email" />
      <button type="submit" disabled={loading} className={`${btnClass} mt-4`}>
        {loading ? "..." : "SEND"}
      </button>
    </form>
  )
}

// ── Slider ─────────────────────────────────────────
function Slider({ slides }: { slides: { img: string, label: string }[] }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 4000)
    return () => clearInterval(t)
  }, [slides.length])
  return (
    <div className="relative w-full" style={{height:"70vh", minHeight:500}}>
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
          style={{backgroundImage:`url(${s.img})`, backgroundSize:"cover", backgroundPosition:"center"}}>
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-16 inset-x-0 text-center">
            <p className="text-white text-2xl font-bold tracking-widest uppercase" style={{textShadow:"2px 2px 8px rgba(0,0,0,.5)"}}>{s.label}</p>
          </div>
        </div>
      ))}
      <button onClick={() => setIdx(i => (i - 1 + slides.length) % slides.length)}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10 text-white text-3xl w-12 h-12 flex items-center justify-center hover:bg-white/20 transition-colors rounded-full">‹</button>
      <button onClick={() => setIdx(i => (i + 1) % slides.length)}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10 text-white text-3xl w-12 h-12 flex items-center justify-center hover:bg-white/20 transition-colors rounded-full">›</button>
      <div className="absolute bottom-7 inset-x-0 flex justify-center gap-3 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-white" : "w-1.5 bg-white/50"}`} />
        ))}
      </div>
    </div>
  )
}

// ── Bullet Item ─────────────────────────────────────
function Bullet({ icon, text }: { icon: "teal"|"blue"|"bed", text: string }) {
  const colors: Record<string, string> = { teal:"#1B7B8A", blue:"#1877F2", bed:"#555" }
  const icons: Record<string, React.ReactNode> = {
    teal: <svg viewBox="0 0 512 512" className="w-3 h-3 fill-white"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"/></svg>,
    blue: <svg viewBox="0 0 512 512" className="w-3 h-3 fill-white"><path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/></svg>,
    bed: <svg viewBox="0 0 640 512" className="w-3 h-3 fill-white"><path d="M176 256c44.11 0 80-35.89 80-80s-35.89-80-80-80-80 35.89-80 80 35.89 80 80 80zm352-128H304c-8.84 0-16 7.16-16 16v144H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v352c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16v-48h512v48c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V240c0-61.86-50.14-112-112-112z"/></svg>,
  }
  return (
    <li className="flex items-center gap-3 py-1 text-sm text-gray-700">
      <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{background:colors[icon]}}>{icons[icon]}</span>
      {text}
    </li>
  )
}

// ── Register Row ────────────────────────────────────
function RegisterRow({ waMsg, subject }: { waMsg: string, subject: string }) {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Register Your Details</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-5">
          Share your information today and our sales team will reach out shortly to provide personalized assistance and answer all your questions. Our team is here for you 24 hours a day, 7 days a week.
        </p>
        <h3 className="text-base font-bold text-gray-900 mb-3">Get in touch for more information</h3>
        <ContactBtns waMsg={waMsg} />
      </div>
      <LeadForm subject={subject} />
    </div>
  )
}

// ── MAIN PAGE ───────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState<"en"|"ar">("en")

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <>
      <Toaster />

      {/* ── NAV ── */}
      <nav className={`fixed top-0 inset-x-0 z-50 h-16 flex items-center px-8 justify-between transition-all duration-300 ${scrolled ? "bg-white shadow border-b border-gray-100" : "bg-white"}`}>
        <img src={IMGS.logo} alt="SODIC" className="h-8 object-contain" />
        <ul className="hidden lg:flex gap-8 list-none">
          {["About","Projects","Caesar","VYE","Contact"].map(l => (
            <li key={l}><button onClick={() => scroll(l.toLowerCase())} className="text-xs font-semibold text-gray-500 hover:text-[#1B7B8A] tracking-wide transition-colors">{l}</button></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button onClick={() => setLang(l => l==="en"?"ar":"en")}
            className="border border-[#1B7B8A] text-[#1B7B8A] text-xs font-bold px-4 py-1.5 hover:bg-[#1B7B8A] hover:text-white transition-colors">
            {lang==="en"?"AR":"EN"}
          </button>
          <a href={`tel:${PHONE}`} className="hidden sm:block text-sm font-bold text-gray-800" dir="ltr">01034442613</a>
          <button onClick={() => scroll("form")} className="hidden sm:block bg-[#1B7B8A] text-white text-xs font-bold px-5 py-2.5 tracking-wide hover:opacity-85 transition-opacity">
            ENQUIRE NOW
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen grid lg:grid-cols-2" style={{paddingTop:64}}>
        <div className="absolute inset-0">
          <img src={IMGS.heroImg} alt="SODIC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          {/* Watermark */}
          <div className="absolute inset-0 flex items-start justify-center pt-24 overflow-hidden pointer-events-none">
            <span className="text-[10rem] lg:text-[14rem] font-black tracking-widest text-white/5 whitespace-nowrap">THE ESTATES</span>
          </div>
        </div>
        <div className="relative z-10 flex flex-col justify-center px-10 lg:px-16 py-16">
          <p className="text-white/55 text-xs font-semibold tracking-widest uppercase mb-5">A Leading Real Estate Developer In Egypt</p>
          <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
            Be part of Our<br/><span className="font-light">Communities</span>
          </h1>
          <button onClick={() => scroll("about")} className="inline-flex items-center gap-2 bg-[#1B7B8A] text-white px-8 py-3 text-xs font-bold tracking-widest uppercase w-fit hover:opacity-85 transition-opacity">
            LEARN MORE
            <svg viewBox="0 0 448 512" className="w-3 h-3 fill-white"><path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"/></svg>
          </button>
        </div>
        {/* Hero Form */}
        <div className="relative z-10 flex items-center px-8 lg:px-10 py-16" id="form">
          <div className="bg-white p-8 w-full max-w-md shadow-2xl">
            <h2 className="text-center text-lg font-black tracking-widest mb-6">ENQUIRE NOW</h2>
            <UInput placeholder="Full Name" />
            <div className="h-4" />
            <UInput placeholder="Mobile" type="tel" dir="ltr" />
            <div className="h-4" />
            <UInput placeholder="Unit" />
            <div className="h-6" />
            <button className="w-full py-3.5 bg-[#1B7B8A] text-white text-sm font-bold tracking-widest uppercase hover:opacity-85 transition-opacity">
              SEND
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-2xl font-light mb-4">About <strong>SODIC</strong></h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              SODIC's "Sixth of October Development and Investment Company" award-winning developments cater to the country's ever-growing need for quality residential, commercial, and retail property. SODIC is driven by a progressive vision that places innovation at the heart of everything it does. Most recently, SODIC has launched a new project: SODIC Eastvale.
            </p>
            {/* Launch Card */}
            <div className="border-2 border-gray-900 p-6">
              <p className="text-xs font-bold tracking-widest text-gray-400 mb-2">NEW LAUNCH</p>
              <h3 className="text-xl font-light mb-1"><strong>SODIC</strong> MOSTAKBAL CITY</h3>
              <p className="text-xs font-semibold tracking-widest text-gray-400 mb-5">EAST CAIRO, EGYPT</p>
              <ul className="space-y-1 mb-6">
                <Bullet icon="teal" text="Prices starting from 12 M EGP" />
                <Bullet icon="blue" text="Fully Finished Units" />
                <Bullet icon="bed" text="2 Bedrooms" />
              </ul>
              <ContactBtns waMsg="مرحباً، أنا مهتم بمشروع Sodic New Launch وأريد معرفة المزيد" />
            </div>
          </div>
          <div className="relative">
            <img src={IMGS.aboutRight} alt="SODIC" className="w-full object-cover" style={{maxHeight:600}} />
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="pb-12 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-xl font-bold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {[
              { tag:"Launching Now", name:"Mostakbal city, Egypt", img:"/images/xaxaxaxax-3.jpg", id:"eastvale" },
              { tag:"VYE", name:"New Zayed, Egypt", img:"/images/Vye-Main-Image.jpg", id:"vye" },
              { tag:"CAESAR", name:"North Coast, Egypt", img:"/images/Caesar-01-Wave-one-story-Villa-892x593-1.jpg", id:"caesar" },
            ].map(p => (
              <div key={p.id} className="relative overflow-hidden cursor-pointer group aspect-[4/3]" onClick={() => scroll(p.id)}>
                <img src={p.img} alt={p.tag} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <p className="text-xs font-bold tracking-widest uppercase opacity-70 mb-1">{p.tag}</p>
                  <p className="text-base font-bold">{p.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENERAL REGISTER ── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-8">
          <RegisterRow waMsg="مرحباً، أنا مهتم بمشروعات سوديك" subject="Lead – SODIC General" />
        </div>
      </section>

      {/* ── CAESAR ── */}
      <section id="caesar">
        {/* Dark banner */}
        <div className="bg-gray-900 py-5 relative overflow-hidden text-center">
          <span className="absolute inset-0 flex items-center justify-center text-[6rem] font-black text-white/5 tracking-widest pointer-events-none">CAESAR</span>
          <img src={IMGS.caesarLogo} alt="Caesar" className="h-10 object-contain mx-auto relative z-10" />
        </div>
        {/* Gray bg with watermark */}
        <div className="relative bg-[#F0F0F0] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="text-[12rem] font-black text-black/5 tracking-widest whitespace-nowrap">CAESAR</span>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-8 py-14 space-y-12">
            {/* About */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#1B7B8A] mb-2">ABOUT CAESAR</p>
                <h3 className="text-2xl font-light mb-1">About <strong>CAESAR</strong></h3>
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-5">NORTH COAST, RAS EL HIKMA, EGYPT</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  Nestled in the heart of Ras El Hikma, Caesar is home to one of Egypt's most beautiful Mediterranean bays and 1km of pristine beachfront. Designed with simplicity at heart, it is reminiscent of easy beachside summers from a time long gone. With homes built on terraced levels, it offers almost all residents unobstructed views of the Mediterranean.
                </p>
                <ul className="space-y-1">
                  <Bullet icon="teal" text="Prices starting from 50M EGP" />
                  <Bullet icon="blue" text="Areas starting from 300m²" />
                  <Bullet icon="bed" text="4 Bedrooms" />
                  <Bullet icon="teal" text="Fully Finished Town, Twin and Standalone Villas" />
                </ul>
              </div>
              <img src={IMGS.caesarRight} alt="Caesar" className="w-full object-cover shadow-lg" style={{maxHeight:500}} />
            </div>
            {/* Slider */}
            <Slider slides={CAESAR_SLIDES} />
            {/* Register */}
            <RegisterRow waMsg="مرحباً، أنا مهتم بمشروع Caesar Sodic وأريد معرفة المزيد" subject="Lead – SODIC Caesar" />
          </div>
        </div>
      </section>

      {/* ── VYE ── */}
      <section id="vye">
        <div className="bg-gray-900 py-5 relative overflow-hidden text-center">
          <span className="absolute inset-0 flex items-center justify-center text-[6rem] font-black text-white/5 tracking-widest pointer-events-none">VYE</span>
          <img src={IMGS.vyeLogo} alt="VYE" className="h-10 object-contain mx-auto relative z-10" />
        </div>
        <div className="relative bg-[#F0F0F0] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
            <span className="text-[12rem] font-black text-black/5 tracking-widest whitespace-nowrap">VYE</span>
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-8 py-14 space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#1B7B8A] mb-2">ABOUT VYE</p>
                <h3 className="text-2xl font-light mb-1">About <strong>VYE</strong></h3>
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-5">NEW ZAYED, EGYPT</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">
                  VYE at New Zayed offers novel concepts for residents including solar powered homes at Sol, and the first ever expandable apartments within multi-family buildings at Neo.
                </p>
                <ul className="space-y-1">
                  <Bullet icon="teal" text="Prices starting from 16.3M EGP" />
                  <Bullet icon="blue" text="Areas starting from 142m²" />
                  <Bullet icon="bed" text="2–3 Bedrooms" />
                  <Bullet icon="teal" text="Apartments, Townhomes, Twin & Standalone Villas" />
                </ul>
              </div>
              <img src={IMGS.vyeRight} alt="VYE" className="w-full object-cover shadow-lg" style={{maxHeight:500}} />
            </div>
            <Slider slides={VYE_SLIDES} />
            <RegisterRow waMsg="مرحباً، أنا مهتم بمشروع VYE Sodic وأريد معرفة المزيد" subject="Lead – SODIC VYE" />
          </div>
        </div>
      </section>

      {/* ── FINAL ENQUIRE ── */}
      <section id="contact" className="bg-[#1B7B8A] py-16 px-8">
        <h2 className="text-center text-lg font-black text-white tracking-widest uppercase mb-10">Enquire now</h2>
        <div className="max-w-xl mx-auto">
          <div className="space-y-1">
            <input placeholder="Name" className="w-full border-0 border-b border-white/40 py-3 text-sm text-white outline-none bg-transparent placeholder:text-white/50 focus:border-white transition-colors" />
            <input type="tel" placeholder="Mobile number" dir="ltr" className="w-full border-0 border-b border-white/40 py-3 text-sm text-white outline-none bg-transparent placeholder:text-white/50 focus:border-white transition-colors" />
            <input type="email" placeholder="Email" className="w-full border-0 border-b border-white/40 py-3 text-sm text-white outline-none bg-transparent placeholder:text-white/50 focus:border-white transition-colors" />
            <button className="w-full mt-6 py-4 bg-gray-900 text-white text-sm font-bold tracking-widest uppercase hover:opacity-80 transition-opacity">
              ENQUIRE
            </button>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a href={`tel:${PHONE}`} className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg viewBox="0 0 512 512" className="w-4 h-4 fill-white"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>
            </a>
            <a href={`${WA_BASE}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشروعات سوديك")}`} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded bg-green-500 flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg viewBox="0 0 448 512" className="w-4 h-4 fill-white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-5 px-8 pb-20 lg:pb-5 flex flex-col lg:flex-row items-center justify-between gap-3">
        <span className="text-sm font-black tracking-widest">SODIC</span>
        <span className="text-xs text-white/30">© 2026 SODIC Developments | Grandeur Spaces – Authorized Agent</span>
      </footer>

      {/* Side floats */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col">
        <a href={`${WA_BASE}?text=${encodeURIComponent("مرحباً، أنا مهتم بمشروعات سوديك")}`} target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 flex items-center justify-center hover:opacity-85 transition-opacity">
          <svg viewBox="0 0 448 512" className="w-5 h-5 fill-white"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
        </a>
        <a href={`tel:${PHONE}`} className="w-12 h-12 bg-gray-600 flex items-center justify-center hover:opacity-85 transition-opacity">
          <svg viewBox="0 0 512 512" className="w-5 h-5 fill-white"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/></svg>
        </a>
      </div>

      {/* Mobile bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden grid grid-cols-2">
        <a href={`tel:${PHONE}`} className="bg-[#1B7B8A] text-white text-center py-4 text-sm font-bold">📞 Call Now</a>
        <a href={`${WA_BASE}?text=${encodeURIComponent("مرحباً")}`} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white text-center py-4 text-sm font-bold">💬 WhatsApp</a>
      </div>
    </>
  )
}
