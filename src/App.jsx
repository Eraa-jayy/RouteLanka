import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UIProvider } from './context/UIContext';
import { routes } from './routes';
import { PublicHeader } from './components/layout/PublicHeader';
import { Footer } from './components/layout/Footer';

const AppContent = () => {
  const location = useLocation();
  const hidePublicHeader = [
    '/dashboard',
    '/buses',
    '/drivers',
    '/bookings',
    '/finance',
    '/tracking',
    '/maintenance',
    '/reports',
    '/settings',
    '/customers',
    '/notifications',
  ].some((path) => location.pathname.startsWith(path));

  return (
    <>
      {!hidePublicHeader && <PublicHeader />}
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <UIProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </UIProvider>
    </AuthProvider>
  );
}

export default App;
