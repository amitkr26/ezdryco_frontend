import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import PublicLayout from "@/layouts/public-layout";

export const SEO_BLOGS = [
  {
    id: "best-laundry-service-narnaul",
    title: "Best Laundry Service in Narnaul — EZDRY vs Local Dhobi",
    excerpt: "Is the local dhobi still the best option in Narnaul? We compare traditional laundry services with EZDRY's doorstep model on price, quality, and reliability.",
    date: "April 22, 2025",
    readTime: "5 min read",
    category: "Narnaul Guide",
    slug: "/blog/best-laundry-service-narnaul",
    author: "EZDRY Team",
    createdAt: new Date("2025-04-22").toISOString(),
  },
  {
    id: "laundry-vs-dry-cleaning-narnaul",
    title: "Laundry vs Dry Cleaning in Narnaul — Which Does Your Clothes Need?",
    excerpt: "Kurtas, suits, woolen shawls — not everything should go in the wash. Here's how to decide for every garment in your Narnaul wardrobe.",
    date: "April 20, 2025",
    readTime: "6 min read",
    category: "Fabric Care",
    slug: "/blog/laundry-vs-dry-cleaning-narnaul",
    author: "EZDRY Team",
    createdAt: new Date("2025-04-20").toISOString(),
  },
  {
    id: "affordable-laundry-narnaul",
    title: "Affordable Laundry Service in Narnaul — Prices, Plans & What to Expect",
    excerpt: "How much should laundry actually cost in Narnaul? We break down fair prices for wash & fold, dry cleaning, and ironing — and what red flags to watch for.",
    date: "April 18, 2025",
    readTime: "5 min read",
    category: "Pricing Guide",
    slug: "/blog/affordable-laundry-narnaul",
    author: "EZDRY Team",
    createdAt: new Date("2025-04-18").toISOString(),
  },
  {
    id: "complete-fabric-care-guide-narnaul",
    title: "Complete Fabric Care Guide for Narnaul's Climate",
    excerpt: "Narnaul's extreme temperature variations demand special fabric care. Learn how to maintain cotton, silk, wool, and synthetics in Haryana's unique weather conditions.",
    date: "May 3, 2025",
    readTime: "8 min read",
    category: "Fabric Care",
    slug: "/blog/complete-fabric-care-guide-narnaul",
    author: "EZDRY Fabric Care Team",
    createdAt: new Date("2025-05-03").toISOString(),
  },
  {
    id: "stain-removal-complete-guide",
    title: "Complete Stain Removal Guide: From Tea to Turmeric",
    excerpt: "Narnaul households deal with unique stains - chai spills, turmeric from cooking, sweat marks from summer heat. Master the science of stain removal for every common household stain.",
    date: "May 5, 2025",
    readTime: "7 min read",
    category: "Stain Removal",
    slug: "/blog/stain-removal-complete-guide",
    author: "EZDRY Stain Removal Specialists",
    createdAt: new Date("2025-05-05").toISOString(),
  },
  {
    id: "monsoon-laundry-care-narnaul",
    title: "Monsoon Laundry Care in Narnaul: Beat the Humidity",
    excerpt: "Narnaul's monsoon brings high humidity that can ruin clothes. Learn how to dry, store, and protect garments during rainy season in Mahendragarh district.",
    date: "May 6, 2025",
    readTime: "6 min read",
    category: "Seasonal Care",
    slug: "/blog/monsoon-laundry-care-narnaul",
    author: "EZDRY Seasonal Care Experts",
    createdAt: new Date("2025-05-06").toISOString(),
  },
  {
    id: "wedding-garment-care-narnaul",
    title: "Wedding Season Garment Care in Narnaul: Lehengas to Sherwanis",
    excerpt: "Narnaul's wedding season demands special care for expensive bridal wear. How to preserve lehengas, sherwanis, and silk sarees before, during, and after the big day.",
    date: "May 7, 2025",
    readTime: "8 min read",
    category: "Wedding Care",
    slug: "/blog/wedding-garment-care-narnaul",
    author: "EZDRY Wedding Garment Specialists",
    createdAt: new Date("2025-05-07").toISOString(),
  },
  {
    id: "shoe-cleaning-complete-guide",
    title: "Complete Shoe Cleaning Guide: Sneakers to Leather Formals",
    excerpt: "Narnaul's dusty roads and varying weather take a toll on footwear. Master professional shoe cleaning techniques for all types - canvas, leather, suede, and sports shoes.",
    date: "May 8, 2025",
    readTime: "6 min read",
    category: "Shoe Care",
    slug: "/blog/shoe-cleaning-complete-guide",
    author: "EZDRY Footwear Care Team",
    createdAt: new Date("2025-05-08").toISOString(),
  },
  {
    id: "carpet-cleaning-deep-guide",
    title: "Deep Carpet & Rug Cleaning Guide for Narnaul Homes",
    excerpt: "Carpets in Narnaul face dust, hard water, and heavy use. Learn professional-grade cleaning methods for wool carpets, synthetic rugs, and traditional dhurries.",
    date: "May 9, 2025",
    readTime: "7 min read",
    category: "Home Care",
    slug: "/blog/carpet-cleaning-deep-guide",
    author: "EZDRY Home Textile Specialists",
    createdAt: new Date("2025-05-09").toISOString(),
  },
  {
    id: "b2b-linen-care-hotels",
    title: "Commercial Linen Care for Narnaul Hotels & Restaurants",
    excerpt: "Narnaul's hospitality businesses need industrial-grade linen care. Best practices for hotel bedsheets, restaurant tablecloths, and staff uniform maintenance.",
    date: "May 9, 2025",
    readTime: "8 min read",
    category: "B2B Guide",
    slug: "/blog/b2b-linen-care-hotels",
    author: "EZDRY Commercial Team",
    createdAt: new Date("2025-05-09").toISOString(),
  },
  {
    id: "hostel-laundry-management",
    title: "Complete Hostel & PG Laundry Management Guide",
    excerpt: "Running a hostel or PG in Narnaul? Learn how to manage bulk laundry for students efficiently - from collection systems to individual garment tracking.",
    date: "May 9, 2025",
    readTime: "7 min read",
    category: "B2B Guide",
    slug: "/blog/hostel-laundry-management",
    author: "EZDRY B2B Operations",
    createdAt: new Date("2025-05-09").toISOString(),
  },
];

