/**
 * Quick Reorder Component - Retention System
 * 
 * Features:
 * - One-click reorder from order history
 * - Favorites management
 * - Scheduled recurring orders
 * - Smart suggestions based on patterns
 * - Used in customer home/dashboard
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  RotateCcw, 
  Clock, 
  Calendar,
  Heart,
  ChevronRight,
  ShoppingBag,
  Check,
  X,
  Bell,
  Repeat
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent, trackBookingEvent } from "@/lib/analytics";

// Mock previous orders - would come from API
const PREVIOUS_ORDERS = [
  {
    id: "ord_001",
    orderNumber: "EZ-7823",
    date: "2 days ago",
    items: [
      { name: "Shirts", qty: 5, service: "Wash & Iron" },
      { name: "Trousers", qty: 3, service: "Wash & Iron" },
      { name: "Bed Sheet", qty: 2, service: "Wash & Fold" },
    ],
    total: 320,
    isFavorite: true,
    frequency: "weekly",
  },
  {
    id: "ord_002",
    orderNumber: "EZ-7756",
    date: "1 week ago",
    items: [
      { name: "Silk Saree", qty: 1, service: "Dry Cleaning" },
      { name: "Blazer", qty: 1, service: "Dry Cleaning" },
    ],
    total: 480,
    isFavorite: false,
    frequency: null,
  },
  {
    id: "ord_003",
    orderNumber: "EZ-7699",
    date: "2 weeks ago",
    items: [
      { name: "Woolen Sweater", qty: 3, service: "Dry Cleaning" },
      { name: "Blanket", qty: 2, service: "Wash & Fold" },
      { name: "Curtains", qty: 4, service: "Dry Cleaning" },
    ],
    total: 850,
    isFavorite: true,
    frequency: "monthly",
  },
];

// Smart suggestions based on patterns
const SMART_SUGGESTIONS = [
  {
    id: "sugg_001",
    type: "pattern",
    message: "You usually order every Thursday",
    action: "Schedule for this Thursday?",
    icon: Clock,
  },
  {
    id: "sugg_002",
    type: "seasonal",
    message: "Winter items need cleaning before storage",
    action: "Book dry cleaning for woolens?",
    icon: Calendar,
  },
];

interface OrderCardProps {
  order: typeof PREVIOUS_ORDERS[0];
  onReorder: (orderId: string) => void;
  onToggleFavorite: (orderId: string) => void;
  onScheduleRecurring: (orderId: string) => void;
}

function OrderCard({ order, onReorder, onToggleFavorite, onScheduleRecurring }: OrderCardProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [isReordered, setIsReordered] = useState(false);

  const handleReorder = () => {
    trackBookingEvent("start", { source: "quick_reorder", previous_order: order.id });
    setIsReordered(true);
    onReorder(order.id);
    setTimeout(() => setIsReordered(false), 2000);
  };

  return (
    <motion.div
      layout
      className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold text-gray-400">#{order.orderNumber}</span>
            <span className="text-xs text-gray-400">• {order.date}</span>
          </div>
          <p className="font-bold text-gray-900">₹{order.total}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onToggleFavorite(order.id)}
            className={`p-2 rounded-xl transition-colors ${
              order.isFavorite ? "bg-red-50 text-red-500" : "bg-gray-100 text-gray-400 hover:bg-gray-200"
            }`}
          >
            <Heart className={`w-4 h-4 ${order.isFavorite ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-2 mb-4">
        {order.items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between text-sm">
            <span className="text-gray-600">
              {item.qty}x {item.name}
            </span>
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
              {item.service}
            </span>
          </div>
        ))}
      </div>

      {/* Frequency Badge */}
      {order.frequency && (
        <div className="flex items-center gap-2 mb-4 text-xs text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full w-fit">
          <Repeat className="w-3.5 h-3.5" />
          Repeats {order.frequency}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          onClick={handleReorder}
          disabled={isReordered}
          className={`flex-1 h-11 rounded-xl font-bold text-sm transition-all ${
            isReordered
              ? "bg-green-500 text-white"
              : "bg-gray-900 text-white hover:bg-gray-800"
          }`}
        >
          {isReordered ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              Added to Cart
            </>
          ) : (
            <>
              <RotateCcw className="w-4 h-4 mr-2" />
              Reorder
            </>
          )}
        </Button>
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="h-11 w-11 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
        >
          <ChevronRight className={`w-5 h-5 transition-transform ${showOptions ? "rotate-90" : ""}`} />
        </button>
      </div>

      {/* Expanded Options */}
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-gray-100 space-y-3"
          >
            <button
              onClick={() => onScheduleRecurring(order.id)}
              className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-4 h-4 text-indigo-600" />
              Set as recurring order
              <ChevronRight className="w-4 h-4 ml-auto" />
            </button>
            <button className="w-full flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              <Bell className="w-4 h-4 text-indigo-600" />
              Remind me to reorder
              <ChevronRight className="w-4 h-4 ml-auto" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface QuickReorderProps {
  variant?: "full" | "compact" | "suggestions-only";
}

export function QuickReorder({ variant = "full" }: QuickReorderProps) {
  const [orders, setOrders] = useState(PREVIOUS_ORDERS);
  const [activeTab, setActiveTab] = useState<"recent" | "favorites">("recent");
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  const handleReorder = (orderId: string) => {
    console.log("Reordering:", orderId);
    // Would add items to cart and navigate to checkout
  };

  const handleToggleFavorite = (orderId: string) => {
    setOrders(orders.map(o => 
      o.id === orderId ? { ...o, isFavorite: !o.isFavorite } : o
    ));
    trackEvent("toggle_order_favorite", { order_id: orderId });
  };

  const handleScheduleRecurring = (orderId: string) => {
    setSelectedOrder(orderId);
    setShowScheduleModal(true);
    trackEvent("schedule_recurring_intent", { order_id: orderId });
  };

  const filteredOrders = activeTab === "favorites" 
    ? orders.filter(o => o.isFavorite)
    : orders;

  if (variant === "suggestions-only") {
    return (
      <div className="space-y-3">
        {SMART_SUGGESTIONS.map((sugg) => (
          <motion.div
            key={sugg.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-indigo-50 rounded-2xl p-4 flex items-start gap-3"
          >
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <sugg.icon className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-1">{sugg.message}</p>
              <p className="text-sm font-bold text-indigo-700">{sugg.action}</p>
            </div>
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
              Yes
            </Button>
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="bg-white rounded-[2rem] p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900 flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-indigo-600" />
            Quick Reorder
          </h3>
          <button className="text-sm font-bold text-indigo-600">View All</button>
        </div>
        <div className="space-y-3">
          {orders.slice(0, 2).map((order) => (
            <button
              key={order.id}
              onClick={() => handleReorder(order.id)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
            >
              <div className="text-left">
                <p className="font-bold text-gray-900 text-sm">{order.items.length} items</p>
                <p className="text-xs text-gray-500">{order.date} • ₹{order.total}</p>
              </div>
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <ShoppingBag className="w-5 h-5 text-indigo-600" />
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-[2.5rem] p-6 md:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-black text-gray-900 mb-1">Quick Reorder</h2>
          <p className="text-sm text-gray-500">Reorder from your history in one tap</p>
        </div>
        <div className="flex bg-white rounded-2xl p-1">
          <button
            onClick={() => setActiveTab("recent")}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
              activeTab === "recent" ? "bg-gray-900 text-white" : "text-gray-600"
            }`}
          >
            Recent
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
              activeTab === "favorites" ? "bg-gray-900 text-white" : "text-gray-600"
            }`}
          >
            Favorites
          </button>
        </div>
      </div>

      {/* Smart Suggestions */}
      {activeTab === "recent" && SMART_SUGGESTIONS.length > 0 && (
        <div className="mb-6 space-y-3">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Smart Suggestions</h3>
          {SMART_SUGGESTIONS.map((sugg) => (
            <motion.div
              key={sugg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-indigo-50 rounded-2xl p-4 flex items-start gap-3"
            >
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <sugg.icon className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">{sugg.message}</p>
                <p className="text-sm font-bold text-indigo-700">{sugg.action}</p>
              </div>
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl">
                Yes
              </Button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Orders Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              order={order}
              onReorder={handleReorder}
              onToggleFavorite={handleToggleFavorite}
              onScheduleRecurring={handleScheduleRecurring}
            />
          ))}
        </AnimatePresence>
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No {activeTab} orders yet</p>
          <p className="text-sm text-gray-400 mt-1">Place an order to see it here</p>
        </div>
      )}

      {/* Schedule Modal */}
      <AnimatePresence>
        {showScheduleModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowScheduleModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[2rem] p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-gray-900">Schedule Recurring Order</h3>
                <button
                  onClick={() => setShowScheduleModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-sm text-gray-600 mb-6">
                Automatically place this order at your chosen frequency. 
                Perfect for regular laundry needs.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { label: "Weekly", desc: "Every 7 days", icon: Clock },
                  { label: "Bi-weekly", desc: "Every 14 days", icon: Calendar },
                  { label: "Monthly", desc: "Every 30 days", icon: Calendar },
                ].map((freq) => (
                  <button
                    key={freq.label}
                    className="w-full flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-indigo-50 hover:border-indigo-200 border border-transparent transition-all"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <freq.icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900">{freq.label}</p>
                      <p className="text-sm text-gray-500">{freq.desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 ml-auto text-gray-400" />
                  </button>
                ))}
              </div>

              <Button className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold">
                Set Schedule
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default QuickReorder;
