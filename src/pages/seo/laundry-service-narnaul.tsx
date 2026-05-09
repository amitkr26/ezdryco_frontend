import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";

const FAQS = [
  { q: "Which areas do you serve in Narnaul?", a: "We serve all localities within Narnaul including Old Narnaul, New Colony, Mandi area, Bus Stand area, and surrounding neighbourhoods in Mahendragarh district." },
  { q: "How long does laundry take?", a: "Wash & fold is usually ready next business day. Dry cleaning may take slightly longer. Same-day express is available if booked before 10 AM." },
  { q: "What is the minimum order?", a: "There is no fixed minimum order amount. Prices are transparent and shown clearly during booking." },
  { q: "Is delivery free in Narnaul?", a: "Yes — delivery is free on orders above ₹299 within Narnaul." },
  { q: "Are my clothes safe?", a: "Yes. Every item is tagged with your unique order ID before processing. We've delivered hundreds of orders without a single lost-item complaint." },
  { q: "Do you operate on Sundays?", a: "Yes. We're open 7 days a week, 8 AM to 8 PM." },
];

const SERVICES = [
  { icon: "🧺", title: "Wash & Fold", desc: "Everyday clothes washed, dried, and neatly folded. From ₹25/item.", href: "/customer/register" },
  { icon: "👔", title: "Dry Cleaning", desc: "Suits, sherwanis, silk dupattas — solvent-cleaned to preserve fabric. From ₹120/item.", href: "/customer/register" },
  { icon: "♨️", title: "Ironing & Steam Press", desc: "Crisp, wrinkle-free clothes every time. Professional steam iron. From ₹10/item.", href: "/customer/register" },
  { icon: "⚡", title: "Express Same-Day", desc: "Book before 10 AM, back by 7 PM. Available in Narnaul. +₹49 surcharge.", href: "/customer/register" },
];

