import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Bus,
  Calendar,
  DollarSign,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useUI } from '../../hooks/useContext';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Bus, label: 'Buses', path: '/buses' },
  { icon: Calendar, label: 'Bookings', path: '/bookings' },
  { icon: DollarSign, label: 'Finance', path: '/finance' },
];

const bottomItems = [
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar = () => {
  const location = useLocation();
  const { sidebarOpen, toggleSidebar } = useUI();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-primary-600 text-white p-2 rounded-lg"
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`h-screen w-64 bg-gray-900 text-white transform transition-transform duration-300 z-40 overflow-y-auto hidden lg:flex lg:flex-col lg:fixed lg:top-0 lg:left-0 lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0 flex flex-col' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center font-bold text-lg">
              F
            </div>
            <div>
              <h1 className="font-bold text-lg">Fleetora</h1>
              <p className="text-xs text-gray-400">Fleet Management</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <p className="text-xs font-semibold text-gray-500 mb-4 px-2">MAIN MENU</p>
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) toggleSidebar();
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="space-y-2 mt-8">
            {bottomItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) toggleSidebar();
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-primary-600 text-white'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Logout button at bottom */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-800">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-200">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};
