export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  coverImageUrl?: string;
  createdAt: string;
  isPublished: boolean;
};

const BLOG_STORAGE_KEY = "ezdry_blog_posts";

const DEFAULT_BLOGS: BlogPost[] = [
  {
    id: "best-laundry-service-narnaul",
    title: "Best Laundry Service in Narnaul — EZDRY vs Local Dhobi",
    excerpt: "Is the local dhobi still the best option in Narnaul? We compare traditional laundry services with EZDRY's doorstep model on price, quality, and reliability.",
    content: "Full comparison of EZDRY and local dhobi services in Narnaul with pricing, quality, and reliability analysis.",
    author: "EZDRY Team",
    createdAt: new Date("2025-04-22").toISOString(),
    isPublished: true,
  },
  {
    id: "laundry-vs-dry-cleaning-narnaul",
    title: "Laundry vs Dry Cleaning in Narnaul — Which Does Your Clothes Need?",
    excerpt: "Kurtas, suits, woolen shawls — not everything should go in the wash. Here's how to decide for every garment in your Narnaul wardrobe.",
    content: "Expert guide on when to use regular laundry vs dry cleaning for different fabrics common in Narnaul.",
    author: "EZDRY Team",
    createdAt: new Date("2025-04-20").toISOString(),
    isPublished: true,
  },
  {
    id: "affordable-laundry-narnaul",
    title: "Affordable Laundry Service in Narnaul — Prices, Plans & What to Expect",
    excerpt: "How much should laundry actually cost in Narnaul? We break down fair prices for wash & fold, dry cleaning, and ironing.",
    content: "Complete pricing guide for laundry services in Narnaul including wash & fold, dry cleaning, and ironing rates.",
    author: "EZDRY Team",
    createdAt: new Date("2025-04-18").toISOString(),
    isPublished: true,
  },
  {
    id: "winter-laundry-narnaul",
    title: "Winter Laundry Guide for Narnaul — How to Care for Woolens & Heavy Fabrics",
    excerpt: "Narnaul winters demand special care for blankets, shawls, and woolen coats. Here's the complete guide to keeping your winter wardrobe fresh.",
    content: "Seasonal guide on caring for heavy winter garments in Narnaul's climate — from storage tips to dry cleaning schedules.",
    author: "EZDRY Team",
    createdAt: new Date("2025-04-15").toISOString(),
    isPublished: true,
  },
  {
    id: "same-day-laundry-narnaul",
    title: "Same-Day Laundry in Narnaul — Is It Worth the Express Surcharge?",
    excerpt: "EZDRY's Express Same-Day service gets your clothes back by 7 PM. We explain when it's worth it and how to make the most of it.",
    content: "Complete guide to EZDRY's same-day express laundry in Narnaul — pricing, booking tips, and what to expect.",
    author: "EZDRY Team",
    createdAt: new Date("2025-04-12").toISOString(),
    isPublished: true,
  },
  {
    id: "narnaul-hard-water-damage",
    title: "How Narnaul's Hard Water Damages Your Clothes",
    excerpt: "Narnaul's groundwater is known for its high mineral content. We explain why washing at home makes your clothes stiff and how our industrial water softeners preserve fabric life.",
    content: "Detailed analysis of Narnaul's water profile and its impact on cotton and silk fibers. Explanation of EZDRY's 5-stage water softening process and its benefits for garment longevity.",
    author: "EZDRY Fabric Experts",
    createdAt: new Date("2025-05-01").toISOString(),
    isPublished: true,
  },
  {
    id: "complete-fabric-care-guide-narnaul",
    title: "Complete Fabric Care Guide for Narnaul's Climate",
    excerpt: "Narnaul's extreme temperature variations demand special fabric care. Learn how to maintain cotton, silk, wool, and synthetics in Haryana's unique weather conditions.",
    content: "Comprehensive guide covering: 1) Cotton care in dry heat - preventing shrinkage and color fading 2) Silk preservation techniques for Narnaul's hard water 3) Wool storage during off-season 4) Synthetic fabric maintenance 5) Seasonal care calendars for each fabric type. Includes specific temperature and humidity recommendations for Mahendragarh district.",
    author: "EZDRY Fabric Care Team",
    createdAt: new Date("2025-05-03").toISOString(),
    isPublished: true,
  },
  {
    id: "stain-removal-complete-guide",
    title: "Complete Stain Removal Guide: From Tea to Turmeric",
    excerpt: "Narnaul households deal with unique stains - chai spills, turmeric from cooking, sweat marks from summer heat. Master the science of stain removal for every common household stain.",
    content: "Deep dive into stain chemistry: 1) Protein-based stains (blood, egg, dairy) - cold water treatment 2) Tannin stains (tea, coffee, wine) - alkaline treatment 3) Oil-based stains (cooking oil, ghee) - solvent pre-treatment 4) Pigment stains (turmeric, curry, henna) - oxidation methods 5) Combination stains - layered treatment approach. Step-by-step removal protocols for each stain type with common household ingredients and professional solutions.",
    author: "EZDRY Stain Removal Specialists",
    createdAt: new Date("2025-05-05").toISOString(),
    isPublished: true,
  },
  {
    id: "monsoon-laundry-care-narnaul",
    title: "Monsoon Laundry Care in Narnaul: Beat the Humidity",
    excerpt: "Narnaul's monsoon brings high humidity that can ruin clothes. Learn how to dry, store, and protect garments during rainy season in Mahendragarh district.",
    content: "Monsoon-specific care guide: 1) Indoor drying techniques when outdoor drying is impossible 2) Preventing mildew and musty odors in humid conditions 3) Proper storage during heavy rains 4) Drying time calculations for monsoon humidity levels 5) Special care for silk and wool during damp weather 6) Dehumidifier recommendations for Narnaul homes. Emergency protocols for clothes that get caught in sudden downpours.",
    author: "EZDRY Seasonal Care Experts",
    createdAt: new Date("2025-05-06").toISOString(),
    isPublished: true,
  },
  {
    id: "wedding-garment-care-narnaul",
    title: "Wedding Season Garment Care in Narnaul: Lehengas to Sherwanis",
    excerpt: "Narnaul's wedding season demands special care for expensive bridal wear. How to preserve lehengas, sherwanis, and silk sarees before, during, and after the big day.",
    content: "Bridal wear preservation guide: 1) Pre-wedding cleaning and preparation 2) Stain prevention during ceremonies 3) Emergency spot cleaning during events 4) Post-wedding deep cleaning for heavy embroidery and zari work 5) Long-term storage for preservation 6) Insurance and damage protection. Specific guidance for Narnaul's popular wedding venues and typical stain scenarios from local celebrations.",
    author: "EZDRY Wedding Garment Specialists",
    createdAt: new Date("2025-05-07").toISOString(),
    isPublished: true,
  },
  {
    id: "shoe-cleaning-complete-guide",
    title: "Complete Shoe Cleaning Guide: Sneakers to Leather Formals",
    excerpt: "Narnaul's dusty roads and varying weather take a toll on footwear. Master professional shoe cleaning techniques for all types - canvas, leather, suede, and sports shoes.",
    content: "Comprehensive shoe care: 1) Canvas and sneaker cleaning - removing dirt and yellowing 2) Leather shoe care - cleaning, conditioning, and polishing 3) Suede protection and cleaning - special brushes and erasers 4) White shoe restoration - tackling Narnaul dust stains 5) Sports shoe deodorizing and insole cleaning 6) Sole whitening techniques. DIY methods vs professional cleaning - when to choose each.",
    author: "EZDRY Footwear Care Team",
    createdAt: new Date("2025-05-08").toISOString(),
    isPublished: true,
  },
  {
    id: "carpet-cleaning-deep-guide",
    title: "Deep Carpet & Rug Cleaning Guide for Narnaul Homes",
    excerpt: "Carpets in Narnaul face dust, hard water, and heavy use. Learn professional-grade cleaning methods for wool carpets, synthetic rugs, and traditional dhurries.",
    content: "Complete carpet care manual: 1) Dust and sand removal - beating vs vacuuming 2) Stain treatment for common carpet stains (tea, food, pet accidents) 3) Deep cleaning methods - hot water extraction, dry cleaning, shampooing 4) Drying techniques to prevent mold in Narnaul humidity 5) Fringe and edge care 6) Seasonal rotation and padding. When to DIY vs call professionals. Special section on expensive Kashmiri and Persian rug care.",
    author: "EZDRY Home Textile Specialists",
    createdAt: new Date("2025-05-09").toISOString(),
    isPublished: true,
  },
  {
    id: "b2b-linen-care-hotels",
    title: "Commercial Linen Care for Narnaul Hotels & Restaurants",
    excerpt: "Narnaul's hospitality businesses need industrial-grade linen care. Best practices for hotel bedsheets, restaurant tablecloths, and staff uniform maintenance.",
    content: "B2B linen management: 1) Hotel bedsheet protocols - 300+ thread count care 2) Restaurant linen - grease stain removal and daily turnaround 3) Staff uniform programs - consistent cleaning schedules 4) Industrial vs domestic machines - when to outsource 5) Cost per piece analysis 6) Hygiene standards for commercial operations. Case studies from Narnaul hotels and restaurants using EZDRY services.",
    author: "EZDRY Commercial Team",
    createdAt: new Date("2025-05-09").toISOString(),
    isPublished: true,
  },
  {
    id: "hostel-laundry-management",
    title: "Complete Hostel & PG Laundry Management Guide",
    excerpt: "Running a hostel or PG in Narnaul? Learn how to manage bulk laundry for students efficiently - from collection systems to individual garment tracking.",
    content: "Hostel laundry operations: 1) Collection and sorting systems for 50+ students 2) Individual tracking to prevent mix-ups 3) Budget-friendly pricing structures 4) Weekly vs bi-weekly schedules 5) Special handling for delicate items 6) Lost and found protocols. Comparison of in-house vs outsourced laundry for Narnaul hostels near colleges and coaching centers.",
    author: "EZDRY B2B Operations",
    createdAt: new Date("2025-05-09").toISOString(),
    isPublished: true,
  },
];

