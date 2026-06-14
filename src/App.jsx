import React, { useEffect, useState } from 'react';

import './App.css';

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import { UIProvider } from './context/UIContext';

import { routes } from './routes';

import { PublicHeader } from './components/layout/PublicHeader';

import { Footer } from './components/layout/Footer';

import PageLoader from './components/common/PageLoader';





const AppContent = () => {

  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    if (location.key !== displayLocation.key) {

      setLoading(true);

     

      // Swap the route and scroll to top when the loader is fully visible

      const routeTimer = setTimeout(() => {

        setDisplayLocation(location);

        window.scrollTo(0, 0);

      }, 350);



      // Fade out the loader once the new page has loaded

      const hideTimer = setTimeout(() => {

        setLoading(false);

      }, 750);



      return () => {

        clearTimeout(routeTimer);

        clearTimeout(hideTimer);

      };

    } else {

      // Handle initial page load transition

      const hideTimer = setTimeout(() => {

        setLoading(false);

      }, 700);

      return () => clearTimeout(hideTimer);

    }

  }, [location, displayLocation.key]);



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

      <PageLoader isVisible={loading} />

      {!hidePublicHeader && <PublicHeader />}

      <Routes location={displayLocation}>

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