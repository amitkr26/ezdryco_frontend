import React, { useState } from "react";
import { Search, Info, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

const PRICE_LIST = [
  { item: "Shirt (Wash & Fold)", price: "₹25" },
  { item: "T-shirt (Wash & Fold)", price: "₹25" },
  { item: "Trousers (Wash & Fold)", price: "₹35" },
  { item: "Jeans (Wash & Fold)", price: "₹35" },
  { item: "Suit (2-piece Dry Clean)", price: "₹280" },
  { item: "Blazer (Dry Clean)", price: "₹180" },
  { item: "Silk Saree (Dry Clean)", price: "₹200" },
  { item: "Sherwani (Dry Clean)", price: "₹350" },
  { item: "Woolen Coat (Dry Clean)", price: "₹200" },
  { item: "Bedsheet (Single)", price: "₹70" },
  { item: "Bedsheet (Double)", price: "₹120" },
  { item: "Steam Ironing (Shirt)", price: "₹12" },
  { item: "Steam Ironing (Trousers)", price: "₹15" },
  { item: "Steam Ironing (Saree)", price: "₹35" },
];

export function PriceChecker() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<{ item: string; price: string }[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim().length > 1) {
      const filtered = PRICE_LIST.filter(p => 
        p.item.toLowerCase().includes(val.toLowerCase())
      );
      setResults(filtered.slice(0, 5));
    } else {
      setResults([]);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto relative group">
      <div className="relative">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-indigo-600 transition-colors" />
        <Input
          type="text"
          placeholder="Check price (e.g. Silk Saree, Suit, Shirt...)"
          value={query}
          onChange={handleSearch}
          className="h-16 pl-16 pr-10 bg-white/80 backdrop-blur-sm border-gray-200 rounded-3xl text-lg font-medium focus:ring-4 focus:ring-indigo-100 transition-all shadow-xl shadow-indigo-900/5"
        />
        {query && (
          <button 
            onClick={() => { setQuery(""); setResults([]); }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-100 rounded-3xl shadow-2xl overflow-hidden z-50"
          >
            <div className="p-2">
              {results.map((res, i) => (
                <div 
                  key={i} 
                  className="flex justify-between items-center p-4 hover:bg-indigo-50 rounded-2xl transition-colors cursor-default"
                >
                  <span className="text-gray-900 font-black tracking-tight text-sm">{res.item}</span>
                  <span className="text-indigo-600 font-black">{res.price}</span>
                </div>
              ))}
            </div>
            <div className="bg-neutral-50 p-3 text-center border-t border-gray-50">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center justify-center gap-2">
                 <Info className="w-3 h-3" /> Exact price calculated during pickup
               </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
