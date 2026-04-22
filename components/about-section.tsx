export default function AboutSection({ lang }: { lang: "en" | "ar" }) {
  const isAr = lang === "ar"
  return (
    <section id="about" className="py-16 lg:py-20" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">{isAr ? "عن سوديك" : "ABOUT SODIC"}</p>
            <h2 className="text-3xl font-black text-foreground mb-4">
              {isAr ? <>عن <span className="text-primary">SODIC</span></> : <>ABOUT <span className="text-primary">SODIC</span></>}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {isAr
                ? 'شركة "Sixth of October Development and Investment Company" — مطور عقاري حائز على جوائز يلبي الاحتياجات المتزايدة للإسكان السكني والتجاري وتجارة التجزئة في مصر. تقودها رؤية تقدمية تضع الابتكار في صميم كل ما تفعله.'
                : "SODIC's \"Sixth of October Development and Investment Company\" award-winning developments cater to the country's ever-growing need for quality residential, commercial, and retail property. SODIC is driven by a progressive vision that places innovation at the heart of everything it does."}
            </p>
            {/* New Launch Card */}
            <div className="border-2 border-foreground p-5">
              <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1">{isAr ? "طرح جديد" : "NEW LAUNCH"}</p>
              <h3 className="text-lg font-black text-foreground mb-0.5">
                <span className="text-primary">SODIC</span> {isAr ? "مدينة المستقبل" : "MOSTAKBAL CITY"}
              </h3>
              <p className="text-xs text-muted-foreground tracking-wide mb-3">{isAr ? "مدينة المستقبل، القاهرة" : "EAST CAIRO, EGYPT"}</p>
              <ul className="space-y-1 mb-4">
                {(isAr ? ["أسعار تبدأ من ٨.٥ مليون جنيه", "أقساط مرنة حتى ١٠ سنوات", "تسليم فوري لبعض الوحدات"] : ["Prices starting from 8.5M EGP", "Fully flexible payment terms", "2–3 bedrooms"]).map((item, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-center gap-2"><span className="text-primary">●</span>{item}</li>
                ))}
              </ul>
              <div className="flex gap-3">
                <a href="https://wa.me/201110944499" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-green-500 text-white flex items-center justify-center text-xs font-bold hover:bg-green-600 transition-colors">W</a>
                <a href="tel:+201110944499"
                  className="w-9 h-9 bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src="https://prod-images.nawy.com/processed/compound_image/image/6329/default.webp" alt="SODIC" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
