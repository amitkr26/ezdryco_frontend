import { ReactNode } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Search, Clock, User } from "lucide-react";
import { Link } from "wouter";

interface CustomerLayoutProps {
  children: ReactNode;
}

export function CustomerLayout({ children }: CustomerLayoutProps) {
  const [location] = useLocation();

  const isAuthPage = location.includes("/login") || location.includes("/register");

  return (
    <div className="min-h-[100dvh] bg-neutral-100 flex items-center justify-center sm:p-6">
      <div className="w-full h-[100dvh] sm:h-[850px] sm:max-w-[420px] bg-white sm:rounded-[3.5rem] sm:shadow-2xl shadow-indigo-200/50 overflow-hidden relative flex flex-col sm:border-[12px] border-gray-950">
        
        {/* Mobile Status Bar Simulation */}
        <div className="hidden sm:flex justify-between items-center px-10 py-4 bg-white text-[13px] font-bold text-gray-900 z-50">
          <span>9:41</span>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21L15.6 16.2C14.6 15.45 13.35 15 12 15C10.65 15 9.4 15.45 8.4 16.2L12 21ZM12 3C7.95 3 4.2 4.65 1.2 7.05L12 21L22.8 7.05C19.8 4.65 16.05 3 12 3Z" />
            </svg>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.67 4H14V2H10V4H8.33C7.6 4 7 4.6 7 5.33V20.67C7 21.4 7.6 22 8.33 22H15.67C16.4 22 17 21.4 17 20.67V5.33C17 4.6 16.4 4 15.67 4Z" />
            </svg>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-neutral-50 pb-24 relative scrollbar-hide">
          <AnimatePresence mode="wait">
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="min-h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        {!isAuthPage && (
          <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 flex justify-around items-center px-6 py-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">
            <NavItem href="/customer/home" icon={Home} label="Home" active={location === "/customer/home"} />
            <NavItem href="/customer/book" icon={Search} label="Book" active={location.includes("/customer/book")} />
            <NavItem href="/customer/orders" icon={Clock} label="Orders" active={location.includes("/customer/orders") || location.includes("/customer/track")} />
            <NavItem href="/customer/profile" icon={User} label="Profile" active={location === "/customer/profile"} />
          </div>
        )}
        
        {/* Home Indicator Simulation */}
        <div className="hidden sm:block absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}

function NavItem({ href, icon: Icon, label, active }: { href: string; icon: any; label: string; active: boolean }) {
  return (
    <Link href={href} className={`flex flex-col items-center gap-1.5 focus:outline-none transition-all ${active ? "text-indigo-600" : "text-gray-400 hover:text-gray-600"}`}>
      <Icon className={`w-6 h-6 ${active ? "fill-indigo-50" : ""}`} />
      <span className="text-[11px] font-bold tracking-tight">{label}</span>
    </Link>
  );
}