function readRaw(): BlogPost[] {
  try {
    const raw = localStorage.getItem(BLOG_STORAGE_KEY);
    if (!raw) return DEFAULT_BLOGS;
    const parsed = JSON.parse(raw) as BlogPost[];
    if (!Array.isArray(parsed) || parsed.length === 0) return DEFAULT_BLOGS;
    return parsed;
  } catch {
    return DEFAULT_BLOGS;
  }
}

function persist(posts: BlogPost[]) {
  localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
}

export function listBlogs(includeDrafts = false): BlogPost[] {
  const posts = readRaw().sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
  if (includeDrafts) return posts;
  return posts.filter((post) => post.isPublished);
}

export function createBlogPost(input: Omit<BlogPost, "id" | "createdAt">): BlogPost {
  const posts = readRaw();
  const post: BlogPost = {
    ...input,
    id: `blog-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  persist([post, ...posts]);
  return post;
}

export function updateBlogPost(id: string, updates: Partial<BlogPost>): BlogPost[] {
  const posts = readRaw().map((post) => (post.id === id ? { ...post, ...updates } : post));
  persist(posts);
  return posts;
}

export function deleteBlogPost(id: string): BlogPost[] {
  const posts = readRaw().filter((post) => post.id !== id);
  persist(posts);
  return posts;
}
