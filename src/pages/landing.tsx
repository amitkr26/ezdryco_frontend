import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Shirt, Truck, Star, CheckCircle, MapPin, Clock, Shield,
  ChevronRight, Phone, Mail, Instagram, Facebook, Linkedin, Youtube, Sparkles, BookOpenText,
  Building2, GraduationCap, Utensils, Scissors, Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { listBlogs } from "@/lib/blogs";
import { getCurrentCustomer, getCurrentBusiness } from "@/lib/session";
import { useSEO } from "@/hooks/useSEO";
import { BlogCard } from "@/components/BlogCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import PublicLayout from "@/layouts/public-layout";
import { PriceChecker } from "@/components/PriceChecker";
import { EnhancedReviews } from "@/components/EnhancedReviews";
import { TrustBlocks } from "@/components/TrustBlocks";
import { RealisticReviews } from "@/components/RealisticReviews";
import { GoogleReviews } from "@/components/GoogleReviews";
import { MapEmbed } from "@/components/MapEmbed";
import { SmartCTA, CTAGroup } from "@/components/SmartCTA";

const LANDING_FAQS = [
  { 
    q: "Does EZDRY offer free laundry pickup in Narnaul?", 
    a: "Yes. EZDRY provides free doorstep pickup and delivery across Narnaul, including Adarsh Nagar, Mahendragarh Road, Nasibpur, and Housing Board. Orders above ₹299 qualify for zero delivery fees." 
  },
  { 
    q: "What is the turnaround time for laundry in Narnaul?", 
    a: "Standard delivery takes 24-48 hours. EZDRY also offers an Express Same-Day service in Narnaul for orders booked before 10 AM, with return by 7 PM." 
  },
  { 
    q: "Is EZDRY safe for premium silk sarees and suits?", 
    a: "Yes. EZDRY specializes in premium fabric care using pH-balanced solvents for silk sarees, woolens, and wedding wear. We use RO-softened water to prevent hard-water damage common in Narnaul." 
  },
  { 
    q: "Does EZDRY serve hotels and hostels in Narnaul?", 
    a: "Yes. EZDRY provides specialized B2B bulk laundry solutions for hotels, PG hostels, and restaurants in Narnaul with customized per-KG pricing and dedicated account management." 
  },
  { 
    q: "What is the starting price for dry cleaning in Narnaul?", 
    a: "Dry cleaning at EZDRY Narnaul starts from ₹120 per item. We maintain a transparent, fixed price list available in-app and on our website to ensure zero hidden charges." 
  }
];

const BRAND_NAME = import.meta.env.VITE_BRAND_NAME || "EZDRY";
const CONTACT_PHONE = "+91 96718 69470";
const CONTACT_EMAIL = "dryco7718@gmail.com";
const SERVICE_AREA = "Narnaul, Haryana";

const SERVICES = [
  { icon: "🧺", title: "Laundry (Wash & Fold)", desc: "Perfect for everyday wear. Your clothes are washed, dried, and neatly folded. From ₹25/item.", price: "Standard 24-48hr Delivery" },
  { icon: "👔", title: "Premium Dry Cleaning", desc: "Expert care for suits, sarees, and delicate fabrics using professional solvents. From ₹80/item.", price: "Gentle Care Guaranteed" },
  { icon: "♨️", title: "Steam Ironing", desc: "Crisp, wrinkle-free clothes with professional steam press technology. From ₹15/item.", price: "Next-Day Return" },
  { icon: "🛏️", title: "Blanket & Bedding", desc: "Deep cleaning for bedsheets, heavy blankets, pillows, and curtains. From ₹80/piece.", price: "Hygienic Cleaning" },
];

const STEPS = [
  { icon: "📱", title: "Book a Pickup", desc: "Use our website or app to select your items and schedule a pickup slot in Narnaul." },
  { icon: "🚴", title: "Doorstep Collection", desc: "Our rider arrives at your address at the scheduled time to collect your garments." },
  { icon: "✨", title: "Professional Processing", desc: "Clothes are tagged, sorted, and cleaned using eco-friendly detergents by Narnaul's experts." },
  { icon: "🎁", title: "Clean Delivery", desc: "Your fresh, neatly packed clothes are delivered back to your doorstep within 48 hours." },
];

const B2B_SERVICES = [
  { icon: <Building2 className="w-8 h-8" />, title: "Hotels & Guesthouses", desc: "Fast and reliable linen cleaning for Narnaul's hospitality sector." },
  { icon: <GraduationCap className="w-8 h-8" />, title: "Hostels & PG", desc: "Bulk laundry solutions for students living in Narnaul." },
  { icon: <Utensils className="w-8 h-8" />, title: "Restaurants", desc: "Cleaning for tablecloths, aprons, and staff uniforms." },
  { icon: <Scissors className="w-8 h-8" />, title: "Salons & Spas", desc: "Specialized towel and linen cleaning services." },
];

