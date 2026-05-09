/**
 * Reschedule Flow Component - Operational UX
 * 
 * Features:
 * - Reschedule pickup with reason selection
 * - Missed pickup state handling
 * - Support/escalation flow
 * - Issue reporting
 * - Real-time slot availability
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  AlertTriangle,
  MessageCircle,
  Phone,
  ChevronRight,
  X,
  CheckCircle2,
  RefreshCw,
  MapPin,
  User,
  AlertCircle,
  Shield,
  ThumbsUp,
  ThumbsDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent, trackWhatsAppClick } from "@/lib/analytics";

interface RescheduleFlowProps {
  orderId: string;
  currentSlot: {
    date: string;
    time: string;
  };
  locality: string;
  riderInfo?: {
    name: string;
    phone: string;
    rating: number;
  };
  onReschedule: (newDate: string, newTime: string, reason: string) => void;
  onCancel?: () => void;
  variant?: "full" | "compact" | "missed-pickup";
}

const RESCHEDULE_REASONS = [
  { id: "not_home", label: "I won't be home", icon: User },
  { id: "change_mind", label: "Changed my mind about timing", icon: Clock },
  { id: "emergency", label: "Personal emergency", icon: AlertTriangle },
  { id: "not_ready", label: "Clothes not ready", icon: Calendar },
  { id: "rider_late", label: "Rider hasn't arrived", icon: Clock },
  { id: "other", label: "Other reason", icon: AlertCircle },
];

const MISSED_REASONS = [
  { id: "rider_no_show", label: "Rider didn't show up", urgent: true },
  { id: "i_missed", label: "I missed the pickup", urgent: false },
  { id: "wrong_address", label: "Rider went to wrong address", urgent: true },
  { id: "rider_late_30", label: "Rider is very late (30+ mins)", urgent: true },
];

export function RescheduleFlow({
  orderId,
  currentSlot,
  locality,
  riderInfo,
  onReschedule,
  onCancel,
  variant = "full",
}: RescheduleFlowProps) {
  const [step, setStep] = useState<"reason" | "new-slot" | "confirm" | "success" | "issue">("reason");
  const [selectedReason, setSelectedReason] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [customReason, setCustomReason] = useState("");
  const [issueType, setIssueType] = useState("");

  // Mock available slots
  const availableSlots = [
    { date: "Today", time: "2:00 PM - 4:00 PM", available: true },
    { date: "Today", time: "4:00 PM - 6:00 PM", available: true },
    { date: "Tomorrow", time: "10:00 AM - 12:00 PM", available: true },
    { date: "Tomorrow", time: "2:00 PM - 4:00 PM", available: true },
    { date: "Day After", time: "10:00 AM - 12:00 PM", available: true },
  ];

  const handleReasonSelect = (reasonId: string) => {
    setSelectedReason(reasonId);
    
    if (reasonId === "rider_late" || reasonId === "rider_no_show") {
      setStep("issue");
    } else {
      setStep("new-slot");
    }

    trackEvent("reschedule_reason_selected", { reason: reasonId, order_id: orderId });
  };

  const handleSlotSelect = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setStep("confirm");
  };

  const handleConfirm = () => {
    const finalReason = selectedReason === "other" ? customReason : selectedReason;
    onReschedule(selectedDate, selectedTime, finalReason);
    setStep("success");
    trackEvent("reschedule_confirmed", { 
      order_id: orderId, 
      new_date: selectedDate, 
      new_time: selectedTime 
    });
  };

  const handleIssueReport = () => {
    if (!issueType) return;
    
    trackEvent("pickup_issue_reported", { 
      order_id: orderId, 
      issue_type: issueType 
    });

    // Trigger WhatsApp with issue details
    const message = `URGENT: Pickup issue for order #${orderId}. Issue: ${issueType}. Please help immediately.`;
    trackWhatsAppClick("contact_page", "urgent_issue");
    window.open(`https://wa.me/919671869470?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleWhatsAppSupport = () => {
    trackWhatsAppClick("contact_page", "general_support");
    const message = `Hi EZDRY! I need help with my order #${orderId}. I'd like to reschedule or report an issue.`;
    window.open(`https://wa.me/919671869470?text=${encodeURIComponent(message)}`, "_blank");
  };

  // Compact variant for embedding in order cards
  if (variant === "compact") {
    return (
      <div className="bg-gray-50 rounded-2xl p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
            <Calendar className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-sm">Current Pickup</p>
            <p className="text-xs text-gray-500">{currentSlot.date}, {currentSlot.time}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStep("reason")}
            className="flex-1 h-10 text-xs font-bold"
          >
            <RefreshCw className="w-3 h-3 mr-1" />
            Reschedule
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleWhatsAppSupport}
            className="flex-1 h-10 text-xs font-bold"
          >
            <MessageCircle className="w-3 h-3 mr-1" />
            Support
          </Button>
        </div>
      </div>
    );
  }

  // Missed pickup variant
  if (variant === "missed-pickup") {
    return (
      <div className="bg-red-50 rounded-[2rem] border-2 border-red-100 p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
            <AlertTriangle className="w-7 h-7 text-red-600" />
          </div>
          <div>
            <h3 className="font-bold text-red-900 text-xl">Pickup Missed</h3>
            <p className="text-red-700 mt-1">
              Your scheduled pickup for {currentSlot.time} didn't happen. 
              Let's fix this immediately.
            </p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <p className="text-sm font-bold text-red-800">What happened?</p>
          {MISSED_REASONS.map((reason) => (
            <button
              key={reason.id}
              onClick={() => setIssueType(reason.id)}
              className={`w-full p-4 rounded-2xl text-left font-medium transition-all ${
                issueType === reason.id
                  ? "bg-red-200 text-red-900 border-2 border-red-300"
                  : "bg-white text-red-700 border-2 border-transparent hover:bg-red-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{reason.label}</span>
                {reason.urgent && (
                  <span className="text-[10px] bg-red-500 text-white px-2 py-0.5 rounded-full">
                    URGENT
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {issueType && (
          <div className="space-y-3">
            <Button
              onClick={handleIssueReport}
              className="w-full h-14 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Report & Get Help on WhatsApp
            </Button>
            <Button
              variant="outline"
              onClick={() => setStep("new-slot")}
              className="w-full h-12 border-gray-300 text-gray-700 rounded-2xl font-bold"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Just Reschedule
            </Button>
          </div>
        )}

        <p className="text-center text-xs text-red-600 mt-4">
          Urgent issues are resolved within 30 minutes during business hours (8 AM - 8 PM)
        </p>
      </div>
    );
  }

  // Full flow
  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              {step === "success" ? (
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              ) : (
                <RefreshCw className="w-6 h-6" />
              )}
            </div>
            <div>
              <h3 className="font-bold text-lg">
                {step === "success" ? "Rescheduled!" : "Reschedule Pickup"}
              </h3>
              <p className="text-sm text-gray-400">Order #{orderId}</p>
            </div>
          </div>
          {onCancel && (
            <button onClick={onCancel} className="p-2 hover:bg-white/10 rounded-xl">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {/* Step 1: Select Reason */}
          {step === "reason" && (
            <motion.div
              key="reason"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Current: {currentSlot.date}, {currentSlot.time}</span>
                </div>
                <p className="text-lg font-bold text-gray-900">Why do you need to reschedule?</p>
              </div>

              <div className="space-y-2">
                {RESCHEDULE_REASONS.map((reason) => {
                  const Icon = reason.icon;
                  return (
                    <button
                      key={reason.id}
                      onClick={() => handleReasonSelect(reason.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-2xl text-left font-medium transition-all ${
                        selectedReason === reason.id
                          ? "bg-indigo-100 text-indigo-700 border-2 border-indigo-300"
                          : "bg-gray-50 text-gray-700 border-2 border-transparent hover:bg-gray-100"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        selectedReason === reason.id ? "bg-indigo-200" : "bg-white"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="flex-1">{reason.label}</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  );
                })}
              </div>

              {selectedReason === "other" && (
                <textarea
                  value={customReason}
                  onChange={(e) => setCustomReason(e.target.value)}
                  placeholder="Please specify your reason..."
                  className="w-full mt-4 p-4 bg-gray-50 border border-gray-200 rounded-2xl min-h-[100px]"
                />
              )}
            </motion.div>
          )}

          {/* Step 2: Select New Slot */}
          {step === "new-slot" && (
            <motion.div
              key="new-slot"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <button
                onClick={() => setStep("reason")}
                className="text-sm text-indigo-600 font-bold mb-4 flex items-center gap-1"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Back to reason
              </button>

              <p className="text-lg font-bold text-gray-900 mb-4">
                Select a new pickup time
              </p>

              <div className="space-y-3">
                {availableSlots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlotSelect(slot.date, slot.time)}
                    className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-indigo-50 rounded-2xl transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <Clock className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{slot.date}</p>
                        <p className="text-sm text-gray-500">{slot.time}</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      Available
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Confirm */}
          {step === "confirm" && (
            <motion.div
              key="confirm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <button
                onClick={() => setStep("new-slot")}
                className="text-sm text-indigo-600 font-bold mb-4 flex items-center gap-1"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Change slot
              </button>

              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-10 h-10 text-indigo-600" />
                </div>
                <p className="text-2xl font-black text-gray-900">{selectedDate}</p>
                <p className="text-lg text-gray-600">{selectedTime}</p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">Reschedule reason:</p>
                <p className="font-medium text-gray-900">
                  {selectedReason === "other" ? customReason : 
                   RESCHEDULE_REASONS.find(r => r.id === selectedReason)?.label}
                </p>
              </div>

              <Button
                onClick={handleConfirm}
                className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold"
              >
                Confirm Reschedule
              </Button>

              <p className="text-center text-sm text-gray-400 mt-4">
                Free rescheduling up to 2 hours before pickup
              </p>
            </motion.div>
          )}

          {/* Step 4: Success */}
          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">Rescheduled Successfully!</h3>
              <p className="text-gray-600 mb-6">
                Your new pickup is confirmed for<br />
                <span className="font-bold text-indigo-600">{selectedDate}, {selectedTime}</span>
              </p>
              <div className="p-4 bg-gray-50 rounded-2xl text-left">
                <p className="text-sm text-gray-600">
                  <strong>What's next?</strong><br />
                  • You'll receive a confirmation WhatsApp<br />
                  • Rider will call 15 mins before arrival<br />
                  • Free rescheduling available until 2 hours before
                </p>
              </div>
            </motion.div>
          )}

          {/* Issue Step */}
          {step === "issue" && (
            <motion.div
              key="issue"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="bg-amber-50 rounded-2xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-800">Pickup Issue Detected</p>
                    <p className="text-sm text-amber-700 mt-1">
                      We'll connect you with support immediately to resolve this.
                    </p>
                  </div>
                </div>
              </div>

              {riderInfo && (
                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                  <p className="text-sm text-gray-500 mb-3">Your assigned rider:</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <User className="w-6 h-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">{riderInfo.name}</p>
                      <p className="text-sm text-gray-500">⭐ {riderInfo.rating} rating</p>
                    </div>
                    <a
                      href={`tel:${riderInfo.phone}`}
                      className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600"
                    >
                      <Phone className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <Button
                  onClick={handleWhatsAppSupport}
                  className="w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Help on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setStep("new-slot")}
                  className="w-full h-12 border-gray-200 text-gray-700 rounded-2xl font-bold"
                >
                  Just Reschedule Instead
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Support */}
      {step !== "success" && (
        <div className="p-4 bg-gray-50 border-t border-gray-100">
          <button
            onClick={handleWhatsAppSupport}
            className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-gray-500 hover:text-gray-700"
          >
            <MessageCircle className="w-4 h-4" />
            Need help? Chat with us
          </button>
        </div>
      )}
    </div>
  );
}

export default RescheduleFlow;
