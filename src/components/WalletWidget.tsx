/**
 * Wallet Widget Component - Retention System
 * 
 * Features:
 * - Digital wallet balance display
 * - Quick recharge options
 * - Transaction history preview
 * - Reward points display
 * - Referral earnings
 * - Used in customer dashboard
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wallet, 
  Plus, 
  History, 
  Gift, 
  Users, 
  ArrowRight,
  CreditCard,
  Smartphone,
  CheckCircle2,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

// Mock wallet data - would come from API in production
interface WalletData {
  balance: number;
  rewardPoints: number;
  referralEarnings: number;
  pendingCashback: number;
}

const MOCK_WALLET: WalletData = {
  balance: 450,
  rewardPoints: 1250,
  referralEarnings: 150,
  pendingCashback: 50,
};

// Recharge options
const RECHARGE_OPTIONS = [
  { amount: 500, bonus: 25, popular: false },
  { amount: 1000, bonus: 75, popular: true },
  { amount: 2000, bonus: 200, popular: false },
  { amount: 5000, bonus: 600, popular: false },
];

// Recent transactions
const RECENT_TRANSACTIONS = [
  { id: "tx1", type: "credit", description: "Wallet Recharge", amount: 1000, date: "Today" },
  { id: "tx2", type: "debit", description: "Order #EZ-7823", amount: -320, date: "Yesterday" },
  { id: "tx3", type: "credit", description: "Referral Bonus", amount: 50, date: "2 days ago" },
  { id: "tx4", type: "credit", description: "Cashback", amount: 25, date: "3 days ago" },
];

interface WalletWidgetProps {
  compact?: boolean;
  onRecharge?: () => void;
}

export function WalletWidget({ compact = false, onRecharge }: WalletWidgetProps) {
  const [showRecharge, setShowRecharge] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [rechargeSuccess, setRechargeSuccess] = useState(false);

  const handleRecharge = () => {
    trackEvent("wallet_recharge_initiated", { amount: selectedAmount });
    
    // Simulate recharge success
    setRechargeSuccess(true);
    setTimeout(() => {
      setShowRecharge(false);
      setRechargeSuccess(false);
      if (onRecharge) onRecharge();
    }, 2000);
  };

  const handleWhatsAppRecharge = () => {
    const message = `Hi EZDRY! I'd like to recharge my wallet with ₹${selectedAmount}. Please assist me with the payment.`;
    trackEvent("wallet_recharge_whatsapp", { amount: selectedAmount });
    window.open(`https://wa.me/919671869470?text=${encodeURIComponent(message)}`, "_blank");
  };

  if (compact) {
    return (
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-[2rem] p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Wallet className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-indigo-200 font-medium">Wallet Balance</p>
              <p className="text-2xl font-black">₹{MOCK_WALLET.balance}</p>
            </div>
          </div>
          <button
            onClick={() => setShowRecharge(true)}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <Gift className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-indigo-200">{MOCK_WALLET.rewardPoints} points</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-emerald-300" />
            <span className="text-indigo-200">₹{MOCK_WALLET.referralEarnings} earned</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 text-white">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
            <Wallet className="w-8 h-8" />
          </div>
          <div>
            <p className="text-indigo-200 text-sm font-medium mb-1">Available Balance</p>
            <p className="text-4xl font-black">₹{MOCK_WALLET.balance}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-2xl p-4">
            <Gift className="w-5 h-5 text-amber-300 mb-2" />
            <p className="text-lg font-bold">{MOCK_WALLET.rewardPoints}</p>
            <p className="text-xs text-indigo-200">Reward Points</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-4">
            <Users className="w-5 h-5 text-emerald-300 mb-2" />
            <p className="text-lg font-bold">₹{MOCK_WALLET.referralEarnings}</p>
            <p className="text-xs text-indigo-200">Referral Earnings</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-4">
            <Zap className="w-5 h-5 text-yellow-300 mb-2" />
            <p className="text-lg font-bold">₹{MOCK_WALLET.pendingCashback}</p>
            <p className="text-xs text-indigo-200">Pending Cashback</p>
          </div>
        </div>
      </div>

      {/* Recharge Section */}
      <div className="p-8">
        <AnimatePresence mode="wait">
          {rechargeSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-2">Recharge Initiated!</h3>
              <p className="text-gray-500">Complete payment via WhatsApp</p>
            </motion.div>
          ) : showRecharge ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-gray-900">Quick Recharge</h3>
                <button
                  onClick={() => setShowRecharge(false)}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>

              {/* Amount Options */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {RECHARGE_OPTIONS.map((option) => (
                  <button
                    key={option.amount}
                    onClick={() => setSelectedAmount(option.amount)}
                    className={`relative p-4 rounded-2xl border-2 text-left transition-all ${
                      selectedAmount === option.amount
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    {option.popular && (
                      <span className="absolute -top-2 left-4 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                    <p className="text-2xl font-black text-gray-900 mb-1">₹{option.amount}</p>
                    <p className="text-sm text-green-600 font-medium">+₹{option.bonus} bonus</p>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Or enter custom amount
                </label>
                <input
                  type="number"
                  value={selectedAmount}
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl font-bold text-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Enter amount"
                />
              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <Button
                  onClick={handleWhatsAppRecharge}
                  className="w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold"
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Recharge via WhatsApp
                </Button>
                <Button
                  variant="outline"
                  onClick={handleRecharge}
                  className="w-full h-14 border-gray-200 text-gray-700 rounded-2xl font-bold"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pay Online (UPI/Card)
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  onClick={() => setShowRecharge(true)}
                  className="flex items-center justify-center gap-2 p-4 bg-indigo-50 rounded-2xl text-indigo-700 font-bold hover:bg-indigo-100 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Add Money
                </button>
                <button className="flex items-center justify-center gap-2 p-4 bg-gray-50 rounded-2xl text-gray-700 font-bold hover:bg-gray-100 transition-colors">
                  <History className="w-5 h-5" />
                  History
                </button>
              </div>

              {/* Recent Transactions */}
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Recent Transactions</h4>
                <div className="space-y-3">
                  {RECENT_TRANSACTIONS.map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          tx.type === "credit" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                        }`}>
                          {tx.type === "credit" ? "+" : "-"}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{tx.description}</p>
                          <p className="text-xs text-gray-500">{tx.date}</p>
                        </div>
                      </div>
                      <p className={`font-bold ${
                        tx.type === "credit" ? "text-green-600" : "text-red-600"
                      }`}>
                        {tx.type === "credit" ? "+" : ""}₹{Math.abs(tx.amount)}
                      </p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-3 text-sm font-bold text-gray-500 hover:text-gray-700 flex items-center justify-center gap-2">
                  View All Transactions
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default WalletWidget;
