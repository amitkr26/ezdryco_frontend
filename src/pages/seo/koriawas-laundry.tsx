/**
 * Koriawas Locality Page - Deep Local SEO
 * 
 * Village-urban transition zone with unique agricultural patterns.
 */

import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, Star, Clock, CheckCircle2, Tractor, Sun, MessageCircle, Phone, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";

const KORIAWAS_FAQS = [
  { q: "Does EZDRY pickup from Koriawas village area?", a: "Yes, we serve Koriawas including areas near Koriawas Lake, Panchayat Office, and Government School. We cover both the village core and newer residential areas." },
  { q: "What are the pickup days for Koriawas?", a: "We service Koriawas on Tuesday, Thursday, and Saturday to optimize our rural route efficiency. Emergency pickups can sometimes be arranged on other days via WhatsApp." },
  { q: "Is there a minimum order for Koriawas?", a: "Same ₹299 minimum applies. For Koriawas, we recommend combining with neighbors to meet minimum and share pickup convenience." },
  { q: "Do you clean farming work clothes?", a: "Absolutely. We specialize in heavy-duty cleaning for agricultural workwear. Mud, dust, and field stains are our expertise - much better than home washing." },
  { q: "How do I pay for service in Koriawas?", a: "Cash on pickup, UPI, or wallet payment. We understand rural banking patterns and offer flexible options. Monthly billing available for regular customers." },
];

export default function KoriawasLaundry() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Laundry Service in Koriawas, Narnaul — Village-Urban Coverage | EZDRY",
    description: "Doorstep laundry for Koriawas near Narnaul. Farm workwear cleaning, residential service. Pickup near Koriawas Lake and Panchayat Office. Agricultural community friendly.",
    canonical: "https://ezdry.in/koriawas-laundry",
    faqs: KORIAWAS_FAQS,
  });

  return (
    <PublicLayout>
      <section className="bg-gradient-to-br from-amber-50 to-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-amber-600/10 text-amber-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <MapPin className="w-3.5 h-3.5" /> Village-Urban Zone
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6">
              Koriawas<br /><span className="text-amber-600">Agricultural Care</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-8">
              Professional laundry bridging village and urban life. 
              Heavy-duty cleaning for farming families in Koriawas area.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Koriawas Lake", "Panchayat Office", "Government School"].map((l) => (
                <span key={l} className="flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm shadow-sm">
                  <Landmark className="w-3.5 h-3.5" />{l}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => navigate("/customer/book")} className="h-16 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-black px-10">
                Book Koriawas Pickup <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button onClick={() => window.open("https://wa.me/919671869470")} variant="outline" className="h-16 rounded-2xl border-gray-200 font-bold px-10">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Farm Focus */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">For Koriawas Farming Families</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Tractor className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Heavy-Duty Cleaning</p>
                    <p className="text-gray-600">Farm clothes need industrial cleaning. Our machines handle mud, oil, and field stains that home washing can't remove.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sun className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Seasonal Flexibility</p>
                    <p className="text-gray-600">We understand harvest seasons. Flexible scheduling and bulk discounts during peak agricultural periods.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 rounded-[2rem] p-8">
              <h3 className="font-bold text-xl mb-4">Koriawas Service Schedule</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                  <span className="font-medium">Operating Days</span>
                  <span className="text-amber-700 font-bold">Tue, Thu, Sat</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                  <span className="font-medium">Pickup Hours</span>
                  <span className="text-amber-700 font-bold">9 AM - 6 PM</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                  <span className="font-medium">Turnaround</span>
                  <span className="text-amber-700 font-bold">48 hours</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Items picked up Tuesday return Thursday. Rural route optimization for efficient service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <FAQAccordion items={KORIAWAS_FAQS} heading="Koriawas FAQs" bg="bg-white" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">Koriawas, We're Here For You</h2>
          <p className="text-amber-100 text-lg mb-8">
            Professional laundry service that understands agricultural life. 
            Same prices as the city, no village surcharge.
          </p>
          <Button onClick={() => window.open("https://wa.me/919671869470")} className="h-16 bg-white text-amber-600 hover:bg-gray-100 rounded-2xl font-black px-10">
            <Phone className="w-5 h-5 mr-2" /> WhatsApp: 96718 69470
          </Button>
        </div>
      </section>
    </PublicLayout>
  );
}
