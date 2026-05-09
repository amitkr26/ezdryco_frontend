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
      <section className="pt-20 pb-32 bg-gradient-to-br from-indigo-50/50 via-white to-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] opacity-30 -z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px] opacity-30 -z-0" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-600/5 text-indigo-700 px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 border border-indigo-100/50">
                <Sparkles className="w-3.5 h-3.5" /> Narnaul's #1 Clothing Spa
              </div>
              <h1 className="text-6xl md:text-8xl font-[900] text-gray-900 leading-[0.95] mb-10 tracking-tighter">
                Laundry <br />
                <span className="text-indigo-600 italic">Redefined.</span>
              </h1>
              <p className="text-gray-500 text-xl md:text-2xl mb-12 leading-relaxed font-medium max-w-2xl">
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
                  className="h-20 bg-indigo-600 hover:bg-indigo-700 text-white rounded-3xl font-black text-xl px-12 shadow-2xl shadow-indigo-200 group transition-all hover:scale-[1.02]"
                >
                  <Truck className="w-6 h-6 mr-3 group-hover:translate-x-1 transition-transform" />
                  Schedule Pickup
                </Button>
                <div className="flex flex-col justify-center px-2">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-indigo-50 flex items-center justify-center text-[10px] font-black text-indigo-400">
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
                    Trusted by <span className="text-indigo-600">500+ Families</span> in Narnaul
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-16 border-t border-gray-100 pt-12">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-indigo-600 mb-1">
                    <Shield className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest">Hygienic</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 leading-tight">Sanitized processing for every garment.</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-indigo-600 mb-1">
                    <Clock className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest">24h Return</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 leading-tight">Express delivery available in Narnaul.</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-indigo-600 mb-1">
                    <MapPin className="w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest">Free Pickup</span>
                  </div>
                  <p className="text-[10px] font-bold text-gray-400 leading-tight">No-cost doorstep collection service.</p>
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
                <div className="absolute inset-0 bg-indigo-600/10 rounded-[5rem] rotate-3 scale-105 blur-2xl group-hover:rotate-6 transition-all duration-700" />
                <div className="relative bg-white rounded-[5rem] border-8 border-white shadow-[0_50px_100px_-20px_rgba(79,70,229,0.15)] p-2 overflow-hidden">
                  <img 
                    src="/landing-hero-premium.png" 
                    alt="Premium Laundry Service in Narnaul" 
                    className="w-full h-auto rounded-[4.5rem] object-cover aspect-[4/5]"
                  />
                  <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/50 shadow-2xl">
                     <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mb-1">Next Available Slot</p>
                     <p className="text-lg font-black text-gray-900 leading-none">Today, 2:00 PM</p>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 bg-indigo-600 p-8 rounded-[2.5rem] shadow-2xl">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-indigo-600 text-2xl font-black shadow-inner">4.9</div>
                      <div>
                        <p className="font-black text-white text-xl tracking-tight leading-none mb-1">Top Rated</p>
                        <p className="text-indigo-200 text-xs font-bold">Narnaul's favorite clothing care</p>
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
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Our Professional Services in Narnaul</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We offer a complete range of clothing care solutions for your wardrobe. 
              From everyday wash & fold to premium dry cleaning and specialized item cleaning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all"
              >
                <div className="text-6xl mb-8">{s.icon}</div>
                <h3 className="text-xl font-black text-gray-900 mb-4">{s.title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{s.desc}</p>
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                   <span className="text-indigo-600 font-bold text-sm">{s.price}</span>
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
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_30%_30%,white_1px,transparent_1px)] bg-[length:40px_40px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Doorstep to Doorstep — The EZDRY Way</h2>
            <p className="text-indigo-100 max-w-2xl mx-auto text-lg">
              We've redesigned laundry to be simple, fast, and completely hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[70%] w-full h-[2px] bg-indigo-500" />
                )}
                <div className="w-20 h-20 bg-indigo-500/50 backdrop-blur-md rounded-2xl flex items-center justify-center text-4xl mb-8 border border-white/20">
                  {step.icon}
                </div>
                <div className="text-indigo-300 font-black text-6xl opacity-20 mb-4">{i + 1}</div>
                <h3 className="text-xl font-black mb-3">{step.title}</h3>
                <p className="text-indigo-100/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMERCIAL / B2B ── */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tight">Commercial & Bulk Laundry Solutions in Narnaul</h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Narnaul's businesses deserve premium care too. We provide professional bulk laundry services for local hotels, hostels, and salons with guaranteed turnaround times and commercial-grade cleaning.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {B2B_SERVICES.map((b, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200/50 shadow-sm">
                    <div className="text-indigo-600 mb-4">{b.icon}</div>
                    <h3 className="font-black text-gray-900 mb-2">{b.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
              
              <Button onClick={() => navigate("/contact?type=b2b")} className="mt-12 bg-gray-900 text-white rounded-xl font-bold px-8 h-14">
                Inquire for B2B Pricing
              </Button>
            </div>
            
            <div className="relative">
               <div className="bg-indigo-600/5 rounded-3xl p-12 aspect-square flex items-center justify-center border border-indigo-100">
                  <div className="text-center">
                     <p className="text-6xl font-black text-indigo-600 mb-4">50+</p>
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <RealisticReviews variant="full" showReply={true} maxReviews={6} />
        </div>
      </section>

      {/* ── GOOGLE REVIEWS SECTION ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <GoogleReviews variant="full" showRequestCTA={true} />
        </div>
      </section>

      {/* ── LOCATION & MAP ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-4">Serving All of Narnaul</h2>
              <p className="text-gray-500 mb-6">
                Free pickup and delivery across 8+ localities. From Adarsh Nagar to Koriawas — 
                we're never far from your doorstep.
              </p>
              <CTAGroup context="locality" locality="Narnaul" showSecondary={true} />
            </div>
            <MapEmbed variant="full" showServiceArea={true} />
          </div>
        </div>
      </section>

      {/* ── LOCAL BLOG ── */}
      <section id="blogs" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:row items-center justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-2">Clothing Care Blog</h2>
              <p className="text-gray-500">Expert tips on laundry, stain removal, and fabric care.</p>
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
      <section className="py-24 bg-gray-900 text-white rounded-[3rem] mx-6 mb-24 overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-0" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="text-6xl mb-10">🏪</div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Partner with EZDRY in Narnaul</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Own a laundry or dry cleaning business in Narnaul? Join our network, digitize your operations, and get more customers without any overhead.
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
