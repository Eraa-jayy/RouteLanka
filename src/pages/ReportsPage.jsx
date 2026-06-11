import React from 'react';
import { motion } from 'framer-motion';
import { Download, BarChart3, TrendingUp } from 'lucide-react';
import { Card, Button } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { monthlyRevenueData, driverPerformanceData, reportSummary } from '../utils/mockData';
import { DriverPerformanceChart, MonthlyRevenueChart } from '../components/charts/ChartComponents';
import { formatCurrency, formatNumber } from '../utils/helpers';

export const ReportsPage = () => {
  const handleExport = (format) => {
    alert(`Exporting report as ${format}...`);
  };

  const SummaryCard = ({ label, value, unit }) => (
    <Card>
      <p className="text-gray-600 text-sm font-medium">{label}</p>
      <h3 className="text-3xl font-bold text-gray-900 mt-2">
        {label.includes('Satisfaction') || label.includes('Occupancy') ? value.toFixed(1) : formatNumber(value)}
        <span className="text-lg text-gray-500 ml-1">{unit}</span>
      </h3>
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
              <p className="text-gray-600 mt-1">Business insights and performance metrics</p>
            </div>
          </div>
        </motion.div>

        {/* Export Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Download size={20} /> Export Reports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="flex items-center justify-center gap-2">
                <Download size={16} /> PDF
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2">
                <Download size={16} /> Excel
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2">
                <Download size={16} /> CSV
              </Button>
              <Button variant="outline" className="flex items-center justify-center gap-2">
                <Download size={16} /> Email
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate="visible"
        >
          <SummaryCard label="Total Trips" value={reportSummary.totalTrips} unit="" />
          <SummaryCard label="Total Revenue" value={reportSummary.totalRevenue} unit="LKR" />
          <SummaryCard label="Total Expenses" value={reportSummary.totalExpenses} unit="LKR" />
          <SummaryCard label="Net Profit" value={reportSummary.netProfit} unit="LKR" />
          <SummaryCard label="Average Occupancy" value={reportSummary.averageOccupancy} unit="%" />
          <SummaryCard label="Customer Satisfaction" value={reportSummary.customerSatisfaction} unit="★" />
        </motion.div>

        {/* Charts */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <TrendingUp size={20} /> Monthly Revenue
              </h2>
              <p className="text-sm text-gray-600 mt-1">Revenue trends</p>
            </div>
            <MonthlyRevenueChart data={monthlyRevenueData} />
          </Card>

          <Card>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <BarChart3 size={20} /> Driver Performance
              </h2>
              <p className="text-sm text-gray-600 mt-1">Top drivers by trips</p>
            </div>
            <DriverPerformanceChart data={driverPerformanceData} />
          </Card>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Key Insights</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl">📈</div>
                <div>
                  <p className="font-semibold text-gray-900">Revenue Growth</p>
                  <p className="text-sm text-gray-600 mt-1">Revenue increased by 23% compared to last month, driven by 15 additional trips.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="text-2xl">👥</div>
                <div>
                  <p className="font-semibold text-gray-900">Driver Performance</p>
                  <p className="text-sm text-gray-600 mt-1">Suresh Patel leads with 520 trips and 4.9★ rating. Consider performance bonus.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="text-2xl">🚌</div>
                <div>
                  <p className="font-semibold text-gray-900">Fleet Utilization</p>
                  <p className="text-sm text-gray-600 mt-1">2 out of 4 buses are active (50% utilization). Consider strategies to increase usage.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-2xl">💰</div>
                <div>
                  <p className="font-semibold text-gray-900">Profit Margin</p>
                  <p className="text-sm text-gray-600 mt-1">Maintained 71% profit margin. Operating expenses are well-controlled.</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Detailed Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Metrics</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">Average Trip Duration</span>
                <span className="text-gray-900 font-bold">2.5 hours</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="text-gray-700 font-medium">Average Fare per Trip</span>
                <span className="text-gray-900 font-bold">{formatCurrency(6350)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '73%' }}></div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="text-gray-700 font-medium">Cost per Trip</span>
                <span className="text-gray-900 font-bold">{formatCurrency(1840)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-secondary-600 h-2 rounded-full" style={{ width: '29%' }}></div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="text-gray-700 font-medium">Customer Retention Rate</span>
                <span className="text-gray-900 font-bold">87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};
