"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function Hero({ lang }: { lang: "en" | "ar" }) {
  const isAr = lang === "ar"
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", project: "" })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("https://formsubmit.co/ajax/apkzoz85@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: "New Lead – SODIC", _captcha: "false", _template: "table", _cc: "leads@grandeur-spaces.com" }),
      })
      if (res.ok) { router.push("/thank-you") } else throw new Error()
    } catch { toast({ title: isAr ? "خطأ" : "Error", variant: "destructive" }); setLoading(false) }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      <div className="absolute inset-0">
        <img src="https://prod-images.nawy.com/processed/compound_image/image/13147/default.webp" alt="SODIC" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          <div>
            <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">{isAr ? "مطور عقاري رائد في مصر" : "A LEADING REAL ESTATE DEVELOPER IN EGYPT"}</p>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
              {isAr ? <>كن جزءاً من<br/><span className="text-primary/80">مجتمعاتنا</span></> : <>BE PART OF OUR<br/><span className="text-primary/80">COMMUNITIES</span></>}
            </h1>
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) }}
              className="inline-block bg-primary text-white px-8 py-3 text-sm font-black tracking-widest uppercase hover:bg-primary/90 transition-colors">
              {isAr ? "اعرف أكثر ↓" : "LEARN MORE ↓"}
            </a>
          </div>
          {/* Form */}
          <div className="bg-white p-8 shadow-2xl" dir={isAr ? "rtl" : "ltr"}>
            <h3 className="text-lg font-black text-foreground mb-5 text-center">{isAr ? "استفسر الآن" : "ENQUIRE NOW"}</h3>
            <form onSubmit={submit} className="space-y-3">
              <Input placeholder={isAr ? "الاسم الكريم" : "Full Name"} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="h-11" />
              <Input type="tel" placeholder={isAr ? "رقم الهاتف" : "Mobile"} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="h-11" dir="ltr" />
              <Select value={form.project} onValueChange={(v) => setForm({ ...form, project: v })}>
                <SelectTrigger className="h-11"><SelectValue placeholder={isAr ? "المشروع" : "Select Unit"} /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="eastvale">{isAr ? "East Vale – مدينة المستقبل" : "East Vale – Mostakbal City"}</SelectItem>
                  <SelectItem value="june">{isAr ? "June – رأس الحكمة" : "June (Caesar) – North Coast"}</SelectItem>
                  <SelectItem value="vye">{isAr ? "VYE – الشيخ زايد" : "VYE – New Zayed"}</SelectItem>
                </SelectContent>
              </Select>
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
