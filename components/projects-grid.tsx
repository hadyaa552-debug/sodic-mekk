export default function ProjectsGrid({ lang }: { lang: "en" | "ar" }) {
  const isAr = lang === "ar"
  const projects = [
    { label: isAr ? "إطلاق قريباً" : "Launching Now", name: isAr ? "East Vale\nمدينة المستقبل" : "East Vale\nMostakbal City, Egypt", img: "https://prod-images.nawy.com/processed/compound_image/image/6330/default.webp", id: "eastvale" },
    { label: "VYE", name: isAr ? "VYE\nنيو زايد، مصر" : "VYE\nNew Zayed, Egypt", img: "https://prod-images.nawy.com/processed/compound_image/image/13147/default.webp", id: "vye" },
    { label: "CAESAR / JUNE", name: isAr ? "June\nالساحل الشمالي، مصر" : "June\nNorth Coast, Egypt", img: "https://prod-images.nawy.com/processed/compound_image/image/11804/default.webp", id: "june" },
  ]
  return (
    <section id="projects" className="py-16 bg-muted/30" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-2xl font-black text-foreground mb-8">{isAr ? "المشاريع" : "Projects"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <a key={i} href={`#${p.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" }) }}
              className="relative overflow-hidden group cursor-pointer block">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <p className="text-xs font-bold tracking-widest uppercase opacity-70 mb-1">{p.label}</p>
                <p className="text-base font-black leading-tight" style={{ whiteSpace: "pre-line" }}>{p.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
