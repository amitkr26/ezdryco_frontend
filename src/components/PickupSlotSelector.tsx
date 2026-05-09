/**
 * Pickup Slot Selector - Operational UX
 * 
 * Features:
 * - Morning/Afternoon/Evening slot selection
 * - Same-day availability indicators
 * - Express pickup options
 * - Slot confidence messaging
 * - Date navigation
 * - Local availability context
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  Zap, 
  CheckCircle2, 
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Sun,
  Sunset,
  Moon,
  Package
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackBookingEvent, trackEvent } from "@/lib/analytics";

// Slot configuration with operational reality
interface TimeSlot {
  id: string;
  time: string;
  period: "morning" | "afternoon" | "evening";
  available: boolean;
  expressAvailable: boolean;
  confidence: "high" | "medium" | "low";
  riderCount: number;
}

interface DaySchedule {
  date: string;
  dayName: string;
  fullDate: string;
  slots: TimeSlot[];
  sameDayEligible: boolean;
}

// Generate realistic slots for Narnaul operations
function generateSlots(date: Date, isToday: boolean): TimeSlot[] {
  const baseSlots: Omit<TimeSlot, "available" | "confidence" | "riderCount">[] = [
    // Morning slots (8 AM - 12 PM)
    { id: "m1", time: "8:00 AM - 10:00 AM", period: "morning", expressAvailable: true },
    { id: "m2", time: "10:00 AM - 12:00 PM", period: "morning", expressAvailable: true },
    // Afternoon slots (12 PM - 5 PM)
    { id: "a1", time: "12:00 PM - 2:00 PM", period: "afternoon", expressAvailable: false },
    { id: "a2", time: "2:00 PM - 4:00 PM", period: "afternoon", expressAvailable: false },
    { id: "a3", time: "4:00 PM - 6:00 PM", period: "afternoon", expressAvailable: false },
    // Evening slots (6 PM - 8 PM)
    { id: "e1", time: "6:00 PM - 8:00 PM", period: "evening", expressAvailable: false },
  ];

  return baseSlots.map((slot, index) => {
    // Simulate availability based on time of day and booking patterns
    const hour = new Date().getHours();
    let available = true;
    let confidence: "high" | "medium" | "low" = "high";
    let riderCount = 3;

    if (isToday) {
      // Past slots unavailable
      const slotStartHour = parseInt(slot.time.split(":")[0]);
      const isAM = slot.time.includes("AM");
      const actualHour = isAM ? slotStartHour : slotStartHour + 12;
      
      if (actualHour <= hour) {
        available = false;
        confidence = "low";
      } else if (actualHour - hour < 2) {
        // Less than 2 hours notice - low confidence
        confidence = "low";
        riderCount = 1;
      }
    }

    // Simulate some slots being booked
    if (Math.random() > 0.7 && !isToday) {
      available = false;
      confidence = "low";
    }

    // Express only available for morning slots with 2+ hour notice
    const expressAvailable = slot.period === "morning" && available && confidence !== "low";

    return {
      ...slot,
      available,
      expressAvailable,
      confidence,
      riderCount,
    };
  });
}

function generateWeekSchedule(): DaySchedule[] {
  const days: DaySchedule[] = [];
  const today = new Date();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    const isToday = i === 0;
    const dateStr = date.toISOString().split("T")[0];
    const dayIndex = date.getDay();
    
    days.push({
      date: dateStr,
      dayName: isToday ? "Today" : dayNames[dayIndex],
      fullDate: `${fullDayNames[dayIndex]}, ${date.getDate()} ${date.toLocaleString("default", { month: "short" })}`,
      slots: generateSlots(date, isToday),
      sameDayEligible: isToday && date.getHours() < 16, // Same-day if before 4 PM
    });
  }
  
  return days;
}

const PERIOD_CONFIG = {
  morning: {
    label: "Morning",
    icon: Sun,
    timeRange: "8 AM - 12 PM",
    color: "amber",
    description: "Best for early pickup",
  },
  afternoon: {
    label: "Afternoon",
    icon: Clock,
    timeRange: "12 PM - 6 PM",
    color: "blue",
    description: "Most popular slots",
  },
  evening: {
    label: "Evening",
    icon: Sunset,
    timeRange: "6 PM - 8 PM",
    color: "indigo",
    description: "After work pickup",
  },
};

interface PickupSlotSelectorProps {
  onSelect: (date: string, slot: TimeSlot, isExpress: boolean) => void;
  selectedDate?: string;
  selectedSlotId?: string;
  locality?: string;
}

export function PickupSlotSelector({ 
  onSelect, 
  selectedDate, 
  selectedSlotId,
  locality = "Narnaul"
}: PickupSlotSelectorProps) {
  const [schedule] = useState(() => generateWeekSchedule());
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(selectedSlotId || null);
  const [isExpress, setIsExpress] = useState(false);
  const [showPeriod, setShowPeriod] = useState<"morning" | "afternoon" | "evening" | null>(null);

  const activeDay = schedule[activeDayIndex];

  const handleSlotSelect = (slot: TimeSlot) => {
    if (!slot.available) return;
    
    setSelectedSlot(slot.id);
    trackEvent("slot_selected", {
      date: activeDay.date,
      slot_time: slot.time,
      period: slot.period,
      express: isExpress && slot.expressAvailable,
    });
  };

  const handleConfirm = () => {
    if (!selectedSlot) return;
    
    const slot = activeDay.slots.find(s => s.id === selectedSlot);
    if (!slot) return;

    trackBookingEvent("schedule", {
      date: activeDay.date,
      slot: slot.time,
      express: isExpress && slot.expressAvailable,
    });

    onSelect(activeDay.date, slot, isExpress && slot.expressAvailable);
  };

  const availableSlots = activeDay.slots.filter(s => s.available);
  const hasExpressAvailable = availableSlots.some(s => s.expressAvailable);

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 text-white p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Select Pickup Slot</h3>
            <p className="text-sm text-gray-400">Choose when we should collect your items</p>
          </div>
        </div>
        
        {/* Locality Context */}
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <MapPin className="w-4 h-4" />
          <span>Pickup from: <span className="text-white font-medium">{locality}</span></span>
        </div>
      </div>

      {/* Date Navigation */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {schedule.map((day, index) => (
            <button
              key={day.date}
              onClick={() => {
                setActiveDayIndex(index);
                setSelectedSlot(null);
                setShowPeriod(null);
              }}
              className={`flex-shrink-0 px-4 py-3 rounded-2xl text-center min-w-[80px] transition-all ${
                activeDayIndex === index
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              <p className="text-xs font-medium opacity-80">{day.dayName}</p>
              <p className="text-lg font-bold">{new Date(day.date).getDate()}</p>
              {day.sameDayEligible && (
                <span className="text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded-full">
                  Today
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Express Option */}
      {activeDay.sameDayEligible && hasExpressAvailable && (
        <div className="p-4 bg-amber-50 border-b border-amber-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Express Same-Day</p>
                <p className="text-sm text-gray-500">Pickup today, return by 7 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-amber-600">+₹49</span>
              <button
                onClick={() => {
                  setIsExpress(!isExpress);
                  trackEvent("express_toggle", { enabled: !isExpress });
                }}
                className={`w-14 h-8 rounded-full transition-colors relative ${
                  isExpress ? "bg-amber-500" : "bg-gray-200"
                }`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${
                  isExpress ? "left-7" : "left-1"
                }`} />
              </button>
            </div>
          </div>
          {isExpress && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="text-sm text-amber-700 mt-3 flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4" />
              Select a morning slot below for express service
            </motion.p>
          )}
        </div>
      )}

      {/* Slot Selection */}
      <div className="p-4">
        {/* Period Tabs */}
        <div className="flex gap-2 mb-4">
          {(Object.keys(PERIOD_CONFIG) as Array<keyof typeof PERIOD_CONFIG>).map((period) => {
            const config = PERIOD_CONFIG[period];
            const Icon = config.icon;
            const hasAvailable = activeDay.slots.some(s => s.period === period && s.available);
            
            return (
              <button
                key={period}
                onClick={() => setShowPeriod(showPeriod === period ? null : period)}
                className={`flex-1 p-3 rounded-xl text-center transition-all ${
                  showPeriod === period
                    ? `bg-${config.color}-100 border-2 border-${config.color}-300`
                    : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                } ${!hasAvailable ? "opacity-50" : ""}`}
              >
                <Icon className={`w-5 h-5 mx-auto mb-1 text-${config.color}-600`} />
                <p className="text-xs font-bold text-gray-700">{config.label}</p>
                <p className="text-[10px] text-gray-400">{config.timeRange}</p>
              </button>
            );
          })}
        </div>

        {/* Slots Grid */}
        <AnimatePresence mode="wait">
          {showPeriod ? (
            <motion.div
              key={showPeriod}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-2"
            >
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                {PERIOD_CONFIG[showPeriod].description}
              </p>
              
              {activeDay.slots
                .filter(slot => slot.period === showPeriod)
                .map((slot) => {
                  const isSelected = selectedSlot === slot.id;
                  const isExpressEligible = isExpress && slot.expressAvailable;
                  
                  return (
                    <button
                      key={slot.id}
                      onClick={() => handleSlotSelect(slot)}
                      disabled={!slot.available}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${
                        isSelected
                          ? "border-indigo-600 bg-indigo-50"
                          : slot.available
                          ? "border-gray-100 hover:border-indigo-200 bg-white"
                          : "border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isSelected ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-400"
                        }`}>
                          {isSelected ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            <Clock className="w-5 h-5" />
                          )}
                        </div>
                        <div className="text-left">
                          <p className={`font-bold ${isSelected ? "text-indigo-900" : "text-gray-900"}`}>
                            {slot.time}
                          </p>
                          <div className="flex items-center gap-2 text-xs">
                            {slot.available ? (
                              <>
                                <span className={`text-${
                                  slot.confidence === "high" ? "green" : 
                                  slot.confidence === "medium" ? "amber" : "red"
                                }-600`}>
                                  {slot.confidence === "high" ? "✓ High confidence" : 
                                   slot.confidence === "medium" ? "~ Limited slots" : "✗ Nearly full"}
                                </span>
                                {isExpressEligible && (
                                  <span className="text-amber-600 font-bold">
                                    ⚡ Express eligible
                                  </span>
                                )}
                              </>
                            ) : (
                              <span className="text-gray-400">Not available</span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {slot.available && slot.riderCount > 0 && (
                        <div className="text-right text-xs text-gray-400">
                          <p>{slot.riderCount} rider{slot.riderCount > 1 ? "s" : ""}</p>
                          <p>available</p>
                        </div>
                      )}
                    </button>
                  );
                })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8 text-gray-400"
            >
              <Package className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>Select a time period above to view available slots</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm">
            <p className="text-gray-500">Selected:</p>
            <p className="font-bold text-gray-900">
              {selectedSlot ? (
                <>
                  {activeDay.fullDate} at {" "}
                  {activeDay.slots.find(s => s.id === selectedSlot)?.time}
                  {isExpress && activeDay.slots.find(s => s.id === selectedSlot)?.expressAvailable && (
                    <span className="text-amber-600 ml-2">(Express)</span>
                  )}
                </>
              ) : (
                <span className="text-gray-400">No slot selected</span>
              )}
            </p>
          </div>
        </div>
        
        <Button
          onClick={handleConfirm}
          disabled={!selectedSlot}
          className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold disabled:opacity-50"
        >
          {selectedSlot ? "Confirm Pickup Slot" : "Select a Slot to Continue"}
        </Button>
        
        <p className="text-center text-xs text-gray-400 mt-3">
          Free rescheduling up to 2 hours before pickup
        </p>
      </div>
    </div>
  );
}

export default PickupSlotSelector;
