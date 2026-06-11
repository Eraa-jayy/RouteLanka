import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useContext';

// Pages
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';
import { DashboardPage } from '../pages/DashboardPage';
import { BusesPage } from '../pages/BusesPage';
import { DriversPage } from '../pages/DriversPage';
import { BookingsPage } from '../pages/BookingsPage';
import { FinancePage } from '../pages/FinancePage';
import { TrackingPage } from '../pages/TrackingPage';
import { MaintenancePage } from '../pages/MaintenancePage';
import { ReportsPage } from '../pages/ReportsPage';
import { SettingsPage } from '../pages/SettingsPage';
import { CustomersPage } from '../pages/CustomersPage';
import { NotificationsPage } from '../pages/NotificationsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

// Protected Route Component
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// Route configuration
export const routes = [
  // Public routes
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },

  // Protected routes
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/buses',
    element: (
      <ProtectedRoute>
        <BusesPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/drivers',
    element: (
      <ProtectedRoute>
        <DriversPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/bookings',
    element: (
      <ProtectedRoute>
        <BookingsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/finance',
    element: (
      <ProtectedRoute>
        <FinancePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/tracking',
    element: (
      <ProtectedRoute>
        <TrackingPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/maintenance',
    element: (
      <ProtectedRoute>
        <MaintenancePage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/reports',
    element: (
      <ProtectedRoute>
        <ReportsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings',
    element: (
      <ProtectedRoute>
        <SettingsPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/customers',
    element: (
      <ProtectedRoute>
        <CustomersPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/notifications',
    element: (
      <ProtectedRoute>
        <NotificationsPage />
      </ProtectedRoute>
    ),
  },

  // 404 route
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
