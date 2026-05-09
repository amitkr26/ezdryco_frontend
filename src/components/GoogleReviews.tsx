/**
 * Google Reviews Integration Component - GBP Ecosystem
 * 
 * Features:
 * - Google review display section
 * - Review count and rating showcase
 * - Review request CTA
 * - Local trust signals
 * - Map location reference
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, 
  MapPin, 
  ExternalLink, 
  ThumbsUp,
  MessageCircle,
  User,
  ChevronDown,
  ChevronUp,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

// Simulated Google reviews data
// In production, this would come from Google Places API
const GOOGLE_REVIEWS = [
  {
    id: "gr1",
    author: "Priya Sharma",
    rating: 5,
    date: "2 weeks ago",
    text: "Best laundry service in Narnaul! My silk sarees come back perfect every time. The pickup from Adarsh Nagar is always on time. Highly recommended for families.",
    helpful: 12,
    verified: true,
    location: "Adarsh Nagar",
  },
  {
    id: "gr2",
    author: "Rahul Patel",
    rating: 5,
    date: "1 month ago",
    text: "Used their express service for a last minute wedding. Sherwani came back pristine in 8 hours. Worth every rupee. They saved my cousin's wedding day!",
    helpful: 8,
    verified: true,
    location: "Mahendragarh Road",
  },
  {
    id: "gr3",
    author: "Anita Devi",
    rating: 4,
    date: "3 weeks ago",
    text: "Good service overall. Sometimes delivery is a bit late during festivals but quality is consistent. The water softening really makes a difference for clothes.",
    helpful: 5,
    verified: true,
    location: "Shastri Nagar",
  },
  {
    id: "gr4",
    author: "Mohit Kumar",
    rating: 5,
    date: "1 week ago",
    text: "Finally a professional laundry service in Narnaul! No more dealing with local dhobis who ruin clothes. The app tracking is a game changer.",
    helpful: 15,
    verified: true,
    location: "HUDA Sector",
  },
  {
    id: "gr5",
    author: "Sunita Rani",
    rating: 5,
    date: "2 days ago",
    text: "Been using for 6 months for my hostel laundry business. Reliable, professional, and the students love the service. Great B2B support.",
    helpful: 3,
    verified: true,
    location: "Kailash Nagar",
  },
];

const GBP_DATA = {
  rating: 4.8,
  totalReviews: 127,
  address: "Narnaul, Mahendragarh, Haryana 123001",
  phone: "+91 96718 69470",
  hours: "Open 8 AM - 8 PM",
  mapsUrl: "https://g.co/kgs/ezdry-narnaul", // Placeholder URL
};

interface GoogleReviewsProps {
  variant?: "full" | "compact" | "sidebar";
  showRequestCTA?: boolean;
}

export function GoogleReviews({ variant = "full", showRequestCTA = true }: GoogleReviewsProps) {
  const [expandedReview, setExpandedReview] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const handleReviewClick = () => {
    trackEvent("google_review_click");
    window.open(GBP_DATA.mapsUrl, "_blank");
  };

  const handleReviewRequest = () => {
    trackEvent("review_request_click");
    // In production, this would open a review request flow
    alert("Thank you! A review request has been sent to your WhatsApp.");
  };

  const visibleReviews = showAll ? GOOGLE_REVIEWS : GOOGLE_REVIEWS.slice(0, 3);

  if (variant === "compact") {
    return (
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
            <MapPin className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="font-bold text-gray-900">Google Rating</p>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-gray-900">{GBP_DATA.rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(GBP_DATA.rating) ? "text-amber-400 fill-current" : "text-gray-200"}`} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({GBP_DATA.totalReviews} reviews)</span>
            </div>
          </div>
        </div>
        <Button 
          onClick={handleReviewClick}
          variant="outline" 
          className="w-full h-12 border-gray-200 rounded-xl font-bold"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          View on Google Maps
        </Button>
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-blue-600" />
          <span className="font-bold text-gray-900">Find Us</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{GBP_DATA.address}</p>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < Math.floor(GBP_DATA.rating) ? "text-amber-400 fill-current" : "text-gray-200"}`} />
            ))}
          </div>
          <span className="font-bold">{GBP_DATA.rating}</span>
          <span className="text-sm text-gray-500">({GBP_DATA.totalReviews})</span>
        </div>
        <Button 
          onClick={handleReviewClick}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Get Directions
        </Button>
      </div>
    );
  }

  // Full variant
  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden">
      {/* Header with GBP Stats */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
              <MapPin className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Google Business Profile</p>
              <h3 className="text-2xl font-black">EZDRY Narnaul</h3>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end gap-2 mb-1">
              <span className="text-4xl font-black">{GBP_DATA.rating}</span>
              <div className="flex flex-col items-start">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(GBP_DATA.rating) ? "text-amber-400 fill-current" : "text-gray-600"}`} />
                  ))}
                </div>
                <span className="text-xs text-gray-400">{GBP_DATA.totalReviews} reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <MapPin className="w-4 h-4" />
            <span>{GBP_DATA.address}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Top-rated in Narnaul</span>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <h4 className="font-bold text-gray-900">Recent Google Reviews</h4>
          <Button 
            onClick={handleReviewClick}
            variant="outline" 
            size="sm"
            className="rounded-full"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View All
          </Button>
        </div>

        <div className="space-y-4">
          {visibleReviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-50 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{review.author}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{review.location}</span>
                      <span>•</span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? "text-amber-400 fill-current" : "text-gray-200"}`} />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                "{review.text}"
              </p>

              {review.verified && (
                <div className="flex items-center gap-1 text-xs text-green-600 mb-3">
                  <Award className="w-3 h-3" />
                  <span>Verified customer</span>
                </div>
              )}

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful ({review.helpful})</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && GOOGLE_REVIEWS.length > 3 && (
          <button
            onClick={() => setShowAll(true)}
            className="w-full mt-4 py-3 text-sm font-bold text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
          >
            Show All {GOOGLE_REVIEWS.length} Reviews
            <ChevronDown className="w-4 h-4 inline ml-1" />
          </button>
        )}
      </div>

      {/* Review Request CTA */}
      {showRequestCTA && (
        <div className="p-8 bg-blue-50 border-t border-blue-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-blue-900 mb-1">Happy with our service?</p>
              <p className="text-sm text-blue-700">Your review helps other Narnaul residents find us</p>
            </div>
            <Button
              onClick={handleReviewRequest}
              className="h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold px-6"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Leave a Review
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GoogleReviews;
