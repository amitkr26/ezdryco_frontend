/**
 * Smart CTA Component - Funnel Optimization
 * 
 * Features:
 * - Locality-aware CTAs
 * - Context-dependent messaging
 * - Funnel-stage awareness
 * - Mobile-optimized
 * - A/B test ready
 */

import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  MapPin, 
  Clock, 
  Zap,
  MessageCircle,
  Phone,
  Calendar,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent, trackBookingEvent, trackWhatsAppClick } from "@/lib/analytics";

type CTAType = "primary" | "secondary" | "whatsapp" | "phone" | "schedule" | "express";
type CTASize = "sm" | "md" | "lg" | "xl";

interface SmartCTAProps {
  type?: CTAType;
  size?: CTASize;
  locality?: string;
  context?: "hero" | "pricing" | "service" | "locality" | "booking" | "footer" | "floating";
  variant?: "solid" | "outline" | "ghost";
  showIcon?: boolean;
  className?: string;
  onClick?: () => void;
  // Urgency props
  urgencyType?: "none" | "limited-slots" | "express-available" | "new-customer" | "repeat";
  timeRemaining?: string;
}

// CTA configuration based on type and context
const CTA_CONFIG: Record<CTAType, Record<string, { text: string; icon: any; trackEvent: string; priority: number }>> = {
  primary: {
    hero: { text: "Book Free Pickup", icon: Calendar, trackEvent: "cta_hero_book", priority: 1 },
    pricing: { text: "Start Your Order", icon: ArrowRight, trackEvent: "cta_pricing_start", priority: 1 },
    service: { text: "Book This Service", icon: ChevronRight, trackEvent: "cta_service_book", priority: 1 },
    locality: { text: "Book {locality} Pickup", icon: MapPin, trackEvent: "cta_locality_book", priority: 1 },
    booking: { text: "Continue Booking", icon: ArrowRight, trackEvent: "cta_booking_continue", priority: 1 },
    footer: { text: "Get Started", icon: Sparkles, trackEvent: "cta_footer_start", priority: 2 },
    floating: { text: "Book Now", icon: Calendar, trackEvent: "cta_floating_book", priority: 1 },
  },
  secondary: {
    hero: { text: "View Pricing", icon: ArrowRight, trackEvent: "cta_hero_pricing", priority: 2 },
    pricing: { text: "Compare Plans", icon: ArrowRight, trackEvent: "cta_pricing_compare", priority: 2 },
    service: { text: "Learn More", icon: ArrowRight, trackEvent: "cta_service_learn", priority: 2 },
    locality: { text: "See All Areas", icon: MapPin, trackEvent: "cta_locality_areas", priority: 2 },
    booking: { text: "Save for Later", icon: Calendar, trackEvent: "cta_booking_save", priority: 3 },
    footer: { text: "Contact Us", icon: MessageCircle, trackEvent: "cta_footer_contact", priority: 3 },
    floating: { text: "Learn More", icon: ArrowRight, trackEvent: "cta_floating_learn", priority: 2 },
  },
  whatsapp: {
    hero: { text: "Chat on WhatsApp", icon: MessageCircle, trackEvent: "cta_whatsapp_hero", priority: 2 },
    pricing: { text: "Ask Questions", icon: MessageCircle, trackEvent: "cta_whatsapp_pricing", priority: 2 },
    service: { text: "WhatsApp Us", icon: MessageCircle, trackEvent: "cta_whatsapp_service", priority: 2 },
    locality: { text: "Confirm Your Area", icon: MessageCircle, trackEvent: "cta_whatsapp_locality", priority: 2 },
    booking: { text: "Need Help?", icon: MessageCircle, trackEvent: "cta_whatsapp_booking", priority: 3 },
    footer: { text: "WhatsApp", icon: MessageCircle, trackEvent: "cta_whatsapp_footer", priority: 2 },
    floating: { text: "Quick Chat", icon: MessageCircle, trackEvent: "cta_whatsapp_floating", priority: 2 },
  },
  phone: {
    hero: { text: "Call 96718 69470", icon: Phone, trackEvent: "cta_phone_hero", priority: 2 },
    pricing: { text: "Call for Quote", icon: Phone, trackEvent: "cta_phone_pricing", priority: 3 },
    service: { text: "Call to Book", icon: Phone, trackEvent: "cta_phone_service", priority: 2 },
    locality: { text: "Call {locality}", icon: Phone, trackEvent: "cta_phone_locality", priority: 2 },
    booking: { text: "Call Support", icon: Phone, trackEvent: "cta_phone_booking", priority: 3 },
    footer: { text: "96718 69470", icon: Phone, trackEvent: "cta_phone_footer", priority: 2 },
    floating: { text: "Call Now", icon: Phone, trackEvent: "cta_phone_floating", priority: 2 },
  },
  schedule: {
    hero: { text: "Schedule Pickup", icon: Calendar, trackEvent: "cta_schedule_hero", priority: 1 },
    pricing: { text: "Pick a Time", icon: Calendar, trackEvent: "cta_schedule_pricing", priority: 1 },
    service: { text: "Schedule Now", icon: Calendar, trackEvent: "cta_schedule_service", priority: 1 },
    locality: { text: "Schedule {locality}", icon: Calendar, trackEvent: "cta_schedule_locality", priority: 1 },
    booking: { text: "Choose Slot", icon: Calendar, trackEvent: "cta_schedule_booking", priority: 1 },
    footer: { text: "Schedule", icon: Calendar, trackEvent: "cta_schedule_footer", priority: 2 },
    floating: { text: "Schedule", icon: Calendar, trackEvent: "cta_schedule_floating", priority: 1 },
  },
  express: {
    hero: { text: "Express 8-Hour", icon: Zap, trackEvent: "cta_express_hero", priority: 1 },
    pricing: { text: "Same-Day (+₹49)", icon: Zap, trackEvent: "cta_express_pricing", priority: 1 },
    service: { text: "Express Service", icon: Zap, trackEvent: "cta_express_service", priority: 1 },
    locality: { text: "Express {locality}", icon: Zap, trackEvent: "cta_express_locality", priority: 1 },
    booking: { text: "Express Option", icon: Zap, trackEvent: "cta_express_booking", priority: 1 },
    footer: { text: "Express", icon: Zap, trackEvent: "cta_express_footer", priority: 2 },
    floating: { text: "Express", icon: Zap, trackEvent: "cta_express_floating", priority: 1 },
  },
};

