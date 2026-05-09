import { motion } from "framer-motion";
import { Store, Users, DollarSign, TrendingUp, ArrowUpRight, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useGetPlatformAnalytics, useListBusinesses, useGetRevenueTrend } from "@/lib/api-client-react";

export default function AdminDashboard() {
  const { data: stats } = useGetPlatformAnalytics();
  const { data: businesses } = useListBusinesses({ limit: 5 });
  const { data: trend } = useGetRevenueTrend({ period: "month" });
  const businessList = businesses?.businesses ?? [];
  const pendingApprovals = businessList.filter((business: any) => business.status === "pending").length;

  const chartData = (trend ?? []).map((p: any) => ({
    date: p.date?.slice(5) || p.date,
    gmv: p.gmv,
    commission: p.commission,
  }));

  const KPIS = [
    { label: "Total Businesses", value: stats?.totalBusinesses ?? 0, icon: Store, color: "text-indigo-600", bg: "bg-indigo-50", trend: `+${stats?.newBusinessesThisMonth ?? 0} this month` },
    { label: "Total Customers", value: stats?.totalUsers ?? 0, icon: Users, color: "text-emerald-600", bg: "bg-emerald-50", trend: `+${stats?.newUsersThisMonth ?? 0} this month` },
    { label: "Platform GMV", value: `₹${(((stats?.totalRevenue as number) ?? 0) / 100000).toFixed(1)}L`, icon: DollarSign, color: "text-amber-600", bg: "bg-amber-50", trend: `${stats?.totalOrders ?? 0} total orders` },
    { label: "Platform Commission", value: `₹${(((stats?.totalCommission as number) ?? 0) / 1000).toFixed(0)}K`, icon: TrendingUp, color: "text-violet-600", bg: "bg-violet-50", trend: `${pendingApprovals} pending approvals` },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h2 className="text-2xl font-black text-gray-900 tracking-tight">Platform Analytics</h2>
        <p className="text-gray-400 text-sm font-medium flex items-center gap-1.5"><Activity className="w-4 h-4 text-emerald-500" /> Platform engine is healthy</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPIS.map((card, i) => (
          <motion.div key={card.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card className="border-none bg-white shadow-xl shadow-gray-200/40 rounded-[2rem] overflow-hidden group hover:scale-[1.02] transition-all">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${card.bg} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-12`}>
                  <card.icon className={`w-6 h-6 ${card.color}`} />
                </div>
                <p className="text-3xl font-black text-gray-900 tracking-tighter mb-1">{card.value}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{card.label}</p>
                <div className="flex items-center gap-1.5 text-[11px] font-black text-emerald-500 uppercase tracking-tight bg-emerald-50 w-fit px-2 py-0.5 rounded-lg">
                  <ArrowUpRight className="w-3 h-3" />{card.trend}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card className="xl:col-span-2 border-none bg-white shadow-xl shadow-gray-200/40 rounded-[2.5rem]">
          <CardHeader className="p-8 pb-0">
            <CardTitle className="text-base font-black text-gray-900 uppercase tracking-widest">Growth Analytics</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            {chartData.length === 0 ? (
              <div className="flex h-[240px] items-center justify-center text-sm font-bold text-gray-300">
                No revenue trend data available yet.
              </div>
            ) : (
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="gmvGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="commGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="date" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} 
                    dy={10} 
                    interval={4} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} 
                    tickFormatter={v => `₹${(v / 1000).toFixed(0)}k`} 
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', padding: '15px' }}
                    itemStyle={{ fontWeight: 800, fontSize: '14px' }}
                  />
                  <Area type="monotone" dataKey="gmv" stroke="#4f46e5" strokeWidth={3} fill="url(#gmvGrad)" />
                  <Area type="monotone" dataKey="commission" stroke="#8b5cf6" strokeWidth={3} fill="url(#commGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Recent Businesses */}
        <Card className="border-none bg-white shadow-xl shadow-gray-200/40 rounded-[2.5rem]">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-base font-black text-gray-900 uppercase tracking-widest">New Partners</CardTitle>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            {businessList.length === 0 ? (
              <p className="py-6 text-center text-sm font-bold text-gray-300 uppercase">No active partners</p>
            ) : (
              <div className="space-y-4">
                {businessList.map((biz: any) => (
                <div key={biz.id} className="flex items-center gap-4 p-4 bg-neutral-50 rounded-3xl group hover:bg-indigo-50 transition-all">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border-2 border-transparent group-hover:border-indigo-100 transition-all shadow-sm">
                    <span className="text-indigo-600 font-black text-lg">{biz.name[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-black text-gray-900 truncate tracking-tight">{biz.name}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{biz.city}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={biz.status === "active" ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none rounded-lg px-2 py-0 font-black text-[9px] uppercase" : "bg-red-100 text-red-700 hover:bg-red-100 border-none rounded-lg px-2 py-0 font-black text-[9px] uppercase"}>
                      {biz.status === "active" ? "Active" : biz.status}
                    </Badge>
                    <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-tighter">{biz.commissionRate ?? 20}% Rate</p>
                  </div>
                </div>
                ))}
              </div>
            )}
            <Button variant="outline" className="w-full mt-6 rounded-2xl border-gray-100 text-gray-400 font-bold hover:bg-gray-50 h-12">
              Manage All Businesses
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
