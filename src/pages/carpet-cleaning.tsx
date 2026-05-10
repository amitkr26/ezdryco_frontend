import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";

const FAQS = [
  { q: "Do you clean carpets at home or take them away?", a: "For deep cleaning, we collect your carpets and rugs, process them at our specialized facility in Narnaul, and return them dried and ready to use." },
  { q: "How do you handle delicate Persian or Silk rugs?", a: "We perform a fabric test first. Delicate rugs are hand-washed with pH-balanced cleaners to ensure no color bleeding or fiber damage occurs." },
  { q: "Can you remove tough pet stains and odors?", a: "Yes, we use specialized enzyme cleaners that break down organic stains and neutralize deep-seated odors rather than just masking them." },
];

export default function CarpetCleaning() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Best Carpet & Rug Cleaning in Narnaul | Deep Clean — EZDRY",
    description: "Professional carpet cleaning and rug restoration in Narnaul, Haryana. Deep soil removal, stain treatment, and deodorizing. Free pickup across Narnaul. Book your carpet clean today!",
  });

  return (
    <PublicLayout>
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Expert <span className="text-indigo-600">Carpet Cleaning</span> in Narnaul
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Revive your home's comfort. Our deep-cleaning process removes dust, allergens, and tough stains from your carpets and rugs.
          </p>
          <Button onClick={() => navigate("/customer/book")} className="mt-10 h-16 bg-indigo-600 text-white rounded-2xl font-bold px-10 text-lg shadow-xl">
            Schedule Carpet Pickup <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          {[
            { title: "Deep Soil Extraction", desc: "Our powerful machines reach deep into the fibers to remove hidden dirt and allergens that vacuuming misses." },
            { title: "Stain & Spot Treatment", desc: "Coffee, wine, or ink — we use targeted treatments to lift stubborn spots without damaging the carpet." },
            { title: "Fabric Protection", desc: "Optional protective coating helps your carpet resist future spills and stay clean longer." }
          ].map((item) => (
            <div key={item.title} className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <h3 className="text-xl font-black text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-indigo-50">
         <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-8">Serving All Areas of Narnaul</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
               From Adarsh Nagar to Nasibpur, our riders are equipped to handle large carpet collections and deliveries. 
               We ensure your carpets are returned rolled, wrapped, and ready for use.
            </p>
            <div className="flex justify-center gap-2 flex-wrap">
               {["Adarsh Nagar", "Mahendragarh Road", "Koriawas", "New Colony"].map(area => (
                 <span key={area} className="bg-white px-4 py-2 rounded-full border border-indigo-100 text-sm font-bold text-indigo-600">
                    {area}
                 </span>
               ))}
            </div>
         </div>
      </section>

      <FAQAccordion
        items={FAQS}
        heading="Carpet Cleaning FAQs"
        bg="bg-white"
      />

      <section className="py-20 bg-gray-900 text-white text-center">
         <h2 className="text-3xl font-black mb-6">Need a Quote for Bulk Cleaning?</h2>
         <p className="text-gray-400 mb-10 max-w-xl mx-auto">We provide special rates for offices, restaurants, and hotels in Narnaul.</p>
         <Button onClick={() => navigate("/contact")} className="bg-indigo-600 hover:bg-indigo-700 h-14 rounded-xl font-black px-10">
            Contact for Bulk Quote
         </Button>
      </section>
    </PublicLayout>
  );
}
