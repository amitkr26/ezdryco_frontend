/**
 * Delivery ETA Component - Operational UX
 * 
 * Features:
 * - Estimated completion time
 * - Delivery window predictions
 * - Delay handling messaging
 * - Confidence indicators
 * - Real-time updates simulation
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  MapPin, 
  Truck, 
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Info,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
  RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent, trackWhatsAppClick } from "@/lib/analytics";

interface DeliveryWindow {
  label: string;
  timeRange: string;
  confidence: "high" | "medium" | "low";
  explanation: string;
}

interface ETAData {
  estimatedCompletion: string;
  deliveryWindows: DeliveryWindow[];
  currentDelay?: {
    reason: string;
    newETA: string;
    compensation?: string;
  };
  lastUpdated: string;
}

interface DeliveryETAProps {
  orderDate: string;
  serviceType: "standard" | "express";
  currentStatus: string;
  locality: string;
  itemCount: number;
}

// Calculate realistic ETAs based on service type and status
function calculateETA(
  orderDate: string, 
  serviceType: "standard" | "express",
  currentStatus: string,
  itemCount: number
): ETAData {
  const orderDateTime = new Date(orderDate);
  const now = new Date();
  
  // Base processing times
  const baseHours = serviceType === "express" ? 8 : 48; // 8 hours for express, 48 for standard
  const itemMultiplier = Math.max(1, itemCount / 10); // More items = more time
  
  // Status-based remaining time
  const statusProgress: Record<string, number> = {
    "requested": 0,
    "picked_up": 0.1,
    "processing": 0.2,
    "washing": 0.4,
    "drying": 0.6,
    "pressing": 0.75,
    "qc": 0.85,
    "packing": 0.9,
    "out_for_delivery": 0.95,
    "delivered": 1,
  };
  
  const progress = statusProgress[currentStatus.toLowerCase()] || 0;
  const remainingHours = Math.ceil(baseHours * itemMultiplier * (1 - progress));
  
  const estimatedCompletion = new Date(now.getTime() + remainingHours * 60 * 60 * 1000);
  
  // Generate delivery windows
  const windows: DeliveryWindow[] = [];
  
  if (serviceType === "express") {
    // Express: Same day windows
    windows.push({
      label: "Evening Delivery",
      timeRange: "6:00 PM - 8:00 PM",
      confidence: progress > 0.5 ? "high" : "medium",
      explanation: "Express orders are prioritized for same-day evening delivery",
    });
  } else {
    // Standard: Next day or day after windows
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    const dayAfter = new Date(now);
    dayAfter.setDate(dayAfter.getDate() + 2);
    
    if (remainingHours <= 24) {
      windows.push({
        label: "Tomorrow",
        timeRange: "10:00 AM - 2:00 PM",
        confidence: "high",
        explanation: "On track for next-day morning delivery",
      }, {
        label: "Tomorrow Evening",
        timeRange: "4:00 PM - 8:00 PM",
        confidence: "medium",
        explanation: "Alternative if morning slot is full",
      });
    } else {
      windows.push({
        label: dayAfter.toLocaleDateString("en-IN", { weekday: "long" }),
        timeRange: "10:00 AM - 2:00 PM",
        confidence: "high",
        explanation: "Standard 48-hour processing + delivery",
      });
    }
  }
  
  // Simulate occasional delays for realism
  const hasDelay = Math.random() > 0.85; // 15% chance of delay for demo
  
  return {
    estimatedCompletion: estimatedCompletion.toLocaleString("en-IN", {
      weekday: "long",
      hour: "numeric",
      minute: "2-digit",
    }),
    deliveryWindows: windows,
    currentDelay: hasDelay ? {
      reason: "High order volume today. Additional time needed for quality processing.",
      newETA: new Date(estimatedCompletion.getTime() + 4 * 60 * 60 * 1000).toLocaleString("en-IN", {
        weekday: "long",
        hour: "numeric",
        minute: "2-digit",
      }),
      compensation: "₹50 credit applied to your wallet for the inconvenience",
    } : undefined,
    lastUpdated: now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
  };
}

export function DeliveryETA({ 
  orderDate, 
  serviceType, 
  currentStatus,
  locality,
  itemCount 
}: DeliveryETAProps) {
  const [eta, setEta] = useState<ETAData>(() => 
    calculateETA(orderDate, serviceType, currentStatus, itemCount)
  );
  const [showDetails, setShowDetails] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshETA = () => {
    setIsRefreshing(true);
    trackEvent("eta_refresh_clicked");
    
    // Simulate API call
    setTimeout(() => {
      setEta(calculateETA(orderDate, serviceType, currentStatus, itemCount));
      setIsRefreshing(false);
    }, 1500);
  };

  const handleWhatsAppInquiry = () => {
    trackWhatsAppClick("contact_page", "delivery_inquiry");
    const message = `Hi EZDRY! I'd like to inquire about my delivery. My locality is ${locality} and I want to know the exact delivery window.`;
    window.open(`https://wa.me/919671869470?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-indigo-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Delivery Estimate</h3>
              <p className="text-sm text-indigo-200">
                Updated {eta.lastUpdated}
              </p>
            </div>
          </div>
          <button
            onClick={refreshETA}
            disabled={isRefreshing}
            className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-5 h-5 ${isRefreshing ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>

      {/* Main ETA Display */}
      <div className="p-6">
        {/* Delay Warning */}
        <AnimatePresence>
          {eta.currentDelay && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                <div>
                  <p className="font-bold text-amber-800">Slight Delay</p>
                  <p className="text-sm text-amber-700 mt-1">{eta.currentDelay.reason}</p>
                  <div className="mt-3 p-3 bg-white rounded-xl">
                    <p className="text-sm text-gray-600">New estimated delivery:</p>
                    <p className="font-bold text-gray-900">{eta.currentDelay.newETA}</p>
                  </div>
                  {eta.currentDelay.compensation && (
                    <p className="text-sm text-green-700 mt-2 font-medium">
                      ✓ {eta.currentDelay.compensation}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Primary ETA */}
        <div className="text-center mb-6">
          <p className="text-sm text-gray-500 mb-2">Estimated completion & delivery</p>
          <p className="text-3xl font-black text-gray-900">
            {eta.currentDelay ? eta.currentDelay.newETA : eta.estimatedCompletion}
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
              serviceType === "express" 
                ? "bg-amber-100 text-amber-700" 
                : "bg-indigo-100 text-indigo-700"
            }`}>
              {serviceType === "express" ? "⚡ Express" : "🕐 Standard"}
            </span>
            <span className="text-xs text-gray-400">
              {itemCount} items
            </span>
          </div>
        </div>

        {/* Delivery Windows */}
        <div className="space-y-3 mb-6">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">
            Delivery Windows
          </p>
          {eta.deliveryWindows.map((window, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  window.confidence === "high" 
                    ? "bg-green-100 text-green-600" 
                    : window.confidence === "medium"
                    ? "bg-amber-100 text-amber-600"
                    : "bg-gray-100 text-gray-400"
                }`}>
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{window.label}</p>
                  <p className="text-sm text-gray-500">{window.timeRange}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                  window.confidence === "high" 
                    ? "bg-green-100 text-green-700" 
                    : window.confidence === "medium"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-gray-100 text-gray-500"
                }`}>
                  {window.confidence === "high" ? "Likely" : window.confidence === "medium" ? "Possible" : "Uncertain"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expandable Details */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
        >
          {showDetails ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Hide Details
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              How We Calculate ETA
            </>
          )}
        </button>

        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 space-y-3"
            >
              <div className="p-4 bg-gray-50 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4 text-indigo-600" />
                  Factors Affecting Your Delivery
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span><strong>Service Type:</strong> {serviceType === "express" ? "Express (8hr processing)" : "Standard (48hr processing)"}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span><strong>Item Count:</strong> {itemCount} items (affects sorting & processing time)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span><strong>Your Location:</strong> {locality} (affects delivery route planning)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span><strong>Current Load:</strong> Real-time order volume at our facility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span><strong>Quality Checks:</strong> Additional time for delicate/special items</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-indigo-50 rounded-2xl">
                <p className="text-sm text-indigo-700">
                  <strong>Our Promise:</strong> If we miss the committed delivery window, 
                  you receive automatic compensation. We prioritize accuracy over speed — 
                  your garments receive the care they need.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action Buttons */}
      <div className="p-4 bg-gray-50 border-t border-gray-100 space-y-3">
        <Button
          onClick={handleWhatsAppInquiry}
          className="w-full h-12 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Ask About Delivery on WhatsApp
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            trackEvent("change_delivery_clicked");
          }}
          className="w-full h-12 border-gray-200 text-gray-700 rounded-xl font-bold"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Request Different Time
        </Button>
      </div>
    </div>
  );
}

export default DeliveryETA;
