"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm({ lang }: { lang: "en" | "ar" }) {
  const isAr = lang === "ar"
  const router = useRouter()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", email: "" })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("https://formsubmit.co/ajax/apkzoz85@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: "New Lead – SODIC General", _captcha: "false", _template: "table", _cc: "leads@grandeur-spaces.com" }),
      })
      if (res.ok) { router.push("/thank-you") } else throw new Error()
    } catch { toast({ title: "Error", variant: "destructive" }); setLoading(false) }
  }

  return (
    <section id="contact" className="py-16 bg-primary" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <h2 className="text-2xl font-black text-white text-center mb-8 tracking-widest">{isAr ? "استفسر الآن" : "ENQUIRE NOW"}</h2>
        <form onSubmit={submit} className="space-y-4">
          <Input placeholder={isAr ? "الاسم الكريم" : "Name"} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="h-12 bg-white border-0 text-foreground" />
          <Input type="tel" placeholder={isAr ? "رقم الهاتف" : "Mobile number"} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required className="h-12 bg-white border-0" dir="ltr" />
          <Input type="email" placeholder={isAr ? "البريد الإلكتروني" : "Email"} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-12 bg-white border-0" />
          <Button type="submit" disabled={loading} className="w-full h-14 bg-foreground hover:bg-foreground/90 text-white font-black tracking-widest text-sm uppercase">
            {loading ? "..." : (isAr ? "استفسر الآن" : "ENQUIRE")}
          </Button>
        </form>
      </div>
    </section>
  )
}
