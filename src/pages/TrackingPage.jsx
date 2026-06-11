import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, AlertCircle } from 'lucide-react';
import { Card, Badge } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { mockBuses } from '../utils/mockData';

export const TrackingPage = () => {
  const [selectedBus, setSelectedBus] = useState(mockBuses[0]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Live Tracking</h1>
            <p className="text-gray-600 mt-1">Real-time bus location and route tracking</p>
          </div>
        </motion.div>

        {/* Map Placeholder and Bus List */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Map Section */}
          <Card className="lg:col-span-2">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <MapPin size={24} /> Map View
              </h2>
              <p className="text-sm text-gray-600 mt-1">Live bus locations on map</p>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-96 bg-primary-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto text-gray-400 mb-3" size={48} />
                <p className="text-gray-600 font-semibold">Map Integration</p>
                <p className="text-sm text-gray-500">Connect with Google Maps or Mapbox API</p>
              </div>
            </div>

            {/* Bus Info Card */}
            {selectedBus && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Selected Bus</p>
                    <p className="font-semibold text-gray-900">{selectedBus.registration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Current Status</p>
                    <Badge variant={selectedBus.status === 'active' ? 'success' : 'warning'}>
                      {selectedBus.status}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Location</p>
                    <p className="font-semibold text-gray-900">{selectedBus.currentLocation.lat.toFixed(4)}, {selectedBus.currentLocation.lng.toFixed(4)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Speed</p>
                    <p className="font-semibold text-gray-900">45 km/h</p>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Bus List */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Active Buses</h2>
            <div className="space-y-3">
              {mockBuses.map((bus) => (
                <div
                  key={bus.id}
                  onClick={() => setSelectedBus(bus)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedBus.id === bus.id
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-gray-900">{bus.registration}</p>
                      <p className="text-xs text-gray-600">{bus.model}</p>
                    </div>
                    <Badge variant={bus.status === 'active' ? 'success' : bus.status === 'maintenance' ? 'warning' : 'secondary'}>
                      {bus.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Navigation size={14} className="text-primary-600" />
                    <span className="text-gray-600">Moving • 42 km/h</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Route Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Current Route</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="pt-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Start Point: Bangalore</p>
                  <p className="text-sm text-gray-600">3:30 PM - Departed</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-0.5 h-16 bg-gray-300 mx-1.5"></div>
              </div>

              <div className="flex items-start gap-4">
                <div className="pt-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Current Location: Mysore Highway</p>
                  <p className="text-sm text-gray-600">4:45 PM - Ongoing</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-0.5 h-16 bg-gray-300 mx-1.5"></div>
              </div>

              <div className="flex items-start gap-4">
                <div className="pt-1">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Destination: Mysore</p>
                  <p className="text-sm text-gray-600">6:30 PM - Estimated arrival</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-2 border-yellow-200 bg-yellow-50">
            <div className="flex items-start gap-4">
              <AlertCircle className="text-secondary-600 shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900">Traffic Alert</h3>
                <p className="text-sm text-gray-600 mt-1">Heavy traffic detected on current route. Estimated delay: 15 minutes</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};
