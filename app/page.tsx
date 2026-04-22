"use client"
import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import ProjectsGrid from "@/components/projects-grid"
import ProjectSection from "@/components/project-section"
import ContactForm from "@/components/contact-form"
import WhatsAppWidget from "@/components/whatsapp-widget"
import MobileBottomBar from "@/components/mobile-bottom-bar"
import Footer from "@/components/footer"
import { Toaster } from "@/components/toaster"

export default function Home() {
  const [lang, setLang] = useState<"en" | "ar">("en")

  return (
    <main className="min-h-screen bg-white">
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <AboutSection lang={lang} />
      <ProjectsGrid lang={lang} />

      {/* East Vale */}
      <ProjectSection
        id="eastvale" lang={lang}
        title="East Vale" titleAr="East Vale"
        location="MOSTAKBAL CITY, EAST CAIRO, EGYPT" locationAr="مدينة المستقبل، شرق القاهرة"
        descEn="SODIC's first project in Mostakbal City — 500 acres inside Mada City. Designed by PBD Architects (Sydney) and EDSA. Fully finished units with ACs included. Located next to Mivida Gardens with direct access to major roads."
        descAr="أول مشروع لـ SODIC في مدينة المستقبل على ٥٠٠ فدان داخل Mada City. تصميم PBD Architects (سيدني) وEDSA. وحدات تسليم كامل مع أجهزة تكييف. مجاور Mivida Gardens."
        bullets={["Prices starting from 8.5M EGP", "Fully finished + ACs included", "2–3 bedrooms", "Townhouses & Villas available"]}
        bulletsAr={["أسعار تبدأ من ٨.٥ مليون جنيه", "تسليم كامل التشطيب مع تكييف", "٢–٣ غرف نوم", "تاون هاوس وفيلات متاحة"]}
        images={[
          "https://prod-images.nawy.com/processed/compound_image/image/6329/default.webp",
          "https://prod-images.nawy.com/processed/compound_image/image/6330/default.webp",
          "https://prod-images.nawy.com/processed/compound_image/image/6327/default.webp",
        ]}
        bgLight={true}
      />

      {/* June (Caesar) */}
      <ProjectSection
        id="june" lang={lang}
        title="June (Caesar)" titleAr="June (Caesar)"
        location="NORTH COAST, RAS EL HEKMA, EGYPT" locationAr="الساحل الشمالي، رأس الحكمة"
        descEn="Nestled in the heart of Ras El Hekma, Caesar (June) is home to one of Egypt's most beautiful Mediterranean bays and km of pristine beachfront. Designed with simplicity at heart, it offers almost all residents unobstructed views of the Mediterranean sea."
        descAr="في قلب رأس الحكمة، يضم June (Caesar) أجمل خلجان البحر الأبيض المتوسط في مصر وكيلومترات من الشاطئ البكر. تصميم بسيط وعصري يمنح كل السكان إطلالة خلابة على المتوسط."
        bullets={["Prices starting from 30M EGP", "Areas starting from 100m²", "4+ bedrooms", "Fully finished — Standalone & Twin Villas"]}
        bulletsAr={["أسعار تبدأ من ٣٠ مليون جنيه", "مساحات تبدأ من ١٠٠ م²", "٤+ غرف نوم", "تسليم كامل — فيلات مستقلة وتون هاوس"]}
        images={[
          "https://prod-images.nawy.com/processed/compound_image/image/11804/default.webp",
          "https://prod-images.nawy.com/processed/compound_image/image/11805/default.webp",
          "https://prod-images.nawy.com/processed/compound_image/image/11806/default.webp",
        ]}
        bgLight={false}
      />

      {/* VYE */}
      <ProjectSection
        id="vye" lang={lang}
        title="VYE" titleAr="VYE"
        location="NEW ZAYED, EGYPT" locationAr="نيو زايد، مصر"
        descEn="VYE at New Zayed offers novel concepts for residents including solar powered homes at Sol, and the first ever expandable apartments within multi-family buildings at Neo. Divided into 3 areas featuring residential and commercial buildings with 5 private entrances."
        descAr="VYE في نيو زايد يقدم مفاهيم جديدة للسكان تشمل المنازل التي تعمل بالطاقة الشمسية في Sol، وأول شقق قابلة للتوسعة في Neo. مقسم لـ ٣ مناطق مع ٥ مداخل خاصة."
        bullets={["Units starting from 4,619 EGP", "Areas starting from 2+2 sqm", "3+ bedrooms", "Apartments, townhouses, twin & standalone villas"]}
        bulletsAr={["وحدات تبدأ من ٤٦١٩ جنيه", "مساحات تبدأ من ٢+٢ م²", "٣+ غرف نوم", "شقق • تاون هاوس • تون هاوس • فيلات"]}
        images={[
          "https://prod-images.nawy.com/processed/compound_image/image/13147/default.webp",
          "https://prod-images.nawy.com/processed/compound_image/image/13140/default.webp",
          "https://prod-images.nawy.com/processed/compound_image/image/13141/default.webp",
        ]}
        bgLight={true}
      />

      <ContactForm lang={lang} />
      <Footer lang={lang} />
      <WhatsAppWidget />
      <MobileBottomBar lang={lang} />
      <Toaster />
    </main>
  )
}
