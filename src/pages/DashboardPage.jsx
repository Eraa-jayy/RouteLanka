import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit2,
  Bus,
  Route,
  User,
  Fuel,
  DollarSign,
  Fingerprint,
  ArrowRight,
  UserCheck,
  X
} from "lucide-react";
import { Card } from "../components/common";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import { formatCurrency } from "../utils/helpers";

const initialBuses = [
  {
    id: "1",
    busNo: "BUS-101",
    route: "Colombo - Kandy",
    regNo: "KA-01-AB-1234",
    driverName: "Raj Kumar",
    conductorName: "Nimal Perera",
    dieselInput: "120 L",
    totalIncome: 56000,
  },
  {
    id: "2",
    busNo: "BUS-102",
    route: "Colombo - Jaffna",
    regNo: "KA-01-CD-5678",
    driverName: "Suresh Patel",
    conductorName: "Sunil Fernando",
    dieselInput: "140 L",
    totalIncome: 72000,
  },
  {
    id: "3",
    busNo: "BUS-103",
    route: "Colombo - Galle",
    regNo: "KA-01-EF-9101",
    driverName: "Mohan Singh",
    conductorName: "Kamal Silva",
    dieselInput: "100 L",
    totalIncome: 43000,
  },
];

export const DashboardPage = () => {
  const brandBlue = "#12348c";
  const brandRed = "#9F0712";

  const [buses, setBuses] = useState(initialBuses);
  const [showForm, setShowForm] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [formData, setFormData] = useState({
    busNo: "",
    route: "",
    regNo: "",
    driverName: "",
    conductorName: "",
    dieselInput: "",
    totalIncome: "",
  });

  const handleAddBus = () => {
    setSelectedBus(null);
    setFormData({
      busNo: "",
      route: "",
      regNo: "",
      driverName: "",
      conductorName: "",
      dieselInput: "",
      totalIncome: "",
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
        return prev.map((bus) =>
          bus.id === selectedBus.id ? updatedBus : bus,
        );
      }
      return [...prev, updatedBus];
    });

    handleCancel();
  };

  // Helper for Input Styling to match Login Page
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
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Dashboard
                <motion.span
                  className="absolute left-0 -bottom-1 h-[3px] rounded-full"
                  style={{ background: "#314158" }}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                />
                <motion.span
                  className="absolute left-0 -bottom-3.5 h-[2px] rounded-full"
                  style={{ background: "#9F0712" }}
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "70%", opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                />
              </motion.h1>
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

        {/* UPDATED: PREMIUM GLASS FORM PANEL (MATCHES LOGIN STYLE) */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Background Blobs for the form (matching login page) */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#9F0712]/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#12348c]/10 rounded-full blur-3xl" />
            </div>

            <Card className="relative z-10 p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white/75 backdrop-blur-2xl shadow-2xl flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div className="text-left">
                  <h2 className="text-2xl font-extrabold text-slate-800 mb-1">
                    {selectedBus ? "Modify Record" : "Add Vehicle"}
                  </h2>
                  {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-600 text-[10px] font-bold uppercase tracking-tight">
                    Fleet Management Terminal
                  </div> */}
                </div>
                <button 
                  onClick={handleCancel}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                  
                  {/* Bus Reference */}
                  <div>
                    <label className={labelClass}>Bus Reference No</label>
                    <div className="relative">
                      <Bus size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        name="busNo"
                        type="text"
                        value={formData.busNo}
                        onChange={handleChange}
                        placeholder="e.g., BUS-101"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Route */}
                  <div>
                    <label className={labelClass}>Route Path</label>
                    <div className="relative">
                      <Route size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        name="route"
                        type="text"
                        value={formData.route}
                        onChange={handleChange}
                        placeholder="e.g., Colombo - Kandy"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Registration */}
                  <div>
                    <label className={labelClass}>Registration No</label>
                    <div className="relative">
                      <Fingerprint size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        name="regNo"
                        type="text"
                        value={formData.regNo}
                        onChange={handleChange}
                        placeholder="e.g., KA-01-AB-1234"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Driver */}
                  <div>
                    <label className={labelClass}>Driver Name</label>
                    <div className="relative">
                      <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        name="driverName"
                        type="text"
                        value={formData.driverName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Conductor */}
                  <div>
                    <label className={labelClass}>Conductor Name</label>
                    <div className="relative">
                      <UserCheck size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        name="conductorName"
                        type="text"
                        value={formData.conductorName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Fuel */}
                  <div>
                    <label className={labelClass}>Fuel Allocation</label>
                    <div className="relative">
                      <Fuel size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        name="dieselInput"
                        type="text"
                        value={formData.dieselInput}
                        onChange={handleChange}
                        placeholder="e.g., 120 L"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Income */}
                  <div className="md:col-span-2">
                    <label className={labelClass}>Daily Income (LKR)</label>
                    <div className="relative">
                      <DollarSign size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        name="totalIncome"
                        type="number"
                        value={formData.totalIncome}
                        onChange={handleChange}
                        placeholder="56000"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>
                </div>

                {/* Form Buttons - Matching Login Button Style */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={handleCancel}
                    type="button"
                    className="w-full sm:w-1/3 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold transition-all text-sm cursor-pointer"
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="group relative w-full h-11 rounded-xl overflow-hidden bg-gradient-to-r from-sky-500 to-cyan-500 hover:brightness-110 active:scale-[0.99] transition-all duration-200 shadow-md shadow-sky-500/10 font-bold text-white flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    {selectedBus ? "Apply Variations" : "Save Record"}
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </Card>
          </motion.div>
        )}

        {/* FLEET GRID PRESENTATION GRID (REMAINS UNCHANGED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {buses.map((bus, idx) => (
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
                        <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">
                          Reference
                        </p>
                        <h3 className="text-lg font-black text-slate-900">
                          {bus.busNo}
                        </h3>
                      </div>
                    </div>

                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold border"
                      style={{
                        backgroundColor: `${brandBlue}0D`,
                        color: brandBlue,
                        borderColor: `${brandBlue}1A`,
                      }}
                    >
                      <Route size={12} />
                      {bus.route}
                    </span>
                  </div>

                  {/* Operational Parameters Data Stack */}
                  <div className="space-y-3 text-sm font-medium">
                    <div className="flex items-center justify-between text-slate-600 py-0.5">
                      <span className="flex items-center gap-2 text-xs text-slate-400">
                        <Fingerprint size={14} /> Plate Index
                      </span>
                      <span className="text-slate-800 font-bold tracking-wide text-xs bg-slate-100 px-2 py-0.5 rounded-md">
                        {bus.regNo}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600 py-0.5">
                      <span className="flex items-center gap-2 text-xs text-slate-400">
                        <User size={14} /> Operator Crew
                      </span>
                      <span className="text-slate-800 font-semibold text-right">
                        {bus.driverName}{" "}
                        <span className="text-slate-400 font-normal text-xs">
                          / {bus.conductorName.split(" ")[0]}
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-slate-600 py-0.5">
                      <span className="flex items-center gap-2 text-xs text-slate-400">
                        <Fuel size={14} /> Fuel Energy Alloc.
                      </span>
                      <span className="text-slate-800 font-bold">
                        {bus.dieselInput}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100/80 pt-3 mt-1">
                      <span className="flex items-center gap-2 text-xs text-slate-400">
                        <DollarSign size={14} /> Recorded Income
                      </span>
                      <span
                        className="text-lg font-black tracking-tight"
                        style={{ color: brandRed }}
                      >
                        {formatCurrency(bus.totalIncome)}
                      </span>
                    </div>
                  </div>

                  {/* Core Action Footer Control */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleEditBus(bus)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 hover:text-white font-bold rounded-xl text-xs transition-all duration-200 hover:bg-[#12348c] hover:border-[#12348c] cursor-pointer group shadow-2xs"
                    >
                      <Edit2
                        size={13}
                        className="text-slate-400 group-hover:text-white transition-colors"
                      />
                      <span>Edit </span>
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;