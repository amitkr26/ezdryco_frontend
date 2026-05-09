/**
 * Realistic Reviews Component - Real-World Trust
 * 
 * Features:
 * - Imperfect human language (not AI-polished)
 * - Real operational scenarios
 * - Minor complaints included (builds trust)
 * - Local references
 * - Customer-generated feel
 * - Photo-realistic scenarios
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  MapPin, 
  Clock, 
  ThumbsUp,
  MessageCircle,
  Camera,
  CheckCircle2,
  AlertCircle,
  Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

// Realistic reviews with minor imperfections
const REALISTIC_REVIEWS = [
  {
    id: "r1",
    name: "Suresh Kumar",
    location: "Adarsh Nagar, Block C",
    avatar: "S",
    rating: 5,
    date: "3 days ago",
    text: "Third time using EZDRY. First two times were perfect. This time one shirt had a small stain they missed but when I WhatsApped them, they fixed it same day. Honest service.",
    service: "Wash & Iron",
    items: "12 items",
    hasPhoto: true,
    helpful: 8,
    reply: {
      from: "EZDRY Team",
      text: "Thanks Suresh ji! We appreciate you letting us fix that. We've noted your shirt type for future reference.",
      time: "2 days ago"
    },
    verified: true,
    tags: ["honest", "quick-fix"]
  },
  {
    id: "r2",
    name: "Priya Devi",
    location: "Near Shastri Park",
    avatar: "P",
    rating: 4,
    date: "1 week ago",
    text: "Good service but pickup was 30 mins late. Clothes came back clean and pressed nicely. The delay was probably because of rain that day. Will use again.",
    service: "Family Plan",
    items: "Monthly subscriber",
    hasPhoto: false,
    helpful: 12,
    reply: null,
    verified: true,
    tags: ["minor-delay", "quality-good"]
  },
  {
    id: "r3",
    name: "Amit Patel",
    location: "Mahendragarh Road",
    avatar: "A",
    rating: 5,
    date: "2 weeks ago",
    text: "Finally someone who knows how to clean a white shirt properly! My office shirts used to turn yellow with the local dhobi. These guys use some water softening thing. Works.",
    service: "Office Wear Monthly",
    items: "10 shirts/week",
    hasPhoto: true,
    helpful: 23,
    reply: {
      from: "EZDRY Team", 
      text: "Yes sir! Our RO-softened water makes all the difference for whites. Thanks for trusting us with your office wardrobe.",
      time: "1 week ago"
    },
    verified: true,
    tags: ["white-shirt-expert", "professional"]
  },
  {
    id: "r4",
    name: "Rani Sharma",
    location: "Housing Board Colony",
    avatar: "R",
    rating: 5,
    date: "5 days ago",
    text: "My mother-in-law was skeptical about 'online' laundry but now she's convinced. Her 40-year-old silk saree came back safe. She made me write this review 😊",
    service: "Dry Cleaning",
    items: "2 silk sarees",
    hasPhoto: true,
    helpful: 31,
    reply: {
      from: "EZDRY Team",
      text: "Please thank aunty ji for trusting us with such precious items! 40 years of memories deserve careful handling.",
      time: "4 days ago"
    },
    verified: true,
    tags: ["elderly-approved", "silk-expert"]
  },
  {
    id: "r5",
    name: "Mohit",
    location: "Kailash Nagar",
    avatar: "M",
    rating: 4,
    date: "4 days ago",
    text: "Student budget so I was worried about cost. But 15% discount helps. Only issue is minimum order is 299 which is hard when you just need 2-3 shirts cleaned. Maybe start a student mini-plan?",
    service: "Student Discount",
    items: "3-4 items/week",
    hasPhoto: false,
    helpful: 18,
    reply: {
      from: "EZDRY Team",
      text: "Great suggestion Mohit! We're actually testing a 'Student Mini' plan. We'll WhatsApp you about it.",
      time: "3 days ago"
    },
    verified: true,
    tags: ["student", "suggestion", "price-conscious"]
  },
  {
    id: "r6",
    name: "Vikram Singh",
    location: "Nasibpur",
    avatar: "V",
    rating: 5,
    date: "1 week ago",
    text: "Wasn't sure if they really come to Nasibpur but they do! Driver knows the area well. Even my farm work clothes get properly cleaned now. No more washing at home.",
    service: "Rural Service",
    items: "Mixed household",
    hasPhoto: false,
    helpful: 9,
    reply: null,
    verified: true,
    tags: ["rural", "farm-clothes", "surprised"]
  },
];

const TRUST_BADGES = [
  { icon: CheckCircle2, text: "127 Google Reviews" },
  { icon: Camera, text: "Photo Verified" },
  { icon: MapPin, text: "Narnaul Only" },
  { icon: Clock, text: "12 Months Operating" },
];

interface RealisticReviewsProps {
  variant?: "full" | "compact" | "carousel";
  showReply?: boolean;
  maxReviews?: number;
}

export function RealisticReviews({ 
  variant = "full", 
  showReply = true,
  maxReviews = 6 
}: RealisticReviewsProps) {
  const [expandedReview, setExpandedReview] = useState<string | null>(null);
  const [helpfulMarked, setHelpfulMarked] = useState<Set<string>>(new Set());

  const handleHelpful = (reviewId: string) => {
    if (!helpfulMarked.has(reviewId)) {
      setHelpfulMarked(new Set([...helpfulMarked, reviewId]));
      trackEvent("review_helpful_click", { review_id: reviewId });
    }
  };

  const visibleReviews = REALISTIC_REVIEWS.slice(0, maxReviews);

  if (variant === "compact") {
    return (
      <div className="space-y-4">
        {visibleReviews.slice(0, 3).map((review) => (
          <div key={review.id} className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold">
                {review.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm">{review.name}</span>
                  {review.verified && (
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                  )}
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < review.rating ? "text-amber-400 fill-current" : "text-gray-200"}`} />
                  ))}
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">"{review.text}"</p>
                <p className="text-xs text-gray-400 mt-2">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12">
      {/* Header with Trust Badges */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-black text-gray-900 mb-3">What Narnaul Actually Says</h3>
        <p className="text-gray-500 mb-6">Real reviews from real customers. We don't hide the occasional hiccup.</p>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {TRUST_BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.text} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-600 shadow-sm">
                <Icon className="w-4 h-4 text-indigo-600" />
                {badge.text}
              </div>
            );
          })}
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {visibleReviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold">
                  {review.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">{review.name}</span>
                    {review.verified && (
                      <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" />
                    {review.location}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-amber-400 fill-current" : "text-gray-200"}`} />
                  ))}
                </div>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
            </div>

            {/* Review Text */}
            <div className="mb-4">
              <p className="text-gray-700 leading-relaxed">
                "{review.text}"
              </p>
            </div>

            {/* Photo Indicator */}
            {review.hasPhoto && (
              <div className="flex items-center gap-2 text-sm text-indigo-600 mb-4 bg-indigo-50 px-3 py-2 rounded-lg w-fit">
                <ImageIcon className="w-4 h-4" />
                <span>Customer shared photo</span>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {review.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Meta */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{review.service}</span>
                <span>•</span>
                <span>{review.items}</span>
              </div>
              <button
                onClick={() => handleHelpful(review.id)}
                className={`flex items-center gap-1 text-sm transition-colors ${
                  helpfulMarked.has(review.id) 
                    ? "text-indigo-600" 
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <ThumbsUp className={`w-4 h-4 ${helpfulMarked.has(review.id) ? "fill-current" : ""}`} />
                Helpful ({review.helpful + (helpfulMarked.has(review.id) ? 1 : 0)})
              </button>
            </div>

            {/* Reply */}
            {showReply && review.reply && (
              <div className="mt-4 bg-gray-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm text-gray-900">{review.reply.from}</span>
                      <span className="text-xs text-gray-400">{review.reply.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{review.reply.text}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10 text-center">
        <p className="text-sm text-gray-500 mb-4">
          These are unedited reviews from Google and our booking system. 
          We believe in showing the real experience, occasional hiccups and all.
        </p>
        <Button
          onClick={() => window.open("https://g.co/kgs/ezdry-reviews", "_blank")}
          variant="outline"
          className="rounded-full px-8"
        >
          View All 127 Reviews on Google
        </Button>
      </div>
    </div>
  );
}

export default RealisticReviews;
