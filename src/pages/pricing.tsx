import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PriceChecker } from "@/components/PriceChecker";
import { ReviewsSection } from "@/components/ReviewsSection";

const PLANS = [
  {
    id: "basic",
    name: "Pay Per Order",
    tagline: "Perfect for occasional use",
    badge: null,
    price: "No subscription",
    sub: "Pay only when you order",
    features: [
      "Wash & Fold from ₹25/item",
      "Dry Cleaning from ₹120/item",
      "Steam Iron from ₹10/item",
      "Free pickup above ₹299",
      "Fast turnaround",
      "WhatsApp tracking",
    ],
    cta: "Start Ordering",
    highlight: true,
  },
];

const PRICE_ITEMS = [
  { category: "Wash & Fold", items: [["Shirt / T-shirt", "₹25"], ["Trousers / Jeans", "₹35"], ["Kurta / Salwar set", "₹60"], ["Bedsheet", "₹70"], ["Towel", "₹30"], ["Jacket (light)", "₹80"]] },
  { category: "Dry Cleaning", items: [["Suit (2-piece)", "₹280"], ["Blazer", "₹180"], ["Silk Saree", "₹200"], ["Sherwani", "₹350"], ["Woolen Coat", "₹200"], ["Lehenga", "₹350+"]] },
  { category: "Steam Ironing", items: [["Shirt", "₹12"], ["Trousers", "₹15"], ["Kurta", "₹18"], ["Saree", "₹35"], ["Suit press", "₹60"], ["Bedsheet press", "₹30"]] },
];

const FAQS = [
  { q: "Is there a minimum order value?", a: "No. You can order anytime and pay per item. Free pickup applies on orders above ₹299." },
  { q: "How is per-kg pricing different from per-item?", a: "EZDRY charges per item, not per kg. This means light, expensive garments aren't overcharged and you always know the price upfront." },
  { q: "Are there hidden charges?", a: "No. All prices are listed here. The only add-on is Express Same-Day (+₹49 per order if booked before 10 AM)." },
  { q: "Do plan prices include dry cleaning?", a: "Subscription plans are not shown here. All customer bookings are handled as pay-per-order services." },
];

export default function Pricing() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Laundry Pricing in Narnaul — Transparent Rates | EZDRY",
    description: "Clear, per-item laundry pricing in Narnaul. Wash & Fold from ₹25, Dry Cleaning from ₹120, Ironing from ₹10. No hidden charges. View EZDRY's full price list.",
    canonical: "https://ezdry.in/pricing",
  });

  return (
    <PublicLayout>
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-50/50 via-white to-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] -z-0" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
             <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-sm border border-indigo-100 mb-8">
               <Shield className="w-4 h-4 text-indigo-600" />
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">100% Transparent Billing</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 leading-[0.95] tracking-tighter">
              Fair Rates. <br /><span className="text-indigo-600 italic">Zero Surprises.</span>
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
              We believe in honest, per-item pricing. No complex subscriptions or hidden convenience fees. Just professional care for your budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
             <div className="md:col-span-1 py-10">
                <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-4">Pricing Model</h2>
                <p className="text-gray-500 font-medium leading-relaxed">Unlike traditional dhobis who negotiate every time, EZDRY provides a fixed, public rate list for all residents of Narnaul.</p>
             </div>
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-[2.5rem] border p-12 relative flex flex-col justify-between ${plan.highlight
                  ? "border-gray-900 bg-gray-900 text-white shadow-2xl shadow-indigo-200/50"
                  : "border-gray-100 bg-neutral-50 shadow-sm"}`}
              >
                <div>
                  <p className={`text-[10px] font-black uppercase tracking-widest mb-2 ${plan.highlight ? "text-indigo-400" : "text-gray-400"}`}>{plan.tagline}</p>
                  <h2 className={`text-2xl font-black mb-8 tracking-tight ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h2>
                  <div className="mb-10">
                    <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                    <p className={`text-xs mt-2 font-bold uppercase tracking-widest ${plan.highlight ? "text-indigo-300" : "text-gray-400"}`}>{plan.sub}</p>
                  </div>
                  <div className="space-y-4 mb-12">
                    {plan.features.map((f) => (
                      <div key={f} className={`flex items-start gap-3 text-sm font-medium ${plan.highlight ? "text-gray-400" : "text-gray-600"}`}>
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? "text-indigo-400" : "text-indigo-600"}`} /> {f}
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={() => navigate("/customer/book")}
                  className={`w-full rounded-2xl font-black h-16 text-lg transition-all hover:scale-[1.02] ${plan.highlight ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-900/50" : "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50"}`}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE TABLE */}
      <section className="py-24 px-6 bg-neutral-50 rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Standard Item Rates</h2>
            <p className="text-gray-500 mt-2 text-lg font-medium">Transparent billing for all Narnaul localities.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PRICE_ITEMS.map((cat) => (
              <div key={cat.category} className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/40">
                <div className="bg-gray-900 px-8 py-6">
                  <h3 className="text-white font-black text-xs uppercase tracking-[0.2em]">{cat.category}</h3>
                </div>
                <div className="divide-y divide-gray-50">
                  {cat.items.map(([item, price]) => (
                    <div key={item} className="flex justify-between items-center px-8 py-5 hover:bg-indigo-50/50 transition-colors">
                      <span className="text-sm font-bold text-gray-900 tracking-tight">{item}</span>
                      <span className="text-sm font-black text-indigo-600">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-white border border-indigo-100 rounded-[2rem] p-8 text-center shadow-lg shadow-indigo-100/20">
            <p className="text-gray-600 text-sm font-bold flex items-center justify-center gap-3">
              <Zap className="w-5 h-5 text-indigo-600 fill-indigo-600" />
              Express Same-Day: +₹49 per order · Free pickup on orders above ₹299
            </p>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <FAQAccordion
        items={FAQS}
        heading="Pricing Intelligence"
        bg="bg-white"
      />

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3.5rem] p-20 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
           <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Ready for a Better Experience?</h2>
           <p className="text-indigo-100 text-xl mb-12 max-w-xl mx-auto font-medium">Join 5,000+ Narnaul residents who trust EZDRY for quality and fair pricing.</p>
           <Button onClick={() => navigate("/customer/book")}
             className="h-20 bg-white text-indigo-600 hover:bg-indigo-50 rounded-3xl font-black px-12 text-xl shadow-2xl shadow-indigo-900/20">
             Schedule My Pickup <ChevronRight className="w-5 h-5 ml-2" />
           </Button>
        </div>
      </section>
    </PublicLayout>
  );
}
