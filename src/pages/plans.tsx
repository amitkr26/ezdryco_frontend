/**
 * Subscription Plans & Retention Page
 * 
 * Features:
 * - Family Plans (household laundry subscriptions)
 * - Student Plans (budget-friendly options)
 * - Individual Plans (flexible options)
 * - Savings calculator
 * - Loyalty rewards preview
 * - WhatsApp signup flow
 */

import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { 
  Users, 
  GraduationCap, 
  User, 
  Check, 
  ChevronRight, 
  Calculator,
  Gift,
  Clock,
  Sparkles,
  MessageCircle,
  Percent,
  Zap,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import PublicLayout from "@/layouts/public-layout";
import { trackEvent } from "@/lib/analytics";

// Subscription Plans Data
const SUBSCRIPTION_PLANS = [
  {
    id: "family-premium",
    icon: Users,
    title: "Family Premium",
    tagline: "For households of 4+ members",
    description: "Complete laundry solution for busy families. Includes wash & fold, ironing, and seasonal deep cleaning.",
    monthlyPrice: 1299,
    quarterlyPrice: 3499,
    yearlyPrice: 11999,
    savings: { quarterly: 398, yearly: 3589 },
    features: [
      "Up to 60 items per month",
      "Free pickup & delivery (unlimited)",
      "Priority 24-hour turnaround",
      "1 dry cleaning credit/month (premium items)",
      "Seasonal blanket cleaning (2x/year)",
      "Dedicated family account manager",
      "WhatsApp priority support",
    ],
    bestFor: ["Joint families", "Working couples with kids", "Large households"],
    color: "indigo",
    popular: true,
  },
  {
    id: "student-essential",
    icon: GraduationCap,
    title: "Student Essential",
    tagline: "Budget-friendly for students & PGs",
    description: "Affordable laundry care for students living in hostels and PGs across Narnaul.",
    monthlyPrice: 499,
    quarterlyPrice: 1299,
    yearlyPrice: 4499,
    savings: { quarterly: 198, yearly: 1489 },
    features: [
      "Up to 25 items per month",
      "Free pickup at hostel/PG",
      "48-hour standard turnaround",
      "Group booking discounts (5+ students)",
      "Exam season priority slots",
      "WhatsApp order tracking",
      "No minimum order value",
    ],
    bestFor: ["College students", "PG residents", "Budget-conscious users"],
    color: "emerald",
    popular: false,
  },
  {
    id: "individual-flex",
    icon: User,
    title: "Individual Flex",
    tagline: "For solo professionals & singles",
    description: "Flexible plan for working professionals who need reliable laundry without the hassle.",
    monthlyPrice: 799,
    quarterlyPrice: 2199,
    yearlyPrice: 7999,
    savings: { quarterly: 198, yearly: 1589 },
    features: [
      "Up to 35 items per month",
      "Free pickup & delivery",
      "Express service option (+₹49)",
      "1 premium garment care/month",
      "Weekend delivery slots",
      "Monthly usage reports",
      "Pause plan anytime",
    ],
    bestFor: ["Working professionals", "Single occupants", "Bachelors"],
    color: "amber",
    popular: false,
  },
];

// Savings Calculator Logic
function calculateSavings(monthlyUsage: number, planType: string): {
  payAsYouGo: number;
  subscriptionCost: number;
  savings: number;
  savingsPercent: number;
} {
  const perItemRate = 35; // Average blended rate
  const payAsYouGo = monthlyUsage * perItemRate;
  
  let subscriptionCost = 0;
  switch (planType) {
    case "family-premium":
      subscriptionCost = 1299;
      break;
    case "student-essential":
      subscriptionCost = 499;
      break;
    case "individual-flex":
      subscriptionCost = 799;
      break;
    default:
      subscriptionCost = 799;
  }
  
  const savings = Math.max(0, payAsYouGo - subscriptionCost);
  const savingsPercent = payAsYouGo > 0 ? Math.round((savings / payAsYouGo) * 100) : 0;
  
  return { payAsYouGo, subscriptionCost, savings, savingsPercent };
}

// Loyalty Program Tiers
const LOYALTY_TIERS = [
  {
    name: "Silver",
    orders: "0-10",
    benefits: ["5% off every order", "Birthday month special: 20% off", "Early access to new services"],
    color: "gray",
  },
  {
    name: "Gold",
    orders: "11-25",
    benefits: ["10% off every order", "Free express upgrade monthly", "Priority customer support", "Quarterly free dry cleaning"],
    color: "amber",
  },
  {
    name: "Platinum",
    orders: "26+",
    benefits: ["15% off every order", "Free express on all orders", "Dedicated account manager", "Monthly free dry cleaning", "Exclusive partner discounts"],
    color: "indigo",
  },
];

export default function PlansPage() {
  const [, navigate] = useLocation();
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly" | "yearly">("monthly");
  const [calcUsage, setCalcUsage] = useState(30);
  const [calcPlan, setCalcPlan] = useState("family-premium");

  useSEO({
    title: "Subscription Plans | Save 30% on Laundry — EZDRY Narnaul",
    description: "Laundry subscription plans for families, students & professionals in Narnaul. Save up to 30% with monthly plans starting ₹499. Free pickup, priority delivery.",
    canonical: "https://ezdry.in/plans",
    faqs: [
      { question: "Can I pause my subscription?", answer: "Yes, Individual Flex and Family Premium plans can be paused for up to 30 days per year. Student plans can be paused during semester breaks." },
      { question: "What happens if I exceed my item limit?", answer: "Additional items are charged at a discounted ₹25/item for subscribers (vs ₹35 for non-subscribers). We'll notify you before processing extras." },
      { question: "Is there a contract or lock-in period?", answer: "No long-term contracts. Monthly plans can be cancelled anytime. Quarterly and yearly plans offer prorated refunds if you cancel early." },
      { question: "Do unused items roll over to next month?", answer: "Yes, up to 10 unused items roll over to the next month for Family and Individual plans. Student plans have 5 item rollover." },
      { question: "How do I sign up for a subscription?", answer: "Click any 'Subscribe via WhatsApp' button and our team will set up your plan within 2 hours. Payment can be made via UPI, card, or cash on pickup." },
    ],
  });

  const calcResult = calculateSavings(calcUsage, calcPlan);

  const handleSubscribe = (planId: string) => {
    trackEvent("subscription_intent", { plan_id: planId, billing_cycle: billingCycle });
    const message = `Hi EZDRY! I'm interested in the ${planId} plan with ${billingCycle} billing. Please help me subscribe.`;
    window.open(`https://wa.me/919671869470?text=${encodeURIComponent(message)}`, "_blank");
  };

  const getPrice = (plan: typeof SUBSCRIPTION_PLANS[0]) => {
    switch (billingCycle) {
      case "quarterly":
        return { price: plan.quarterlyPrice, saving: plan.savings.quarterly };
      case "yearly":
        return { price: plan.yearlyPrice, saving: plan.savings.yearly };
      default:
        return { price: plan.monthlyPrice, saving: 0 };
    }
  };

  return (
    <PublicLayout>
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 py-24 px-6 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" />
              Save Up To 30% On Laundry
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Never Worry About<br />Laundry Again
            </h1>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
              Subscription plans designed for Narnaul families, students, and professionals. 
              Predictable costs, priority service, and exclusive perks.
            </p>
            
            {/* Billing Toggle */}
            <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-2xl p-1.5 gap-1">
              {(["monthly", "quarterly", "yearly"] as const).map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                    billingCycle === cycle
                      ? "bg-white text-indigo-900"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                  {cycle === "yearly" && (
                    <span className="ml-2 text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full">
                      Save 25%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PLANS GRID */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {SUBSCRIPTION_PLANS.map((plan, index) => {
              const { price, saving } = getPrice(plan);
              const Icon = plan.icon;
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white rounded-[2.5rem] p-8 border-2 transition-all hover:shadow-2xl ${
                    plan.popular
                      ? "border-indigo-500 shadow-xl shadow-indigo-100 scale-105 z-10"
                      : "border-gray-100 hover:border-indigo-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  
                  {/* Header */}
                  <div className="mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-${plan.color}-100 flex items-center justify-center mb-6`}>
                      <Icon className={`w-8 h-8 text-${plan.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-sm text-gray-500">{plan.tagline}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-gray-900">₹{price}</span>
                      <span className="text-gray-400">/{billingCycle}</span>
                    </div>
                    {saving > 0 && (
                      <p className="text-sm text-green-600 font-medium mt-1">
                        Save ₹{saving} vs monthly
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Best For */}
                  <div className="mb-8">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Best For</p>
                    <div className="flex flex-wrap gap-2">
                      {plan.bestFor.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-medium px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    onClick={() => handleSubscribe(plan.id)}
                    className={`w-full h-14 rounded-2xl font-bold text-lg ${
                      plan.popular
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Subscribe via WhatsApp
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SAVINGS CALCULATOR */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-black text-gray-900 mb-4">Calculate Your Savings</h2>
            <p className="text-gray-500">See how much you could save with a subscription vs pay-per-order</p>
          </div>

          <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Monthly Usage (items)
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={calcUsage}
                  onChange={(e) => setCalcUsage(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>10 items</span>
                  <span className="font-bold text-indigo-600 text-lg">{calcUsage} items</span>
                  <span>100 items</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Select Plan
                </label>
                <select
                  value={calcPlan}
                  onChange={(e) => setCalcPlan(e.target.value)}
                  className="w-full p-4 bg-white border border-gray-200 rounded-2xl font-medium focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="family-premium">Family Premium (60 items)</option>
                  <option value="student-essential">Student Essential (25 items)</option>
                  <option value="individual-flex">Individual Flex (35 items)</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center">
                <p className="text-sm text-gray-500 mb-2">Pay-Per-Order Cost</p>
                <p className="text-3xl font-black text-gray-900">₹{calcResult.payAsYouGo}</p>
                <p className="text-xs text-gray-400 mt-1">@ ₹35/item average</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <p className="text-sm text-gray-500 mb-2">Subscription Cost</p>
                <p className="text-3xl font-black text-indigo-600">₹{calcResult.subscriptionCost}</p>
                <p className="text-xs text-gray-400 mt-1">Monthly plan</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 text-center border-2 border-green-100">
                <p className="text-sm text-green-700 mb-2">Your Savings</p>
                <p className="text-3xl font-black text-green-600">₹{calcResult.savings}</p>
                <p className="text-xs text-green-600 mt-1">{calcResult.savingsPercent}% saved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOYALTY PROGRAM */}
      <section className="py-24 px-6 bg-indigo-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Gift className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-3xl font-black text-gray-900 mb-4">EZDRY Rewards</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every order earns you points. More orders = bigger perks. Automatic enrollment for all customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LOYALTY_TIERS.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] p-8 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-${tier.color}-100 flex items-center justify-center mb-6`}>
                  <Percent className={`w-8 h-8 text-${tier.color}-600`} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{tier.orders} orders completed</p>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">Ready to Save?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Join 500+ Narnaul families already saving time and money with EZDRY subscriptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleSubscribe("family-premium")}
              className="h-16 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg px-10"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Start with Family Plan
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/pricing")}
              className="h-16 border-white/20 text-white hover:bg-white/10 rounded-2xl font-bold text-lg px-10"
            >
              Compare Pay-Per-Order
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
