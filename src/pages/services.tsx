import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Clock, Shield, Star, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ReviewsSection } from "@/components/ReviewsSection";

const SERVICES = [
  {
    id: "wash-fold",
    icon: "🧺",
    title: "Wash & Fold",
    tagline: "Everyday Laundry, Done Right",
    desc: "We pick up your everyday clothes, wash them with premium detergents, dry them perfectly, and fold them neatly. No more weekends wasted at the laundromat.",
    features: ["Cotton, linen, synthetics", "Gentle machine wash", "Folded & bagged clean", "Fast pickup and delivery"],
    price: "From ₹25/item",
    items: [["Shirt / T-shirt", "₹25"], ["Trousers / Jeans", "₹35"], ["Salwar Kameez", "₹60"], ["Bedsheet", "₹70"], ["Towel", "₹30"]],
    color: "from-sky-400 to-sky-600",
  },
  {
    id: "dry-cleaning",
    icon: "👔",
    title: "Dry Cleaning",
    tagline: "Professional Care for Premium Fabrics",
    desc: "Suits, silk sarees, sherwanis, woolen shawls — our dry cleaning uses professional-grade solvents to clean without water damage. Ideal for Narnaul's wedding season and winter wardrobe.",
    features: ["Suits, blazers, sherwanis", "Silk sarees & dupattas", "Woolens & coats", "Embroidered garments"],
    price: "From ₹120/item",
    items: [["Suit (2-piece)", "₹280"], ["Blazer", "₹180"], ["Silk Saree", "₹200"], ["Sherwani", "₹350"], ["Woolen Coat", "₹200"]],
    color: "from-indigo-400 to-indigo-600",
  },
  {
    id: "ironing",
    icon: "♨️",
    title: "Steam Ironing",
    tagline: "Crisp, Wrinkle-Free Every Time",
    desc: "Professional steam pressing gives your clothes a sharp, ready-to-wear finish. Perfect for office shirts, formal trousers, and occasion wear in Narnaul.",
    features: ["Steam & dry press", "All fabric types", "Hang-ready finish", "Same-day available"],
    price: "From ₹10/item",
    items: [["Shirt", "₹12"], ["Trousers", "₹15"], ["Saree", "₹35"], ["Kurta", "₹18"], ["Suit (press only)", "₹60"]],
    color: "from-emerald-400 to-emerald-600",
  },
];

const FAQS = [
  { q: "Which service is right for my clothes?", a: "Everyday cotton and synthetics go for Wash & Fold. Suits, silk, and woolens need Dry Cleaning. If your clothes just need a crease removed, Steam Ironing is perfect." },
  { q: "Can I mix services in one order?", a: "Yes. Add any combination — wash some items, dry-clean others, iron a few — all in a single pickup." },
  { q: "How do I know my clothes won't be mixed with someone else's?", a: "Every order gets a unique tracking tag. Your clothes are processed separately and returned in sealed bags with your order ID." },
  { q: "Do you offer same-day service in Narnaul?", a: "Yes — Express Same-Day is available if booked before 10 AM. A ₹49 surcharge applies. Your clothes return by 7 PM." },
];

export default function Services() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Laundry & Dry Cleaning Services in Narnaul — EZDRY",
    description: "Wash & Fold, Dry Cleaning, and Steam Ironing with free doorstep pickup in Narnaul. Professional service from ₹25/item. Book EZDRY today.",
    canonical: "https://ezdry.in/services",
  });

  return (
    <PublicLayout>
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-50/50 via-white to-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] -z-0" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-[2.5rem] shadow-sm border border-indigo-100 mb-8">
               <Sparkles className="w-4 h-4 text-indigo-600" />
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Service Catalog — Narnaul, Haryana</span>
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-[0.95] tracking-tighter">
              Clothing Care <br /><span className="text-indigo-600 italic">For Every Need.</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              Three professional service verticals designed to keep your wardrobe fresh, organized, and preserved. Pickup to delivery in 24-48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <div className="space-y-6 pb-24">
        {SERVICES.map((svc, i) => (
          <section key={svc.id} id={svc.id} className={`py-24 px-6 rounded-[2.5rem] mx-6 ${i % 2 === 1 ? "bg-neutral-50" : "bg-white border border-gray-100 shadow-sm"}`}>
            <div className="max-w-7xl mx-auto">
              <div className={`grid md:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                  <div className={`w-24 h-24 rounded-[2.5rem] bg-indigo-600 flex items-center justify-center text-4xl mb-10 shadow-2xl shadow-indigo-100`}>
                    {svc.icon}
                  </div>
                  <p className="text-indigo-600 font-black text-xs uppercase tracking-[0.2em] mb-4">{svc.tagline}</p>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{svc.title}</h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">{svc.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {svc.features.map((f) => (
                      <div key={f} className="flex items-center gap-3 text-sm font-bold text-gray-600 bg-white/50 p-3 rounded-[2.5rem] border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <Button onClick={() => navigate("/customer/book")}
                    className="h-16 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[2.5rem] px-10 text-lg font-black shadow-xl shadow-indigo-100 transition-all hover:scale-[1.02]">
                    Book {svc.title} <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                  <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden">
                    <div className={`bg-gray-900 p-8 text-white`}>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-2">Pricing Guideline</p>
                          <p className="text-2xl font-black tracking-tight italic">Standard Rates</p>
                        </div>
                        <div className="text-right">
                           <p className="text-indigo-400 font-black text-xl">{svc.price}</p>
                        </div>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-50">
                      {svc.items.map(([item, price]) => (
                        <div key={item} className="flex justify-between items-center px-10 py-6 hover:bg-indigo-50/50 transition-colors">
                          <span className="text-gray-900 font-black tracking-tight">{item}</span>
                          <span className="text-indigo-600 font-black">{price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-8 bg-neutral-50 border-t border-gray-50 text-center">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4 text-indigo-600" /> Insured Processing Guarantee
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* TRUST BADGES */}
      <section className="py-24 px-6 bg-gray-900 rounded-[2.5rem] mx-6 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { icon: <Clock className="w-8 h-8" />, label: "Express Turnaround", desc: "Same-day available" },
            { icon: <Shield className="w-8 h-8" />, label: "Insured Care", desc: "Garment protection" },
            { icon: <Star className="w-8 h-8" />, label: "Top Rated", desc: "Narnaul's favorite" },
            { icon: <CheckCircle className="w-8 h-8" />, label: "Always Open", desc: "7 days a week" },
          ].map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-4 text-white">
              <div className="text-indigo-400 mb-2">{b.icon}</div>
              <div className="space-y-1">
                 <p className="text-sm font-black uppercase tracking-widest">{b.label}</p>
                 <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQAccordion
        items={FAQS}
        heading="Service Intelligence"
        bg="bg-white"
      />

      <ReviewsSection />

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[2.5rem] p-20 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
           <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Experience the <br /><span className="italic">Cloth Spa</span> Standard</h2>
           <p className="text-indigo-100 text-xl mb-12 max-w-2xl mx-auto font-medium">Join thousands of Narnaul residents who trust us with their wardrobe. First order ₹50 off.</p>
           <Button onClick={() => navigate("/customer/book")}
             className="h-20 bg-white text-indigo-600 hover:bg-indigo-50 rounded-[2.5rem] font-black px-12 text-xl shadow-2xl shadow-indigo-900/20">
             Start Your Journey <ChevronRight className="w-5 h-5 ml-2" />
           </Button>
        </div>
      </section>
    </PublicLayout>
  );
}
