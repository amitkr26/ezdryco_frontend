import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Sparkles, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";

const FAQS = [
  { q: "What types of shoes can you clean?", a: "We clean sneakers, formal leather shoes, suede boots, canvas shoes, and sports footwear. Our specialists use specific cleaning agents for each material." },
  { q: "How long does shoe cleaning take in Narnaul?", a: "Shoe cleaning and restoration usually takes 3-4 business days as it involves deep cleaning, conditioning, and proper air drying." },
  { q: "Do you repair shoes as well?", a: "Currently, we focus on deep cleaning, deodorizing, and polishing. Minor restoration is included, but major cobbler repairs are not part of our standard service." },
];

export default function ShoeCleaning() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Best Shoe Cleaning & Spa in Narnaul | Sneaker Care — EZDRY",
    description: "Professional shoe cleaning and restoration in Narnaul, Haryana. We clean sneakers, leather shoes, suede, and more. Doorstep pickup and delivery. Book your shoe spa now!",
  });

  return (
    <PublicLayout>
      <section className="bg-gradient-to-br from-indigo-50 to-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Professional <span className="text-indigo-600">Shoe Cleaning</span> in Narnaul
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Don't let dirty shoes ruin your look. Our Shoe Spa service deep cleans, sanitizes, and restores your favorite footwear to their former glory.
            </p>
            <Button onClick={() => navigate("/customer/book")} className="mt-10 h-16 bg-indigo-600 text-white rounded-2xl font-bold px-10 text-lg shadow-xl shadow-indigo-100">
              Book Shoe Pickup <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-gray-900 mb-8">Why Your Shoes Need a Spa?</h2>
            <div className="space-y-6">
              {[
                { title: "Material-Specific Cleaning", desc: "Suede, leather, canvas, or mesh — we use the right chemicals for each." },
                { title: "Deep Stain Removal", desc: "Mud, grass, or grease stains? We tackle them with expert care." },
                { title: "Deodorizing & Sanitization", desc: "Eliminate bacteria and odors for a fresh feel." },
                { title: "Conditioning", desc: "We apply premium conditioners to keep leather soft and prevent cracking." }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-indigo-600 rounded-[3rem] p-12 text-white">
             <Sparkles className="w-12 h-12 mb-6 opacity-50" />
             <h3 className="text-2xl font-black mb-4">Sneakerhead Special</h3>
             <p className="text-indigo-100 mb-8 leading-relaxed">
                Whether it's your daily trainers or limited edition sneakers, we treat them with the respect they deserve. 
                Our Narnaul shoe experts ensure white soles stay white and colors stay vibrant.
             </p>
             <div className="flex items-center gap-4 border-t border-indigo-500 pt-8">
                <Shield className="w-8 h-8 opacity-50" />
                <span className="font-bold">Hygienically Cleaned & Dried</span>
             </div>
          </div>
        </div>
      </section>

      <FAQAccordion
        items={FAQS}
        heading="Shoe Cleaning FAQs"
        bg="bg-gray-50"
      />

      <section className="py-20 bg-indigo-600 text-white text-center">
         <h2 className="text-3xl font-black mb-6">Ready to Refresh Your Shoes?</h2>
         <p className="text-indigo-100 mb-10 max-w-xl mx-auto">First-time shoe spa customer? Use code SHOE20 for 20% off your first order.</p>
         <Button onClick={() => navigate("/customer/book")} className="bg-white text-indigo-600 hover:bg-gray-100 h-14 rounded-xl font-black px-10">
            Book Now
         </Button>
      </section>
    </PublicLayout>
  );
}
