/**
 * Kailash Nagar Locality Page - Deep Local SEO
 * 
 * Dense residential with temple community. Active student population.
 */

import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, Star, Clock, CheckCircle2, GraduationCap, Sparkles, Users, MessageCircle, Phone, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";

const KAILASH_FAQS = [
  { q: "Do you offer student discounts in Kailash Nagar?", a: "Yes, 15% student discount for residents with valid college ID. Popular with students from nearby Inter College and coaching centers." },
  { q: "Can you handle religious garment care?", a: "Absolutely. We specialize in pooja attire, traditional wear, and delicate religious garments. Temple-goers trust us with their special clothes." },
  { q: "Is there community pickup in Kailash Nagar?", a: "Yes, we coordinate group pickups near Kailash Mandir and Main Bazar. Residents often combine orders for added convenience." },
  { q: "What's the fastest service in Kailash Nagar?", a: "Express available - 8-hour turnaround. Book by 10 AM for evening delivery. Standard is 24-48 hours." },
  { q: "Do you serve the entire Kailash Nagar area?", a: "Complete coverage including all blocks near Kailash Mandir, Main Bazar, Inter College, and surrounding residential areas." },
];

export default function KailashNagarLaundry() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Laundry in Kailash Nagar, Narnaul — Student & Temple Community | EZDRY",
    description: "Laundry service for Kailash Nagar, Narnaul. Student discounts, religious garment care. Pickup near Kailash Mandir and Main Bazar. Community-friendly service.",
    canonical: "https://ezdry.in/kailash-nagar-laundry",
    faqs: KAILASH_FAQS,
  });

  return (
    <PublicLayout>
      <section className="bg-gradient-to-br from-pink-50 to-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-pink-600/10 text-pink-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <MapPin className="w-3.5 h-3.5" /> Temple Community
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6">
              Kailash Nagar<br /><span className="text-pink-600">Student & Sacred Care</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-8">
              Serving Kailash Nagar's student community and temple devotees. 
              Student discounts and delicate religious garment expertise.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Kailash Mandir", "Main Bazar", "Inter College"].map((l) => (
                <span key={l} className="flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm shadow-sm">
                  <Landmark className="w-3.5 h-3.5" />{l}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => navigate("/customer/book")} className="h-16 bg-pink-600 hover:bg-pink-700 text-white rounded-2xl font-black px-10">
                Book Kailash Nagar <ChevronRight className="w-5 h-5 ml-2" />
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
              { icon: GraduationCap, title: "Student Discounts", desc: "15% off with valid student ID. Budget-friendly for college students from Inter College and nearby coaching centers." },
              { icon: Sparkles, title: "Sacred Garment Care", desc: "Special handling for pooja clothes, traditional wear, and delicate religious items. Temple-devotee trusted." },
              { icon: Users, title: "Community Pickups", desc: "Group collection points near Kailash Mandir. Neighbors combine orders for convenience and savings." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-pink-50 border border-pink-100">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="w-7 h-7 text-pink-600" />
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
            <h2 className="text-2xl font-black mb-6 text-center">Kailash Nagar Service</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-pink-50 rounded-xl">
                  <p className="font-bold">Pickup Hours</p>
                  <p className="text-sm text-gray-600">8 AM - 8 PM Daily</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-xl">
                  <p className="font-bold">Express Available</p>
                  <p className="text-sm text-gray-600">Same-day (8hr) service enabled</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                  <span>Student Discount</span>
                  <span className="font-bold text-pink-600">15% OFF</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl flex items-center justify-between">
                  <span>Area Rating</span>
                  <span className="font-bold text-amber-500">4.8/5 ★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FAQAccordion items={KAILASH_FAQS} heading="Kailash Nagar FAQs" bg="bg-gray-50" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">Kailash Nagar Trusts EZDRY</h2>
          <p className="text-pink-100 text-lg mb-8">
            Students, families, and temple-goers - we serve everyone. 
            250+ Kailash Nagar residents choose us monthly.
          </p>
          <Button onClick={() => window.open("https://wa.me/919671869470")} className="h-16 bg-white text-pink-600 hover:bg-gray-100 rounded-2xl font-black px-10">
            <Phone className="w-5 h-5 mr-2" /> WhatsApp: 96718 69470
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
}