export default function LaundryServiceNarnaul() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Best Laundry Service in Narnaul | Free Pickup & Delivery — EZDRY",
    description: "Professional laundry, dry cleaning & ironing in Narnaul, Haryana. Free doorstep pickup. Trusted local partners. Fast turnaround and transparent pricing. Book EZDRY now.",
    canonical: "https://ezdry.in/laundry-service-narnaul",
    // AEO/GEO: FAQ schema for AI search visibility and featured snippets
    faqs: FAQS.map(f => ({ question: f.q, answer: f.a })),
  });

  return (
    <PublicLayout>

      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-50/50 to-white py-24 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] -z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-indigo-100 mb-8">
               <MapPin className="w-4 h-4 text-indigo-600" />
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Narnaul, Haryana — Serving All Localities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.95] mb-8 tracking-tighter">
              Laundry & Dry <br />
              <span className="text-indigo-600">Cleaning Narnaul</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mb-12 leading-relaxed font-medium">
              Narnaul's most reliable cloth spa — wash & fold, premium dry cleaning, and expert ironing. 
              Get free doorstep pickup and express delivery within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                onClick={() => navigate("/customer/register")}
                className="h-16 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black px-10 text-lg shadow-xl shadow-indigo-200"
              >
                Book Narnaul Pickup <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => navigate("/dry-cleaning-narnaul")}
                variant="outline"
                className="h-16 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-2xl font-black px-10 text-lg"
              >
                View Dry Cleaning Rates
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 mt-12 border-t border-gray-100 pt-10">
              {["Free pickup & delivery", "24hr Fast Return", "Fixed Pricing", "7 Days Open"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-400">
                  <CheckCircle className="w-4 h-4 text-indigo-600" /> {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-gray-900 tracking-tight">Professional Care for Narnaul</h2>
              <p className="text-gray-500 mt-2 text-lg font-medium">Everything your wardrobe needs — picked up and delivered.</p>
            </div>
            <Button onClick={() => navigate("/pricing")} variant="ghost" className="text-indigo-600 font-black uppercase tracking-widest text-xs hover:bg-indigo-50">
               Full Price List →
            </Button>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-neutral-50 rounded-[2.5rem] p-10 border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-2xl transition-all cursor-pointer group"
                onClick={() => navigate(s.href)}
              >
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-xl font-black text-gray-900 mb-3 tracking-tight">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium mb-6">{s.desc}</p>
                <div className="h-1.5 w-12 bg-indigo-100 rounded-full group-hover:w-full group-hover:bg-indigo-600 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-indigo-600 rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white tracking-tight">The 3-Step Freshness Cycle</h2>
            <p className="text-indigo-100 mt-2 text-lg font-medium">Streamlined laundry management for Narnaul residents.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-12">
            {[
              { num: "01", icon: "📱", title: "Instant Booking", desc: "Select your garments and pickup time on our mobile-friendly site. No app download required." },
              { num: "02", icon: "🚴", title: "Safe Collection", desc: "Our verified Narnaul rider collects your bag from your doorstep with contactless handoff." },
              { num: "03", icon: "✨", title: "Premium Delivery", desc: "Cleaned, pressed, and neatly packed clothes returned to you within the promised window." },
            ].map((step) => (
              <div key={step.num} className="bg-indigo-500/30 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 relative">
                <div className="text-indigo-100 font-black text-7xl opacity-10 absolute top-6 right-8">{step.num}</div>
                <div className="text-4xl mb-6">{step.icon}</div>
                <h3 className="text-xl font-black text-white mb-3 tracking-tight">{step.title}</h3>
                <p className="text-sm text-indigo-100 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EZDRY */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight leading-none">Why Narnaul's Elite <br /> Trust EZDRY</h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium mb-10">
                Traditional laundry often lacks the precision delicate garments require. We combine local expertise with modern technology to provide a "Cloth Spa" experience that preserves your wardrobe for years.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Transparency First", desc: "Real-time updates and fixed per-item pricing. No hidden costs." },
                  { title: "Expert Dry Cleaning", desc: "Gentle solvents and precise heat control for silks and woolens." },
                  { title: "Local Partner Network", desc: "Only the top-rated laundry shops in Narnaul are part of EZDRY." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-black text-gray-900 tracking-tight">{item.title}</p>
                      <p className="text-sm text-gray-400 font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-indigo-50 rounded-[3rem] p-12 border border-indigo-100">
               <div className="space-y-8">
                  <div className="flex items-center gap-6">
                     <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl shadow-indigo-100 text-3xl">🛡️</div>
                     <div>
                        <p className="text-xl font-black text-gray-900 tracking-tight">100% Insured</p>
                        <p className="text-sm text-gray-400 font-bold">Every garment is covered by our safety guarantee.</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl shadow-indigo-100 text-3xl">🚀</div>
                     <div>
                        <p className="text-xl font-black text-gray-900 tracking-tight">Express Advantage</p>
                        <p className="text-sm text-gray-400 font-bold">Same-day service available for emergency needs.</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-xl shadow-indigo-100 text-3xl">🌍</div>
                     <div>
                        <p className="text-xl font-black text-gray-900 tracking-tight">Eco-Friendly</p>
                        <p className="text-sm text-gray-400 font-bold">We use non-toxic detergents safe for you and Narnaul.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="py-24 px-6 bg-neutral-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Fair & Fixed Rates</h2>
            <p className="text-gray-500 mt-2 font-bold uppercase tracking-widest text-[10px]">No Surprises. No Hidden Fees.</p>
          </div>
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
            <div className="grid grid-cols-3 bg-indigo-600 p-6 text-white">
              <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Service Category</div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Starting Rate</div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-80">Popular Examples</div>
            </div>
            <div className="divide-y divide-gray-100">
                {[
                  ["Wash & Fold", "₹25/item", "Shirts, T-shirts, Jeans"],
                  ["Dry Cleaning", "₹120/item", "Suits, Sarees, Blazers"],
                  ["Steam Ironing", "₹10/item", "Formal Shirts, Trousers"],
                  ["Bulk/Bedding", "₹80/piece", "Blankets, Curtains, Rugs"],
                ].map(([svc, price, ex]) => (
                  <div key={svc} className="grid grid-cols-3 p-8 hover:bg-indigo-50/30 transition-colors">
                    <div className="font-black text-gray-900">{svc}</div>
                    <div className="font-black text-indigo-600">{price}</div>
                    <div className="text-sm font-bold text-gray-400 italic">{ex}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <FAQAccordion
        items={FAQS}
        heading="Narnaul Laundry Intelligence"
        bg="bg-white"
      />

      {/* FINAL CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
           <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Ready for a Cleaner Wardrobe?</h2>
           <p className="text-indigo-100 text-lg mb-12 max-w-xl mx-auto font-medium">Join 500+ happy Narnaul families. Your first order is backed by our quality guarantee.</p>
           <Button onClick={() => navigate("/customer/register")}
             className="h-20 bg-white text-indigo-600 hover:bg-indigo-50 rounded-3xl font-black px-12 text-xl shadow-2xl shadow-indigo-900/20">
             Start Your Order <ChevronRight className="w-5 h-5 ml-2" />
           </Button>
        </div>
      </section>

    </PublicLayout>
  );
}
