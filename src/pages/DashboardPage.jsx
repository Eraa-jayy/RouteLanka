import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2 } from 'lucide-react';
import { Card, Button, Input } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { formatCurrency } from '../utils/helpers';

const initialBuses = [
  {
    id: '1',
    busNo: 'BUS-101',
    route: 'Colombo - Kandy',
    regNo: 'KA-01-AB-1234',
    driverName: 'Raj Kumar',
    conductorName: 'Nimal Perera',
    dieselInput: '120 L',
    totalIncome: 56000,
  },
  {
    id: '2',
    busNo: 'BUS-102',
    route: 'Colombo - Jaffna',
    regNo: 'KA-01-CD-5678',
    driverName: 'Suresh Patel',
    conductorName: 'Sunil Fernando',
    dieselInput: '140 L',
    totalIncome: 72000,
  },
  {
    id: '3',
    busNo: 'BUS-103',
    route: 'Colombo - Galle',
    regNo: 'KA-01-EF-9101',
    driverName: 'Mohan Singh',
    conductorName: 'Kamal Silva',
    dieselInput: '100 L',
    totalIncome: 43000,
  },
];

export const DashboardPage = () => {
  const [buses, setBuses] = useState(initialBuses);
  const [showForm, setShowForm] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [formData, setFormData] = useState({
    busNo: '',
    route: '',
    regNo: '',
    driverName: '',
    conductorName: '',
    dieselInput: '',
    totalIncome: '',
  });

  const handleAddBus = () => {
    setSelectedBus(null);
    setFormData({
      busNo: '',
      route: '',
      regNo: '',
      driverName: '',
      conductorName: '',
      dieselInput: '',
      totalIncome: '',
    });
    setShowForm(true);
  };

  const handleEditBus = (bus) => {
    setSelectedBus(bus);
    setFormData({
      busNo: bus.busNo,
      route: bus.route,
      regNo: bus.regNo,
      driverName: bus.driverName,
      conductorName: bus.conductorName,
      dieselInput: bus.dieselInput,
      totalIncome: String(bus.totalIncome),
    });
    setShowForm(true);
  };

  const handleCancel = () => {
    setSelectedBus(null);
    setShowForm(false);
    setFormData({
      busNo: '',
      route: '',
      regNo: '',
      driverName: '',
      conductorName: '',
      dieselInput: '',
      totalIncome: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBus = {
      id: selectedBus ? selectedBus.id : Date.now().toString(),
      ...formData,
      totalIncome: Number(formData.totalIncome) || 0,
    };

    setBuses((prev) => {
      if (selectedBus) {
        return prev.map((bus) => (bus.id === selectedBus.id ? updatedBus : bus));
      }
      return [...prev, updatedBus];
    });

    handleCancel();
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your buses in one place.</p>
            </div>
            <Button variant="primary" onClick={handleAddBus} className="flex items-center gap-2">
              <Plus size={20} /> Add Bus
            </Button>
          </div>
        </motion.div>

        {showForm && (
          <Card>
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedBus ? 'Edit Bus Details' : 'Add New Bus'}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {selectedBus
                    ? 'Update the bus details and save to apply changes.'
                    : 'Fill in the details below and save to add the bus to your fleet.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Input
                  label="Bus No"
                  name="busNo"
                  type="text"
                  value={formData.busNo}
                  onChange={handleChange}
                  placeholder="BUS-101"
                  required
                />
                <Input
                  label="Route"
                  name="route"
                  type="text"
                  value={formData.route}
                  onChange={handleChange}
                  placeholder="Colombo - Kandy"
                  required
                />
                <Input
                  label="Reg No"
                  name="regNo"
                  type="text"
                  value={formData.regNo}
                  onChange={handleChange}
                  placeholder="KA-01-AB-1234"
                  required
                />
                <Input
                  label="Driver Name"
                  name="driverName"
                  type="text"
                  value={formData.driverName}
                  onChange={handleChange}
                  placeholder="Raj Kumar"
                  required
                />
                <Input
                  label="Conductor Name"
                  name="conductorName"
                  type="text"
                  value={formData.conductorName}
                  onChange={handleChange}
                  placeholder="Nimal Perera"
                  required
                />
                <Input
                  label="Diesel Input"
                  name="dieselInput"
                  type="text"
                  value={formData.dieselInput}
                  onChange={handleChange}
                  placeholder="120 L"
                  required
                />
                <Input
                  label="Total Income"
                  name="totalIncome"
                  type="number"
                  value={formData.totalIncome}
                  onChange={handleChange}
                  placeholder="56000"
                  required
                />

                <div className="lg:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
                  <Button variant="secondary" onClick={handleCancel} type="button" className="w-full">
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit" className="w-full">
                    {selectedBus ? 'Update Bus' : 'Save Bus'}
                  </Button>
                </div>
              </form>
            </div>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {buses.map((bus) => (
            <Card key={bus.id} className="shadow-sm hover:shadow-lg transition-shadow duration-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Bus No</p>
                    <h3 className="text-xl font-semibold text-gray-900">{bus.busNo}</h3>
                  </div>
                  <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">{bus.route}</span>
                </div>

                <div className="grid grid-cols-1 gap-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Reg No</span>
                    <span className="font-medium text-gray-900">{bus.regNo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Driver Name</span>
                    <span className="font-medium text-gray-900">{bus.driverName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Conductor Name</span>
                    <span className="font-medium text-gray-900">{bus.conductorName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Diesel Input</span>
                    <span className="font-medium text-gray-900">{bus.dieselInput}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Income</span>
                    <span className="font-semibold text-gray-900">{formatCurrency(bus.totalIncome)}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="secondary"
                    onClick={() => handleEditBus(bus)}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Edit2 size={16} /> Edit Bus
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