export default function BlogIndex() {
  const [, navigate] = useLocation();

  useSEO({
    title: "Laundry Tips & Narnaul Service Guides — EZDRY Blog",
    description: "Laundry tips, fabric care guides, and Narnaul laundry service information from the EZDRY team.",
    canonical: "https://ezdry.in/blog",
  });

  return (
    <PublicLayout>
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-50/50 via-white to-white py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] -z-0" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
             <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-sm border border-indigo-100 mb-8">
               <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Fabric Care Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-10 leading-[0.95] tracking-tighter">
              Knowledge <br /><span className="text-indigo-600 italic">Hub.</span>
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
              Expert laundry tips, Narnaul-specific care guides, and the latest from the world of fabric preservation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BLOG CARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {SEO_BLOGS.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3.5rem] p-20 text-center text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full -mr-32 -mt-32 blur-3xl" />
           <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight italic">Enough Reading?</h2>
           <p className="text-gray-400 text-xl mb-12 max-w-xl mx-auto font-medium">Experience the difference of professional care for yourself. First order ₹50 off.</p>
           <Button onClick={() => navigate("/customer/register")}
             className="h-20 bg-indigo-600 text-white hover:bg-indigo-700 rounded-3xl font-black px-12 text-xl shadow-2xl shadow-indigo-900/40">
             Book Pickup Now <ChevronRight className="w-5 h-5 ml-2" />
           </Button>
        </div>
      </section>
    </PublicLayout>
  );
}
