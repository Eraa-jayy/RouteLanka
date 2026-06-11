import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, TrendingDown, Filter } from 'lucide-react';
import { Card, Button, Badge } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { mockFinance, monthlyRevenueData } from '../utils/mockData';
import { formatCurrency, formatDate } from '../utils/helpers';
import { MonthlyRevenueChart } from '../components/charts/ChartComponents';

export const FinancePage = () => {
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

  const StatCard = ({ icon: Icon, label, value, trend, color }) => (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{label}</p>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">{value}</h3>
          {trend && (
            <p className={`text-sm mt-2 flex items-center gap-1 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trend > 0 ? '+' : ''}{trend}% vs last month
            </p>
          )}
        </div>
        <div className={`p-3 ${color} rounded-lg`}>
          <Icon className="text-white" size={24} />
        </div>
      </div>
    </Card>
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Finance Management</h1>
            <p className="text-gray-600 mt-1">Track earnings, expenses, and profit analytics</p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate="visible"
        >
          <StatCard
            icon={TrendingUp}
            label="Daily Earnings"
            value={formatCurrency(dailyEarnings)}
            trend={23}
            color="bg-green-600"
          />
          <StatCard
            icon={TrendingDown}
            label="Daily Expenses"
            value={formatCurrency(dailyExpenses)}
            trend={-5}
            color="bg-red-600"
          />
          <StatCard
            icon={DollarSign}
            label="Net Profit"
            value={formatCurrency(netProfit)}
            trend={18}
            color="bg-primary-600"
          />
        </motion.div>

        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Monthly Revenue Trend</h2>
                <p className="text-sm text-gray-600 mt-1">Revenue comparison over months</p>
              </div>
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-700">Select Day</label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
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

        {/* Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Daily Transactions</h2>
                <p className="text-sm text-gray-600 mt-1">Income and expenses for {selectedDate}</p>
              </div>
              <div className="flex items-center gap-4">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="all">All Transactions</option>
                  <option value="earnings">Earnings Only</option>
                  <option value="expense">Expenses Only</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {filteredFinance.length > 0 ? filteredFinance.map((transaction, idx) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${transaction.type === 'earnings' ? 'bg-green-100' : 'bg-red-100'}`}>
                        {transaction.type === 'earnings' ? (
                          <TrendingUp className="text-green-600" size={20} />
                        ) : (
                          <TrendingDown className="text-red-600" size={20} />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{transaction.source}</p>
                        <p className="text-xs text-gray-600">{transaction.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className={`text-lg font-bold ${transaction.type === 'earnings' ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.type === 'earnings' ? '+' : '-'}{formatCurrency(transaction.amount)}
                    </p>
                    <p className="text-xs text-gray-600">{formatDate(transaction.date)}</p>
                  </div>
                </motion.div>
              )) : (
                <div className="p-6 text-center text-gray-600">No transactions found for this day.</div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <div className="text-center">
              <p className="text-gray-600 text-sm font-medium">Fuel Expenses</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">{formatCurrency(expenseBreakdown.Fuel)}</h3>
              <p className="text-xs text-gray-600 mt-2">Daily fuel spend</p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <p className="text-gray-600 text-sm font-medium">Maintenance</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">{formatCurrency(expenseBreakdown.Maintenance)}</h3>
              <p className="text-xs text-gray-600 mt-2">Daily maintenance spend</p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <p className="text-gray-600 text-sm font-medium">Salaries</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">{formatCurrency(expenseBreakdown.Salaries)}</h3>
              <p className="text-xs text-gray-600 mt-2">Daily salary spend</p>
            </div>
          </Card>

          <Card>
            <div className="text-center">
              <p className="text-gray-600 text-sm font-medium">Other Expenses</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">{formatCurrency(expenseBreakdown.Other)}</h3>
              <p className="text-xs text-gray-600 mt-2">Other daily costs</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};
