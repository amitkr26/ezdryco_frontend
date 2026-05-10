import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";

const NEAR_ME_FAQS = [
  { q: "Do I need to pack my clothes before pickup?", a: "No, just keep them ready in any bag. Our rider will transfer them to a reusable EZDRY bag." },
  { q: "Can I schedule a pickup for a specific time?", a: "Yes, you can choose a convenient 2-hour time slot for pickup during booking." },
  { q: "Is there a minimum order amount for free pickup?", a: "Pickup is available throughout Narnaul. Any charges or convenience fees are shown clearly at checkout." }
];

const LOCALITIES = [
  { name: "Old Narnaul", detail: "Market area, old city lanes" },
  { name: "New Colony", detail: "Residential colony sector" },
  { name: "Mandi Area", detail: "Near grain market, main bazaar" },
  { name: "Bus Stand Area", detail: "Commercial hub, nearby streets" },
  { name: "Sadar Bazar", detail: "Central market area" },
  { name: "Housing Board", detail: "Colony sectors" },
  { name: "Haryana Colony", detail: "Residential blocks" },
  { name: "Mahendragarh Road", detail: "Along highway to Mahendragarh" },
];

export default function LaundryNearMeNarnaul() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Laundry Near Me in Narnaul | Pickup & Delivery at Your Door — EZDRY",
    description: "Looking for laundry near you in Narnaul? EZDRY picks up from your door — no trip needed. Available across all Narnaul localities with transparent pricing. Book now.",
    canonical: "https://ezdry.in/laundry-near-me-narnaul",
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
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Service Coverage: All of Narnaul</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.95] mb-8 tracking-tighter">
              Laundry Near <br />
              <span className="text-indigo-600">Me in Narnaul</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mb-12 leading-relaxed font-medium">
              The search for "laundry near me" ends here. We don't just exist in your neighborhood — we exist at your doorstep. 
              Pickup, clean, and deliver — anywhere in Narnaul.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button onClick={() => navigate("/customer/book")}
                className="h-16 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black px-10 text-lg shadow-xl shadow-indigo-200">
                Book Pickup Near You <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM WE SOLVE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-16 text-center">Beyond the Local Dhobi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "😫", title: "The Lugging Stress", desc: "No more carrying heavy bags through Narnaul's busy streets. We handle the heavy lifting." },
              { icon: "🛡️", title: "Zero Quality Risk", desc: "Traditional dhobis lack accountability. We provide insured care and professional solvents." },
              { icon: "📱", title: "Digital Visibility", desc: "Know exactly where your clothes are. From pickup to delivery, track it all on WhatsApp." },
            ].map((p) => (
              <div key={p.title} className="bg-neutral-50 rounded-[2.5rem] p-10 border border-transparent hover:border-indigo-100 transition-all group">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{p.icon}</div>
                <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight">{p.title}</h3>
                <p className="text-sm text-gray-400 font-bold leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-indigo-600 rounded-[3rem] p-12 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
            <p className="text-3xl font-black mb-4 tracking-tight">The Modern Way to Laundry</p>
            <p className="text-indigo-100 text-lg font-medium max-w-2xl mx-auto">Narnaul's families are switching to EZDRY for a stress-free experience. 7 days a week, 8 AM to 8 PM.</p>
          </div>
        </div>
      </section>

      {/* LOCALITIES */}
      <section className="py-24 px-6 bg-neutral-50 rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Serving Every Sector</h2>
            <p className="text-gray-500 mt-2 text-lg font-medium">Our riders are active across all major Narnaul zones.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {LOCALITIES.map((loc) => (
              <div key={loc.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-indigo-600 transition-all group">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
                  <p className="font-black text-gray-900 text-sm tracking-tight">{loc.name}</p>
                </div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-7">{loc.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-16 tracking-tight text-center">How We Compare</h2>
          <div className="overflow-x-auto rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50">
            <table className="w-full bg-white text-sm">
              <thead className="bg-gray-900 text-white">
                <tr>
                  <th className="text-left px-8 py-6 font-black uppercase tracking-widest text-[10px]">Factor</th>
                  <th className="text-center px-8 py-6 font-black uppercase tracking-widest text-[10px] opacity-60">Traditional Dhobi</th>
                  <th className="text-center px-8 py-6 font-black uppercase tracking-widest text-[10px] text-indigo-400">EZDRY Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Travel Logistics", "You carry the load", "We pickup from door"],
                  ["Pricing Model", "Negotiation-based", "Fixed, public rates"],
                  ["Service Scope", "Basic washing only", "Professional Dry Cleaning"],
                  ["Order Tracking", "None (Call & Ask)", "WhatsApp Real-time"],
                  ["Safety Net", "No guarantee", "Fully Insured"],
                ].map(([factor, dhobi, ezdry]) => (
                  <tr key={factor} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="px-8 py-6 font-black text-gray-900 tracking-tight">{factor}</td>
                    <td className="px-8 py-6 text-center text-gray-400 font-bold">{dhobi}</td>
                    <td className="px-8 py-6 text-center text-indigo-600 font-black italic">{ezdry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="py-24 px-6 bg-neutral-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-gray-900 mb-20 tracking-tight text-center">Fast-Track Your Booking</h2>
          <div className="grid sm:grid-cols-4 gap-12">
            {[
              { num: "01", icon: "📱", title: "Open EZDRY", desc: "No apps. Just ezdry.in on your phone." },
              { num: "02", icon: "🏠", title: "Set Address", desc: "Enter any lane or colony in Narnaul." },
              { num: "03", icon: "🧺", title: "Pick Service", desc: "Choose care type & time slot." },
              { num: "04", icon: "🎁", title: "Relax", desc: "Rider arrives. Clothes cleaned. Returned." },
            ].map((step) => (
              <div key={step.num} className="text-center group">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{step.icon}</div>
                <div className="text-xs font-black text-indigo-100 mb-2 tracking-widest">{step.num}</div>
                <h3 className="text-lg font-black text-gray-900 mb-2 tracking-tight">{step.title}</h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion
        items={NEAR_ME_FAQS}
        heading="Local Logistics Intelligence"
        bg="bg-white"
      />

      {/* FINAL CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
           <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Stop Searching. Start Booking.</h2>
           <p className="text-indigo-100 text-lg mb-12 max-w-xl mx-auto font-medium">The most convenient laundry service in Narnaul is just 60 seconds away.</p>
           <Button onClick={() => navigate("/customer/book")}
             className="h-20 bg-white text-indigo-600 hover:bg-indigo-50 rounded-3xl font-black px-12 text-xl shadow-2xl shadow-indigo-900/20">
             Schedule My Pickup <ChevronRight className="w-5 h-5 ml-2" />
           </Button>
        </div>
      </section>

    </PublicLayout>
  );
}
