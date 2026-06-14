import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Search, 
  MessageSquare, 
  Bus, 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  MapPin, 
  Navigation, 
  Fuel, 
  DollarSign, 
  X, 
  ArrowRight 
} from 'lucide-react';
import { Card, Modal, EmptyState } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { mockBookings } from '../utils/mockData';
import { formatDate, formatCurrency } from '../utils/helpers';

export const BookingsPage = () => {
  const brandBlue = "#12348c";
  const brandRed = "#9F0712";

  const [bookings, setBookings] = useState(mockBookings);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filteredBookings = bookings.filter(booking =>
    booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonthIndex = today.getMonth();
  const currentMonthName = today.toLocaleString('default', { month: 'long' });
  const firstDayIndex = new Date(currentYear, currentMonthIndex, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonthIndex + 1, 0).getDate();

  const bookedDates = new Set(
    filteredBookings
      .filter((booking) => {
        const bookingDate = new Date(booking.date);
        return (
          bookingDate.getMonth() === currentMonthIndex &&
          bookingDate.getFullYear() === currentYear
        );
      })
      .map((booking) => new Date(booking.date).getDate())
  );

  const calendarDays = [
    ...Array(firstDayIndex).fill(null),
    ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
  ];

  const openDetails = (booking) => {
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const handleFieldChange = (key, value) => {
    setSelectedBooking((prev) => prev ? { ...prev, [key]: value } : prev);
  };

  const handleSaveBooking = () => {
    if (!selectedBooking) return;
    setBookings((prev) => prev.map((booking) => (
      booking.id === selectedBooking.id ? selectedBooking : booking
    )));
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
                Booking Management
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
              {/* <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-5">Charter & Hiring System</p> */}
            </div>
          </div>
        </motion.div>

        {/* SEARCH, FILTER AND CALENDAR PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid grid-cols-1 xl:grid-cols-[340px_minmax(0,1fr)] gap-6 items-start">
            
            {/* Beautiful Booking Calendar Card */}
            <Card className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <div>
                  <h2 className="text-md font-extrabold text-slate-800 uppercase tracking-tight">Hiring Schedule</h2>
                  <p className="text-[10px] text-slate-400 font-semibold uppercase mt-0.5">{currentMonthName} {currentYear}</p>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                  <div key={idx} className="h-6 flex items-center justify-center">{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1.5 text-xs">
                {calendarDays.map((day, index) => {
                  const isBooked = day && bookedDates.has(day);
                  return (
                    <div
                      key={`${day}-${index}`}
                      className={`h-9 w-9 rounded-xl flex items-center justify-center transition-all ${
                        day ? 'border font-bold' : 'border-transparent bg-transparent pointer-events-none'
                      } ${
                        isBooked 
                          ? 'bg-red-50 text-[#9F0712] border-red-100 hover:bg-red-100' 
                          : 'bg-slate-50 text-slate-700 border-slate-100 hover:border-slate-200'
                      }`}
                    >
                      {day || ''}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-medium text-slate-500">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-100 border border-slate-200" /> Open Date
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-100 border border-red-200" /> Booked Segment
                </span>
              </div>
            </Card>

            {/* Quick Search Panel */}
            <Card className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm h-full flex flex-col justify-center">
              <div className="space-y-2">
                <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Search Filter</p>
                <div className="relative">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by client name, email credentials, or telephone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full h-12 rounded-2xl bg-slate-50 border border-slate-200 px-12 outline-none focus:ring-4 focus:ring-sky-500/5 focus:border-sky-500 transition-all text-sm"
                  />
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* BOOKINGS LIST */}
        {filteredBookings.length > 0 ? (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {filteredBookings.map((booking, idx) => (
              <Card key={booking.id} className="overflow-hidden rounded-3xl bg-white border border-slate-200/70 hover:shadow-xl hover:border-slate-300/80 transition-all duration-300">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 space-y-5"
                >
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
                        <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Assigned Fleet</p>
                        <h3 className="text-lg font-black text-slate-900">{booking.busNo}</h3>
                      </div>
                    </div>
                    
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold border"
                      style={{
                        backgroundColor: `${brandBlue}0D`,
                        color: brandBlue,
                        borderColor: `${brandBlue}1A`,
                      }}
                    >
                      <MapPin size={12} />
                      {booking.source} → {booking.destination}
                    </span>
                  </div>

                  {/* Grid-based Parameter Data Stack */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm font-medium">
                    <div className="rounded-2xl bg-slate-50/50 p-4 border border-slate-100">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Calendar size={13} /> Schedule Date
                      </p>
                      <p className="mt-2 text-slate-800 font-bold text-sm">{formatDate(booking.date)}</p>
                    </div>

                    <div className="rounded-2xl bg-slate-50/50 p-4 border border-slate-100">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <User size={13} /> Client Name
                      </p>
                      <p className="mt-2 text-slate-800 font-bold text-sm truncate">{booking.customerName}</p>
                    </div>

                    <div className="rounded-2xl bg-slate-50/50 p-4 border border-slate-100">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Phone size={13} /> Telephone Index
                      </p>
                      <p className="mt-2 text-slate-800 font-bold text-sm">{booking.phone}</p>
                    </div>

                    <div className="rounded-2xl bg-slate-50/50 p-4 border border-slate-100">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <DollarSign size={13} /> Total Amount
                      </p>
                      <p className="mt-2 text-sm font-black tracking-tight" style={{ color: brandRed }}>
                        {formatCurrency(booking.amount)}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action Strip */}
                  <div className="flex justify-between items-center pt-2 border-t border-slate-100/50">
                    <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                      <span className="flex items-center gap-1.5"><Navigation size={13} /> {booking.km} km distance</span>
                      <span className="flex items-center gap-1.5"><Fuel size={13} /> {booking.fuel} Fuel allocation</span>
                    </div>

                    <button
                      onClick={() => openDetails(booking)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 hover:text-white font-bold rounded-xl text-xs transition-all duration-200 hover:bg-[#12348c] hover:border-[#12348c] cursor-pointer group"
                    >
                      <MessageSquare size={13} className="text-slate-400 group-hover:text-white transition-colors" />
                      Modify Record
                    </button>
                  </div>
                </motion.div>
              </Card>
            ))}
          </motion.div>
        ) : (
          <Card>
            <EmptyState
              icon={Clock}
              title="No bookings found"
              description="No booking requests match your search criteria"
            />
          </Card>
        )}
      </div>

      {/* PREMIUM GLASS EDIT MODAL */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={null} // Customized title inside the glass framework
        size="lg"
        className="!p-0 !bg-transparent !border-0 shadow-none"
      >
        {selectedBooking && (
          <div className="relative">
            {/* Floating Form Background Blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#9F0712]/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#12348c]/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white/75 backdrop-blur-2xl shadow-2xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-800 mb-1">Edit Booking</h2>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-600 text-[10px] font-bold uppercase tracking-tight">
                    Hiring Register Terminal
                  </div>
                </div>
                <button onClick={() => setShowModal(false)} className="p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-5">
                  
                  {/* Customer Name */}
                  <div>
                    <label className={labelClass}>Customer Name</label>
                    <div className="relative">
                      <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={selectedBooking.customerName}
                        onChange={(e) => handleFieldChange('customerName', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Telephone */}
                  <div>
                    <label className={labelClass}>Telephone Index</label>
                    <div className="relative">
                      <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={selectedBooking.phone}
                        onChange={(e) => handleFieldChange('phone', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <div className="relative">
                      <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        value={selectedBooking.email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Booking Date */}
                  <div>
                    <label className={labelClass}>Booking Date</label>
                    <div className="relative">
                      <Calendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="date"
                        value={selectedBooking.date}
                        onChange={(e) => handleFieldChange('date', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Route From */}
                  <div>
                    <label className={labelClass}>Route From (Source)</label>
                    <div className="relative">
                      <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={selectedBooking.source}
                        onChange={(e) => handleFieldChange('source', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Route To */}
                  <div>
                    <label className={labelClass}>Route To (Destination)</label>
                    <div className="relative">
                      <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={selectedBooking.destination}
                        onChange={(e) => handleFieldChange('destination', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Bus Number */}
                  <div>
                    <label className={labelClass}>Assigned Bus Reference</label>
                    <div className="relative">
                      <Bus size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={selectedBooking.busNo}
                        onChange={(e) => handleFieldChange('busNo', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Distance (Km) */}
                  <div>
                    <label className={labelClass}>Distance Metric (Km)</label>
                    <div className="relative">
                      <Navigation size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={selectedBooking.km}
                        onChange={(e) => handleFieldChange('km', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Fuel */}
                  <div>
                    <label className={labelClass}>Fuel Reservation</label>
                    <div className="relative">
                      <Fuel size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={selectedBooking.fuel}
                        onChange={(e) => handleFieldChange('fuel', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Amount */}
                  <div>
                    <label className={labelClass}>Hiring Fee Amount (LKR)</label>
                    <div className="relative">
                      <DollarSign size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="number"
                        value={selectedBooking.amount}
                        onChange={(e) => handleFieldChange('amount', Number(e.target.value))}
                        className={inputClass}
                      />
                    </div>
                  </div>

                </div>

                {/* Form Buttons */}
                <div className="flex gap-3 pt-6 border-t border-slate-100/50">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="flex-1 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold transition-all text-sm cursor-pointer"
                  >
                    Discard Changes
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveBooking}
                    className="flex-1 h-12 group relative rounded-xl overflow-hidden bg-gradient-to-r from-sky-500 to-cyan-500 hover:brightness-110 active:scale-98 transition-all shadow-md shadow-sky-500/20 font-bold text-white flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    Apply Variations
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </DashboardLayout>
  );
};