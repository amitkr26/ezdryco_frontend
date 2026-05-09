import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, MapPin, CheckCircle, Shield, Star, Users, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";

export default function About() {
  const [, navigate] = useLocation();

  useSEO({
    title: "About EZDRY — Narnaul's Premier Laundry & Dry Cleaning Platform",
    description: "Discover the story behind EZDRY. We are on a mission to modernize laundry services in Narnaul, Haryana, through technology, transparency, and professional care.",
    canonical: "https://ezdry.in/about",
  });

  return (
    <PublicLayout>
      <section className="bg-gradient-to-br from-indigo-50 via-white to-white py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[100px] -z-0" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-indigo-600/5 text-indigo-700 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 border border-indigo-100">
               Narnaul's Homegrown Brand
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-10 leading-[0.95] tracking-tighter">
              From Narnaul, <br /><span className="text-indigo-600 italic">For Narnaul.</span>
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
              EZDRY was founded on a singular obsession: to bring the luxury "Cloth Spa" experience to every household in our city, combining traditional care with world-class technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM & SOLUTION */}
      <section className="py-24 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Why Narnaul Needed EZDRY</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                In Narnaul, getting your clothes cleaned traditionally meant navigating an unorganized network of dhobis with inconsistent quality, no fixed pricing, and zero accountability for expensive fabrics.
              </p>
              <p>
                Whether it was a heavy winter blanket, a delicate wedding lehenga, or everyday office wear, the people of Narnaul had to compromise on quality or travel long distances for professional dry cleaning.
              </p>
              <p className="font-bold text-indigo-600 italic">
                EZDRY bridges this gap. We combine local expertise with modern technology to provide a "Cloth Spa" experience at your doorstep.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
               <div className="flex flex-col gap-2">
                  <div className="text-4xl font-black text-gray-900">500+</div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">Daily Active Users</p>
               </div>
               <div className="flex flex-col gap-2">
                  <div className="text-4xl font-black text-gray-900">4.9/5</div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">Customer Rating</p>
               </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
             {[
               { icon: <Target className="w-6 h-6" />, title: "Our Mission", desc: "To digitize the local laundry ecosystem in Narnaul, providing sustainable livelihoods for partners and premium convenience for customers." },
               { icon: <Users className="w-6 h-6" />, title: "Our Team", desc: "A group of passionate locals and tech enthusiasts working together to make 'Clean Clothes' a hassle-free reality." },
               { icon: <Rocket className="w-6 h-6" />, title: "Our Future", desc: "Expanding our footprint across Haryana while maintaining the hyper-local quality that Narnaul trusts us for." }
             ].map((card, i) => (
               <motion.div key={i} whileHover={{ x: 10 }} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm flex gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm flex-shrink-0">
                     {card.icon}
                  </div>
                  <div>
                     <h3 className="text-xl font-black text-gray-900 mb-2">{card.title}</h3>
                     <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-black text-gray-900 mb-6 tracking-tight">The Values That Drive Us</h2>
             <p className="text-gray-500 max-w-xl mx-auto text-lg">We aren't just a laundry app; we are a trust-based platform for the Narnaul community.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🛡️", title: "Unmatched Accountability", desc: "Every garment is barcoded and tracked. We treat your clothes like our own, ensuring zero loss and maximum care." },
              { icon: "💎", title: "Premium Quality", desc: "From eco-friendly detergents to professional steam presses, we never compromise on the 'Cloth Spa' standard." },
              { icon: "🤝", title: "Local Empowerment", desc: "We partner with local laundry entrepreneurs in Narnaul, helping them scale through technology and professional standards." },
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                <div className="text-5xl mb-8">{v.icon}</div>
                <h3 className="text-2xl font-black text-gray-900 mb-4">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE LOCALITIES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-6">Serving Every Corner of Narnaul</h2>
          <p className="text-gray-500 mb-12 text-lg leading-relaxed">
            We've mapped Narnaul extensively to ensure our riders can reach you in any locality within 30-45 minutes of your booking.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Old Narnaul", "New Colony", "Mandi Area", "Bus Stand", "Sadar Bazar", "Housing Board", "Haryana Colony", "Mahendragarh Road", "Adarsh Nagar", "Nasibpur"].map((loc) => (
              <div key={loc} className="flex items-center gap-2 bg-indigo-50/50 text-indigo-700 border border-indigo-100 rounded-2xl px-6 py-3 font-bold text-sm">
                <MapPin className="w-4 h-4" /> {loc}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-indigo-600 rounded-[3rem] mx-6 mb-24 text-white text-center shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl font-black mb-8 tracking-tight">Be Part of the Narnaul Laundry Revolution</h2>
          <p className="text-indigo-100 text-lg mb-12">Join thousands of Narnaul residents who have upgraded to EZDRY. Wear fresh, every day.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button onClick={() => navigate("/customer/register")}
              className="h-16 bg-white text-indigo-600 hover:bg-gray-100 rounded-2xl font-black px-10 text-lg">
              Book Your First Pickup
            </Button>
            <Button onClick={() => navigate("/contact")} variant="outline"
              className="h-16 border-white/30 text-white hover:bg-white/10 rounded-2xl font-bold px-10 text-lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
