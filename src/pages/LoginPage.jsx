import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Mail,
  Lock,
  ArrowRight,
  MapPinned,
  ShieldCheck,
  Route,
  Sparkles,
} from 'lucide-react';

import { useAuth } from '../hooks/useContext';
import { validateEmail } from '../utils/helpers';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login, loading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email))
      newErrors.email = 'Invalid email format';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    await login(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] flex items-center justify-center px-4 py-8">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute -top-37.5 -left-25 w-125 h-125 bg-cyan-500/20 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-37.5 -right-25 w-125 h-125 bg-indigo-600/20 rounded-full blur-3xl"></div>

        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-sky-400/10 rounded-full blur-3xl"></div>

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl rounded-4xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,0.5)] grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between relative p-12 overflow-hidden">
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-transparent to-indigo-500/20"></div>

          {/* Top */}
          <div className="relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-16">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-xl shadow-cyan-500/30">
                <MapPinned className="text-white" size={32} />
              </div>

              <div>
                <h1 className="text-4xl font-black tracking-tight text-white">
                  RouteLanka
                </h1>

                <p className="text-sm text-slate-300 mt-1">
                  Intelligent Fleet Ecosystem
                </p>
              </div>
            </div>

            {/* Hero */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-cyan-300 text-sm backdrop-blur-md">
                <Sparkles size={16} />
                Next Generation Fleet Platform
              </div>

              <h2 className="text-6xl leading-[1.05] font-black text-white">
                Drive Smarter.
                <br />
                Manage Faster.
              </h2>

              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                RouteLanka helps transport companies streamline routes,
                monitor fleets in real-time, and optimize operations with a
                beautifully modern dashboard.
              </p>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Route className="text-cyan-300" />
              </div>

              <h3 className="text-white font-semibold mb-1">
                Smart Tracking
              </h3>

              <p className="text-sm text-slate-400">
                Monitor vehicles and routes live in real-time.
              </p>
            </div>

            <div className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-4">
                <ShieldCheck className="text-indigo-300" />
              </div>

              <h3 className="text-white font-semibold mb-1">
                Secure System
              </h3>

              <p className="text-sm text-slate-400">
                Enterprise-grade authentication & data protection.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white/4 backdrop-blur-2xl p-8 sm:p-12 flex flex-col justify-center">
          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center gap-3 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <MapPinned className="text-white" />
            </div>

            <div>
              <h1 className="text-3xl font-black text-white">
                RouteLanka
              </h1>

              <p className="text-sm text-slate-400">
                Fleet Management Platform
              </p>
            </div>
          </div>

          {/* Header */}
          <div className="mb-10">
            <h2 className="text-5xl font-black text-white mb-3">
              Welcome Back
            </h2>

            <p className="text-slate-400 text-base">
              Sign in and continue your smart fleet journey.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);

                    if (errors.email) {
                      setErrors({ ...errors, email: '' });
                    }
                  }}
                  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 outline-none transition-all pl-12 pr-4 text-white placeholder:text-slate-500"
                />
              </div>

              {errors.email && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);

                    if (errors.password) {
                      setErrors({ ...errors, password: '' });
                    }
                  }}
                  className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10 outline-none transition-all pl-12 pr-4 text-white placeholder:text-slate-500"
                />
              </div>

              {errors.password && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Options */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-cyan-500 w-4 h-4"
                />

                <span className="text-sm text-slate-400">
                  Remember me
                </span>
              </label>

              <Link
                to="/forgot-password"
                className="text-sm text-cyan-400 hover:text-cyan-300 transition"
              >
                Forgot password?
              </Link>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full h-14 rounded-2xl overflow-hidden bg-linear-to-r from-cyan-500 to-blue-600 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-xl shadow-cyan-500/20 font-semibold text-white flex items-center justify-center gap-3"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>

              {loading ? 'Signing In...' : 'Sign In'}

              {!loading && (
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>

            <div className="relative flex justify-center">
              <span className="bg-[#0B1220] px-4 text-sm text-slate-500">
                Demo Access
              </span>
            </div>
          </div>

          {/* Demo Credentials */}
          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-5 backdrop-blur-xl">
            <p className="text-cyan-300 font-semibold mb-3">
              Demo Credentials
            </p>

            <div className="space-y-1 text-sm text-slate-300">
              <p>
                Email: <span className="text-white">demo@routelanka.com</span>
              </p>

              <p>
                Password: <span className="text-white">demo123</span>
              </p>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-slate-500 text-sm mt-8">
            Don&apos;t have an account?{' '}
            <Link
              to="/register"
              className="text-cyan-400 hover:text-cyan-300 font-medium transition"
            >
              Create Account
            </Link>
          </p>

          <p className="text-center text-slate-500 text-sm mt-4">
            <Link
              to="/"
              className="text-slate-400 hover:text-slate-300 font-medium transition"
            >
              ← Back to Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};