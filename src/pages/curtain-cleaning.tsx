import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";

const FAQS = [
  { q: "Do you remove and re-hang the curtains?", a: "Yes, our team can assist with removing your curtains and re-hanging them once cleaned. Please mention this during booking." },
  { q: "Can you clean blackout or velvet curtains?", a: "Definitely. Blackout curtains and heavy velvet drapes require specialized dry cleaning to protect the backing and pile. We are experts in this." },
  { q: "Will the curtains shrink?", a: "We use professional dry-cleaning methods for curtains which significantly reduces the risk of shrinkage compared to standard water washing." },
];

export default function CurtainCleaning() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Expert Curtain & Drapery Cleaning in Narnaul — EZDRY",
    description: "Professional curtain cleaning in Narnaul, Haryana. Remove dust, allergens, and odors from your drapes. Doorstep pickup and re-hanging assistance. Book EZDRY now!",
  });

  return (
    <PublicLayout>
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Pristine <span className="text-indigo-600">Curtain Cleaning</span> in Narnaul
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Curtains act as filters for dust and allergens. Keep your home healthy with our professional curtain deep-cleaning and steaming service.
          </p>
          <Button onClick={() => navigate("/customer/register")} className="mt-10 h-16 bg-indigo-600 text-white rounded-2xl font-bold px-10 text-lg shadow-xl">
            Book Curtain Pickup <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
           <div className="relative">
              <div className="absolute inset-0 bg-indigo-100 rounded-3xl -rotate-3" />
              <div className="relative bg-white border border-gray-100 p-8 rounded-3xl shadow-lg">
                 <h3 className="text-2xl font-black text-gray-900 mb-6">Our Cleaning Process</h3>
                 <ul className="space-y-4">
                    {[
                       "Pre-inspection for stains and sun damage",
                       "High-suction dust removal",
                       "Gentle dry cleaning or steam wash",
                       "Professional pressing for a crisp look",
                       "Hygienic packaging and delivery"
                    ].map(step => (
                       <li key={step} className="flex items-center gap-3 text-gray-600">
                          <CheckCircle className="w-5 h-5 text-indigo-600" />
                          {step}
                       </li>
                    ))}
                 </ul>
              </div>
           </div>
           <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">The Benefits of Professional Curtain Care</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                 Home washing can lead to shrinkage, color fading, and damage to delicate linings. Our Narnaul facility is equipped to handle everything from light sheers to heavy theater-style drapes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-4 bg-indigo-50 rounded-2xl">
                    <Clock className="w-6 h-6 text-indigo-600 mb-2" />
                    <p className="font-bold text-sm">3-Day Turnaround</p>
                 </div>
                 <div className="p-4 bg-indigo-50 rounded-2xl">
                    <Shield className="w-6 h-6 text-indigo-600 mb-2" />
                    <p className="font-bold text-sm">Color Safe</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <FAQAccordion
        items={FAQS}
        heading="Curtain Cleaning FAQs"
        bg="bg-gray-50"
      />

      <section className="py-20 bg-indigo-600 text-white text-center">
         <h2 className="text-3xl font-black mb-6">Freshen Up Your Home Today</h2>
         <p className="text-indigo-100 mb-10 max-w-xl mx-auto">Free doorstep pickup across Narnaul on all curtain cleaning orders.</p>
         <Button onClick={() => navigate("/customer/register")} className="bg-white text-indigo-600 hover:bg-gray-100 h-14 rounded-xl font-black px-10">
            Schedule a Pickup
         </Button>
      </section>
    </PublicLayout>
  );
}
