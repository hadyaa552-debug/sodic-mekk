export default function Footer({ lang }: { lang: "en" | "ar" }) {
  const isAr = lang === "ar"
  return (
    <footer className="bg-foreground text-white py-6 pb-20 lg:pb-6 px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-3" dir={isAr ? "rtl" : "ltr"}>
      <span className="text-lg font-black tracking-widest">SODIC</span>
      <span className="text-xs text-white/30 text-center">© 2026 SODIC Developments | Grandeur Spaces – {isAr ? "وكيل معتمد" : "Authorized Agent"}</span>
    </footer>
  )
}