const TESTIMONIALS = [
  { name: "Rahul Sharma", text: "Finally, a reliable dry cleaning service in Narnaul. My suits were returned perfectly pressed and on time. Highly recommended!", area: "New Colony" },
  { name: "Anjali Gupta", text: "The doorstep pickup is a game changer for busy moms. EZDRY handles my delicate sarees with so much care. Love the service!", area: "Mahendragarh Road" },
  { name: "Sandeep Yadav", text: "Professional, transparent pricing, and fast delivery. Best laundry app I've used so far in Haryana. Great job team!", area: "Adarsh Nagar" },
];

export default function LandingPage() {
  const [, navigate] = useLocation();
  const blogPosts = listBlogs(false).slice(0, 3);

  useSEO({
    title: "Best Laundry & Dry Cleaning Service in Narnaul | Free Pickup & Delivery — EZDRY",
    description: "Book professional laundry, dry cleaning & ironing in Narnaul, Haryana. Free doorstep pickup. Fast 24-48hr turnaround. Serving all areas in Narnaul. Trusted by families & professionals. Book now!",
    schema: {
      "@context": "https://schema.org",
      "@type": "LaundryOrDryCleaning",
      "name": "EZDRY Laundry Services",
      "image": window.location.origin + "/opengraph.jpg",
      "@id": "https://www.ezdry.in",
      "url": "https://www.ezdry.in",
      "telephone": "+919671869470",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Narnaul",
        "addressLocality": "Narnaul",
        "addressRegion": "Haryana",
        "postalCode": "123001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.0441,
        "longitude": 76.1053
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "08:00",
        "closes": "20:00"
      }
    },
    // AEO/GEO: FAQ schema for AI search visibility
    faqs: LANDING_FAQS.map(f => ({ question: f.q, answer: f.a })),
  });

  useEffect(() => {
    const customer = getCurrentCustomer();
    const business = getCurrentBusiness();
    
    if (customer?.id) {
      navigate("/customer/home");
    } else if (business?.id) {
      navigate("/business/dashboard");
    }
  }, [navigate]);

  return (
    <PublicLayout>
      {/* ── HERO SECTION ── */}
      <section className="pt-16 pb-20 bg-gradient-to-br from-sky-50/60 via-white to-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-[100px] opacity-40 -z-0" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-100/30 rounded-full blur-[80px] opacity-30 -z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-600 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider mb-8 border border-sky-100">
                <Sparkles className="w-3.5 h-3.5" /> Narnaul's #1 Clothing Spa
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
                Fresh Laundry <br />
                <span className="text-sky-500">Delivered.</span>
              </h1>
              <p className="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed font-medium max-w-xl">
              From silk sarees to everyday wear—we pick up, clean, and deliver. 
              <span className="text-gray-900 font-black"> All of Narnaul covered.</span>
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <PriceChecker />
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  onClick={() => navigate("/customer/register")}
                  className="h-16 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl font-bold text-lg px-10 shadow-lg shadow-sky-100 group transition-all hover:scale-[1.02]"
                >
                  <Truck className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                  Schedule Pickup
                </Button>
                <div className="flex flex-col justify-center px-2">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-sky-50 flex items-center justify-center text-[10px] font-bold text-sky-500">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm font-black text-gray-900">4.9/5</span>
                    </div>
                  </div>
                  <div className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                    Trusted by <span className="text-sky-500 font-bold">500+ Families</span> in Narnaul
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 border-t border-gray-100 pt-8">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sky-500 mb-1">
                    <Shield className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Hygienic</span>
                  </div>
                  <p className="text-[10px] font-medium text-gray-400 leading-tight">Sanitized processing.</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sky-500 mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">24h Return</span>
                  </div>
                  <p className="text-[10px] font-medium text-gray-400 leading-tight">Express delivery.</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sky-500 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Free Pickup</span>
                  </div>
                  <p className="text-[10px] font-medium text-gray-400 leading-tight">Doorstep service.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, rotate: 2 }} 
              animate={{ opacity: 1, scale: 1, rotate: 0 }} 
              transition={{ duration: 1, delay: 0.2 }} 
              className="hidden lg:block relative"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-sky-500/10 rounded-[5rem] rotate-3 scale-105 blur-2xl group-hover:rotate-6 transition-all duration-700" />
                <div className="relative bg-white rounded-[5rem] border-8 border-white shadow-[0_40px_80px_-20px_rgba(56,189,248,0.15)] p-2 overflow-hidden">
                  <img 
                    src="/landing-hero-premium.png" 
                    alt="Premium Laundry Service in Narnaul" 
                    className="w-full h-auto rounded-[4.5rem] object-cover aspect-[4/5]"
                  />
                  <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/50 shadow-2xl">
                     <p className="text-[10px] font-bold text-sky-500 uppercase tracking-wider mb-1">Next Available Slot</p>
                     <p className="text-lg font-black text-gray-900 leading-none">Today, 2:00 PM</p>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 bg-sky-500 p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-sky-500 text-xl font-bold shadow-inner">4.9</div>
                      <div>
                        <p className="font-bold text-white text-lg tracking-tight leading-none mb-1">Top Rated</p>
                        <p className="text-sky-100 text-xs font-medium">Narnaul's favorite clothing care</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST & PARTNERS ── */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Trusted by Narnaul's Residents & Businesses</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center gap-2 font-bold text-2xl text-gray-900"><Building2 className="w-8 h-8" /> HOTELS</div>
             <div className="flex items-center gap-2 font-bold text-2xl text-gray-900"><GraduationCap className="w-8 h-8" /> HOSTELS</div>
             <div className="flex items-center gap-2 font-bold text-2xl text-gray-900"><Utensils className="w-8 h-8" /> DINING</div>
             <div className="flex items-center gap-2 font-bold text-2xl text-gray-900"><Scissors className="w-8 h-8" /> SALONS</div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-16 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Services in Narnaul</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
              Complete clothing care solutions — from everyday wash to premium dry cleaning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-sky-100 transition-all"
              >
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">{s.desc}</p>
                <div className="pt-4 border-t border-gray-50">
                   <span className="text-sky-500 font-semibold text-sm">{s.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Button onClick={() => navigate("/services")} variant="outline" className="rounded-xl border-gray-200 text-gray-600 font-bold px-8 h-12">
                Explore All Services & Pricing
             </Button>
          </div>
        </div>
      </section>

      {/* ── PROCESS EXPLAINER ── */}
      <section className="py-16 bg-gradient-to-br from-sky-500 to-sky-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_30%_30%,white_1px,transparent_1px)] bg-[length:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">How EZDRY Works</h2>
            <p className="text-sky-100 max-w-2xl mx-auto text-base">
              We've redesigned laundry to be simple, fast, and completely hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[70%] w-full h-[1px] bg-white/30" />
                )}
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl mb-6 border border-white/30">
                  {step.icon}
                </div>
                <div className="text-sky-200 font-bold text-5xl opacity-30 mb-3">{i + 1}</div>
                <h3 className="text-xl font-black mb-3">{step.title}</h3>
                <p className="text-sky-50/80 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMERCIAL / B2B ── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Commercial & Bulk Laundry</h2>
              <p className="text-gray-600 text-base mb-8 leading-relaxed">
                Professional bulk laundry services for Narnaul's hotels, hostels, and salons with guaranteed turnaround times.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {B2B_SERVICES.map((b, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200/50 shadow-sm">
                    <div className="text-sky-500 mb-3">{b.icon}</div>
                    <h3 className="font-black text-gray-900 mb-2">{b.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
              
              <Button onClick={() => navigate("/contact?type=b2b")} className="mt-10 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold px-8 h-12">
                Inquire for B2B Pricing
              </Button>
            </div>
            
            <div className="relative">
               <div className="bg-sky-50 rounded-2xl p-10 aspect-square flex items-center justify-center border border-sky-100">
                  <div className="text-center">
                     <p className="text-5xl font-bold text-sky-500 mb-3">50+</p>
                     <p className="text-xl font-bold text-gray-600 italic">Trusted Business Partners <br /> in Narnaul</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST INFRASTRUCTURE ── */}
      <TrustBlocks />
      
      {/* ── REAL CUSTOMER REVIEWS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <RealisticReviews variant="full" showReply={true} maxReviews={6} />
        </div>
      </section>

      {/* ── GOOGLE REVIEWS SECTION ── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <GoogleReviews variant="full" showRequestCTA={true} />
        </div>
      </section>

      {/* ── LOCATION & MAP ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Serving All of Narnaul</h2>
              <p className="text-gray-500 mb-5 text-base">
                Free pickup across 8+ localities. From Adarsh Nagar to Koriawas.
              </p>
              <CTAGroup context="locality" locality="Narnaul" showSecondary={true} />
            </div>
            <MapEmbed variant="full" showServiceArea={true} />
          </div>
        </div>
      </section>

      {/* ── LOCAL BLOG ── */}
      <section id="blogs" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:row items-center justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Laundry Tips & Guides</h2>
              <p className="text-gray-500 text-base">Expert advice on stain removal and fabric care.</p>
            </div>
            <Button onClick={() => navigate("/blog")} variant="outline" className="rounded-xl border-gray-200 font-bold px-6">
              View All Articles
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FAQAccordion
        items={LANDING_FAQS}
        heading="Laundry & Dry Cleaning FAQs in Narnaul"
        bg="bg-white"
      />

      {/* ── JOIN AS BUSINESS ── */}
      <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl mx-6 mb-16 overflow-hidden relative shadow-lg">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] -z-0" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="text-5xl mb-8">🏪</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Partner with EZDRY</h2>
          <p className="text-slate-400 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Own a laundry business in Narnaul? Join our network and grow your customer base.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              onClick={() => navigate("/business/register")}
              className="h-16 bg-white text-gray-900 hover:bg-gray-100 rounded-2xl font-black text-lg px-12"
            >
              Start Partnering Today
            </Button>
            <Button
              onClick={() => navigate("/business/login")}
              variant="outline"
              className="h-16 border-white/20 text-white hover:bg-white/5 rounded-2xl font-bold px-10"
            >
              Partner Login
            </Button>
          </div>
        </div>
      </section>

    </PublicLayout>
  );
}
