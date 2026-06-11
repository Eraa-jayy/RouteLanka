import React, { createContext, useState, useCallback } from 'react';

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [modals, setModals] = useState({});

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const addNotification = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    if (duration > 0) {
      setTimeout(() => {
        removeNotification(id);
      }, duration);
    }
    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const openModal = useCallback((modalName, data = {}) => {
    setModals(prev => ({
      ...prev,
      [modalName]: { open: true, data }
    }));
  }, []);

  const closeModal = useCallback((modalName) => {
    setModals(prev => ({
      ...prev,
      [modalName]: { open: false, data: {} }
    }));
  }, []);

  return (
    <UIContext.Provider value={{
      sidebarOpen,
      toggleSidebar,
      notifications,
      addNotification,
      removeNotification,
      modals,
      openModal,
      closeModal,
    }}>
      {children}
    </UIContext.Provider>
  );
};
