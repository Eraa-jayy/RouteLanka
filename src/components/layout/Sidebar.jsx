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
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar = () => {
  const location = useLocation();
  const { sidebarOpen, toggleSidebar } = useUI();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-[#9F0712] text-white p-2.5 rounded-xl shadow-lg shadow-[#9F0712]/20 hover:bg-[#c2151f] transition-colors cursor-pointer"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 flex h-screen w-64 flex-col
        bg-gradient-to-b from-[#2984D1] via-[#2C6DA5] to-[#314158]
        shadow-2xl transform transition-transform duration-300
        lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header */}
        <div className="px-5 py-6 border-b border-white/15 flex items-center justify-center">
          <Link to="/" className="flex flex-col text-center w-full">
            <span className="font-serif text-2xl font-bold text-white tracking-tight">
              Main Menu
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto space-y-2">
          {menuItems.map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 1024) toggleSidebar();
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm ${
                  active
                    ? 'bg-white text-[#2C6DA5] font-semibold shadow-lg'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon
                  size={18}
                  className={
                    active ? 'text-[#2C6DA5]' : 'text-white/80'
                  }
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-white/15">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200 text-sm font-medium cursor-pointer group">
            <LogOut
              size={18}
              className="text-white/80 group-hover:text-white transition-colors"
            />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};