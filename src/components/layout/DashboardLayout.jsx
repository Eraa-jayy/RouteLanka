import React from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-full w-full bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full lg:ml-64">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <main className="flex-1 overflow-y-auto w-full">
          <div className="p-4 sm:p-6 w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
