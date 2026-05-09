/**
 * Housing Board Colony Locality Page - Deep Local SEO
 * 
 * Government employee colony - stable residents, uniform care needs.
 */

import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, Star, Clock, CheckCircle2, Building2, Shield, Briefcase, MessageCircle, Phone, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";

const HOUSING_FAQS = [
  { q: "Do you have special plans for government employees?", a: "Yes, we offer predictable monthly billing aligned with salary cycles. Government employee discount available with valid ID card." },
  { q: "Can you handle uniform cleaning?", a: "Absolutely. We specialize in government uniform care - proper pressing, badge-safe cleaning, and professional presentation standards." },
  { q: "Is there group booking for the colony?", a: "Yes, Housing Board Colony residents can coordinate group pickups from common points like the Colony Park for added convenience." },
  { q: "What's the service timing for Housing Board?", a: "8 AM - 7 PM daily. Express same-day available (8hr). We understand punctuality is important for government schedules." },
  { q: "Do you serve all Housing Board blocks?", a: "Complete coverage of all colony blocks including areas near Housing Board Office, Colony Park, and Government Dispensary." },
];

export default function HousingBoardLaundry() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Laundry in Housing Board Colony, Narnaul — Government Employees | EZDRY",
    description: "Professional laundry for Housing Board Colony, Narnaul. Government employee plans, uniform care. Pickup near Housing Board Office. Reliable service for government families.",
    canonical: "https://ezdry.in/housing-board-laundry",
    faqs: HOUSING_FAQS,
  });

  return (
    <PublicLayout>
      <section className="bg-gradient-to-br from-cyan-50 to-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-cyan-600/10 text-cyan-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Building2 className="w-3.5 h-3.5" /> Government Colony
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6">
              Housing Board<br /><span className="text-cyan-600">Reliable Care</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-8">
              Trusted by government employees and families in Housing Board Colony. 
              Uniform expertise, predictable scheduling, and government-grade reliability.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Housing Board Office", "Colony Park", "Govt Dispensary"].map((l) => (
                <span key={l} className="flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm shadow-sm">
                  <Landmark className="w-3.5 h-3.5" />{l}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => navigate("/customer/register")} className="h-16 bg-cyan-600 hover:bg-cyan-700 text-white rounded-2xl font-black px-10">
                Book Housing Board Pickup <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button onClick={() => window.open("https://wa.me/919671869470")} variant="outline" className="h-16 rounded-2xl border-gray-200 font-bold px-10">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, title: "Uniform Specialists", desc: "Government uniform care - proper pressing, badge-safe cleaning, and professional presentation that meets office standards." },
              { icon: Shield, title: "Reliable & Punctual", desc: "We understand government schedules. Predictable pickup times and guaranteed delivery windows. No delays, no excuses." },
              { icon: Building2, title: "Colony Group Plans", desc: "Coordinate with neighbors for group pickups from Colony Park. Shared convenience and potential group discounts." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-cyan-50 border border-cyan-100">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="w-7 h-7 text-cyan-600" />
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
            <h2 className="text-2xl font-black mb-6 text-center">Housing Board Service Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-cyan-50 rounded-xl">
                  <p className="font-bold text-cyan-900">Govt Employee Discount</p>
                  <p className="text-sm text-cyan-700">Special rates with valid government ID</p>
                </div>
                <div className="p-4 bg-cyan-50 rounded-xl">
                  <p className="font-bold text-cyan-900">Express Available</p>
                  <p className="text-sm text-cyan-700">Same-day 8-hour service enabled</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                  <span>Pickup Hours</span>
                  <span className="font-bold">8 AM - 7 PM</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                  <span>Colony Rating</span>
                  <span className="font-bold text-amber-500">4.9/5 ★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FAQAccordion items={HOUSING_FAQS} heading="Housing Board FAQs" bg="bg-gray-50" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">Housing Board Colony Chooses EZDRY</h2>
          <p className="text-cyan-100 text-lg mb-8">
            200+ government families trust us for uniform care and reliable service. 
            Government-grade reliability for government employees.
          </p>
          <Button onClick={() => window.open("https://wa.me/919671869470")} className="h-16 bg-white text-cyan-600 hover:bg-gray-100 rounded-2xl font-black px-10">
            <Phone className="w-5 h-5 mr-2" /> WhatsApp: 96718 69470
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
}
