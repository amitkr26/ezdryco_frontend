/**
 * Shastri Nagar Locality Page - Deep Local SEO
 * 
 * Unique operational context:
 * - Established residential colony
 * - Multi-generational families
 * - Strong community connections
 * - Near Shastri Park, Community Center
 * - Traditional wear focus
 */

import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { 
  MapPin, 
  ChevronRight, 
  Star, 
  Clock, 
  CheckCircle2,
  Users,
  Home,
  Sparkles,
  MessageCircle,
  Phone,
  Landmark,
  School,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { trackEvent } from "@/lib/analytics";

const SHASTRI_NAGAR_FAQS = [
  { 
    q: "Does EZDRY offer pickup in Shastri Nagar near the Community Center?", 
    a: "Yes, we provide daily pickup service throughout Shastri Nagar including areas near the Community Center, Shastri Park, and Shiv Mandir. Our riders are familiar with all lanes and blocks in this established colony."
  },
  { 
    q: "What makes Shastri Nagar service different from other areas?", 
    a: "Shastri Nagar has a high concentration of multi-generational families. We've adapted our service to handle traditional wear care (sarees, kurtas) and offer family plans that accommodate 3+ generations under one subscription."
  },
  { 
    q: "Can you handle festival season bulk orders in Shastri Nagar?", 
    a: "Absolutely. During festivals like Diwali, Holi, and weddings, we deploy additional pickup capacity to Shastri Nagar. We recommend booking 2-3 days in advance during peak seasons."
  },
  { 
    q: "Is there a student discount for Shastri Nagar residents?", 
    a: "Yes, students from families in Shastri Nagar get 15% off on all services. Many students from nearby colleges and coaching centers use our service. Show valid student ID during pickup."
  },
  { 
    q: "What's the fastest turnaround for Shastri Nagar?", 
    a: "Standard: 24-48 hours. Express: Same-day if booked before 10 AM (₹49 extra). Our proximity to the processing center makes Shastri Nagar a priority zone."
  },
];

// Area-specific testimonials
const TESTIMONIALS = [
  {
    name: "Rekha Sharma",
    location: "Block C, Shastri Nagar",
    rating: 5,
    text: "They understand the needs of a joint family. My mother-in-law's silk sarees and my kids' school uniforms - all handled perfectly.",
    service: "Family Plan",
  },
  {
    name: "Amit Patel",
    location: "Near Shastri Park",
    rating: 5,
    text: "Been using EZDRY for 8 months now. Their knowledge of Shastri Nagar's layout means pickup is always on time.",
    service: "Monthly Subscription",
  },
];

export default function ShastriNagarLaundry() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Laundry & Dry Cleaning in Shastri Nagar, Narnaul — EZDRY",
    description: "Doorstep laundry service in Shastri Nagar, Narnaul. Multi-generational family plans, traditional wear care. Pickup near Shastri Park, Community Center. Book now!",
    canonical: "https://ezdry.in/shastri-nagar-laundry",
    faqs: SHASTRI_NAGAR_FAQS,
  });

  return (
    <PublicLayout>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-32 -mt-32" />
        
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <MapPin className="w-3.5 h-3.5" /> Established Colony
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              Shastri Nagar<br /><span className="text-blue-600">Family Laundry</span>
            </h1>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium mb-8">
              Trusted by 200+ multi-generational families in Shastri Nagar. 
              Specializing in traditional wear care and family subscription plans.
            </p>
            
            {/* Landmarks */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Shastri Park", "Community Center", "Shiv Mandir", "Inter College"].map((landmark) => (
                <span key={landmark} className="flex items-center gap-1 bg-white px-4 py-2 rounded-full text-sm text-gray-600 shadow-sm">
                  <Landmark className="w-3.5 h-3.5" />
                  {landmark}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={() => navigate("/customer/book")} className="h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black px-10">
                Book Shastri Nagar Pickup <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button onClick={() => window.open("https://wa.me/919671869470")} variant="outline" className="h-16 rounded-2xl border-gray-200 font-bold px-10">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY SHASTRI NAGAR */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Why Shastri Nagar Chooses EZDRY</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Understanding the unique needs of established residential communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: "Multi-Gen Family Plans", desc: "Special subscriptions for joint families with 3+ generations. Separate care for elders' traditional wear and kids' school clothes." },
              { icon: Home, title: "Community Pickup Points", desc: "Convenient collection from Shastri Park area and Community Center for bulk neighborhood orders." },
              { icon: Sparkles, title: "Festival Season Experts", desc: "Extra capacity deployed during Diwali, weddings, and festivals when Shastri Nagar sees peak demand." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-blue-50 border border-blue-100">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONAL DETAILS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Shastri Nagar Operations</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Pickup Timing</p>
                    <p className="text-gray-600">8 AM - 8 PM daily. Morning slots preferred by working families. Evening slots popular with senior residents.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Local Rating</p>
                    <p className="text-gray-600">4.9/5 from 200+ Shastri Nagar families. Zero garment losses in 12 months of service.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <School className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Student Discount</p>
                    <p className="text-gray-600">15% off for students from nearby Inter College and coaching centers. Valid ID required.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Area Map/Visual */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl">
              <h3 className="font-bold text-lg mb-6">Shastri Nagar Coverage</h3>
              <div className="space-y-4">
                {["Block A (Near Park)", "Block B (Central)", "Block C (Near Mandir)", "Block D (Extension)"].map((block) => (
                  <div key={block} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="font-medium text-gray-700">{block}</span>
                    <span className="ml-auto text-xs text-green-600 font-bold">Active</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-700">
                  <strong>Express Available:</strong> Same-day service for morning bookings in all Shastri Nagar blocks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-black text-gray-900 mb-12 text-center">Shastri Nagar Families Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-[2rem] p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                  <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h2 className="text-4xl font-black mb-6">Join 200+ Shastri Nagar Families</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Experience laundry service that understands the needs of multi-generational households. 
            Traditional wear care, family plans, and community pickup points.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => navigate("/customer/book")} className="h-16 bg-white text-blue-600 hover:bg-gray-100 rounded-2xl font-black px-10">
              Start Family Plan
            </Button>
            <Button onClick={() => window.open("https://wa.me/919671869470")} variant="outline" className="h-16 border-white/20 text-white hover:bg-white/10 rounded-2xl font-bold px-10">
              <Phone className="w-5 h-5 mr-2" /> Call: 96718 69470
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <FAQAccordion items={SHASTRI_NAGAR_FAQS} heading="Shastri Nagar FAQs" bg="bg-white" />
        </div>
      </section>
    </PublicLayout>
  );
}
