import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const PublicHeader = () => {
  return (
<nav className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-[#2984D1] via-[#2C6DA5] to-[#314158] shadow-lg">      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="RouteLanka logo"
            className="h-12 w-auto rounded-2xl border border-slate-200 shadow-sm"
          />
        </Link>

        <div className="flex-1 flex justify-center">
          <div className="hidden lg:flex items-center gap-4 text-sm font-medium text-slate-700">
            <Link
              to="/"
              className="inline-flex items-center rounded-full border border-slate-200 bg-gradient-to-r from-slate-100 via-white to-slate-100 px-5 py-2 text-slate-800 shadow-sm transition duration-300 hover:border-slate-300 hover:bg-slate-900 hover:text-black hover:shadow-lg"
            >
              Home
            </Link>
            <Link
              to="/#about"
              className="inline-flex items-center rounded-full border border-slate-200 bg-gradient-to-r from-slate-100 via-white to-slate-100 px-5 py-2 text-slate-800 shadow-sm transition duration-300 hover:border-slate-300 hover:bg-slate-900 hover:text-black hover:shadow-lg"
            >
              About
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center rounded-full border border-slate-200 bg-gradient-to-r from-slate-100 via-white to-slate-100 px-5 py-2 text-slate-800 shadow-sm transition duration-300 hover:border-slate-300 hover:bg-slate-900 hover:text-black hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex items-center">
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-sky-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};