import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Building2, CheckCircle, ChevronRight, MessageSquare, Shield, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";

const COMMERCIAL_FAQS = [
  { q: "Do you offer per-KG pricing for hotels?", a: "Yes, we have specialized bulk per-KG pricing for linens, towels, and bedsheets. Contact our B2B team for a custom quote based on your monthly volume." },
  { q: "What is the turnaround time for commercial orders?", a: "We offer guaranteed 24-hour turnaround for our hospitality partners in Narnaul to ensure your operations never stop." },
  { q: "Do you provide GST invoices?", a: "Absolutely. We provide valid GST invoices for all commercial bookings to help with your business tax filings." },
  { q: "Can you handle large volumes (100+ kg)?", a: "Yes, our processing facility is equipped with industrial-grade machinery capable of handling 500+ kg of laundry daily." },
];

const INDUSTRIES = [
  { 
    title: "Hotels & Guesthouses", 
    desc: "Premium linen care that impresses your guests. Crisp white sheets and fluffy towels, delivered daily.",
    icon: <Building2 className="w-8 h-8" />,
    features: ["Daily Pickup", "Stain Guarantee", "Bulk Pricing"]
  },
  { 
    title: "Hostels & PG", 
    desc: "Reliable laundry solutions for students. Managed pickup points and individual garment tracking.",
    icon: <Users className="w-8 h-8" />,
    features: ["Student Plans", "App Tracking", "Quick Return"]
  },
  { 
    title: "Restaurants & Cafes", 
    desc: "Expert cleaning for tablecloths, napkins, and staff uniforms. Grease and food stain removal experts.",
    icon: <MessageSquare className="w-8 h-8" />,
    features: ["Uniform Care", "Table Linen", "Hygienic"]
  },
];

export default function CommercialPage() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Commercial & Bulk Laundry Solutions Narnaul | Hotels, Hostels, B2B — EZDRY",
    description: "Professional bulk laundry services for hotels, hostels, and businesses in Narnaul. Guaranteed 24hr turnaround, per-KG pricing, and premium quality. Partner with EZDRY today.",
    canonical: "https://ezdry.in/commercial",
  });

  return (
    <PublicLayout>
      {/* ── HERO SECTION ── */}
      <section className="pt-20 pb-32 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-600/20 text-indigo-400 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 border border-indigo-500/30">
                <Building2 className="w-3.5 h-3.5" /> Institutional & B2B Solutions
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-10 tracking-tighter">
                Scale Your <br />
                <span className="text-indigo-500 italic">Operations.</span>
              </h1>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl font-medium">
                Narnaul's premium industrial laundry partner. We provide high-volume processing for the hospitality and education sectors with zero compromise on quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  onClick={() => navigate("/contact?type=b2b")}
                  className="h-20 bg-indigo-600 hover:bg-indigo-700 text-white rounded-3xl font-black text-xl px-12 shadow-2xl shadow-indigo-900/40 group"
                >
                  Get a Custom Quote <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-16 border-t border-white/5 pt-12">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-indigo-400 mb-1">
                    <Clock className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest text-white">24h Priority</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-500">Guaranteed turnaround for partners.</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-indigo-400 mb-1">
                    <Shield className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest text-white">Industrial Grade</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-500">High-capacity automated processing.</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-indigo-400 mb-1">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest text-white">GST Ready</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-500">Full tax compliance & reporting.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, delay: 0.2 }} 
              className="hidden lg:block relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-600/20 rounded-[5rem] rotate-3 scale-105 blur-2xl" />
                <div className="relative bg-gray-800 rounded-[5rem] border-8 border-gray-800 shadow-2xl p-2 overflow-hidden">
                  <img 
                    src="/commercial-hero-premium.png" 
                    alt="Industrial Laundry Facility Narnaul" 
                    className="w-full h-auto rounded-[4.5rem] object-cover aspect-[4/5] opacity-90"
                  />
                  <div className="absolute bottom-10 left-10 right-10 bg-gray-900/90 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 shadow-2xl text-center">
                     <p className="text-4xl font-black text-white mb-1">500+ KG</p>
                     <p className="text-indigo-400 text-xs font-black uppercase tracking-widest">Daily Processing Capacity</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Tailored B2B Solutions</h2>
            <p className="text-gray-500 mt-4 text-lg font-medium max-w-2xl mx-auto">We understand the specific requirements of different business sectors in Narnaul.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-neutral-50 rounded-[3rem] p-10 border border-transparent hover:border-indigo-100 hover:bg-white hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-indigo-100">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{industry.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-8">{industry.desc}</p>
                <ul className="space-y-3">
                  {industry.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-bold text-gray-400">
                      <CheckCircle className="w-4 h-4 text-indigo-600" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 px-6 bg-indigo-600 rounded-[4rem] mx-6 mb-24">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
               <div>
                  <p className="text-5xl font-black mb-2 tracking-tighter">50+</p>
                  <p className="text-indigo-200 text-xs font-black uppercase tracking-widest">Active Partners</p>
               </div>
               <div>
                  <p className="text-5xl font-black mb-2 tracking-tighter">24h</p>
                  <p className="text-indigo-200 text-xs font-black uppercase tracking-widest">Avg Turnaround</p>
               </div>
               <div>
                  <p className="text-5xl font-black mb-2 tracking-tighter">10k+</p>
                  <p className="text-indigo-200 text-xs font-black uppercase tracking-widest">Items/Month</p>
               </div>
               <div>
                  <p className="text-5xl font-black mb-2 tracking-tighter">100%</p>
                  <p className="text-indigo-200 text-xs font-black uppercase tracking-widest">Audit Success</p>
               </div>
            </div>
         </div>
      </section>

      <FAQAccordion
        items={COMMERCIAL_FAQS}
        heading="Enterprise Logistics Intelligence"
        bg="bg-white"
      />

      {/* CTA SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full -mr-32 -mt-32 blur-3xl" />
           <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Ready to Partner?</h2>
           <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-medium">Join the growing list of Narnaul businesses that trust EZDRY for their bulk requirements.</p>
           <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <Button onClick={() => navigate("/contact?type=b2b")}
               className="h-20 bg-indigo-600 text-white hover:bg-indigo-700 rounded-3xl font-black px-12 text-xl shadow-2xl shadow-indigo-900/40">
               Contact B2B Team
             </Button>
             <Button variant="outline" onClick={() => window.open("https://wa.me/919671869470")}
               className="h-20 border-white/10 text-white hover:bg-white/5 rounded-3xl font-black px-12 text-xl">
               WhatsApp Inquiry
             </Button>
           </div>
        </div>
      </section>
    </PublicLayout>
  );
}
