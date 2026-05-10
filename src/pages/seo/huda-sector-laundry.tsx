/**
 * HUDA Sector Locality Page - Deep Local SEO
 * 
 * Planned HUDA development - modern homes, young professionals.
 */

import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, Star, Clock, CheckCircle2, Building2, Smartphone, Zap, MessageCircle, Phone, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";

const HUDA_FAQS = [
  { q: "Do you serve all HUDA sectors in Narnaul?", a: "Yes, we cover all HUDA sectors including residential and commercial zones. Our riders are familiar with the HUDA layout and sector numbering system." },
  { q: "Is express service available in HUDA?", a: "Yes, HUDA Sector is an express-enabled zone. Book before 10 AM for same-day return by 7 PM (₹49 additional)." },
  { q: "What's special about HUDA service?", a: "HUDA residents get app-based tracking, digital receipts, and tech-forward features. Perfect for young professionals and modern families." },
  { q: "Can I schedule recurring pickups in HUDA?", a: "Absolutely. We offer weekly and bi-weekly subscription plans popular with HUDA residents. Predictable scheduling for busy professionals." },
  { q: "What about commercial spaces in HUDA?", a: "We service HUDA commercial establishments too. Office linen, uniform programs, and B2B accounts available with priority scheduling." },
];

export default function HudaSectorLaundry() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Laundry Service in HUDA Sector, Narnaul — Modern Living | EZDRY",
    description: "Premium laundry for HUDA Sector, Narnaul. Express service, app tracking, modern payment. Serving planned HUDA development residents and businesses.",
    canonical: "https://ezdry.in/huda-sector-laundry",
    faqs: HUDA_FAQS,
  });

  return (
    <PublicLayout>
      <section className="bg-gradient-to-br from-purple-50 to-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-purple-600/10 text-purple-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Building2 className="w-3.5 h-3.5" /> Planned Development
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6">
              HUDA Sector<br /><span className="text-purple-600">Modern Living</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-8">
              Tech-forward laundry service for HUDA's modern residents. 
              Express delivery, digital tracking, and seamless experience.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["HUDA Office", "Sector Park", "New Development"].map((l) => (
                <span key={l} className="flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm shadow-sm">
                  <Landmark className="w-3.5 h-3.5" />{l}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => navigate("/customer/book")} className="h-16 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-black px-10">
                Book HUDA Pickup <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button onClick={() => window.open("https://wa.me/919671869470")} variant="outline" className="h-16 rounded-2xl border-gray-200 font-bold px-10">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Built for Modern Living</h2>
            <p className="text-gray-500">Features HUDA residents love</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Express 8-Hour", desc: "Same-day service for urgent needs. Book by 10 AM, delivered by 6 PM. Perfect for busy professionals." },
              { icon: Smartphone, title: "Digital Experience", desc: "Track orders, view photos of items, get digital receipts. Tech-forward service for tech-forward residents." },
              { icon: Building2, title: "B2B Ready", desc: "Office linen programs, uniform services, and commercial accounts with priority scheduling." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-purple-50 border border-purple-100">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] p-8 shadow-xl">
            <h2 className="text-2xl font-black mb-6 text-center">HUDA Service Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-xl">
                  <p className="font-bold text-purple-900">Full Coverage</p>
                  <p className="text-sm text-purple-700">All HUDA sectors and blocks served</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl">
                  <p className="font-bold text-purple-900">Express Available</p>
                  <p className="text-sm text-purple-700">Same-day service (8hr) enabled</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                  <span>Pickup Hours</span>
                  <span className="font-bold">8 AM - 8 PM</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                  <span>Local Rating</span>
                  <span className="font-bold text-amber-600">4.9/5 ★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FAQAccordion items={HUDA_FAQS} heading="HUDA Sector FAQs" bg="bg-gray-50" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">HUDA Residents Choose EZDRY</h2>
          <p className="text-purple-100 text-lg mb-8">
            300+ HUDA families trust us. Modern service for modern living.
          </p>
          <Button onClick={() => window.open("https://wa.me/919671869470")} className="h-16 bg-white text-purple-600 hover:bg-gray-100 rounded-2xl font-black px-10">
            <Phone className="w-5 h-5 mr-2" /> Get Started: 96718 69470
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
}
