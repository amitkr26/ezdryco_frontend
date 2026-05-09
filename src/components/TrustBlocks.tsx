/**
 * TrustBlocks Component - Trust Infrastructure
 * 
 * Features:
 * - Garment safety assurance blocks
 * - Operational process transparency
 * - Trust badges with proof
 * - Safety guarantees
 * - Local trust signals
 */

import { motion } from "framer-motion";
import { 
  Shield, 
  CheckCircle2, 
  BadgeCheck, 
  Lock, 
  ScanLine,
  Droplets,
  Thermometer,
  Package,
  Truck,
  MapPin,
  Clock,
  Users,
  Award,
  FileCheck,
  AlertCircle
} from "lucide-react";

// Core trust pillars with detailed proof
const TRUST_PILLARS = [
  {
    id: "tagging",
    icon: ScanLine,
    title: "Barcode Tagging System",
    headline: "Every Garment Gets a Unique ID",
    description: "Before any processing begins, each item is scanned, tagged with a unique barcode, and photographed. This ensures zero mix-ups and complete traceability throughout the cleaning journey.",
    proof: "1,00,000+ garments tagged without a single lost item",
    stat: "100%",
    statLabel: "Tracking Accuracy",
    color: "indigo",
  },
  {
    id: "softwater",
    icon: Droplets,
    title: "5-Stage Water Softening",
    headline: "Narnaul's Hard Water Problem Solved",
    description: "Narnaul's groundwater contains high calcium and magnesium that damages fabrics. We use industrial-grade water softeners to strip out these minerals before water touches your clothes.",
    proof: "Prevents the yellowing and stiffness common in home washing",
    stat: "0 PPM",
    statLabel: "Hardness Level",
    color: "blue",
  },
  {
    id: "temperature",
    icon: Thermometer,
    title: "Precision Temperature Control",
    headline: "Heat-Calibrated for Each Fabric",
    description: "Silk requires cold water. Wool needs lukewarm. Cotton can handle heat. Our machines automatically adjust temperature based on fabric type to prevent shrinkage and color bleeding.",
    proof: "Zero shrinkage complaints in 12 months of operation",
    stat: "±2°C",
    statLabel: "Accuracy",
    color: "amber",
  },
  {
    id: "packaging",
    icon: Package,
    title: "Hygienic Packaging",
    headline: "Sealed, Clean, Ready to Wear",
    description: "After processing, every garment is individually packed in biodegradable covers. Suits and sarees get garment bags. Everything is sealed to maintain freshness until delivery.",
    proof: "ISO-standard packaging materials used",
    stat: "Sealed",
    statLabel: "Per Garment",
    color: "emerald",
  },
];

// Local trust signals specific to Narnaul
const LOCAL_TRUST_SIGNALS = [
  {
    icon: MapPin,
    title: "Hyper-Local Operations",
    description: "Processing facility located within Narnaul city limits. No outsourcing to other cities.",
  },
  {
    icon: Clock,
    title: "15-Min Pickup Window",
    description: "Riders arrive within 15 minutes of scheduled time or we notify you immediately.",
  },
  {
    icon: Users,
    title: "Verified Local Riders",
    description: "All delivery partners are background-verified Narnaul residents with local knowledge.",
  },
  {
    icon: Award,
    title: "Narnaul Business Network",
    description: "Partnered with established local laundry businesses, not anonymous operators.",
  },
];

// Safety guarantees with legal backing
const SAFETY_GUARANTEES = [
  {
    icon: Shield,
    title: "Garment Damage Protection",
    description: "In the rare event of damage caused by our process, we compensate up to 5x the service cost or provide replacement at fair market value.",
  },
  {
    icon: Lock,
    title: "Privacy Guaranteed",
    description: "Your address and contact details are visible only to your assigned rider and our internal operations team. No third-party sharing.",
  },
  {
    icon: FileCheck,
    title: "Quality Audit Trail",
    description: "Every order has a complete digital record: pickup photos, processing timestamps, quality check notes, and delivery confirmation.",
  },
  {
    icon: AlertCircle,
    title: "Instant Issue Resolution",
    description: "Problems are resolved within 24 hours. WhatsApp us and a real human responds, not a bot.",
  },
];

// Operational transparency metrics
const OPERATIONAL_METRICS = [
  { label: "Active Riders", value: "12", subtext: "Across Narnaul" },
  { label: "Processing Capacity", value: "500+", subtext: "Kg per day" },
  { label: "Coverage Area", value: "15km", subtext: "Radius from center" },
  { label: "Localities Served", value: "25+", subtext: "All major areas" },
];

export function TrustBlocks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
            <Shield className="w-4 h-4" />
            Trust Infrastructure
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Your Clothes Deserve <span className="text-indigo-600">Forensic Care</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Every step of our process is designed around one principle: treating your garments 
            with the same precision you'd expect from a premium clothing spa.
          </p>
        </motion.div>

        {/* Main Trust Pillars */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {TRUST_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 rounded-[2.5rem] p-8 md:p-10 border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-${pillar.color}-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <pillar.icon className={`w-8 h-8 text-${pillar.color}-600`} />
                </div>
                <div className="flex-1">
                  <p className={`text-[10px] font-black uppercase tracking-widest text-${pillar.color}-600 mb-2`}>
                    {pillar.title}
                  </p>
                  <h3 className="text-xl font-black text-gray-900 mb-3">
                    {pillar.headline}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  
                  {/* Proof Point */}
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <BadgeCheck className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">{pillar.proof}</span>
                  </div>
                  
                  {/* Stat */}
                  <div className="flex items-baseline gap-2 pt-4 border-t border-gray-200">
                    <span className="text-3xl font-black text-gray-900">{pillar.stat}</span>
                    <span className="text-sm text-gray-500">{pillar.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operational Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-[3rem] p-10 md:p-16 text-white mb-20"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {OPERATIONAL_METRICS.map((metric) => (
              <div key={metric.label}>
                <p className="text-4xl md:text-5xl font-black text-white mb-2">{metric.value}</p>
                <p className="text-sm font-bold text-gray-300">{metric.label}</p>
                <p className="text-xs text-gray-500 mt-1">{metric.subtext}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Two Column: Local Trust + Safety Guarantees */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Local Trust Signals */}
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-indigo-600" />
              Local Trust Signals
            </h3>
            <div className="space-y-6">
              {LOCAL_TRUST_SIGNALS.map((signal, index) => (
                <motion.div
                  key={signal.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <signal.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{signal.title}</h4>
                    <p className="text-sm text-gray-500">{signal.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Safety Guarantees */}
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <Shield className="w-6 h-6 text-indigo-600" />
              Safety Guarantees
            </h3>
            <div className="space-y-6">
              {SAFETY_GUARANTEES.map((guarantee, index) => (
                <motion.div
                  key={guarantee.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 bg-indigo-50 rounded-2xl border border-indigo-100"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <guarantee.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{guarantee.title}</h4>
                    <p className="text-sm text-gray-600">{guarantee.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center p-8 bg-gray-50 rounded-[2rem] border border-gray-100"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="font-bold text-gray-900">Zero Lost Garments</span>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Since our launch in Narnaul, we have processed over 1,00,000 garments without losing a single item. 
            Our barcode tracking system, verified riders, and local operations make this possible. 
            Your clothes are safer with us than at home.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default TrustBlocks;
