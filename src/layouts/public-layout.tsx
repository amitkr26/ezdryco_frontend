import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { EZDRYLogo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, ChevronRight, Phone, MessageCircle, Star, Instagram, Linkedin, Youtube } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LocalAreaSection } from "@/components/LocalAreaSection";
import { trackWhatsAppClick, trackPhoneClick } from "@/lib/analytics";

interface PublicLayoutProps {
  children: React.ReactNode;
}

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Commercial", href: "/commercial" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Plans", href: "/plans" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Laundry Service Narnaul", href: "/laundry-service-narnaul" },
  { label: "Dry Cleaning Narnaul", href: "/dry-cleaning-narnaul" },
  { label: "Laundry Service", href: "/laundry-service-narnaul" },
  { label: "Dry Cleaning", href: "/dry-cleaning-narnaul" },
  { label: "Steam Ironing", href: "/services#ironing" },
  { label: "Commercial Laundry", href: "/commercial" },
  { label: "Shoe Cleaning", href: "/shoe-cleaning-narnaul" },
  { label: "Carpet & Curtains", href: "/services" },
];

const QUICK_LINKS = [
  { label: "Pricing List", href: "/pricing" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Our Story", href: "/about" },
  { label: "Knowledge Hub", href: "/blog" },
  { label: "Support", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

export default function PublicLayout({ children }: PublicLayoutProps) {
  const [location, navigate] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LaundryOrDryCleaning",
    "name": "EZDRY Laundry & Dry Cleaning Services Narnaul",
    "image": [
      typeof window !== "undefined" ? window.location.origin + "/ezdry-hero.png" : "",
      typeof window !== "undefined" ? window.location.origin + "/commercial-hero.png" : ""
    ],
    "@id": "https://www.ezdry.in",
    "url": "https://www.ezdry.in",
    "telephone": "+919671869470",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road, Near Adarsh Nagar",
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
    "areaServed": {
      "@type": "City",
      "name": "Narnaul"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/ezdryco/",
      "https://www.linkedin.com/in/ezdry-co-8b4363405/",
      "https://www.youtube.com/@Dryco-h8i"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Cleaning Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Premium Dry Cleaning" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Standard Laundry" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shoe Cleaning" } }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2" : "bg-white border-b border-gray-100 py-3.5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="focus:outline-none flex-shrink-0">
            <EZDRYLogo size={34} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-gray-600">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-indigo-600 transition-colors font-medium ${location === link.href ? "text-indigo-600 font-semibold" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/customer/login"
              className="text-sm text-gray-600 hover:text-sky-500 font-medium transition-colors"
            >
              Login
            </Link>
            <Button
              onClick={() => navigate("/customer/book")}
              className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6 py-2.5 text-sm font-bold shadow-md shadow-sky-100"
            >
              Book Pickup
            </Button>
          </div>

          {/* Mobile: Hamburger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-sky-50 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* ── MOBILE MENU DRAWER ── */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-screen opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"}`}
        >
          <div className="bg-white px-4 py-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`w-full text-left flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${location === link.href ? "bg-sky-50 text-sky-600" : "text-gray-700 hover:bg-gray-50"}`}
              >
                {link.label}
                <ChevronRight className="w-4 h-4 opacity-40" />
              </Link>
            ))}
            <div className="pt-6 flex flex-col gap-3">
              <Button
                onClick={() => navigate("/customer/book")}
                className="w-full bg-sky-500 hover:bg-sky-600 text-white rounded-xl h-12 text-base font-bold shadow-md"
              >
                Book Your Pickup
              </Button>
              <Button
                onClick={() => navigate("/customer/login")}
                variant="outline"
                className="w-full border-gray-200 text-gray-700 rounded-xl h-12 text-base font-medium"
              >
                Login to Account
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ── PAGE CONTENT ── */}
      <main className="flex-1 pt-[64px] sm:pt-[72px] pb-28 md:pb-0">
        <Breadcrumbs />
        {children}
      </main>

      {/* ── FLOATING CTAs ── */}
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919671869470"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick("floating_button", "main_floating_cta")}
        className="fixed bottom-24 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all flex items-center justify-center group md:bottom-6"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>

      {/* Mobile Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 p-4 md:hidden flex items-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <a
          href="tel:+919671869470"
          onClick={() => trackPhoneClick("floating_bar")}
          className="flex-1 h-12 bg-gray-50 text-gray-700 rounded-xl flex items-center justify-center font-bold text-sm border border-gray-100"
        >
          <Phone className="w-4 h-4 mr-2 text-sky-500" />
          Call Now
        </a>
        <Button
          onClick={() => navigate("/customer/book")}
          className="flex-[2] h-12 bg-sky-500 hover:bg-sky-600 text-white rounded-xl font-bold text-sm shadow-md shadow-sky-100"
        >
          Book Pickup Now
        </Button>
      </div>

      <LocalAreaSection />

      {/* ── FOOTER ── */}
      <footer className="bg-slate-50 text-slate-800 pt-20 pb-28 md:pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand column */}
            <div className="space-y-10">
              <EZDRYLogo size={36} textColor="text-slate-800" />
              <p className="text-slate-500 text-base leading-relaxed">
                Narnaul's homegrown premium fabric care platform. 
                Fresh, clean laundry delivered to your doorstep.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center border border-sky-100">
                    <MapPin className="w-4 h-4 text-sky-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Location</p>
                    <p className="text-sm font-medium">Narnaul, Haryana</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 flex items-center justify-center border border-sky-100">
                    <Phone className="w-4 h-4 text-sky-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Phone</p>
                    <p className="text-sm font-medium">+91 96718 69470</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services column */}
            <div>
              <h3 className="text-slate-800 font-bold mb-6 text-xs uppercase tracking-wider">Services</h3>
              <ul className="space-y-5">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h3 className="text-slate-800 font-bold mb-6 text-xs uppercase tracking-wider">Company</h3>
              <ul className="space-y-5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-500 hover:text-sky-500 transition-colors text-sm font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust/Newsletter column */}
            <div className="space-y-10">
               <div>
                  <h3 className="text-slate-800 font-bold mb-4 text-xs uppercase tracking-wider">Local Trust</h3>
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                     <div className="flex items-center gap-2 mb-3">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <p className="text-sm font-bold">4.9/5 Rating</p>
                     </div>
                     <p className="text-xs text-slate-500 leading-relaxed">
                        Trusted by 5,000+ residents across Narnaul.
                     </p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <a href="https://www.instagram.com/ezdryco/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all shadow-sm">
                     <Instagram className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/ezdry-co-8b4363405/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all shadow-sm">
                     <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://www.youtube.com/@Dryco-h8i" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all shadow-sm">
                     <Youtube className="w-4 h-4" />
                  </a>
               </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-xs font-medium">
              &copy; {new Date().getFullYear()} EZDRY Narnaul. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/admin/login" className="text-xs font-medium text-slate-500 hover:text-sky-500 transition-colors">
                Admin Panel
              </Link>
              {LEGAL_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="text-xs font-medium text-slate-500 hover:text-sky-500 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
