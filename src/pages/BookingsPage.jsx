import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Search, MessageSquare } from 'lucide-react';
import { Card, Button, Modal, Input, EmptyState } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { mockBookings } from '../utils/mockData';
import { formatDate, formatCurrency } from '../utils/helpers';

export const BookingsPage = () => {
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

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Booking Management</h1>
            <p className="text-gray-600 mt-1">Manage bus hiring requests and bookings</p>
          </div>
        </motion.div>

        {/* Search, Filter and Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid grid-cols-1 xl:grid-cols-[320px_minmax(0,1fr)] gap-6">
            <Card>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Booking Calendar</h2>
                  <p className="text-sm text-gray-500">Booked dates in the current month are marked in red.</p>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-500 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="font-semibold">{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2 text-sm">
                {calendarDays.map((day, index) => {
                  const isBooked = day && bookedDates.has(day);
                  return (
                    <div
                      key={`${day}-${index}`}
                      className={`h-12 rounded-lg flex items-center justify-center border ${
                        isBooked ? 'bg-red-600 text-white border-red-600' : 'bg-gray-50 text-gray-700 border-gray-200'
                      } ${day ? 'font-semibold' : 'bg-transparent border-transparent'} `}
                    >
                      {day || ''}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 text-xs text-gray-500">
                <span className="inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600" /> Booked date
                </span>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  placeholder="Search by customer name, email, or telephone..."
                  icon={Search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="md:flex-1"
                />
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Bookings List */}
        {filteredBookings.length > 0 ? (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {filteredBookings.map((booking, idx) => (
              <Card key={booking.id} className="hover:shadow-lg transition-shadow">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{booking.busNo}</h3>
                        <p className="text-sm text-gray-600 mt-1">{booking.source} → {booking.destination}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="rounded-2xl bg-gray-50 p-4 border border-gray-200">
                        <p className="text-xs text-gray-500">Booking Date</p>
                        <p className="mt-2 font-semibold text-gray-900">{formatDate(booking.date)}</p>
                      </div>
                      <div className="rounded-2xl bg-gray-50 p-4 border border-gray-200">
                        <p className="text-xs text-gray-500">Route</p>
                        <p className="mt-2 font-semibold text-gray-900">{booking.source} → {booking.destination}</p>
                      </div>
                      <div className="rounded-2xl bg-gray-50 p-4 border border-gray-200">
                        <p className="text-xs text-gray-500">Telephone</p>
                        <p className="mt-2 font-semibold text-gray-900">{booking.phone}</p>
                      </div>
                      <div className="rounded-2xl bg-gray-50 p-4 border border-gray-200">
                        <p className="text-xs text-gray-500">Km</p>
                        <p className="mt-2 font-semibold text-gray-900">{booking.km} km</p>
                      </div>
                      <div className="rounded-2xl bg-gray-50 p-4 border border-gray-200">
                        <p className="text-xs text-gray-500">Paid Amount</p>
                        <p className="mt-2 font-semibold text-gray-900">{formatCurrency(booking.amount)}</p>
                      </div>
                      <div className="rounded-2xl bg-gray-50 p-4 border border-gray-200">
                        <p className="text-xs text-gray-500">Fuel</p>
                        <p className="mt-2 font-semibold text-gray-900">{booking.fuel}</p>
                      </div>
                      <div className="rounded-2xl bg-gray-50 p-4 border border-gray-200">
                        <p className="text-xs text-gray-500">Customer</p>
                        <p className="mt-2 font-semibold text-gray-900">{booking.customerName}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-end">
                      <Button
                        variant="primary"
                        size="sm"
                        className="flex items-center gap-1 bg-primary-600 text-white hover:bg-primary-700"
                        onClick={() => openDetails(booking)}
                      >
                        <MessageSquare size={16} /> Edit
                      </Button>
                    </div>
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

      {/* Booking Details Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Edit Booking"
        size="lg"
      >
        {selectedBooking && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Input
                label="Customer Name"
                value={selectedBooking.customerName}
                onChange={(e) => handleFieldChange('customerName', e.target.value)}
              />
              <Input
                label="Telephone"
                value={selectedBooking.phone}
                onChange={(e) => handleFieldChange('phone', e.target.value)}
              />
              <Input
                label="Email"
                value={selectedBooking.email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
              />
              <Input
                label="Booking Date"
                type="date"
                value={selectedBooking.date}
                onChange={(e) => handleFieldChange('date', e.target.value)}
              />
              <Input
                label="Route From"
                value={selectedBooking.source}
                onChange={(e) => handleFieldChange('source', e.target.value)}
              />
              <Input
                label="Route To"
                value={selectedBooking.destination}
                onChange={(e) => handleFieldChange('destination', e.target.value)}
              />
              <Input
                label="Bus Number"
                value={selectedBooking.busNo}
                onChange={(e) => handleFieldChange('busNo', e.target.value)}
              />
              <Input
                label="Km"
                value={selectedBooking.km}
                onChange={(e) => handleFieldChange('km', e.target.value)}
              />
              <Input
                label="Fuel"
                value={selectedBooking.fuel}
                onChange={(e) => handleFieldChange('fuel', e.target.value)}
              />
              <Input
                label="Amount"
                type="number"
                value={selectedBooking.amount}
                onChange={(e) => handleFieldChange('amount', Number(e.target.value))}
              />
            </div>

            <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
              <Button variant="secondary" className="flex-1" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" className="flex-1" onClick={handleSaveBooking}>
                Save Changes
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </DashboardLayout>
  );
};
