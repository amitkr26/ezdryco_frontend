/**
 * Areas We Serve Hub Page - Local SEO Architecture
 * 
 * Features:
 * - Central locality hub with semantic clustering
 * - Map-like visual representation
 * - Locality cards with unique context
 * - AI-readable area relationships
 * - Service availability matrix
 * - Internal linking architecture
 */

import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { 
  MapPin, 
  ChevronRight, 
  Clock, 
  Star, 
  CheckCircle2,
  Navigation,
  Building2,
  Home,
  GraduationCap,
  Hotel,
  ArrowRight,
  Search,
  Phone,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { trackEvent } from "@/lib/analytics";

// Narnaul Localities with unique operational context
const LOCALITIES = [
  {
    id: "adarsh-nagar",
    name: "Adarsh Nagar",
    slug: "/adarsh-nagar-laundry",
    type: "residential",
    populationEstimate: "15,000+",
    landmarks: ["Adarsh Nagar Park", "Local Market", "DAV School"],
    timing: "8 AM - 8 PM daily",
    expressAvailable: true,
    description: "Premium residential area with family homes. Fast pickup near the park and market areas.",
    specialties: ["Family laundry plans", "School uniform care", "Daily pickup routes"],
    rating: 4.9,
    ordersPerWeek: 450,
    icon: Home,
  },
  {
    id: "mahendragarh-road",
    name: "Mahendragarh Road",
    slug: "/mahendragarh-road-laundry",
    type: "commercial",
    populationEstimate: "Mixed commercial/residential",
    landmarks: ["Bus Stand", "Main Market", "Bank Street"],
    timing: "8 AM - 8 PM daily",
    expressAvailable: true,
    description: "High-traffic commercial corridor connecting to Mahendragarh. Busy professionals and shops.",
    specialties: ["Express service", "Commercial accounts", "Workwear specialists"],
    rating: 4.8,
    ordersPerWeek: 380,
    icon: Building2,
  },
  {
    id: "shastri-nagar",
    name: "Shastri Nagar",
    slug: "/shastri-nagar-laundry",
    type: "residential",
    populationEstimate: "12,000+",
    landmarks: ["Shastri Park", "Community Center", "Shiv Mandir"],
    timing: "8 AM - 8 PM daily",
    expressAvailable: true,
    description: "Established residential colony with multi-generational families. Strong community connections.",
    specialties: ["Multi-gen family plans", "Traditional wear care", "Festival prep"],
    rating: 4.9,
    ordersPerWeek: 320,
    icon: Home,
  },
  {
    id: "nasibpur",
    name: "Nasibpur",
    slug: "/nasibpur-laundry",
    type: "suburban",
    populationEstimate: "8,000+",
    landmarks: ["Nasibpur Chowk", "Agricultural Market", "Primary Health Center"],
    timing: "9 AM - 7 PM daily",
    expressAvailable: false,
    description: "Suburban area on Narnaul's outskirts. Agricultural community with growing residential pockets.",
    specialties: ["Rural-urban bridge service", "Heavy-duty cleaning", "Value pricing"],
    rating: 4.7,
    ordersPerWeek: 180,
    icon: Home,
  },
  {
    id: "koriawas",
    name: "Koriawas",
    slug: "/koriawas-laundry",
    type: "village-urban",
    populationEstimate: "6,000+",
    landmarks: ["Koriawas Lake", "Panchayat Office", "Government School"],
    timing: "9 AM - 6 PM daily",
    expressAvailable: false,
    description: "Village-urban transition zone near Narnaul. Mixed farming and service sector residents.",
    specialties: ["Affordable family plans", "Pickup from farm areas", "Seasonal bulk service"],
    rating: 4.8,
    ordersPerWeek: 120,
    icon: Home,
  },
  {
    id: "huda-sector",
    name: "HUDA Sector",
    slug: "/huda-sector-laundry",
    type: "planned-residential",
    populationEstimate: "10,000+",
    landmarks: ["HUDA Office", "Sector Park", "New Development Area"],
    timing: "8 AM - 8 PM daily",
    expressAvailable: true,
    description: "Planned HUDA development with modern homes. Young professionals and new families.",
    specialties: ["Modern lifestyle plans", "Quick turnaround", "App-based tracking"],
    rating: 4.9,
    ordersPerWeek: 290,
    icon: Building2,
  },
  {
    id: "kailash-nagar",
    name: "Kailash Nagar",
    slug: "/kailash-nagar-laundry",
    type: "residential",
    populationEstimate: "9,000+",
    landmarks: ["Kailash Mandir", "Main Bazar", "Inter College"],
    timing: "8 AM - 8 PM daily",
    expressAvailable: true,
    description: "Densely populated residential area with strong temple community. Active student population.",
    specialties: ["Student discounts", "Religious garment care", "Community pickups"],
    rating: 4.8,
    ordersPerWeek: 250,
    icon: GraduationCap,
  },
  {
    id: "housing-board",
    name: "Housing Board Colony",
    slug: "/housing-board-laundry",
    type: "government-colony",
    populationEstimate: "7,000+",
    landmarks: ["Housing Board Office", "Colony Park", "Government Dispensary"],
    timing: "8 AM - 7 PM daily",
    expressAvailable: true,
    description: "Government employee residential colony. Stable, long-term residents with regular schedules.",
    specialties: ["Government employee plans", "Uniform care", "Predictable scheduling"],
    rating: 4.9,
    ordersPerWeek: 200,
    icon: Building2,
  },
];

// Service availability matrix
const SERVICE_MATRIX = [
  { service: "Wash & Fold", icon: "🧺", availability: "All areas", turnaround: "24-48 hrs" },
  { service: "Dry Cleaning", icon: "✨", availability: "All areas", turnaround: "48-72 hrs" },
  { service: "Steam Ironing", icon: "🔥", availability: "All areas", turnaround: "24 hrs" },
  { service: "Express Service", icon: "⚡", availability: "6 priority zones", turnaround: "Same day" },
  { service: "Shoe Cleaning", icon: "👟", availability: "All areas", turnaround: "48-72 hrs" },
  { service: "Carpet Cleaning", icon: "🏠", availability: "All areas", turnaround: "72 hrs" },
];

const HUB_FAQS = [
  { 
    q: "Which areas in Narnaul does EZDRY serve?", 
    a: "EZDRY provides doorstep laundry and dry cleaning services across all major areas of Narnaul including Adarsh Nagar, Mahendragarh Road, Shastri Nagar, Nasibpur, Koriawas, HUDA Sector, Kailash Nagar, and Housing Board Colony. We cover both urban core areas and suburban zones within 15km radius of Narnaul city center."
  },
  { 
    q: "Is there an extra charge for pickup in outer areas like Koriawas or Nasibpur?", 
    a: "No, there is no extra pickup charge for outer areas. We offer free doorstep pickup and delivery across all service areas including Koriawas, Nasibpur, and surrounding villages. Minimum order value of ₹299 applies for free pickup."
  },
  { 
    q: "What is the pickup timing for different areas?", 
    a: "Core urban areas (Adarsh Nagar, Mahendragarh Road, Shastri Nagar, HUDA Sector) have pickup slots from 8 AM to 8 PM. Suburban areas (Nasibpur, Koriawas) have slightly adjusted timing from 9 AM to 6 PM to optimize our logistics routes."
  },
  { 
    q: "Which areas get same-day express service?", 
    a: "Express same-day service is available in Adarsh Nagar, Mahendragarh Road, Shastri Nagar, HUDA Sector, Kailash Nagar, and Housing Board Colony. Orders must be placed before 10 AM for same-day return by 7 PM."
  },
  { 
    q: "Do you serve areas outside this list?", 
    a: "We can often accommodate nearby villages and settlements not explicitly listed. Contact us on WhatsApp at +91 96718 69470 with your location, and we'll confirm service availability. Custom routes can be arranged for bulk orders."
  },
  { 
    q: "How do I know if my specific address is covered?", 
    a: "If you're within 15km of Narnaul city center, you're likely covered. During checkout, enter your address and our system will confirm availability. For uncertain locations, message us on WhatsApp with your landmark and we'll respond within minutes."
  },
];

export default function AreasWeServe() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Laundry Service Areas in Narnaul — EZDRY Coverage Map",
    description: "EZDRY serves 8+ areas across Narnaul: Adarsh Nagar, Mahendragarh Road, Shastri Nagar, Nasibpur, Koriawas, HUDA Sector, Kailash Nagar, Housing Board. Free pickup & delivery.",
    canonical: "https://ezdry.in/areas-we-serve",
    schema: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: LOCALITIES.map((loc, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Place",
          name: `${loc.name}, Narnaul`,
          description: loc.description,
        },
      })),
    },
    faqs: HUB_FAQS,
  });

  const handleLocalityClick = (slug: string, name: string) => {
    trackEvent("locality_hub_click", { locality: name, slug });
    navigate(slug);
  };

  return (
    <PublicLayout>
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 py-24 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -ml-48 -mb-48" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <MapPin className="w-4 h-4" />
              Complete Narnaul Coverage
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              We Serve All of<br /><span className="text-indigo-200">Narnaul</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Doorstep laundry and dry cleaning across 8+ localities. From Adarsh Nagar to Koriawas — 
              premium care delivered to your neighborhood.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <div className="text-center">
                <p className="text-4xl font-black">8+</p>
                <p className="text-sm text-indigo-200">Localities Served</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black">15km</p>
                <p className="text-sm text-indigo-200">Service Radius</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black">2,000+</p>
                <p className="text-sm text-indigo-200">Weekly Orders</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black">4.8★</p>
                <p className="text-sm text-indigo-200">Average Rating</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => navigate("/customer/register")}
                className="h-16 bg-white text-indigo-900 hover:bg-gray-100 rounded-2xl font-black px-10 text-lg"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Check Your Area
              </Button>
              <Button 
                onClick={() => window.open("https://wa.me/919671869470")}
                variant="outline" 
                className="h-16 border-white/20 text-white hover:bg-white/10 rounded-2xl font-bold px-10"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICE MATRIX */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Service Availability</h2>
            <p className="text-gray-500">What's available in your area</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SERVICE_MATRIX.map((service) => (
              <div key={service.service} className="bg-white rounded-2xl p-4 text-center border border-gray-100">
                <div className="text-3xl mb-2">{service.icon}</div>
                <p className="font-bold text-gray-900 text-sm mb-1">{service.service}</p>
                <p className="text-xs text-gray-400">{service.turnaround}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALITY GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Service Areas</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Click on your locality for area-specific pricing, pickup timings, and local landmarks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCALITIES.map((locality, index) => {
              const Icon = locality.icon;
              return (
                <motion.div
                  key={locality.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => handleLocalityClick(locality.slug, locality.name)}
                  className="group bg-gray-50 rounded-[2rem] p-6 border-2 border-transparent hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all cursor-pointer"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      locality.expressAvailable ? "bg-indigo-100 text-indigo-600" : "bg-gray-200 text-gray-600"
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {locality.expressAvailable && (
                      <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-bold">
                        ⚡ Express
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-indigo-600 transition-colors">
                    {locality.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{locality.description}</p>

                  {/* Landmarks */}
                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-400 uppercase mb-2">Nearby</p>
                    <div className="flex flex-wrap gap-1">
                      {locality.landmarks.slice(0, 2).map((landmark) => (
                        <span key={landmark} className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                          {landmark}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span>{locality.timing.split(" - ")[0]}</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-600">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="font-bold">{locality.rating}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-sm font-bold text-indigo-600 group-hover:underline">
                      View Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-indigo-600 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPERATIONAL MAP SECTION */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-black mb-6">How We Cover Narnaul</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Zone-Based Routing</p>
                    <p className="text-gray-400">Narnaul divided into 3 operational zones with dedicated riders per zone for faster response times.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">Scheduled Routes</p>
                    <p className="text-gray-400">Daily optimized routes covering all areas. Outer zones (Nasibpur, Koriawas) on alternate days.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">15km Service Radius</p>
                    <p className="text-gray-400">We serve all areas within 15km of Narnaul center. Contact us for locations beyond this range.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Map Representation */}
            <div className="bg-white/5 rounded-[2.5rem] p-8 border border-white/10">
              <div className="text-center mb-6">
                <p className="text-sm text-gray-400">Narnaul Service Zones</p>
              </div>
              <div className="relative h-80 bg-gray-800 rounded-2xl overflow-hidden">
                {/* Stylized Map */}
                <div className="absolute inset-0 p-6">
                  {/* Center - Narnaul Core */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-24 h-24 bg-indigo-500/30 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">CORE</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Surrounding Areas */}
                  {[
                    { name: "Adarsh Nagar", top: "20%", left: "20%", color: "amber" },
                    { name: "Mahendragarh Rd", top: "20%", right: "20%", color: "emerald" },
                    { name: "Shastri Nagar", bottom: "30%", left: "15%", color: "blue" },
                    { name: "HUDA Sector", bottom: "30%", right: "15%", color: "purple" },
                    { name: "Kailash Nagar", top: "50%", left: "10%", color: "pink" },
                    { name: "Nasibpur", bottom: "15%", left: "30%", color: "gray" },
                    { name: "Koriawas", bottom: "15%", right: "30%", color: "gray" },
                  ].map((area, i) => (
                    <div
                      key={area.name}
                      className={`absolute w-3 h-3 bg-${area.color}-400 rounded-full animate-pulse`}
                      style={{
                        top: area.top,
                        left: area.left,
                        right: area.right,
                        bottom: area.bottom,
                        animationDelay: `${i * 0.2}s`,
                      }}
                      title={area.name}
                    />
                  ))}
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-4">
                Interactive map visualization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTSIDE COVERAGE CTA */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Don't See Your Area?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We often serve nearby villages and settlements not explicitly listed. 
            We also arrange custom pickup routes for bulk orders (hotels, hostels, businesses).
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => window.open("https://wa.me/919671869470")}
              className="h-14 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold px-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Check Availability on WhatsApp
            </Button>
            <Button 
              onClick={() => navigate("/contact")}
              variant="outline"
              className="h-14 border-gray-300 text-gray-700 rounded-2xl font-bold px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <FAQAccordion
            items={HUB_FAQS}
            heading="Service Area FAQs"
            bg="bg-gray-50"
          />
        </div>
      </section>
    </PublicLayout>
  );
}