// Size configurations
const SIZE_CONFIG: Record<CTASize, { height: string; padding: string; fontSize: string; iconSize: string }> = {
  sm: { height: "h-10", padding: "px-4", fontSize: "text-sm", iconSize: "w-4 h-4" },
  md: { height: "h-12", padding: "px-6", fontSize: "text-base", iconSize: "w-5 h-5" },
  lg: { height: "h-14", padding: "px-8", fontSize: "text-lg", iconSize: "w-5 h-5" },
  xl: { height: "h-16", padding: "px-10", fontSize: "text-lg", iconSize: "w-6 h-6" },
};

export function SmartCTA({
  type = "primary",
  size = "lg",
  locality,
  context = "hero",
  variant = "solid",
  showIcon = true,
  className = "",
  onClick,
  urgencyType = "none",
  timeRemaining,
}: SmartCTAProps) {
  const [, navigate] = useLocation();
  
  const config = CTA_CONFIG[type][context];
  const sizeConfig = SIZE_CONFIG[size];
  const Icon = config.icon;
  
  // Replace locality placeholder
  const text = config.text.replace("{locality}", locality || "Your Area");
  
  const handleClick = () => {
    // Track the event
    trackEvent(config.trackEvent, {
      locality,
      context,
      urgency: urgencyType,
    });
    
    // Handle specific actions
    if (type === "whatsapp") {
      const message = locality 
        ? `Hi EZDRY! I'm interested in booking from ${locality}. Can you help me?`
        : "Hi EZDRY! I'd like to book a pickup.";
      trackWhatsAppClick("footer", config.trackEvent);
      window.open(`https://wa.me/919671869470?text=${encodeURIComponent(message)}`, "_blank");
    } else if (type === "phone") {
      window.open("tel:+919671869470");
    } else if (type === "primary" || type === "schedule" || type === "express") {
      trackBookingEvent("start");
      navigate("/customer/book");
    } else if (type === "secondary") {
      if (context === "pricing" || context === "hero") {
        navigate("/pricing");
      } else if (context === "locality") {
        navigate("/areas-we-serve");
      }
    }
    
    // Custom onClick handler
    if (onClick) onClick();
  };
  
  // Variant styles
  const variantStyles = {
    solid: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200",
    outline: "border-2 border-gray-200 hover:border-indigo-300 text-gray-700 hover:text-indigo-600 bg-white",
    ghost: "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50",
  };
  
  // Urgency badge
  const urgencyBadge = () => {
    if (urgencyType === "none") return null;
    
    const badges: Record<string, { text: string; color: string }> = {
      "limited-slots": { text: "2 slots left today", color: "bg-red-500" },
      "express-available": { text: "Express available", color: "bg-amber-500" },
      "new-customer": { text: "First order 10% off", color: "bg-green-500" },
      "repeat": { text: "Welcome back!", color: "bg-indigo-500" },
    };
    
    const badge = badges[urgencyType];
    if (!badge) return null;
    
    return (
      <span className={`absolute -top-2 -right-2 ${badge.color} text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse`}>
        {badge.text}
      </span>
    );
  };
  
  return (
    <div className="relative inline-block">
      {urgencyBadge()}
      <Button
        onClick={handleClick}
        className={`
          ${sizeConfig.height}
          ${sizeConfig.padding}
          ${sizeConfig.fontSize}
          ${variantStyles[variant]}
          rounded-2xl
          font-bold
          transition-all
          duration-200
          ${className}
        `}
      >
        {showIcon && <Icon className={`${sizeConfig.iconSize} mr-2`} />}
        <span>{text}</span>
        {timeRemaining && (
          <span className="ml-2 text-xs opacity-80 bg-white/20 px-2 py-0.5 rounded-full">
            {timeRemaining}
          </span>
        )}
      </Button>
    </div>
  );
}

