/**
 * Garment Verification Component - Operational UX
 * 
 * Features:
 * - Garment count confirmation
 * - Itemized pickup list
 * - Barcode/tagging visualization
 * - Photo documentation
 * - Pickup confidence messaging
 * - Dispute handling
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  AlertCircle,
  Camera,
  QrCode,
  Package,
  Plus,
  Minus,
  Shirt,
  Hash,
  Image,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Shield,
  Search,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent, trackWhatsAppClick } from "@/lib/analytics";

interface GarmentItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  barcode?: string;
  photo?: string;
  condition: "good" | "damaged" | "stained";
  notes?: string;
}

interface GarmentVerificationProps {
  orderId: string;
  items: GarmentItem[];
  pickupTime: string;
  riderName: string;
  locality: string;
  onConfirm: () => void;
  onDispute: (reason: string) => void;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  shirt: Shirt,
  trouser: Package,
  saree: Package,
  default: Package,
};

export function GarmentVerification({
  orderId,
  items: initialItems,
  pickupTime,
  riderName,
  locality,
  onConfirm,
  onDispute,
}: GarmentVerificationProps) {
  const [items, setItems] = useState<GarmentItem[]>(initialItems);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [showDisputeModal, setShowDisputeModal] = useState(false);
  const [disputeReason, setDisputeReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [showPhotoGallery, setShowPhotoGallery] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const photographedItems = items.filter(item => item.photo).length;

  const handleQuantityChange = (itemId: string, delta: number) => {
    setItems(items.map(item => {
      if (item.id === itemId) {
        const newQuantity = Math.max(0, item.quantity + delta);
        trackEvent("garment_quantity_adjusted", { item_id: itemId, new_quantity: newQuantity });
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleConfirm = () => {
    setConfirmed(true);
    trackEvent("garment_count_confirmed", { 
      order_id: orderId, 
      total_items: totalItems,
      item_types: items.length 
    });
    setTimeout(onConfirm, 1500);
  };

  const handleDisputeSubmit = () => {
    if (!disputeReason.trim()) return;
    
    trackEvent("pickup_dispute_raised", { 
      order_id: orderId, 
      reason: disputeReason 
    });
    
    onDispute(disputeReason);
    setShowDisputeModal(false);
  };

  const handleWhatsAppIssue = () => {
    trackWhatsAppClick("contact_page", "pickup_issue");
    const message = `Hi EZDRY! I have an issue with my pickup #${orderId}. The garment count doesn't match what I expected.`;
    window.open(`https://wa.me/919671869470?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Pickup Verification</h3>
              <p className="text-sm text-gray-400">Order #{orderId}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-black">{totalItems}</p>
            <p className="text-xs text-gray-400">items counted</p>
          </div>
        </div>

        {/* Pickup Info */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Package className="w-4 h-4" />
            <span>{riderName}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Hash className="w-4 h-4" />
            <span>{locality}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Camera className="w-4 h-4" />
            <span>{photographedItems} items photographed</span>
          </div>
        </div>
      </div>

      {/* Verification Notice */}
      <div className="p-4 bg-indigo-50 border-b border-indigo-100">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <QrCode className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <p className="font-bold text-indigo-900">Every Garment is Tagged</p>
            <p className="text-sm text-indigo-700 mt-1">
              Each item receives a unique barcode for complete tracking. 
              You'll never lose a garment with our system.
            </p>
          </div>
        </div>
      </div>

      {/* Items List */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">
            Items Being Picked Up
          </p>
          <button
            onClick={() => setShowPhotoGallery(!showPhotoGallery)}
            className="text-sm font-bold text-indigo-600 flex items-center gap-1"
          >
            <Image className="w-4 h-4" />
            {showPhotoGallery ? "Hide Photos" : "View Photos"}
          </button>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => {
            const Icon = CATEGORY_ICONS[item.category] || CATEGORY_ICONS.default;
            const isExpanded = expandedItem === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-50 rounded-2xl overflow-hidden"
              >
                {/* Main Row */}
                <div className="p-4 flex items-center gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-gray-600" />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-gray-900">{item.name}</p>
                      {item.barcode && (
                        <span className="text-[10px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-mono">
                          #{item.barcode}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 capitalize">{item.category}</p>
                    
                    {/* Condition Badge */}
                    <div className="flex items-center gap-2 mt-1">
                      {item.condition === "good" && (
                        <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                          ✓ Good condition
                        </span>
                      )}
                      {item.condition === "stained" && (
                        <span className="text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                          ⚠ Stains noted
                        </span>
                      )}
                      {item.condition === "damaged" && (
                        <span className="text-[10px] text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
                          ✗ Damage noted
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Photo Thumbnail */}
                  {item.photo && showPhotoGallery && (
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={item.photo} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4 text-gray-600" />
                    </button>
                    <span className="w-8 text-center font-bold text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Expand */}
                  <button
                    onClick={() => setExpandedItem(isExpanded ? null : item.id)}
                    className="p-2 hover:bg-white rounded-lg transition-colors"
                  >
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 pb-4"
                    >
                      <div className="p-4 bg-white rounded-xl">
                        {item.notes && (
                          <div className="mb-3">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-1">Rider Notes</p>
                            <p className="text-sm text-gray-600">{item.notes}</p>
                          </div>
                        )}
                        
                        {item.photo && (
                          <div>
                            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Pickup Photo</p>
                            <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden">
                              <img 
                                src={item.photo} 
                                alt={`${item.name} at pickup`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-xs text-gray-400 mt-2 text-center">
                              Photo taken at pickup for verification
                            </p>
                          </div>
                        )}

                        <div className="mt-3 p-3 bg-indigo-50 rounded-lg">
                          <p className="text-xs text-indigo-700">
                            <strong>Tracking ID:</strong> {item.barcode || "Will be assigned at facility"}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Add Missing Item */}
        <button
          onClick={() => {
            trackEvent("add_item_clicked", { order_id: orderId });
          }}
          className="w-full mt-4 py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-500 hover:border-indigo-300 hover:text-indigo-600 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          <span className="font-bold">Add Missing Item</span>
        </button>
      </div>

      {/* Trust Message */}
      <div className="px-4 pb-4">
        <div className="p-4 bg-gray-50 rounded-2xl">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
            <div>
              <p className="font-bold text-gray-900 text-sm">Zero-Loss Guarantee</p>
              <p className="text-xs text-gray-500 mt-1">
                Every item is photographed, tagged, and tracked. In 12 months of operation, 
                we've never lost a single garment from {locality} or any other area.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-4 bg-gray-50 border-t border-gray-100 space-y-3">
        <AnimatePresence>
          {confirmed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="h-14 bg-green-500 text-white rounded-2xl flex items-center justify-center font-bold"
            >
              <CheckCircle2 className="w-5 h-5 mr-2" />
              Confirmed! Redirecting...
            </motion.div>
          ) : (
            <>
              <Button
                onClick={handleConfirm}
                className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-bold text-lg"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Confirm {totalItems} Items
              </Button>
              
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowDisputeModal(true)}
                  className="flex-1 h-12 border-red-200 text-red-600 hover:bg-red-50 rounded-xl font-bold"
                >
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Something Wrong?
                </Button>
                <Button
                  variant="outline"
                  onClick={handleWhatsAppIssue}
                  className="flex-1 h-12 border-gray-200 text-gray-700 hover:bg-gray-100 rounded-xl font-bold"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Rider
                </Button>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Dispute Modal */}
      <AnimatePresence>
        {showDisputeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowDisputeModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[2rem] p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-black text-gray-900">Report Issue</h3>
                <button
                  onClick={() => setShowDisputeModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-xl"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-600 mb-4">
                What's wrong with the pickup? We'll resolve this immediately.
              </p>

              <div className="space-y-2 mb-6">
                {[
                  "Item count doesn't match",
                  "Wrong items picked up",
                  "Damaged items not noted",
                  "Missing special instructions",
                  "Rider behavior issue",
                  "Other concern",
                ].map((reason) => (
                  <button
                    key={reason}
                    onClick={() => setDisputeReason(reason)}
                    className={`w-full p-4 rounded-xl text-left font-medium transition-all ${
                      disputeReason === reason
                        ? "bg-indigo-100 text-indigo-700 border-2 border-indigo-300"
                        : "bg-gray-50 text-gray-700 border-2 border-transparent hover:bg-gray-100"
                    }`}
                  >
                    {reason}
                  </button>
                ))}
              </div>

              {disputeReason === "Other concern" && (
                <textarea
                  value={disputeReason}
                  onChange={(e) => setDisputeReason(e.target.value)}
                  placeholder="Describe the issue..."
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl mb-4 min-h-[100px]"
                />
              )}

              <Button
                onClick={handleDisputeSubmit}
                disabled={!disputeReason}
                className="w-full h-14 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold disabled:opacity-50"
              >
                Submit Issue Report
              </Button>

              <p className="text-center text-xs text-gray-400 mt-4">
                Issues are resolved within 2 hours. You'll receive a WhatsApp update.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default GarmentVerification;
