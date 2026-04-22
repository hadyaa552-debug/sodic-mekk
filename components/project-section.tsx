"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProjectSectionProps {
  id: string
  lang: "en" | "ar"
  title: string
  titleAr: string
  location: string
  locationAr: string
  descEn: string
  descAr: string
  bullets: string[]
  bulletsAr: string[]
  images: string[]
  bgLight?: boolean
}

export default function ProjectSection({ id, lang, title, titleAr, location, locationAr, descEn, descAr, bullets, bulletsAr, images, bgLight }: ProjectSectionProps) {
  const isAr = lang === "ar"
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "" })
  const [imgIdx, setImgIdx] = useState(0)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("https://formsubmit.co/ajax/apkzoz85@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, project: title, _subject: `New Lead – SODIC ${title}`, _captcha: "false", _template: "table", _cc: "leads@grandeur-spaces.com" }),
      })
      if (res.ok) { router.push("/thank-you") } else throw new Error()
    } catch { toast({ title: "Error", variant: "destructive" }); setLoading(false) }
  }

  const displayTitle = title.replace(" (Caesar)", "")

  return (
    <section id={id}>
      {/* Dark banner */}
      <div className="bg-foreground py-5 text-center">
        <h2 className="text-2xl lg:text-3xl font-black text-white tracking-widest">{isAr ? titleAr : title}</h2>
      </div>

      {/* Main content — gray bg with watermark */}
      <div className="relative overflow-hidden" style={{background:"#F2F2F2"}}>
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[12rem] lg:text-[16rem] font-black tracking-widest uppercase whitespace-nowrap"
            style={{color:"rgba(0,0,0,0.04)", lineHeight:1}}>
            {displayTitle.toUpperCase()}
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-14">
          {/* About + right image */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div dir={isAr ? "rtl" : "ltr"}>
              <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
                {isAr ? `عن ${titleAr}` : `ABOUT ${title.toUpperCase()}`}
              </p>
              <h3 className="text-2xl font-black text-foreground mb-1">{isAr ? titleAr : title}</h3>
              <p className="text-xs text-muted-foreground tracking-wide uppercase mb-5">{isAr ? locationAr : location}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{isAr ? descAr : descEn}</p>
              <ul className="space-y-2 mb-6">
                {(isAr ? bulletsAr : bullets).map((b, i) => (
                  <li key={i} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-primary mt-1 text-xs">●</span>{b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden shadow-lg">
              <img src={images[1] || images[0]} alt={title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Carousel */}
          <div className="relative mb-12">
            <div className="relative aspect-[16/7] overflow-hidden shadow-lg">
              <img src={images[imgIdx]} alt={`${title} ${imgIdx + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 inset-x-0 text-center">
                <p className="text-white font-black text-xl tracking-widest uppercase">{isAr ? titleAr.split(" ")[0] : displayTitle.split(" ")[0]} {isAr ? "" : (images[imgIdx] === images[0] ? "SOL VILLAS" : "OCEAN VILLA")}</p>
              </div>
              <button onClick={() => setImgIdx((imgIdx - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-black/70">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => setImgIdx((imgIdx + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-black/70">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
                {images.map((_, i) => (
                  <button key={i} onClick={() => setImgIdx(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${i === imgIdx ? "bg-white" : "bg-white/40"}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Register form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start" dir={isAr ? "rtl" : "ltr"}>
            <div>
              <h3 className="text-xl font-black text-foreground mb-2">{isAr ? "سجّل بياناتك" : "Register Your Details"}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {isAr
                  ? "شارك معلوماتك اليوم وسيتواصل معك فريق المبيعات لتزويدك بمعلومات شخصية والإجابة على جميع أسئلتك. فريقنا متاح ٢٤ ساعة، ٧ أيام."
                  : "Share your information today and our sales team will reach out shortly to provide personalized assistance and answer all your questions. Our team is here for you 24 hours a day, 7 days a week."}
              </p>
              <h4 className="text-sm font-black text-foreground mb-4">{isAr ? "تواصل للمزيد من المعلومات" : "Get in touch for more information"}</h4>
              <div className="flex gap-3">
                <a href="https://wa.me/201110944499" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors rounded-sm">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </a>
                <a href="tel:+201110944499"
                  className="w-10 h-10 bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors rounded-sm">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </a>
              </div>
            </div>
            <form onSubmit={submit} className="space-y-3">
              <Input placeholder={isAr ? "الاسم الكريم" : "Full Name"} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="h-11 bg-white border-border" />
              <Input type="email" placeholder={isAr ? "البريد الإلكتروني" : "Email"} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-11 bg-white border-border" />
              <Input type="tel" placeholder={isAr ? "رقم الهاتف" : "Mobile"} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="h-11 bg-white border-border" dir="ltr" />
              <Button type="submit" disabled={loading} className="w-full h-12 bg-primary text-white font-black tracking-widest text-sm uppercase">
                {loading ? "..." : (isAr ? "إرسال" : "SEND")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
