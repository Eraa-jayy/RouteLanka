import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Star, Search } from 'lucide-react';
import { Card, Button, Badge, Modal, Input, EmptyState } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { mockDrivers } from '../utils/mockData';
import { formatCurrency, capitalize } from '../utils/helpers';

export const DriversPage = () => {
  const [drivers, setDrivers] = useState(mockDrivers);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    license: '',
    phone: '',
    email: '',
    salary: '',
  });

  const filteredDrivers = drivers.filter(driver =>
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.license.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddDriver = () => {
    setSelectedDriver(null);
    setFormData({ name: '', license: '', phone: '', email: '', salary: '' });
    setShowModal(true);
  };

  const handleEditDriver = (driver) => {
    setSelectedDriver(driver);
    setFormData({
      name: driver.name,
      license: driver.license,
      phone: driver.phone,
      email: driver.email,
      salary: driver.salary,
    });
    setShowModal(true);
  };

  const handleDeleteDriver = (id) => {
    setDrivers(drivers.filter(driver => driver.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDriver) {
      setDrivers(drivers.map(driver =>
        driver.id === selectedDriver.id
          ? { ...driver, ...formData, salary: parseInt(formData.salary) }
          : driver
      ));
    } else {
      setDrivers([...drivers, {
        id: Date.now().toString(),
        ...formData,
        salary: parseInt(formData.salary),
        status: 'active',
        experience: 5,
        rating: 4.5,
        assignedBus: null,
        trips: 0,
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
              <h1 className="text-3xl font-bold text-gray-900">Driver Management</h1>
              <p className="text-gray-600 mt-1">Manage your drivers and their assignments</p>
            </div>
            <Button variant="primary" onClick={handleAddDriver} className="flex items-center gap-2">
              <Plus size={20} /> Add Driver
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
              placeholder="Search by name or license number..."
              icon={Search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Card>
        </motion.div>

        {/* Drivers Grid */}
        {filteredDrivers.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {filteredDrivers.map((driver, idx) => (
              <Card key={driver.id} className="hover:shadow-lg transition-shadow">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {/* Driver Avatar and Name */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${driver.name}`}
                        alt={driver.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{driver.name}</h3>
                        <p className="text-xs text-gray-600">{driver.license}</p>
                      </div>
                    </div>
                    <Badge variant={driver.status === 'active' ? 'success' : driver.status === 'on_leave' ? 'warning' : 'secondary'}>
                      {capitalize(driver.status)}
                    </Badge>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(driver.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-gray-900">{driver.rating.toFixed(1)}</span>
                  </div>

                  {/* Info */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Phone</span>
                      <span className="font-semibold text-gray-900">{driver.phone}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Email</span>
                      <span className="font-semibold text-gray-900 text-xs">{driver.email.split('@')[0]}...</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Experience</span>
                      <span className="font-semibold text-gray-900">{driver.experience} years</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Monthly Salary</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(driver.salary)}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Total Trips</span>
                      <span className="font-semibold text-gray-900">{driver.trips}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-1"
                      onClick={() => handleEditDriver(driver)}
                    >
                      <Edit2 size={16} /> Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      className="flex-1 flex items-center justify-center gap-1"
                      onClick={() => handleDeleteDriver(driver.id)}
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
              title="No drivers found"
              description="Start by adding your first driver"
              action={<Button variant="primary" onClick={handleAddDriver}>Add Driver</Button>}
            />
          </Card>
        )}
      </div>

      {/* Add/Edit Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={selectedDriver ? 'Edit Driver' : 'Add New Driver'}
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <Input
            label="License Number"
            type="text"
            placeholder="DL-0619-2001-01234567"
            value={formData.license}
            onChange={(e) => setFormData({ ...formData, license: e.target.value })}
            required
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="+91-98765-43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="john@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />

          <Input
            label="Monthly Salary"
            type="number"
            placeholder="25000"
            value={formData.salary}
            onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
            required
          />

          <div className="flex gap-3 pt-4">
            <Button variant="secondary" className="flex-1" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="flex-1">
              {selectedDriver ? 'Update Driver' : 'Add Driver'}
            </Button>
          </div>
        </form>
      </Modal>
    </DashboardLayout>
  );
};
