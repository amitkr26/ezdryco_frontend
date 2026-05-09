/**
 * EZDRY Analytics & Conversion Tracking
 * 
 * This module provides event tracking for:
 * - GA4 (Google Analytics 4)
 * - Meta Pixel (Facebook)
 * - Custom conversion events
 * 
 * Requirements:
 * 1. Replace G-XXXXXXXXXX in index.html with your actual GA4 Measurement ID
 * 2. Add Meta Pixel ID if using Facebook ads
 */

// Type definitions for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      target: string,
      config?: Record<string, unknown>
    ) => void;
    fbq: (
      command: string,
      event: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

/**
 * Safe event tracking - won't throw if analytics not loaded
 */
function safeGtag(
  command: string,
  target: string,
  config?: Record<string, unknown>
): void {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag(command, target, config);
  }
}

function safeFbq(
  command: string,
  event: string,
  params?: Record<string, unknown>
): void {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq(command, event, params);
  }
}

/**
 * Track page views (for SPA navigation)
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  safeGtag("config", "G-XXXXXXXXXX", {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
  });
}

/**
 * WhatsApp click tracking - Critical for EZDRY
 */
export function trackWhatsAppClick(
  context: "floating_button" | "footer" | "contact_page" | "rider_card",
  label?: string
): void {
  const eventParams = {
    event_category: "engagement",
    event_label: label || context,
    value: 1,
    context,
    timestamp: new Date().toISOString(),
  };

  // GA4 Event
  safeGtag("event", "whatsapp_click", eventParams);

  // Meta Pixel Event
  safeFbq("track", "Contact", {
    content_name: "WhatsApp Click",
    content_category: context,
  });

  console.log("[Analytics] WhatsApp click tracked:", context);
}

/**
 * Phone call tracking
 */
export function trackPhoneClick(
  context: "floating_bar" | "footer" | "contact_page",
  phoneNumber?: string
): void {
  safeGtag("event", "phone_click", {
    event_category: "engagement",
    event_label: phoneNumber || "+919671869470",
    value: 1,
    context,
  });

  safeFbq("track", "Contact", {
    content_name: "Phone Call",
    content_category: context,
  });
}

/**
 * Booking funnel events
 */
export function trackBookingEvent(
  step: "start" | "item_select" | "schedule" | "checkout" | "payment" | "complete",
  params?: {
    orderValue?: number;
    itemCount?: number;
    businessId?: string;
    couponCode?: string;
    [key: string]: any;
  }
): void {
  const eventName = `booking_${step}`;
  
  safeGtag("event", eventName, {
    event_category: "booking_funnel",
    event_label: step,
    value: params?.orderValue || 0,
    currency: "INR",
    ...params,
  });

  // Meta Pixel - track InitiateCheckout and Purchase
  if (step === "checkout") {
    safeFbq("track", "InitiateCheckout", {
      value: params?.orderValue,
      currency: "INR",
      num_items: params?.itemCount,
    });
  }
  
  if (step === "complete") {
    safeFbq("track", "Purchase", {
      value: params?.orderValue,
      currency: "INR",
      num_items: params?.itemCount,
    });
  }

  console.log("[Analytics] Booking event:", step, params);
}

/**
 * Service interest tracking
 */
export function trackServiceInterest(
  serviceType: "wash_fold" | "dry_cleaning" | "ironing" | "express",
  page: string
): void {
  safeGtag("event", "service_interest", {
    event_category: "interest",
    event_label: serviceType,
    service_type: serviceType,
    page,
  });
}

/**
 * Locality page engagement
 */
export function trackLocalityView(locality: string): void {
  safeGtag("event", "locality_view", {
    event_category: "local_seo",
    event_label: locality,
    locality,
  });
}

/**
 * B2B lead tracking
 */
export function trackB2BInquiry(
  businessType: "hotel" | "hostel" | "restaurant" | "salon" | "other",
  formData?: {
    hasName?: boolean;
    hasPhone?: boolean;
    hasBusinessName?: boolean;
  }
): void {
  safeGtag("event", "b2b_lead", {
    event_category: "lead_generation",
    event_label: businessType,
    business_type: businessType,
    ...formData,
  });

  safeFbq("track", "Lead", {
    content_name: "B2B Inquiry",
    content_category: businessType,
  });
}

/**
 * Blog engagement tracking
 */
export function trackBlogRead(
  articleId: string,
  articleTitle: string,
  readPercentage?: number
): void {
  safeGtag("event", "blog_read", {
    event_category: "content",
    event_label: articleId,
    article_id: articleId,
    article_title: articleTitle,
    read_percentage: readPercentage,
  });
}

/**
 * FAQ interaction (for AEO/GEO optimization tracking)
 */
export function trackFAQInteraction(
  question: string,
  action: "expand" | "collapse",
  page: string
): void {
  safeGtag("event", "faq_interaction", {
    event_category: "engagement",
    event_label: question,
    action,
    page,
    // AEO signal: user interested in this question
    question_category: categorizeQuestion(question),
  });
}

/**
 * Categorize questions for AEO insights
 */
function categorizeQuestion(q: string): string {
  const lowerQ = q.toLowerCase();
  if (lowerQ.includes("price") || lowerQ.includes("cost") || lowerQ.includes("₹")) {
    return "pricing";
  }
  if (lowerQ.includes("time") || lowerQ.includes("hour") || lowerQ.includes("long")) {
    return "timing";
  }
  if (lowerQ.includes("area") || lowerQ.includes("serve") || lowerQ.includes("location")) {
    return "locality";
  }
  if (lowerQ.includes("safe") || lowerQ.includes("damage") || lowerQ.includes("protect")) {
    return "trust";
  }
  if (lowerQ.includes("hotel") || lowerQ.includes("business") || lowerQ.includes("commercial")) {
    return "b2b";
  }
  return "general";
}

/**
 * User registration tracking
 */
export function trackRegistration(
  userType: "customer" | "business" | "admin",
  method: "form" | "google" | "phone"
): void {
  safeGtag("event", "sign_up", {
    event_category: "conversion",
    event_label: userType,
    method,
    user_type: userType,
  });

  safeFbq("track", "CompleteRegistration", {
    content_name: userType,
    registration_method: method,
  });
}

/**
 * Search queries (if implementing search)
 */
export function trackSearch(query: string, resultCount: number): void {
  safeGtag("event", "search", {
    event_category: "engagement",
    event_label: query,
    search_term: query,
    result_count: resultCount,
  });
}

/**
 * Exception tracking for debugging
 */
export function trackError(
  errorType: string,
  errorMessage: string,
  context?: string
): void {
  safeGtag("event", "exception", {
    event_category: "error",
    event_label: errorType,
    description: errorMessage,
    context,
    fatal: false,
  });
}

/**
 * Generic event tracking for custom events
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  safeGtag("event", eventName, {
    event_category: "custom",
    ...params,
  });
}

// Export all tracking functions
export const Analytics = {
  pageView: trackPageView,
  whatsAppClick: trackWhatsAppClick,
  phoneClick: trackPhoneClick,
  booking: trackBookingEvent,
  serviceInterest: trackServiceInterest,
  localityView: trackLocalityView,
  b2bInquiry: trackB2BInquiry,
  blogRead: trackBlogRead,
  faqInteraction: trackFAQInteraction,
  registration: trackRegistration,
  search: trackSearch,
  error: trackError,
  trackEvent,
};

export default Analytics;
