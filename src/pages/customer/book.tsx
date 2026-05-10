import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Plus, Minus, ShoppingBag, Droplet, Shirt, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useListBusinesses, useListItems } from "@/lib/api-client-react";

const CATEGORIES = [
  { id: "wash", label: "Wash", icon: <Droplet className="w-4 h-4" />, color: "from-sky-500 to-sky-700" },
  { id: "dry_clean", label: "Dry Clean", icon: <Shirt className="w-4 h-4" />, color: "from-sky-500 to-sky-700" },
  { id: "iron", label: "Iron", icon: <Zap className="w-4 h-4" />, color: "from-sky-500 to-sky-700" },
];

const CATEGORY_ICONS: Record<string, string> = {
  wash: "🧺",
  dry_clean: "👔",
  iron: "♨️",
  fold: "🧼",
};

const SELECTED_BUSINESS_STORAGE_KEY = "ezdry_selected_business";

const ITEM_EMOJIS: Record<string, string> = {
  shirt: "👔",
  pant: "👖",
  trouser: "👖",
  saree: "🥻",
  dress: "👗",
  suit: "🤵",
  blazer: "🧥",
  jacket: "🧥",
  coat: "🧥",
  kurta: "👘",
  bedsheet: "🛏️",
  blanket: "🛏️",
  curtain: "🪟",
  towel: "🧻",
  tablecloth: "🧺",
  napkin: "🍽️",
};

