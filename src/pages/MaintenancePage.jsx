import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Card, Button, Badge, Modal, Input } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { mockMaintenance, mockBuses } from '../utils/mockData';
import { formatDate, formatCurrency, capitalize } from '../utils/helpers';

export const MaintenancePage = () => {
  const [maintenance, setMaintenance] = useState(mockMaintenance);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    busId: '',
    type: 'regular',
    description: '',
    cost: '',
  });

  const handleAddMaintenance = () => {
    setFormData({ busId: '', type: 'regular', description: '', cost: '' });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMaintenance([...maintenance, {
      id: Date.now().toString(),
      ...formData,
      cost: parseInt(formData.cost),
      status: 'scheduled',
      date: new Date().toISOString().split('T')[0],
    }]);
    setShowModal(false);
  };

  const upcomingMaintenance = maintenance.filter(m => m.status === 'scheduled');
  const inProgressMaintenance = maintenance.filter(m => m.status === 'in_progress');
  const completedMaintenance = maintenance.filter(m => m.status === 'completed');

  const MaintenanceCard = ({ title, items, icon: Icon, variant }) => (
    <Card>
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`${variant === 'warning' ? 'text-secondary-600' : variant === 'info' ? 'text-primary-600' : 'text-green-600'}`} size={24} />
        <div>
          <h3 className="font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{items.length} items</p>
        </div>
      </div>

      <div className="space-y-3">
        {items.length > 0 ? (
          items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-semibold text-gray-900">
                    {mockBuses.find(b => b.id === item.busId)?.registration || 'Unknown Bus'}
                  </p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <Badge variant={item.type === 'repair' ? 'danger' : 'info'}>
                  {capitalize(item.type)}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-600">{formatDate(item.date)}</span>
                <span className="font-semibold text-gray-900">{formatCurrency(item.cost)}</span>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-600 py-4">No items</p>
        )}
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Maintenance Management</h1>
              <p className="text-gray-600 mt-1">Schedule and track bus maintenance</p>
            </div>
            <Button variant="primary" onClick={handleAddMaintenance} className="flex items-center gap-2">
              <Plus size={20} /> Schedule Maintenance
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate="visible"
        >
          <MaintenanceCard
            title="Scheduled"
            items={upcomingMaintenance}
            icon={Clock}
            variant="warning"
          />
          <MaintenanceCard
            title="In Progress"
            items={inProgressMaintenance}
            icon={AlertCircle}
            variant="info"
          />
          <MaintenanceCard
            title="Completed"
            items={completedMaintenance}
            icon={CheckCircle}
            variant="success"
          />
        </motion.div>

        {/* All Maintenance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-6">All Maintenance Records</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Bus</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Type</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Description</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Date</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Cost</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {maintenance.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {mockBuses.find(b => b.id === item.busId)?.registration}
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={item.type === 'repair' ? 'danger' : 'info'}>
                          {capitalize(item.type)}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{item.description}</td>
                      <td className="px-6 py-4">{formatDate(item.date)}</td>
                      <td className="px-6 py-4 font-semibold">{formatCurrency(item.cost)}</td>
                      <td className="px-6 py-4">
                        <Badge
                          variant={
                            item.status === 'scheduled'
                              ? 'warning'
                              : item.status === 'in_progress'
                              ? 'info'
                              : 'success'
                          }
                        >
                          {capitalize(item.status)}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="border-2 border-red-200 bg-red-50">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-red-600 shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900">Urgent Maintenance Required</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Bus KA-01-AB-1234 requires immediate attention. Brake inspection overdue.
                </p>
                <Button variant="outline" size="sm" className="mt-3">
                  Schedule Now
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Schedule Maintenance"
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Bus
            </label>
            <select
              value={formData.busId}
              onChange={(e) => setFormData({ ...formData, busId: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            >
              <option value="">Choose a bus...</option>
              {mockBuses.map(bus => (
                <option key={bus.id} value={bus.id}>{bus.registration}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="regular">Regular Maintenance</option>
              <option value="repair">Repair</option>
            </select>
          </div>

          <Input
            label="Description"
            type="text"
            placeholder="Maintenance description..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />

          <Input
            label="Estimated Cost"
            type="number"
            placeholder="2000"
            value={formData.cost}
            onChange={(e) => setFormData({ ...formData, cost: e.target.value })}
            required
          />

          <div className="flex gap-3 pt-4">
            <Button variant="secondary" className="flex-1" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="flex-1">
              Schedule
            </Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
};
