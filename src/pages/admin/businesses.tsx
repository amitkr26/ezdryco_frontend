import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Store, Check, X, Clock, CheckCircle, XCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useListBusinesses, useUpdateBusiness } from "@/lib/api-client-react";

type BizStatus = "pending" | "active" | "inactive";

interface Business {
  id: string;
  name: string;
  ownerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  status: BizStatus;
  joinedAt: string;
}

export default function AdminBusinesses() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState<"all" | "pending" | "active" | "inactive">("all");
  const { data, refetch } = useListBusinesses();
  const updateBusiness = useUpdateBusiness();
  const businesses = (data?.businesses ?? []) as Business[];

  const updateStatus = async (id: string, status: "active" | "inactive") => {
    await updateBusiness.mutateAsync({ id, data: { status } }).catch(() => {});
    refetch();
  };

  const filtered = businesses.filter(b => {
    const matchSearch = b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.ownerName.toLowerCase().includes(search.toLowerCase()) ||
      b.phone.includes(search);
    const matchTab = tab === "all" || b.status === tab;
    return matchSearch && matchTab;
  });

  const counts = {
    all: businesses.length,
    pending: businesses.filter(b => b.status === "pending").length,
    active: businesses.filter(b => b.status === "active").length,
    inactive: businesses.filter(b => b.status === "inactive").length,
  };

  const statusBadge = (status: BizStatus) => {
    if (status === "active") return <Badge className="bg-emerald-100 text-emerald-700 border-none font-black text-[10px] uppercase rounded-lg px-2 py-0.5"><CheckCircle className="w-3 h-3 mr-1" />Active</Badge>;
    if (status === "pending") return <Badge className="bg-amber-100 text-amber-700 border-none font-black text-[10px] uppercase rounded-lg px-2 py-0.5"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
    return <Badge className="bg-red-100 text-red-700 border-none font-black text-[10px] uppercase rounded-lg px-2 py-0.5"><XCircle className="w-3 h-3 mr-1" />Inactive</Badge>;
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Business Partners</h2>
        <p className="text-gray-400 text-sm font-medium">Lifecycle management for shop registrations</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 p-1.5 bg-gray-100 rounded-3xl w-fit">
        {(["all", "pending", "active", "inactive"] as const).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
              tab === t
                ? "bg-white text-indigo-600 shadow-sm shadow-gray-200/50"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {t}
            <span className={`px-2 py-0.5 rounded-lg text-[9px] ${tab === t ? "bg-indigo-50 text-indigo-600" : "bg-gray-200 text-gray-500"}`}>
              {counts[t]}
            </span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input 
          value={search} 
          onChange={e => setSearch(e.target.value)} 
          placeholder="Lookup by shop name, owner or phone..." 
          className="pl-12 h-14 rounded-[1.5rem] border-none bg-white shadow-xl shadow-gray-200/40 focus:ring-2 focus:ring-indigo-500 font-medium" 
        />
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <Card className="border-none bg-white rounded-[2.5rem] p-24 text-center shadow-xl shadow-gray-200/40">
          <div className="w-20 h-20 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-gray-200" />
          </div>
          <p className="text-gray-900 font-black uppercase tracking-widest text-sm mb-1">No {tab === "all" ? "businesses" : tab + " partners"} found</p>
          <p className="text-gray-400 text-xs font-medium">When registrations occur, they will appear here</p>
        </Card>
      )}

      {/* Cards */}
      <div className="grid gap-6">
        {filtered.map((biz, i) => (
          <motion.div
            key={biz.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card className="border-none bg-white rounded-[2.5rem] p-8 shadow-xl shadow-gray-200/40 group hover:shadow-2xl transition-all">
              <div className="flex items-start justify-between flex-wrap gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-neutral-50 rounded-[1.5rem] flex items-center justify-center border-2 border-transparent group-hover:border-indigo-100 transition-all">
                      <span className="text-indigo-600 font-black text-2xl uppercase">{biz.name[0]}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-black text-gray-900 text-lg tracking-tight leading-none">{biz.name}</h3>
                      {statusBadge(biz.status)}
                    </div>
                    <p className="text-sm font-bold text-gray-500">{biz.ownerName} • <span className="text-indigo-500">{biz.city}</span></p>
                    <div className="flex gap-4 pt-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone</span>
                        <span className="text-xs font-black text-gray-700 tracking-tight">+91 {biz.phone}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email</span>
                        <span className="text-xs font-black text-gray-700 tracking-tight">{biz.email}</span>
                      </div>
                    </div>
                    <div className="pt-2">
                       <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-0.5">Physical Hub</span>
                       <p className="text-xs font-bold text-gray-600">{biz.address}</p>
                    </div>
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest pt-2">Registration ID: {biz.id.toUpperCase()}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {biz.status === "pending" && (
                    <div className="flex gap-3">
                      <Button
                        onClick={() => updateStatus(biz.id, "active")}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl h-12 px-6 text-sm font-black uppercase tracking-widest shadow-lg shadow-indigo-100"
                      >
                        <Check className="w-4 h-4 mr-2" /> Approve
                      </Button>
                      <Button
                        onClick={() => updateStatus(biz.id, "inactive")}
                        variant="outline"
                        className="border-red-100 text-red-500 hover:bg-red-50 rounded-2xl h-12 px-6 text-sm font-black uppercase tracking-widest"
                      >
                        <X className="w-4 h-4 mr-2" /> Reject
                      </Button>
                    </div>
                  )}

                  {biz.status === "active" && (
                    <Button
                      onClick={() => updateStatus(biz.id, "inactive")}
                      variant="outline"
                      className="border-red-100 text-red-500 hover:bg-red-50 rounded-2xl h-12 px-6 text-sm font-black uppercase tracking-widest"
                    >
                      <X className="w-4 h-4 mr-2" /> Revoke Access
                    </Button>
                  )}

                  {biz.status === "inactive" && (
                    <Button
                      onClick={() => updateStatus(biz.id, "active")}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl h-12 px-6 text-sm font-black uppercase tracking-widest shadow-lg shadow-indigo-100"
                    >
                      <Check className="w-4 h-4 mr-2" /> Re-Approve
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
