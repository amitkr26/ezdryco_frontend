import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, Shield, CheckCircle } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Button } from "@/components/ui/button";

const CONTACT_FAQS = [
  { q: "Which areas do you serve in Narnaul?", a: "We cover all major localities in Narnaul including Old Narnaul, New Colony, Mandi area, Bus Stand area, and surrounding neighbourhoods in Mahendragarh district." },
  { q: "How quickly do you respond to messages?", a: "WhatsApp and phone calls are answered during business hours (8 AM–8 PM) within minutes. Email responses within 24 hours." },
  { q: "Can I cancel or reschedule a pickup?", a: "Yes. Cancel or reschedule up to 1 hour before the pickup time with no charge. Message us on WhatsApp or call." },
  { q: "Do you have a physical store in Narnaul?", a: "EZDRY is a doorstep service — no store visit needed. We come to your home or office for pickup and delivery." },
];

export default function Contact() {
  useSEO({
    title: "Contact EZDRY Narnaul | Laundry & Dry Cleaning Help",
    description: "Need help with your laundry in Narnaul? Contact EZDRY for support, bookings, or business inquiries. Call, WhatsApp, or Email us today.",
    canonical: "https://ezdry.in/contact",
  });

  return (
    <PublicLayout>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-indigo-50 via-white to-white py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_50%_50%,indigo_1px,transparent_1px)] bg-[length:40px_40px]" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            We're Here to <span className="text-indigo-600">Help</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Have questions about our service in Narnaul? Whether you're a customer needing a pickup or a business interested in partnering, we're just a message away.
          </p>
        </motion.div>
      </section>

      {/* CONTACT INFO & FORM AREA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div>
               <h2 className="text-3xl font-black text-gray-900 mb-6">Get in Touch</h2>
               <p className="text-gray-500 mb-10 leading-relaxed">
                  Our team is available 7 days a week to ensure your laundry experience in Narnaul is perfect.
               </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
               {[
                 { icon: <Phone className="w-5 h-5" />, title: "Call Us", val: "+91 96718 69470", sub: "Mon-Sun, 8AM-8PM" },
                 { icon: <MessageSquare className="w-5 h-5" />, title: "WhatsApp", val: "+91 96718 69470", sub: "Instant Support" },
                 { icon: <Mail className="w-5 h-5" />, title: "Email", val: "dryco7718@gmail.com", sub: "24hr Response" },
                 { icon: <Clock className="w-5 h-5" />, title: "Hours", val: "8 AM - 8 PM", sub: "7 Days a Week" },
               ].map((item, i) => (
                 <div key={i} className="p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:border-indigo-100 transition-all">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 mb-4 shadow-sm">
                       {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-indigo-600 font-bold text-sm mb-1">{item.val}</p>
                    <p className="text-gray-400 text-xs">{item.sub}</p>
                 </div>
               ))}
            </div>
            
            <div className="p-8 rounded-[2.5rem] bg-indigo-600 text-white shadow-xl relative overflow-hidden">
               <Shield className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10" />
               <h3 className="text-2xl font-black mb-4">Partner with Us</h3>
               <p className="text-indigo-100 text-sm mb-6 leading-relaxed">
                  Are you a laundry owner in Narnaul? We're always looking for quality-focused partners to join the EZDRY network.
               </p>
               <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl font-bold">
                  Business Inquiry
               </Button>
            </div>
          </div>

          <div className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100 shadow-sm">
             <h2 className="text-3xl font-black text-gray-900 mb-8">Service Locations</h2>
             <p className="text-gray-500 mb-8 leading-relaxed">
                EZDRY is proudly local. We serve the entire Narnaul municipal area and surrounding sectors.
             </p>
             <div className="grid grid-cols-2 gap-4 mb-10">
                {["Old Narnaul", "New Colony", "Mandi Area", "Bus Stand", "Sadar Bazar", "Housing Board", "Haryana Colony", "Mahendragarh Road"].map(loc => (
                  <div key={loc} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                     <CheckCircle className="w-4 h-4 text-indigo-500" /> {loc}
                  </div>
                ))}
             </div>
             
             <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-6">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-indigo-600" />
                   </div>
                   <div>
                      <p className="font-bold text-gray-900">Store & Office Location</p>
                      <p className="text-xs text-gray-500">Main Road, Near Adarsh Nagar, Narnaul, Haryana 123001</p>
                   </div>
                </div>
                <div className="rounded-3xl bg-sky-50 border border-sky-100 p-4">
                  <p className="text-sm font-semibold text-sky-700">Find us on Google Maps</p>
                  <a
                    href="https://maps.app.goo.gl/SSpHwo8K6fD5YKu1A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sky-600 font-semibold hover:text-sky-800"
                  >
                    Open Store & Office Location
                  </a>
                </div>
             </div>
          </div>
        </div>
      </section>

      <FAQAccordion
        items={CONTACT_FAQS}
        heading="Common Questions"
        bg="bg-gray-50"
      />
    </PublicLayout>
  );
}
