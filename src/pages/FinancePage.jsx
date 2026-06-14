import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, TrendingDown, Filter, Calendar, Activity } from 'lucide-react';
import { Card } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { mockFinance, monthlyRevenueData } from '../utils/mockData';
import { formatCurrency, formatDate } from '../utils/helpers';
import { MonthlyRevenueChart } from '../components/charts/ChartComponents';

export const FinancePage = () => {
  const brandBlue = "#12348c";
  const brandRed = "#9F0712";

  const dates = Array.from(new Set(mockFinance.map((entry) => entry.date)))
    .sort((a, b) => new Date(b) - new Date(a));
  const [selectedDate, setSelectedDate] = useState(dates[0] || '');
  const [filterType, setFilterType] = useState('all');

  const dailyEarnings = mockFinance
    .filter(f => f.type === 'earnings' && f.date === selectedDate)
    .reduce((sum, f) => sum + f.amount, 0);

  const dailyExpenses = mockFinance
    .filter(f => f.type === 'expense' && f.date === selectedDate)
    .reduce((sum, f) => sum + f.amount, 0);

  const netProfit = dailyEarnings - dailyExpenses;

  const selectedDayTransactions = mockFinance.filter((f) => f.date === selectedDate);
  const filteredFinance = filterType === 'all'
    ? selectedDayTransactions
    : selectedDayTransactions.filter(f => f.type === filterType);

  const expenseBreakdown = selectedDayTransactions
    .filter((f) => f.type === 'expense')
    .reduce((acc, transaction) => {
      const category = transaction.category || transaction.source || 'Other';
      const key = ['Fuel', 'Maintenance', 'Salaries'].includes(category) ? category : 'Other';
      acc[key] = (acc[key] || 0) + transaction.amount;
      return acc;
    }, { Fuel: 0, Maintenance: 0, Salaries: 0, Other: 0 });

  const StatCard = ({ icon: Icon, label, value, trend, iconColor }) => (
    <Card className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/70 p-6 shadow-xs hover:shadow-md transition-all duration-300">
      {/* Soft background blob inside metrics */}
      <div className="absolute -top-10 -right-10 w-32 h-32 opacity-5 rounded-full blur-2xl" style={{ backgroundColor: iconColor }} />
      
      <div className="flex items-start justify-between relative z-10">
        <div className="space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</p>
          <h3 className="text-3xl font-black text-slate-900 tracking-tight">{value}</h3>
          {trend !== undefined && (
            <p className={`text-xs font-bold inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ${trend > 0 ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-rose-50 text-rose-600 border border-rose-100'}`}>
              {trend > 0 ? '▲' : '▼'} {trend > 0 ? '+' : ''}{trend}% vs last month
            </p>
          )}
        </div>
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs border" style={{ backgroundColor: `${iconColor}0D`, borderColor: `${iconColor}1A` }}>
          <Icon style={{ color: iconColor }} size={22} />
        </div>
      </div>
    </Card>
  );

  return (
    <DashboardLayout>
      <div className="space-y-8 bg-slate-50 min-h-screen p-1 text-slate-900 font-sans">
        
        {/* TOP HEADER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-left sm:justify-between border-b border-slate-200/60 pb-6">
            <div>
              <motion.h1
                className="text-3xl font-black tracking-tight relative inline-block text-left"
                style={{ color: "#314158" }}
              >
                Finance Management
                <motion.span
                  className="absolute left-0 -bottom-1 h-[3px] rounded-full"
                  style={{ background: "#314158" }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                />
                <motion.span
                  className="absolute left-0 -bottom-3.5 h-[2px] rounded-full"
                  style={{ background: "#9F0712" }}
                  initial={{ width: 0 }}
                  animate={{ width: "70%" }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                />
              </motion.h1>
              {/* <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-5">Profit Analytics & Ledgers</p> */}
            </div>
          </div>
        </motion.div>

        {/* STATS GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate="visible"
        >
          <StatCard
            icon={TrendingUp}
            label="Daily Earnings"
            value={formatCurrency(dailyEarnings)}
            trend={23}
            iconColor="#10b981"
          />
          <StatCard
            icon={TrendingDown}
            label="Daily Expenses"
            value={formatCurrency(dailyExpenses)}
            trend={-5}
            iconColor={brandRed}
          />
          <StatCard
            icon={DollarSign}
            label="Net Profit margin"
            value={formatCurrency(netProfit)}
            trend={18}
            iconColor={brandBlue}
          />
        </motion.div>

        {/* REVENUE CHART MODULE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-md font-extrabold text-slate-800 uppercase tracking-tight">Monthly Revenue Trend</h2>
                <p className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5">Route Yield Comparison Metrics</p>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1"><Calendar size={12}/> Focus Date</label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2984D1] outline-none transition-all text-xs font-bold text-slate-600 cursor-pointer"
                >
                  {dates.map((date) => (
                    <option key={date} value={date}>{date}</option>
                  ))}
                </select>
              </div>
            </div>
            <MonthlyRevenueChart data={monthlyRevenueData} />
          </Card>
        </motion.div>

        {/* TRANSACTIONS LEDGER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-md font-extrabold text-slate-800 uppercase tracking-tight">Daily Ledger Log</h2>
                <p className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5">Record segments for: {selectedDate}</p>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest flex items-center gap-1"><Filter size={12}/> Filter ledger</label>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2984D1] outline-none transition-all text-xs font-bold text-slate-600 cursor-pointer"
                >
                  <option value="all">All Transactions</option>
                  <option value="earnings">Earnings Only</option>
                  <option value="expense">Expenses Only</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredFinance.length > 0 ? filteredFinance.map((transaction, idx) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="flex items-center justify-between p-4 border border-slate-100 rounded-2xl bg-slate-50/30 hover:bg-slate-50 transition-all duration-200 hover:border-slate-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-inner" style={{ backgroundColor: transaction.type === 'earnings' ? '#10b98110' : '#ef444410' }}>
                      {transaction.type === 'earnings' ? (
                        <TrendingUp className="text-emerald-500" size={18} />
                      ) : (
                        <TrendingDown className="text-rose-500" size={18} />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{transaction.source}</h4>
                      <p className="text-[11px] text-slate-400 font-medium mt-0.5">{transaction.description}</p>
                    </div>
                  </div>

                  <div className="text-right space-y-1">
                    <p className="text-md font-black tracking-tight" style={{ color: transaction.type === 'earnings' ? '#10b981' : brandRed }}>
                      {transaction.type === 'earnings' ? '+' : '-'}{formatCurrency(transaction.amount)}
                    </p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{formatDate(transaction.date)}</p>
                  </div>
                </motion.div>
              )) : (
                <div className="p-12 text-center text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50/50 border border-dashed border-slate-200 rounded-2xl">
                  No ledger transactions found for selected criteria.
                </div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* STATISTICAL LEDGER BREAKDOWNS */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {[
            { label: 'Fuel Expenses', value: expenseBreakdown.Fuel, desc: 'Daily fuel allocation' },
            { label: 'Maintenance spend', value: expenseBreakdown.Maintenance, desc: 'Daily repair cycles' },
            { label: 'Salaries outlay', value: expenseBreakdown.Salaries, desc: 'Operator crew payouts' },
            { label: 'Other Expenses', value: expenseBreakdown.Other, desc: 'Ancillary route fees' }
          ].map((item, idx) => (
            <Card key={idx} className="overflow-hidden rounded-3xl bg-white border border-slate-200/70 p-6 shadow-xs hover:shadow-md transition-all duration-300 relative">
              {/* Decorative brand strip on card boundaries */}
              <div className="absolute top-0 left-0 w-full h-[4px]" style={{ backgroundColor: idx % 2 === 0 ? brandBlue : brandRed }} />
              <div className="text-center space-y-2 pt-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{formatCurrency(item.value)}</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.desc}</p>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </DashboardLayout>
  );
};