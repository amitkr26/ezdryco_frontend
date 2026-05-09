import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";

const STEPS = [
  {
    num: "01", icon: "📱", title: "Book in 60 Seconds",
    desc: "Open EZDRY, select your services (wash, dry clean, iron), choose a pickup time, and enter your Narnaul address. No app download needed.",
    detail: ["Pick your service type", "Select a time slot (8 AM – 8 PM)", "Enter your Narnaul address", "Confirm booking — done!"],
  },
  {
    num: "02", icon: "🚴", title: "We Pickup from Your Door",
    desc: "Our local Narnaul partner arrives at your doorstep at the chosen time. Hand over your clothes in any bag — we provide clean bags on return.",
    detail: ["On-time arrival guaranteed", "Hand over in any bag", "Instant WhatsApp confirmation", "Unique tag assigned to your order"],
  },
  {
    num: "03", icon: "✨", title: "Expert Cleaning",
    desc: "Your clothes are processed by verified local partners using professional machines. Each item is handled individually — never mixed with other orders.",
    detail: ["Professional-grade detergents", "Fabric-specific care", "Quality inspection on every item", "WhatsApp update when done"],
  },
  {
    num: "04", icon: "🎁", title: "Delivered Fresh to Your Door",
    desc: "Clean, folded or pressed clothes delivered back to your Narnaul address with fast turnaround — neatly packed and sealed.",
    detail: ["Delivered in sealed bags", "Folded or hung as requested", "Fast processing and delivery", "Same-day express available"],
  },
];

const FAQS = [
  { q: "How far in advance do I need to book?", a: "You can book same-day pickup if you book before 10 AM. Otherwise, next-day pickup is always available." },
  { q: "What if I'm not home during pickup?", a: "You can leave clothes with a family member or at the gate. Just mention it in the order notes." },
  { q: "How do I track my order?", a: "You'll receive WhatsApp updates at pickup, during cleaning, and when out for delivery. You can also track in the app." },
  { q: "What if something goes wrong with my clothes?", a: "Every order is insured. If anything is damaged or lost, we cover the cost. All items get a unique tag before processing." },
  { q: "Can I give specific instructions for my clothes?", a: "Yes. Add notes for any garment in the order — cold wash, hang dry, light starch — our team will follow them." },
];

export default function HowItWorks() {
  const [, navigate] = useLocation();

  useSEO({
    title: "How EZDRY Works — Laundry Pickup & Delivery in Narnaul",
    description: "Book, pickup, clean, deliver — EZDRY's laundry service in Narnaul is 4 simple steps. Free doorstep pickup, WhatsApp tracking, fast turnaround.",
    canonical: "https://ezdry.in/how-it-works",
  });

  return (
    <PublicLayout>
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-50/50 via-white to-white py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] -z-0" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
             <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-sm border border-indigo-100 mb-8">
               <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">The Seamless Logistics Model</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-10 leading-[0.95] tracking-tighter">
              Simplified <br /><span className="text-indigo-600 italic">For Your Life.</span>
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
              Four surgical steps from order to fresh clothes at your doorstep. We handle the complexity; you enjoy the results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STEPS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <div className="text-[12rem] font-black text-indigo-50 absolute -top-32 -left-10 -z-10 select-none">
                  {step.num}
                </div>
                <div className="text-7xl mb-10">{step.icon}</div>
                <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">{step.title}</h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium">{step.desc}</p>
                <Button onClick={() => navigate("/customer/register")}
                  className="h-16 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl px-8 text-lg font-black shadow-xl shadow-indigo-100 group transition-all">
                  Get Started <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="bg-neutral-50 rounded-[3rem] p-12 border border-gray-100 shadow-xl shadow-gray-200/50">
                <p className="text-[10px] font-black text-indigo-600 mb-8 uppercase tracking-[0.3em]">Operational Protocol</p>
                <div className="space-y-6">
                  {step.detail.map((d, j) => (
                    <div key={j} className="flex items-start gap-5 group">
                      <div className="w-8 h-8 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        {j + 1}
                      </div>
                      <p className="text-sm text-gray-900 font-bold leading-relaxed tracking-tight">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <FAQAccordion
        items={FAQS}
        heading="Logistics FAQ"
        bg="bg-neutral-50"
      />

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3.5rem] p-20 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full -mr-32 -mt-32 blur-3xl" />
           <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight italic">Ready to Reclaim Your Time?</h2>
           <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-medium">Book your first EZDRY pickup in Narnaul. Free delivery on orders above ₹299.</p>
           <Button onClick={() => navigate("/customer/register")}
             className="h-20 bg-indigo-600 text-white hover:bg-indigo-700 rounded-3xl font-black px-12 text-xl shadow-2xl shadow-indigo-900/40">
             Book Pickup Now <ChevronRight className="w-5 h-5 ml-2" />
           </Button>
        </div>
      </section>
    </PublicLayout>
  );
}
