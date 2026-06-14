import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Eye, 
  Search, 
  Bus, 
  Fingerprint, 
  Users, 
  Calendar, 
  ShieldCheck,
  X,
  ArrowRight
} from 'lucide-react';
import { Card, Badge, Modal } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { mockBuses } from '../utils/mockData';
import { formatDate, capitalize } from '../utils/helpers';

export const BusesPage = () => {
  const brandBlue = "#12348c";
  const brandRed = "#9F0712";
  
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
        bus.id === selectedBus.id ? { ...bus, ...formData } : bus
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

  const inputClass = "w-full h-11 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2984D1] focus:bg-white focus:ring-4 focus:ring-[#2984D1]/10 outline-none transition-all pl-10 pr-4 text-slate-800 placeholder:text-slate-400 text-sm";
  const labelClass = "block text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5";

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
                Bus Management
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
              {/* <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-5">Fleet Inventory Control</p> */}
            </div>

            <button
              onClick={handleAddBus}
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-2xl bg-linear-to-r from-sky-500 to-cyan-500 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110 self-end cursor-pointer"
            >
              <Plus size={18} />
              <span>Add New Bus</span>
            </button>
          </div>
        </motion.div>

        {/* SEARCH BAR PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="relative max-w-2xl">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by registration index or model model..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 rounded-2xl bg-white border border-slate-200 shadow-sm px-12 outline-none focus:ring-4 focus:ring-sky-500/5 focus:border-sky-500 transition-all text-sm"
            />
          </div>
        </motion.div>

        {/* BUS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {filteredBuses.map((bus, idx) => (
            <motion.div
              key={bus.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <Card className="overflow-hidden rounded-3xl bg-white border border-slate-200/70 shadow-xs hover:shadow-xl hover:border-slate-300/80 transition-all duration-300">
                <div className="p-6 space-y-5">
                  {/* Top Identifier Bar */}
                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-inner"
                        style={{ backgroundColor: `${brandBlue}0A` }}
                      >
                        <Bus style={{ color: brandBlue }} size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Registration</p>
                        <h3 className="text-lg font-black text-slate-900">{bus.registration}</h3>
                      </div>
                    </div>
                    <Badge variant={bus.status === 'active' ? 'success' : bus.status === 'maintenance' ? 'warning' : 'secondary'} className="rounded-full px-3 py-1 font-bold text-[10px]">
                      {capitalize(bus.status)}
                    </Badge>
                  </div>

                  {/* Operational Parameters Data Stack */}
                  <div className="space-y-3 text-sm font-medium">
                    <div className="flex items-center justify-between text-slate-600 py-0.5">
                      <span className="flex items-center gap-2 text-xs text-slate-400"><ShieldCheck size={14} /> Model Type</span>
                      <span className="text-slate-800 font-bold text-xs">{bus.model}</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600 py-0.5">
                      <span className="flex items-center gap-2 text-xs text-slate-400"><Users size={14} /> Capacity</span>
                      <span className="text-slate-800 font-bold text-xs">{bus.capacity} Seats</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600 py-0.5">
                      <span className="flex items-center gap-2 text-xs text-slate-400"><ShieldCheck size={14} /> Condition</span>
                      <span className="text-slate-800 font-bold text-xs">{bus.condition}</span>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100/80 pt-3 mt-1">
                      <span className="flex items-center gap-2 text-xs text-slate-400"><Calendar size={14} /> Next Service</span>
                      <span className="text-sm font-black tracking-tight" style={{ color: brandBlue }}>
                        {formatDate(bus.nextMaintenance)}
                      </span>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="flex gap-2 pt-2">
                    <button
                      onClick={() => handleEditBus(bus)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 hover:text-white font-bold rounded-xl text-[11px] transition-all duration-200 hover:bg-[#12348c] hover:border-[#12348c] cursor-pointer group"
                    >
                      <Edit2 size={13} className="text-slate-400 group-hover:text-white transition-colors" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteBus(bus.id)}
                      className="inline-flex items-center justify-center w-11 h-11 bg-red-50 text-red-500 border border-red-100 rounded-xl hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PREMIUM GLASS MODAL */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={null} // Custom title inside form
        size="md"
        className="!p-0 !bg-transparent !border-0 shadow-none"
      >
        <div className="relative">
          {/* Form Blobs */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl pointer-events-none">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#9F0712]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#12348c]/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white/75 backdrop-blur-2xl shadow-2xl">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-800 mb-1">
                  {selectedBus ? 'Edit Vehicle' : 'New Bus Entry'}
                </h2>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-600 text-[10px] font-bold uppercase tracking-tight">
                  Fleet Registry System
                </div>
              </div>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={labelClass}>Registration Number</label>
                <div className="relative">
                  <Fingerprint size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="KA-01-AB-1234"
                    value={formData.registration}
                    onChange={(e) => setFormData({ ...formData, registration: e.target.value })}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Bus Model / Make</label>
                <div className="relative">
                  <Bus size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Volvo B9R Prestige"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Seat Capacity</label>
                <div className="relative">
                  <Users size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="number"
                    placeholder="45"
                    value={formData.capacity}
                    onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold transition-all text-sm cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 h-12 group relative rounded-xl overflow-hidden bg-gradient-to-r from-sky-500 to-cyan-500 hover:brightness-110 active:scale-98 transition-all shadow-md shadow-sky-500/20 font-bold text-white flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  {selectedBus ? 'Update Entry' : 'Add Vehicle'}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </DashboardLayout>
  );
};