export default function BookOrder() {
  const [, navigate] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("wash");
  const [cart, setCart] = useState<Record<string, { qty: number; price: number; name: string; serviceType: string }>>({});
  const { data: businessesData } = useListBusinesses({ limit: 20, status: "active" });
  const activeBusinesses = businessesData?.businesses?.filter((business) => business.status === "active") ?? [];
  const [selectedBusinessId, setSelectedBusinessId] = useState<string>(() => {
    try {
      const saved = sessionStorage.getItem(SELECTED_BUSINESS_STORAGE_KEY);
      return saved ? JSON.parse(saved).id ?? "" : "";
    } catch {
      return "";
    }
  });
  const selectedBusiness = activeBusinesses.find((business) => business.id === selectedBusinessId) ?? activeBusinesses[0];
  const businessId = selectedBusiness?.id;
  const { data: apiItems, isLoading } = useListItems(
    { businessId },
    { query: { enabled: !!businessId } as any },
  );

  useEffect(() => {
    if (!selectedBusinessId && activeBusinesses[0]?.id) {
      setSelectedBusinessId(activeBusinesses[0].id);
    }
  }, [activeBusinesses, selectedBusinessId]);

  useEffect(() => {
    if (!selectedBusiness) return;
    sessionStorage.setItem(
      SELECTED_BUSINESS_STORAGE_KEY,
      JSON.stringify({ id: selectedBusiness.id, name: selectedBusiness.name }),
    );
  }, [selectedBusiness]);

  const getPrice = (item: any) => {
    if (selectedCategory === "wash") return Number(item.priceWash);
    if (selectedCategory === "dry_clean") return Number(item.priceDryClean);
    if (selectedCategory === "iron") return Number(item.priceIron);
    return 0;
  };

  const getItemEmoji = (itemName: string): string => {
    if (!itemName) return "🧺";
    const lowerName = itemName.toLowerCase();
    for (const [key, emoji] of Object.entries(ITEM_EMOJIS)) {
      if (lowerName.includes(key)) return emoji;
    }
    return CATEGORY_ICONS[selectedCategory] || "🧺";
  };

  const filteredItems = (apiItems ?? []).filter(item => {
    if (selectedCategory === "wash") return item.priceWash != null;
    if (selectedCategory === "dry_clean") return item.priceDryClean != null;
    if (selectedCategory === "iron") return item.priceIron != null;
    return true;
  });

  const itemKey = (item: any) => `${item.id}-${selectedCategory}`;

  const addToCart = (item: any) => {
    const key = itemKey(item);
    const price = getPrice(item);
    setCart(prev => ({
      ...prev,
      [key]: { qty: (prev[key]?.qty ?? 0) + 1, price, name: item.name, serviceType: selectedCategory },
    }));
  };

  const removeFromCart = (item: any) => {
    const key = itemKey(item);
    setCart(prev => {
      const current = prev[key]?.qty ?? 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: { ...prev[key], qty: current - 1 } };
    });
  };

  const cartTotal = Object.values(cart).reduce((sum, { qty, price }) => sum + qty * price, 0);
  const cartCount = Object.values(cart).reduce((sum, { qty }) => sum + qty, 0);

  const handleCheckout = () => {
    if (!selectedBusinessId) return;
    const cartItems = Object.entries(cart).map(([key, val]) => ({
      itemId: key.split("-")[0],
      itemName: val.name,
      serviceType: val.serviceType,
      quantity: val.qty,
      unitPrice: val.price,
      totalPrice: val.qty * val.price,
      businessId: selectedBusinessId,
    }));
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
    navigate("/customer/schedule");
  };

  const handleBusinessSelect = (nextBusinessId: string) => {
    setSelectedBusinessId(nextBusinessId);
    setCart({});
  };

  const activeCat = CATEGORIES.find(c => c.id === selectedCategory)!;

  return (
    <div className="min-h-full bg-neutral-50 flex flex-col">
      {/* Header */}
      <div className={`bg-gradient-to-br ${activeCat.color} px-6 pt-6 pb-10 rounded-b-[2.5rem] shadow-xl shadow-sky-100`}>
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate("/customer/home")} className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-center transition-all">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <div>
            <h1 className="font-black text-xl text-white tracking-tight">Select Items</h1>
            <p className="text-white/70 text-xs font-medium uppercase tracking-wider">Professional Cloth Spa</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 pb-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 min-w-[96px] px-4 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap overflow-hidden text-ellipsis shadow-sm ${
                selectedCategory === cat.id
                  ? "bg-white text-gray-900 shadow-xl scale-105"
                  : "bg-white/15 text-white/90 hover:bg-white/25 border border-white/10"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {activeBusinesses.length > 1 && (
          <div className="mt-6 space-y-2">
            <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest px-1">Select Partner</p>
            <div className="flex flex-wrap justify-center gap-2 pb-1">
              {activeBusinesses.map((business) => (
                <button
                  key={business.id}
                  onClick={() => handleBusinessSelect(business.id)}
                  className={`rounded-2xl px-4 py-2 min-w-[110px] max-w-[160px] text-[11px] font-black transition-all uppercase tracking-wider truncate ${
                    businessId === business.id ? "bg-white text-sky-600 shadow-lg" : "bg-white/15 text-white/70 hover:bg-white/20"
                  }`}
                >
                  {business.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Items Grid */}
      <div className="flex-1 px-4 py-6 pb-44">
        {!businessId && !isLoading && (
          <div className="rounded-[2rem] bg-white p-8 text-center shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-900 font-bold mb-1">No Partners Found</p>
            <p className="text-gray-400 text-xs">Laundry partners are currently unavailable in your area.</p>
          </div>
        )}

        {businessId && !isLoading && filteredItems.length === 0 && (
          <div className="rounded-[2rem] bg-white p-8 text-center shadow-sm border border-gray-100">
            <p className="text-gray-900 font-bold mb-1">Service Unavailable</p>
            <p className="text-gray-400 text-xs">{selectedBusiness?.name} hasn't listed items for this category.</p>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="grid gap-4"
          >
            {filteredItems.map((item, i) => {
              const key = itemKey(item);
              const qty = cart[key]?.qty ?? 0;
              const price = getPrice(item);

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className={`flex items-center justify-between bg-white rounded-[2rem] p-5 shadow-sm border-2 transition-all ${
                    qty > 0 ? "border-sky-500 shadow-sky-100 bg-sky-50/20" : "border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm ${qty > 0 ? "bg-white" : "bg-neutral-50"}`}>
                      {getItemEmoji(item.name)}
                    </div>
                    <div>
                      <p className="font-black text-gray-900 text-base tracking-tight">{item.name}</p>
                      <p className="text-sky-600 font-black text-sm">₹{price}<span className="text-gray-400 font-bold text-[10px] uppercase ml-1">/ piece</span></p>
                    </div>
                  </div>

                  {qty === 0 ? (
                    <button
                      onClick={() => addToCart(item)}
                      className="w-11 h-11 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center shadow-lg shadow-sky-100 transition-all active:scale-90"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  ) : (
                    <div className="flex items-center gap-3 bg-white rounded-2xl p-1 shadow-inner border border-sky-100">
                      <button
                        onClick={() => removeFromCart(item)}
                        className="w-9 h-9 rounded-xl text-sky-600 flex items-center justify-center hover:bg-sky-50 transition-all active:scale-90"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-black text-gray-900 w-6 text-center text-lg">{qty}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-md transition-all active:scale-90"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cart Bottom Bar */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="absolute bottom-0 left-0 right-0 px-6 pb-10 pt-4 bg-white/80 backdrop-blur-xl border-t border-sky-50 shadow-[0_-20px_40px_rgba(0,0,0,0.05)] z-20"
          >
            <Button
              onClick={handleCheckout}
              className="w-full h-16 bg-sky-600 hover:bg-sky-700 text-white rounded-3xl font-black shadow-xl shadow-sky-200"
            >
              <div className="flex items-center justify-between w-full px-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <span className="font-black text-base">{cartCount} items selected</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-black text-xl tracking-tighter">₹{cartTotal}</span>
                  <div className="bg-white/20 rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest">Next →</div>
                </div>
              </div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
