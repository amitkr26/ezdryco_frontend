import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";

const DRY_CLEAN_FAQS = [
  { q: "How long does dry cleaning take in Narnaul?", a: "Standard: 48–72 hours from pickup. Heavy items like blankets and curtains: allow up to 96 hours." },
  { q: "Is dry cleaning safe for my silk saree?", a: "Yes — silk responds well to dry cleaning and poorly to water washing. We recommend dry cleaning for all silk garments." },
  { q: "Can dry cleaning remove all stains?", a: "Most stains are removed successfully. Old or dye-based stains may not fully come out. We inform you before returning the garment." },
  { q: "What should I tell you before pickup?", a: "Mention any specific stains or concerns in the order notes or tell our pickup agent. It helps us pre-treat correctly." },
  { q: "Do you dry clean wedding outfits in Narnaul?", a: "Yes. For sherwanis, lehengas, and bridal wear — book at least 7 days before the event." },
];

const DRY_CLEAN_ITEMS = [
  { icon: "🤵", cat: "Formal Wear", items: ["Suit (2-piece) — ₹280", "Blazer — ₹180", "Formal trousers — ₹120", "Waistcoat — ₹100"] },
  { icon: "🥻", cat: "Indian Traditional Wear", items: ["Silk saree — ₹200", "Cotton/chiffon saree — ₹160", "Lehenga — ₹350+", "Sherwani — ₹350"] },
  { icon: "🧥", cat: "Woolen & Winter Clothes", items: ["Woolen coat — ₹200", "Sweater/cardigan — ₹150", "Blanket — ₹250", "Jacket — ₹180"] },
  { icon: "🪟", cat: "Home Textiles", items: ["Curtain (per panel) — ₹180", "Sofa cover (per seat) — ₹150", "Quilt/comforter — ₹300", "Tablecloth — ₹100"] },
];

export default function DryCleaningNarnaul() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Dry Cleaning Service in Narnaul | Suits, Sarees, Woolens — EZDRY",
    description: "Professional dry cleaning in Narnaul, Haryana. Free doorstep pickup for suits, silk sarees, woolens, sherwanis. Starting ₹120/item. 48–72 hr turnaround. Book EZDRY.",
    canonical: "https://ezdry.in/dry-cleaning-narnaul",
    // AEO/GEO: FAQ schema for AI search visibility
    faqs: DRY_CLEAN_FAQS.map(f => ({ question: f.q, answer: f.a })),
  });

  return (
    <PublicLayout>

      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-50/50 to-white py-24 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] -z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
             <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-indigo-100 mb-8">
               <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Narnaul's Specialized Fabric Care</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.95] mb-8 tracking-tighter">
              Premium Dry <br />
              <span className="text-indigo-600">Cleaning Narnaul</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mb-12 leading-relaxed font-medium">
              Professional solvent-based care for your most valuable garments. 
              From silk sarees to designer sherwanis, we ensure zero shrinkage and vibrant color preservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button onClick={() => navigate("/customer/book")}
                className="h-16 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black px-10 text-lg shadow-xl shadow-indigo-200">
                Book Specialized Pickup <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 mt-12 border-t border-gray-100 pt-10">
              {["Safe for Silks", "Woolen Expert", "Fixed Rates", "Doorstep Return"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-400">
                  <CheckCircle className="w-4 h-4 text-indigo-600" /> {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY DRY CLEAN */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">Why Water-Free Matters</h2>
              <p className="text-gray-500 mt-2 text-lg font-medium">Science-backed garment preservation for Narnaul's climate.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                Traditional washing machines use mechanical agitation and water, which causes delicate fibers like silk and wool to swell, shrink, or lose their structural integrity.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium">
                In Narnaul's extreme dry heat, fabric fibers become brittle. Dry cleaning uses specialized solvents that lift oils and dirt without penetrating the fiber core, maintaining the "New" look for years.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { fabric: "Wool & Cashmere", risk: "Prevents matting & shrinkage." },
                { fabric: "Silk Sarees", risk: "No tide marks or distortion." },
                { fabric: "Suits & Blazers", risk: "Preserves internal structure." },
                { fabric: "Heavily Embroidered", risk: "Protects zari & beadwork." },
              ].map((item) => (
                <div key={item.fabric} className="bg-neutral-50 rounded-3xl p-6 border border-neutral-100 hover:border-indigo-100 transition-all">
                  <p className="font-black text-gray-900 text-sm mb-1">{item.fabric}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.risk}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DRY CLEAN */}
      <section className="py-24 px-6 bg-neutral-50 rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Specialized Categories</h2>
            <p className="text-gray-500 mt-2 text-lg font-medium">We handle every item with forensic attention to detail.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DRY_CLEAN_ITEMS.map((cat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                className="bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/50 border border-transparent hover:border-indigo-100 transition-all">
                <div className="text-5xl mb-6">{cat.icon}</div>
                <h3 className="text-lg font-black text-gray-900 mb-6 tracking-tight">{cat.cat}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="text-[11px] font-bold text-gray-400 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16 tracking-tight text-center">Our Scientific Process</h2>
          <div className="grid sm:grid-cols-4 gap-12">
            {[
              { num: "01", title: "Forensic Audit", desc: "Inspection of every seam and button before tagging." },
              { num: "02", title: "Precision Spotting", desc: "Chemical pre-treatment of stains by fabric type." },
              { num: "03", title: "Solvent Cycle", desc: "Gentle cleaning in closed-loop professional machines." },
              { num: "04", title: "Hand Finishing", desc: "Steam pressing and premium protective packaging." },
            ].map((step) => (
              <div key={step.num} className="text-center relative">
                <div className="text-5xl font-black text-indigo-50 mb-6">{step.num}</div>
                <h3 className="text-lg font-black text-gray-900 mb-3 tracking-tight">{step.title}</h3>
                <p className="text-xs text-gray-400 font-bold leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        items={DRY_CLEAN_FAQS}
        heading="Dry Cleaning Intelligence"
        bg="bg-neutral-50"
      />

      {/* FINAL CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 text-white rounded-[3.5rem] p-16 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full -ml-32 -mt-32 blur-3xl" />
           <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Preserve Your Wardrobe Today</h2>
           <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-medium">Schedule a pickup and let Narnaul's fabric experts handle the rest.</p>
           <Button onClick={() => navigate("/customer/book")}
             className="h-20 bg-indigo-600 text-white hover:bg-indigo-700 rounded-3xl font-black px-12 text-xl shadow-2xl shadow-indigo-900/40">
             Book Pickup Now <ChevronRight className="w-5 h-5 ml-2" />
           </Button>
        </div>
      </section>

    </PublicLayout>
  );
}