// Group CTAs for common patterns
interface CTAGroupProps {
  locality?: string;
  context: SmartCTAProps["context"];
  showSecondary?: boolean;
  showWhatsApp?: boolean;
  layout?: "horizontal" | "vertical" | "floating";
}

export function CTAGroup({ 
  locality, 
  context, 
  showSecondary = true, 
  showWhatsApp = true,
  layout = "horizontal" 
}: CTAGroupProps) {
  const isVertical = layout === "vertical";
  const isFloating = layout === "floating";
  
  if (isFloating) {
    return (
      <div className="flex gap-3">
        <SmartCTA type="primary" size="sm" locality={locality} context={context} />
        <SmartCTA type="whatsapp" size="sm" locality={locality} context={context} variant="outline" />
      </div>
    );
  }
  
  return (
    <div className={`flex ${isVertical ? "flex-col" : "flex-col sm:flex-row"} gap-4`}>
      <SmartCTA 
        type="primary" 
        size="xl" 
        locality={locality} 
        context={context}
        urgencyType={context === "hero" ? "limited-slots" : "none"}
      />
      
      {showSecondary && (
        <SmartCTA 
          type="secondary" 
          size="xl" 
          locality={locality} 
          context={context}
          variant="outline"
        />
      )}
      
      {showWhatsApp && (
        <SmartCTA 
          type="whatsapp" 
          size={isVertical ? "lg" : "xl"} 
          locality={locality} 
          context={context}
          variant="outline"
        />
      )}
    </div>
  );
}

export default SmartCTA;
