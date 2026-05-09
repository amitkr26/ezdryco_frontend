import { useState } from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";
import { MapPin, ChevronRight, Clock, RefreshCw, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { NotificationBell } from "@/components/NotificationPanel";
import { useListOrders } from "@/lib/api-client-react";
import { getCurrentCustomer } from "@/lib/session";

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  requested: { label: "Order Placed", color: "bg-indigo-50 text-indigo-700" },
  accepted: { label: "Accepted", color: "bg-indigo-100 text-indigo-700" },
  cleaning: { label: "In Process", color: "bg-blue-100 text-blue-700" },
  ready: { label: "Ready", color: "bg-violet-100 text-violet-700" },
  delivered: { label: "Delivered", color: "bg-emerald-100 text-emerald-700" },
  cancelled: { label: "Cancelled", color: "bg-red-100 text-red-700" },
};

export default function CustomerHome() {
  const [, navigate] = useLocation();
  const customer = getCurrentCustomer();
  const customerId = customer?.id;
  const { data: ordersData } = useListOrders(
    { customerId: customerId ?? undefined, limit: 3 },
    { query: { enabled: !!customerId } as any },
  );

  const orders = ordersData?.orders ?? [];
  const lastOrder = orders[0];

  return (
    <div className="min-h-full bg-neutral-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 px-6 pt-6 pb-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-indigo-100 text-xs mb-1 font-medium">
              <MapPin className="w-3.5 h-3.5" /> Delivering to
            </div>
            <p className="text-white font-bold text-sm tracking-tight">Narnaul, Haryana</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-1 rounded-full">
            <NotificationBell />
          </div>
        </div>
        <h2 className="text-white font-black text-2xl mb-1 tracking-tight">
          Hello, {customer?.name?.split(" ")[0] || "there"}!
        </h2>
        <p className="text-indigo-100/80 text-sm font-medium">Ready for your Cloth Spa today?</p>
      </div>

      {/* Book Pickup CTA */}
      <div className="px-6 -mt-6">
        <motion.div whileTap={{ scale: 0.98 }} className="relative z-10">
          <Button
            onClick={() => navigate("/customer/book")}
            className="w-full h-16 bg-white hover:bg-gray-50 text-indigo-600 rounded-3xl font-black text-lg shadow-xl shadow-indigo-200/40 border border-indigo-50 flex items-center justify-center gap-3"
          >
            <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-indigo-600 fill-indigo-600" />
            </div>
            Book Pickup Now
          </Button>
        </motion.div>
      </div>

      {/* Quick Reorder */}
      {lastOrder && (
        <div className="px-6 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900 flex items-center gap-2 text-sm uppercase tracking-wider">
              <Clock className="w-4 h-4 text-indigo-500" /> Recent Activity
            </h3>
            <Link href={`/customer/track/${lastOrder.id}`} className="text-indigo-600 text-xs font-bold flex items-center gap-0.5 hover:underline">
              View All <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="bg-white rounded-[2rem] p-5 shadow-sm border border-indigo-50/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Order #{String(lastOrder.id).slice(-6).toUpperCase()}</span>
              <span className={`text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-wider ${STATUS_LABELS[lastOrder.status]?.color ?? "bg-gray-100 text-gray-600"}`}>
                {STATUS_LABELS[lastOrder.status]?.label ?? lastOrder.status}
              </span>
            </div>
            <div className="text-sm text-gray-600 mb-5 font-medium leading-relaxed">
              {(lastOrder.items as any[]).slice(0, 2).map((item: any, i: number) => (
                <span key={i}>{i > 0 ? " + " : ""}{item.itemName} x{item.quantity}</span>
              ))}
              {(lastOrder.items as any[]).length > 2 && <span className="text-indigo-400"> & { (lastOrder.items as any[]).length - 2} more</span>}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">Total Amount</p>
                <span className="font-black text-xl text-gray-900 tracking-tight">₹{lastOrder.total}</span>
              </div>
              <Button
                size="sm"
                onClick={() => navigate("/customer/book")}
                className="h-10 px-5 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-2xl font-bold border-none"
              >
                <RefreshCw className="w-4 h-4 mr-2" /> Reorder
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="pb-10" />
    </div>
  );
}
