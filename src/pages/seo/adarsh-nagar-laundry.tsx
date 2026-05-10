import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, MapPin, ChevronRight, Star, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ReviewsSection } from "@/components/ReviewsSection";

const FAQS = [
  { q: "Do you offer free pickup in Adarsh Nagar?", a: "Yes, EZDRY provides complimentary doorstep pickup and delivery for all residents of Adarsh Nagar, Narnaul. Our riders are frequently in the area near the local parks and markets." },
  { q: "What is the turnaround time for Adarsh Nagar?", a: "Standard turnaround is 24-48 hours. However, since Adarsh Nagar is a priority service zone, we often deliver wash & fold orders even faster." },
  { q: "Can I book for a large family order?", a: "Definitely. We handle bulk family laundry and provide special care for children's clothes and heavy bedding common in Adarsh Nagar households." },
];

export default function AdarshNagarLaundry() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Premium Laundry & Dry Cleaning in Adarsh Nagar, Narnaul — EZDRY",
    description: "Doorstep laundry and dry cleaning services specifically for Adarsh Nagar, Narnaul. Fast pickup near Adarsh Nagar parks and markets. Premium fabric care by EZDRY. Book now!",
    canonical: "https://ezdry.in/adarsh-nagar-laundry",
  });

  return (
    <PublicLayout>
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-24 px-6 text-center overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl -mr-32 -mt-32" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-600/10 text-indigo-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
            <MapPin className="w-3.5 h-3.5" /> Priority Service Zone: Adarsh Nagar
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter leading-[0.9]">
            Professional Laundry in <br /><span className="text-indigo-600">Adarsh Nagar</span>
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            No more searching for local dhobis. Get premium, hygienic clothing care delivered to your doorstep in Adarsh Nagar, Narnaul.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button onClick={() => navigate("/customer/book")} className="h-16 bg-indigo-600 text-white hover:bg-indigo-700 rounded-2xl font-black px-10 text-lg shadow-xl shadow-indigo-100">
               Book Adarsh Nagar Pickup <ChevronRight className="w-5 h-5 ml-2" />
             </Button>
             <Button onClick={() => window.open("https://wa.me/919671869470")} variant="outline" className="h-16 rounded-2xl border-gray-200 font-bold px-10">
               WhatsApp Support
             </Button>
          </div>
        </motion.div>
      </section>

      {/* WHY ADARSH NAGAR */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
           {[
             { icon: <Clock className="w-8 h-8 text-indigo-600" />, title: "30-Min Pickup", desc: "Our riders are always near Adarsh Nagar, ensuring record-fast pickup times after you book." },
             { icon: <Shield className="w-8 h-8 text-indigo-600" />, title: "Hygienic Care", desc: "We use RO-softened water (essential for Narnaul) to ensure your clothes stay soft and bright." },
             { icon: <Star className="w-8 h-8 text-indigo-600" />, title: "Trusted Local Partner", desc: "Serving hundreds of families in Adarsh Nagar with a 4.9/5 star rating." }
           ].map((item, i) => (
             <div key={i} className="p-10 rounded-[2.5rem] bg-neutral-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-50 transition-all">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <ReviewsSection />

      {/* LOCAL FAQ */}
      <FAQAccordion
        items={FAQS}
        heading="Adarsh Nagar Service Guide"
        bg="bg-neutral-50"
      />

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-indigo-600 rounded-[3.5rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
           <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">Experience Narnaul's Best Laundry</h2>
           <p className="text-indigo-100 text-lg mb-12 max-w-xl mx-auto font-medium">Join your neighbors in Adarsh Nagar who have already switched to EZDRY. First order ₹50 off.</p>
           <Button onClick={() => navigate("/customer/book")}
             className="h-20 bg-white text-indigo-600 hover:bg-indigo-50 rounded-3xl font-black px-12 text-xl shadow-2xl shadow-indigo-900/20">
             Start Your Order <ChevronRight className="w-5 h-5 ml-2" />
           </Button>
        </div>
      </section>
    </PublicLayout>
  );
}
