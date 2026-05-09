/**
 * Order Timeline Component - Operational UX
 * 
 * Features:
 * - 9-step operational timeline
 * - Current status highlighting
 * - ETA for each step
 * - Delay handling
 * - Operational transparency
 * - Visual progress tracking
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  Circle, 
  Clock,
  Truck,
  Package,
  Sparkles,
  Shield,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  MapPin,
  Droplets,
  Wind,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

// 9-step operational timeline
interface TimelineStep {
  id: string;
  status: "pending" | "in-progress" | "completed" | "delayed";
  label: string;
  description: string;
  icon: React.ElementType;
  operationalDetail: string;
  eta?: string;
  completedAt?: string;
  delayedReason?: string;
}

interface OrderTimelineProps {
  orderStatus: string;
  orderDate: string;
  isExpress?: boolean;
  showDetailed?: boolean;
}

const TIMELINE_STEPS: Omit<TimelineStep, "status" | "eta" | "completedAt" | "delayedReason">[] = [
  {
    id: "pickup_scheduled",
    label: "Pickup Scheduled",
    description: "Your pickup is confirmed",
    icon: Clock,
    operationalDetail: "Rider assigned to your area. You'll receive a call 15 mins before arrival.",
  },
  {
    id: "picked_up",
    label: "Picked Up",
    description: "Items collected from your location",
    icon: Truck,
    operationalDetail: "Garments counted, tagged with unique barcode, photographed for verification.",
  },
  {
    id: "processing",
    label: "At Processing Center",
    description: "Items received and sorted",
    icon: Package,
    operationalDetail: "Initial quality check. Items sorted by fabric type and cleaning method required.",
  },
  {
    id: "washing",
    label: "Washing in Progress",
    description: "Cleaning with soft water",
    icon: Droplets,
    operationalDetail: "5-stage water softening. Fabric-specific detergents. Temperature controlled wash.",
  },
  {
    id: "drying",
    label: "Drying",
    description: "Controlled drying process",
    icon: Wind,
    operationalDetail: "Temperature-monitored drying. Delicates air-dried. No harsh machine drying.",
  },
  {
    id: "pressing",
    label: "Pressing & Finishing",
    description: "Professional steam pressing",
    icon: Sparkles,
    operationalDetail: "Steam pressing for crisp finish. Hangers for formals, folded for casuals.",
  },
  {
    id: "qc",
    label: "Quality Check",
    description: "Final inspection",
    icon: Shield,
    operationalDetail: "Each garment inspected against our 12-point quality checklist.",
  },
  {
    id: "packing",
    label: "Packed & Ready",
    description: "Hygienic packaging",
    icon: Package,
    operationalDetail: "Biodegradable covers. Sealed bags. Your name tag on every item.",
  },
  {
    id: "out_for_delivery",
    label: "Out for Delivery",
    description: "On the way to you",
    icon: Truck,
    operationalDetail: "Rider carrying your order. Live tracking available via WhatsApp.",
  },
  {
    id: "delivered",
    label: "Delivered",
    description: "Order completed",
    icon: CheckCircle2,
    operationalDetail: "Please verify garment count and quality. Rate your experience to earn points.",
  },
];

// Map order status to timeline position
function getTimelineForStatus(orderStatus: string): TimelineStep[] {
  const statusMap: Record<string, number> = {
    "requested": 0,
    "pickup_scheduled": 0,
    "picked_up": 1,
    "received": 2,
    "processing": 2,
    "washing": 3,
    "cleaning": 3,
    "drying": 4,
    "pressing": 5,
    "ironing": 5,
    "qc": 6,
    "quality_check": 6,
    "packing": 7,
    "packed": 7,
    "ready": 7,
    "out_for_delivery": 8,
    "delivered": 9,
  };

  const currentStep = statusMap[orderStatus.toLowerCase()] ?? 0;
  
  return TIMELINE_STEPS.map((step, index) => {
    let status: TimelineStep["status"] = "pending";
    
    if (index < currentStep) {
      status = "completed";
    } else if (index === currentStep) {
      status = "in-progress";
    }

    // Add realistic ETAs
    let eta: string | undefined;
    if (status === "pending") {
      const hoursFromNow = (index - currentStep) * 4; // ~4 hours per step
      if (hoursFromNow > 0 && hoursFromNow < 24) {
        eta = `ETA: ${hoursFromNow} hours`;
      } else if (hoursFromNow >= 24) {
        eta = `ETA: ${Math.ceil(hoursFromNow / 24)} days`;
      }
    }

    // Add completion times for completed steps
    let completedAt: string | undefined;
    if (status === "completed") {
      const hoursAgo = (currentStep - index) * 4;
      completedAt = hoursAgo < 24 
        ? `${hoursAgo} hours ago`
        : `${Math.floor(hoursAgo / 24)} days ago`;
    }

    return {
      ...step,
      status,
      eta,
      completedAt,
    };
  });
}

export function OrderTimeline({ 
  orderStatus, 
  orderDate, 
  isExpress = false,
  showDetailed = false 
}: OrderTimelineProps) {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const [showAllSteps, setShowAllSteps] = useState(showDetailed);
  const [steps, setSteps] = useState<TimelineStep[]>(() => getTimelineForStatus(orderStatus));

  useEffect(() => {
    setSteps(getTimelineForStatus(orderStatus));
  }, [orderStatus]);

  const currentStepIndex = steps.findIndex(s => s.status === "in-progress");
  const completedSteps = steps.filter(s => s.status === "completed").length;
  const progressPercent = (completedSteps / steps.length) * 100;

  const visibleSteps = showAllSteps ? steps : steps.slice(0, Math.max(currentStepIndex + 2, 3));

  const handleStepClick = (stepId: string) => {
    if (expandedStep === stepId) {
      setExpandedStep(null);
    } else {
      setExpandedStep(stepId);
      trackEvent("timeline_step_expanded", { step_id: stepId });
    }
  };

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <RefreshCw className={`w-6 h-6 ${currentStepIndex >= 0 ? "animate-spin" : ""}`} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Order Progress</h3>
              <p className="text-sm text-gray-400">
                {completedSteps} of {steps.length} steps completed
              </p>
            </div>
          </div>
          {isExpress && (
            <div className="bg-amber-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Express
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full"
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="p-6">
        <div className="space-y-4">
          {visibleSteps.map((step, index) => {
            const Icon = step.icon;
            const isExpanded = expandedStep === step.id;
            const isCurrent = step.status === "in-progress";
            const isCompleted = step.status === "completed";
            const isPending = step.status === "pending";

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`relative ${index !== visibleSteps.length - 1 ? "pb-4" : ""}`}
              >
                {/* Connector Line */}
                {index !== visibleSteps.length - 1 && (
                  <div className={`absolute left-6 top-12 w-0.5 h-full ${
                    isCompleted ? "bg-indigo-500" : "bg-gray-200"
                  }`} />
                )}

                <div className="flex gap-4">
                  {/* Icon */}
                  <button
                    onClick={() => handleStepClick(step.id)}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all ${
                      isCompleted
                        ? "bg-indigo-600 text-white"
                        : isCurrent
                        ? "bg-indigo-100 text-indigo-600 ring-4 ring-indigo-100 animate-pulse"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </button>

                  {/* Content */}
                  <div className="flex-1">
                    <button
                      onClick={() => handleStepClick(step.id)}
                      className="w-full text-left"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className={`font-bold ${
                            isCurrent ? "text-indigo-700" : isCompleted ? "text-gray-900" : "text-gray-500"
                          }`}>
                            {step.label}
                          </p>
                          <p className="text-sm text-gray-500">{step.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {step.eta && (
                            <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                              {step.eta}
                            </span>
                          )}
                          {step.completedAt && (
                            <span className="text-xs text-gray-400">
                              {step.completedAt}
                            </span>
                          )}
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`} />
                        </div>
                      </div>
                    </button>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 p-4 bg-gray-50 rounded-xl"
                        >
                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            {step.operationalDetail}
                          </p>
                          
                          {isCurrent && (
                            <div className="flex items-center gap-2 text-sm text-indigo-600">
                              <RefreshCw className="w-4 h-4 animate-spin" />
                              <span>In progress now</span>
                            </div>
                          )}
                          
                          {step.delayedReason && (
                            <div className="flex items-start gap-2 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">
                              <AlertCircle className="w-4 h-4 mt-0.5" />
                              <span>{step.delayedReason}</span>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show More/Less */}
        {!showDetailed && steps.length > visibleSteps.length && (
          <button
            onClick={() => {
              setShowAllSteps(!showAllSteps);
              trackEvent("timeline_expand_toggle", { expanded: !showAllSteps });
            }}
            className="w-full mt-4 py-3 text-sm font-bold text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {showAllSteps ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show All {steps.length} Steps
              </>
            )}
          </button>
        )}
      </div>

      {/* Footer Info */}
      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Order placed: {orderDate}</span>
            </div>
            {isExpress && (
              <div className="flex items-center gap-2 text-amber-600">
                <Sparkles className="w-4 h-4" />
                <span>Same-day delivery</span>
              </div>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              trackEvent("track_order_clicked", { order_status: orderStatus });
            }}
            className="text-xs"
          >
            <MapPin className="w-3 h-3 mr-1" />
            Live Track
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OrderTimeline;
