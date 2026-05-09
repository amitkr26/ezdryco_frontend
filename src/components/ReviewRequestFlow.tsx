/**
 * Review Request Flow - GBP Ecosystem
 * 
 * Post-order review generation system:
 * - Timing-aware prompts (after delivery, not immediately)
 * - Multi-channel options (Google, WhatsApp feedback)
 * - Incentive structure (loyalty points)
 * - Gentle, non-pushy UX
 * - Local reference encouragement
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  MessageCircle, 
  ExternalLink, 
  Gift,
  CheckCircle2,
  MapPin,
  X,
  ThumbsUp,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

interface ReviewRequestFlowProps {
  orderId: string;
  customerName: string;
  locality: string;
  deliveryDate: string;
  onClose: () => void;
}

const REVIEW_PLATFORMS = [
  {
    id: "google",
    name: "Google Maps",
    icon: MapPin,
    description: "Help others in Narnaul find us",
    url: "https://g.co/kgs/ezdry-narnaul-review",
    incentive: "50 loyalty points",
    priority: 1,
    color: "blue",
  },
  {
    id: "whatsapp",
    name: "WhatsApp Feedback",
    icon: MessageCircle,
    description: "Quick private feedback to us",
    url: "https://wa.me/919671869470?text=Hi%20EZDRY%2C%20I%20want%20to%20share%20feedback%20about%20my%20recent%20order",
    incentive: "Priority support for 30 days",
    priority: 2,
    color: "green",
  },
];

export function ReviewRequestFlow({
  orderId,
  customerName,
  locality,
  deliveryDate,
  onClose,
}: ReviewRequestFlowProps) {
  const [step, setStep] = useState<"intro" | "rating" | "platform" | "thanks">("intro");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);
    trackEvent("review_rating_selected", { order_id: orderId, rating });
    
    // If low rating, encourage private feedback
    if (rating <= 3) {
      setSelectedPlatform("whatsapp");
      setStep("platform");
    } else {
      setStep("platform");
    }
  };

  const handlePlatformSelect = (platformId: string) => {
    setSelectedPlatform(platformId);
    const platform = REVIEW_PLATFORMS.find(p => p.id === platformId);
    
    if (platform) {
      trackEvent("review_platform_selected", { 
        order_id: orderId, 
        platform: platformId,
        rating: selectedRating 
      });
      
      // Open the review platform
      window.open(platform.url, "_blank");
      setStep("thanks");
    }
  };

  const handleSkip = () => {
    trackEvent("review_request_skipped", { order_id: orderId });
    onClose();
  };

  const daysSinceDelivery = Math.floor(
    (Date.now() - new Date(deliveryDate).getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-[2.5rem] max-w-lg w-full overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 text-white relative">
          <button 
            onClick={handleSkip}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-indigo-200">Order #{orderId}</p>
              <p className="font-bold text-lg">How was your experience?</p>
            </div>
          </div>
          
          {daysSinceDelivery > 0 && (
            <p className="text-sm text-indigo-200">
              Delivered {daysSinceDelivery} day{daysSinceDelivery > 1 ? "s" : ""} ago to {locality}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Rating */}
            {step === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center"
              >
                <p className="text-gray-600 mb-8">
                  Hi {customerName}, we hope your garments from {locality} met your expectations!
                </p>
                
                <p className="font-bold text-gray-900 mb-4">How would you rate your experience?</p>
                
                <div className="flex justify-center gap-2 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRatingSelect(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="p-2 transition-transform hover:scale-110"
                    >
                      <Star 
                        className={`w-10 h-10 ${
                          star <= (hoveredRating || selectedRating) 
                            ? "text-amber-400 fill-current" 
                            : "text-gray-200"
                        }`} 
                      />
                    </button>
                  ))}
                </div>

                <div className="flex justify-center gap-2 text-sm">
                  <span className="text-red-500">Poor</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-amber-500">Okay</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-green-500">Great</span>
                </div>
              </motion.div>
            )}

            {/* Step 2: Platform Selection */}
            {step === "platform" && (
              <motion.div
                key="platform"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="text-center mb-6">
                  <p className="font-bold text-gray-900 mb-2">
                    {selectedRating >= 4 ? "Thank you! 🎉" : "We appreciate your feedback"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {selectedRating >= 4 
                      ? "Would you help other Narnaul residents by sharing your experience?"
                      : "We'd love to hear how we can improve. Choose how you'd like to share:"}
                  </p>
                </div>

                <div className="space-y-3">
                  {REVIEW_PLATFORMS
                    .filter(p => selectedRating >= 4 || p.id === "whatsapp")
                    .map((platform) => {
                      const Icon = platform.icon;
                      return (
                        <button
                          key={platform.id}
                          onClick={() => handlePlatformSelect(platform.id)}
                          className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                            selectedPlatform === platform.id
                              ? `border-${platform.color}-500 bg-${platform.color}-50`
                              : "border-gray-100 hover:border-gray-200 bg-white"
                          }`}
                        >
                          <div className={`w-12 h-12 bg-${platform.color}-100 rounded-xl flex items-center justify-center`}>
                            <Icon className={`w-6 h-6 text-${platform.color}-600`} />
                          </div>
                          <div className="flex-1 text-left">
                            <p className="font-bold text-gray-900">{platform.name}</p>
                            <p className="text-sm text-gray-500">{platform.description}</p>
                          </div>
                          <div className="text-right">
                            <div className={`inline-flex items-center gap-1 text-xs font-bold text-${platform.color}-700 bg-${platform.color}-100 px-2 py-1 rounded-full`}>
                              <Gift className="w-3 h-3" />
                              {platform.incentive}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                </div>

                <button
                  onClick={handleSkip}
                  className="w-full mt-4 py-3 text-sm font-bold text-gray-400 hover:text-gray-600"
                >
                  Maybe later
                </button>
              </motion.div>
            )}

            {/* Step 3: Thanks */}
            {step === "thanks" && (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your feedback helps us serve {locality} and all of Narnaul better.
                </p>
                
                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Gift className="w-4 h-4 text-indigo-600" />
                    <span className="font-bold text-gray-900">
                      {REVIEW_PLATFORMS.find(p => p.id === selectedPlatform)?.incentive} added!
                    </span>
                  </div>
                </div>

                <Button 
                  onClick={onClose}
                  className="h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold px-10"
                >
                  <ThumbsUp className="w-5 h-5 mr-2" />
                  Done
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

// Trigger component - shows when appropriate
interface ReviewTriggerProps {
  onTrigger: () => void;
}

export function ReviewTriggerButton({ onTrigger }: ReviewTriggerProps) {
  return (
    <button
      onClick={onTrigger}
      className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
    >
      <Star className="w-4 h-4" />
      Share your experience
    </button>
  );
}

export default ReviewRequestFlow;
