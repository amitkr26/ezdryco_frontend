import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Phone, MapPinned, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useListOrders, useUpdateOrder, useListRiders, useAssignRider } from "@/lib/api-client-react";
import { getCurrentBusiness } from "@/lib/session";

const STATUS_COLORS: Record<string, string> = {
  requested: "bg-amber-100 text-amber-700 border-amber-200",
  accepted: "bg-indigo-100 text-indigo-700 border-indigo-200",
  picked_up: "bg-blue-100 text-blue-700 border-blue-200",
  cleaning: "bg-violet-100 text-violet-700 border-violet-200",
  out_for_delivery: "bg-indigo-600 text-white border-transparent",
  delivered: "bg-emerald-100 text-emerald-700 border-emerald-200",
  cancelled: "bg-red-100 text-red-700 border-red-200",
};

export default function BusinessOrders() {
  const business = getCurrentBusiness();
  const businessId = business?.id;
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const { data: ordersData, refetch } = useListOrders({ businessId, limit: 50, status: statusFilter === "all" ? undefined : statusFilter }, { query: { enabled: !!businessId } as any });
  const { data: riders } = useListRiders({ businessId }, { query: { enabled: !!businessId } as any });
  const updateOrder = useUpdateOrder();
  const assignRider = useAssignRider();

  const orders = ordersData?.orders ?? [];
  const filteredOrders = orders.filter((order) => {
    if (!search.trim()) return true;
    const q = search.trim().toLowerCase();
    return (
      order.id.toLowerCase().includes(q)
      || order.customer?.name?.toLowerCase().includes(q)
      || order.customer?.phone?.toLowerCase().includes(q)
      || (order.customer as any)?.address?.toLowerCase().includes(q)
    );
  });

  const handleStatusUpdate = async (orderId: string, status: string) => {
    await updateOrder.mutateAsync({ id: orderId, data: { status: status as any } });
    refetch();
  };

  const handleAssignRider = async (orderId: string, riderId: string) => {
    await assignRider.mutateAsync({ id: orderId, data: { riderId } });
    refetch();
  };

  const openMap = (order: any) => {
    const lat = order.customer?.lat ? Number(order.customer.lat) : null;
    const lng = order.customer?.lng ? Number(order.customer.lng) : null;
    const address = [order.customer?.address, order.customer?.city, order.customer?.pincode].filter(Boolean).join(", ");

    const url = lat != null && lng != null
      ? `https://www.google.com/maps?q=${lat},${lng}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address || order.customer?.name || "customer location")}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Order Pipeline</h2>
        <p className="text-gray-400 text-sm font-medium">Manage fulfillment and rider assignments</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search by Order ID, Name, or Phone..." 
            value={search} 
            onChange={e => setSearch(e.target.value)} 
            className="pl-12 h-12 rounded-2xl border-none bg-white shadow-xl shadow-gray-200/40 focus:ring-2 focus:ring-indigo-500 font-medium" 
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-56 h-12 rounded-2xl border-none bg-white shadow-xl shadow-gray-200/40 font-bold text-gray-700">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-indigo-600" />
              <SelectValue placeholder="All Statuses" />
            </div>
          </SelectTrigger>
          <SelectContent className="rounded-2xl border-gray-100">
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="requested">Requested</SelectItem>
            <SelectItem value="accepted">Accepted</SelectItem>
            <SelectItem value="picked_up">Picked Up</SelectItem>
            <SelectItem value="cleaning">Cleaning</SelectItem>
            <SelectItem value="out_for_delivery">Out for Delivery</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders Table */}
      <Card className="border-none bg-white shadow-xl shadow-gray-200/40 rounded-[2.5rem] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50/50 border-b border-neutral-100">
              <tr>
                <th className="px-6 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">ID & Date</th>
                <th className="px-6 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Customer</th>
                <th className="px-6 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Order Volume</th>
                <th className="px-6 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Value</th>
                <th className="px-6 py-5 text-left text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Live Status</th>
                <th className="px-6 py-5 text-right text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Management</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredOrders.map(order => (
                <motion.tr key={order.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="group hover:bg-indigo-50/30 transition-all">
                  <td className="px-6 py-5">
                    <div>
                      <p className="text-sm font-black text-gray-900 tracking-tight">#{String(order.id).slice(-6).toUpperCase()}</p>
                      <p className="text-[10px] font-bold text-gray-400 uppercase mt-1">{order.pickupDate}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-indigo-50 rounded-2xl flex items-center justify-center font-black text-indigo-600 text-sm">
                        {order.customer?.name?.[0] ?? "C"}
                      </div>
                      <div>
                        <p className="text-sm font-black text-gray-900 tracking-tight">{order.customer?.name ?? "Guest"}</p>
                        <p className="text-[10px] font-bold text-gray-400 tracking-tight">{(order.customer as any)?.address ?? "No address"}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-gray-600 leading-relaxed">
                      {(order.items as any[]).slice(0, 2).map((i: any) => `${i.itemName} ×${i.quantity}`).join(", ")}
                      {(order.items as any[]).length > 2 && <span className="text-indigo-400"> +{ (order.items as any[]).length - 2} more</span>}
                    </p>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-base font-black text-gray-900 tracking-tighter">₹{order.total}</p>
                    <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest">{order.paymentMethod}</p>
                  </td>
                  <td className="px-6 py-5">
                    <Select value={order.status} onValueChange={(val) => handleStatusUpdate(order.id, val)}>
                      <SelectTrigger className={`w-40 h-10 text-[10px] font-black uppercase tracking-widest border-none shadow-sm rounded-xl ${STATUS_COLORS[order.status]}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-gray-100">
                        <SelectItem value="requested">Requested</SelectItem>
                        <SelectItem value="accepted">Accepted</SelectItem>
                        <SelectItem value="picked_up">Picked Up</SelectItem>
                        <SelectItem value="cleaning">Cleaning</SelectItem>
                        <SelectItem value="out_for_delivery">Out for Delivery</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {order.status === "requested" && (
                        <Button size="sm" onClick={() => handleStatusUpdate(order.id, "accepted")} className="h-9 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg shadow-emerald-100">Accept</Button>
                      )}
                      {!order.riderId && riders && riders.length > 0 && (
                        <Select onValueChange={(val) => handleAssignRider(order.id, val)}>
                          <SelectTrigger className="h-9 w-32 rounded-xl border-indigo-100 text-indigo-600 font-black text-[10px] uppercase tracking-widest bg-indigo-50 hover:bg-indigo-100 transition-colors">
                            <SelectValue placeholder="Assign Rider" />
                          </SelectTrigger>
                          <SelectContent className="rounded-2xl border-gray-100">
                            {riders.filter(r => r.isAvailable).map(r => (
                              <SelectItem key={r.id} value={r.id} className="font-bold">{r.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                      <div className="flex gap-1">
                        {order.customer?.phone && (
                          <a href={`tel:${order.customer.phone}`} className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                            <Phone className="w-4 h-4" />
                          </a>
                        )}
                        <button onClick={() => openMap(order)} className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-600 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                          <MapPinned className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          {filteredOrders.length === 0 && (
            <div className="text-center py-24">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-200" />
              </div>
              <p className="text-gray-400 font-black uppercase tracking-widest text-xs">No matching orders found</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

function ShoppingBagIcon() {
  return <svg className="w-12 h-12 mx-auto text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>;
}
