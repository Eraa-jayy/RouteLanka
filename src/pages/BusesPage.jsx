import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Eye, Search } from 'lucide-react';
import { Card, Button, Badge, Modal, Input, EmptyState } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { mockBuses } from '../utils/mockData';
import { formatDate, getStatusColor, capitalize } from '../utils/helpers';

export const BusesPage = () => {
  const [buses, setBuses] = useState(mockBuses);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [formData, setFormData] = useState({
    registration: '',
    model: '',
    capacity: '',
  });

  const filteredBuses = buses.filter(bus =>
    bus.registration.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bus.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBus = () => {
    setSelectedBus(null);
    setFormData({ registration: '', model: '', capacity: '' });
    setShowModal(true);
  };

  const handleEditBus = (bus) => {
    setSelectedBus(bus);
    setFormData({
      registration: bus.registration,
      model: bus.model,
      capacity: bus.capacity,
    });
    setShowModal(true);
  };

  const handleDeleteBus = (id) => {
    setBuses(buses.filter(bus => bus.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBus) {
      setBuses(buses.map(bus =>
        bus.id === selectedBus.id
          ? { ...bus, ...formData }
          : bus
      ));
    } else {
      setBuses([...buses, {
        id: Date.now().toString(),
        ...formData,
        status: 'active',
        currentLocation: { lat: 12.9352, lng: 77.6245 },
        lastMaintenance: new Date().toISOString().split('T')[0],
        nextMaintenance: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        totalTrips: 0,
        condition: 'Excellent',
      }]);
    }
    setShowModal(false);
  };

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
              <h1 className="text-3xl font-bold text-gray-900">Bus Management</h1>
              <p className="text-gray-600 mt-1">Manage your fleet of buses</p>
            </div>
            <Button variant="primary" onClick={handleAddBus} className="flex items-center gap-2">
              <Plus size={20} /> Add Bus
            </Button>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <div className="flex flex-col md:flex-row gap-4">
              <Input
                placeholder="Search by registration or model..."
                icon={Search}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="md:flex-1"
              />
              <Button variant="secondary">Filter</Button>
            </div>
          </Card>
        </motion.div>

        {/* Bus Grid */}
        {filteredBuses.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {filteredBuses.map((bus, idx) => (
              <Card key={bus.id} className="hover:shadow-lg transition-shadow">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{bus.registration}</h3>
                      <p className="text-sm text-gray-600">{bus.model}</p>
                    </div>
                    <Badge variant={bus.status === 'active' ? 'success' : bus.status === 'maintenance' ? 'warning' : 'secondary'}>
                      {capitalize(bus.status)}
                    </Badge>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Capacity</span>
                      <span className="font-semibold text-gray-900">{bus.capacity} seats</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Condition</span>
                      <span className="font-semibold text-gray-900">{bus.condition}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Total Trips</span>
                      <span className="font-semibold text-gray-900">{bus.totalTrips}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Next Maintenance</span>
                      <span className="font-semibold text-gray-900">{formatDate(bus.nextMaintenance)}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 flex items-center justify-center gap-1">
                      <Eye size={16} /> View
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-1"
                      onClick={() => handleEditBus(bus)}
                    >
                      <Edit2 size={16} /> Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-1"
                      onClick={() => handleDeleteBus(bus.id)}
                    >
                      <Trash2 size={16} /> Delete
                    </Button>
                  </div>
                </motion.div>
              </Card>
            ))}
          </motion.div>
        ) : (
          <Card>
            <EmptyState
              icon={Plus}
              title="No buses found"
              description="Start by adding your first bus to the fleet"
              action={<Button variant="primary" onClick={handleAddBus}>Add Bus</Button>}
            />
          </Card>
        )}
      </div>

      {/* Add/Edit Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={selectedBus ? 'Edit Bus' : 'Add New Bus'}
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Registration Number"
            type="text"
            placeholder="KA-01-AB-1234"
            value={formData.registration}
            onChange={(e) => setFormData({ ...formData, registration: e.target.value })}
            required
          />

          <Input
            label="Bus Model"
            type="text"
            placeholder="Volvo B9R"
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
            required
          />

          <Input
            label="Capacity (Seats)"
            type="number"
            placeholder="45"
            value={formData.capacity}
            onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
            required
          />

          <div className="flex gap-3 pt-4">
            <Button variant="secondary" className="flex-1" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="flex-1">
              {selectedBus ? 'Update Bus' : 'Add Bus'}
            </Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
};
