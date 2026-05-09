/**
 * Nasibpur Locality Page - Deep Local SEO
 * 
 * Unique operational context:
 * - Suburban area on Narnaul's outskirts
 * - Agricultural community
 * - Growing residential pockets
 * - Different service timing (9AM-7PM)
 * - Value-focused pricing
 */

import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { 
  MapPin, ChevronRight, Star, Clock, CheckCircle2,
  Tractor, Home, Wallet, MessageCircle, Phone, Landmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";

const NASIBPUR_FAQS = [
  { q: "Do you serve Nasibpur even though it's outside main Narnaul?", a: "Yes, Nasibpur is within our 15km service radius. We serve the growing residential areas near Nasibpur Chowk and the agricultural market zone. Pickup timing is 9 AM - 7 PM." },
  { q: "Is there any extra charge for Nasibpur pickup?", a: "No extra charge. Free pickup and delivery applies to Nasibpur just like all other areas. Minimum order ₹299 for free pickup." },
  { q: "What days do you pickup in Nasibpur?", a: "We operate in Nasibpur Monday, Wednesday, Friday, and Saturday. This optimizes our route efficiency while ensuring regular service." },
  { q: "Do you offer special rates for farm families?", a: "Yes, we understand agricultural income patterns. We offer flexible payment options and seasonal bulk discounts for farming families in Nasibpur." },
  { q: "How long does delivery take to Nasibpur?", a: "Standard 48-hour turnaround. Items picked up Monday return Wednesday. Express service not available in Nasibpur due to distance." },
];

export default function NasibpurLaundry() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Laundry Service in Nasibpur, Narnaul — EZDRY Suburban Coverage",
    description: "Doorstep laundry for Nasibpur, Narnaul. Serving agricultural and residential communities. Pickup near Nasibpur Chowk. No extra charge for suburban areas.",
    canonical: "https://ezdry.in/nasibpur-laundry",
    faqs: NASIBPUR_FAQS,
  });

  return (
    <PublicLayout>
      <section className="bg-gradient-to-br from-emerald-50 to-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-emerald-600/10 text-emerald-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <MapPin className="w-3.5 h-3.5" /> Suburban Service
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6">
              Nasibpur<br /><span className="text-emerald-600">Rural-Urban Care</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-8">
              Professional laundry service for Nasibpur's agricultural community and growing residential areas. 
              No extra charge for suburban pickup.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Nasibpur Chowk", "Agricultural Market", "Primary Health Center"].map((l) => (
                <span key={l} className="flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm shadow-sm">
                  <Landmark className="w-3.5 h-3.5" />{l}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => navigate("/customer/register")} className="h-16 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black px-10">
                Book Nasibpur Pickup <ChevronRight className="w-5 h-5 ml-2" />
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
              { icon: Tractor, title: "Farm Family Friendly", desc: "Flexible scheduling around agricultural seasons. Bulk discounts during harvest periods." },
              { icon: Wallet, title: "Value Pricing", desc: "Same rates as urban Narnaul. No suburban surcharge. Budget-friendly family plans." },
              { icon: Home, title: "Growing Coverage", desc: "New residential developments in Nasibpur now covered. Ask about your specific location." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-emerald-50 border border-emerald-100">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Info */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-[2rem] p-8 shadow-xl">
            <h2 className="text-2xl font-black mb-6 text-center">Nasibpur Service Schedule</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="font-bold">Operating Days</p>
                    <p className="text-sm text-gray-600">Mon, Wed, Fri, Sat</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="font-bold">Pickup Hours</p>
                    <p className="text-sm text-gray-600">9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-bold">Turnaround</p>
                    <p className="text-sm text-gray-600">48 hours (2 days)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Star className="w-5 h-5 text-amber-500" />
                  <div>
                    <p className="font-bold">Rating</p>
                    <p className="text-sm text-gray-600">4.7/5 from Nasibpur</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 rounded-xl">
              <p className="text-sm text-amber-700">
                <strong>Note:</strong> Express same-day service not available in Nasibpur due to distance from processing center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FAQAccordion items={NASIBPUR_FAQS} heading="Nasibpur FAQs" bg="bg-gray-50" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">Nasibpur Residents, We've Got You Covered</h2>
          <p className="text-emerald-100 text-lg mb-8">
            Same professional service, no suburban surcharge. Join 150+ Nasibpur families 
            who trust EZDRY with their laundry.
          </p>
          <Button onClick={() => window.open("https://wa.me/919671869470")} className="h-16 bg-white text-emerald-600 hover:bg-gray-100 rounded-2xl font-black px-10">
            <Phone className="w-5 h-5 mr-2" /> Call/WhatsApp: 96718 69470
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
}
