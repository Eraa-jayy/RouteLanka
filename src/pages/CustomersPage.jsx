import React from 'react';
import { motion } from 'framer-motion';
import { Users, Plus, Search } from 'lucide-react';
import { Card, Button, Input, EmptyState } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';

export const CustomersPage = () => {
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
              <h1 className="text-3xl font-bold text-gray-900">Customer Management</h1>
              <p className="text-gray-600 mt-1">Manage and track your customers</p>
            </div>
            <Button variant="primary" className="flex items-center gap-2">
              <Plus size={20} /> Add Customer
            </Button>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <Input
              placeholder="Search customers..."
              icon={Search}
            />
          </Card>
        </motion.div>

        {/* Empty State */}
        <Card>
          <EmptyState
            icon={Users}
            title="Customer management coming soon"
            description="This feature will be available shortly"
            action={<Button variant="secondary">Request Feature</Button>}
          />
        </Card>
      </div>
    </DashboardLayout>
  );
};
