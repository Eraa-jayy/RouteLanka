import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Trash2, Check } from 'lucide-react';
import { Card, Button, Badge } from '../components/common';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { formatDate } from '../utils/helpers';

const mockNotifications = [
  {
    id: '1',
    title: 'New Booking Request',
    message: 'Priya Sharma has requested a bus for Bangalore to Mysore route',
    type: 'booking',
    date: new Date(Date.now() - 1000 * 60 * 5),
    read: false,
  },
  {
    id: '2',
    title: 'Maintenance Reminder',
    message: 'Bus KA-01-EF-9101 maintenance is due on Feb 15, 2026',
    type: 'maintenance',
    date: new Date(Date.now() - 1000 * 60 * 30),
    read: false,
  },
  {
    id: '3',
    title: 'Driver Completed Trip',
    message: 'Raj Kumar has completed trip from Bangalore to Mysore',
    type: 'trip',
    date: new Date(Date.now() - 1000 * 60 * 60),
    read: true,
  },
  {
    id: '4',
    title: 'Payment Received',
    message: 'Payment of LKR 8,000 received for booking #1002',
    type: 'payment',
    date: new Date(Date.now() - 1000 * 60 * 120),
    read: true,
  },
];

export const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState('all');

  const handleMarkRead = (id) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const handleDelete = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const filteredNotifications = filter === 'unread'
    ? notifications.filter(n => !n.read)
    : notifications;

  const getNotificationIcon = (type) => {
    const colors = {
      booking: 'bg-primary-100 text-primary-600',
      maintenance: 'bg-secondary-100 text-secondary-600',
      trip: 'bg-green-100 text-green-600',
      payment: 'bg-purple-100 text-purple-600',
    };
    return colors[type] || 'bg-gray-100 text-gray-600';
  };

  const getNotificationBadge = (type) => {
    const badges = {
      booking: 'info',
      maintenance: 'warning',
      trip: 'success',
      payment: 'secondary',
    };
    return badges[type] || 'info';
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
              <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
              <p className="text-gray-600 mt-1">
                {filteredNotifications.filter(n => !n.read).length} unread notifications
              </p>
            </div>
            {filteredNotifications.filter(n => !n.read).length > 0 && (
              <Button variant="secondary" size="sm" onClick={handleMarkAllRead}>
                <Check size={16} /> Mark All as Read
              </Button>
            )}
          </div>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <div className="flex gap-2">
              <Button
                variant={filter === 'all' ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setFilter('all')}
              >
                All Notifications
              </Button>
              <Button
                variant={filter === 'unread' ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setFilter('unread')}
              >
                Unread
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Notifications List */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification, idx) => (
              <Card
                key={notification.id}
                className={`hover:shadow-lg transition-all ${notification.read ? 'opacity-75' : ''}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className={`p-3 rounded-lg shrink-0 ${getNotificationIcon(notification.type)}`}>
                    <Bell size={20} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                      <Badge variant={getNotificationBadge(notification.type)}>
                        {notification.type}
                      </Badge>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                    <p className="text-xs text-gray-500">
                      {notification.date.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })} • {notification.date.toLocaleDateString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    {!notification.read && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleMarkRead(notification.id)}
                      >
                        <Check size={16} />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(notification.id)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </motion.div>
              </Card>
            ))
          ) : (
            <Card>
              <div className="text-center py-8">
                <Bell className="mx-auto text-gray-400 mb-3" size={48} />
                <p className="text-gray-600 font-semibold">No notifications</p>
                <p className="text-sm text-gray-500 mt-1">You're all caught up!</p>
              </div>
            </Card>
          )}
        </motion.div>
      </div>
    </DashboardLayout>
  );
};
