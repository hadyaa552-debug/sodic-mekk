export default function MobileBottomBar({ lang }: { lang: "en" | "ar" }) {
  const isAr = lang === "ar"
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden grid grid-cols-2 shadow-lg">
      <a href="tel:+201110944499" className="flex items-center justify-center py-4 bg-primary text-white font-black text-xs tracking-widest uppercase">{isAr ? "📞 اتصل" : "📞 CALL"}</a>
      <a href="https://wa.me/201110944499" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-4 bg-green-500 text-white font-black text-xs tracking-widest uppercase">💬 WhatsApp</a>
    </div>
  )
}
