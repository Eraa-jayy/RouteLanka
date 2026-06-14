import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-sky-100 flex items-center justify-center px-4 py-12 sm:py-16">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute -top-40 -left-40 w-120 h-120 bg-[#9F0712]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute -bottom-40 -right-40 w-120 h-120 bg-[#12348c]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            x: [0, -10, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.012)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Single Column Premium Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-slate-200 bg-white/75 backdrop-blur-2xl shadow-2xl p-8 sm:p-10 flex flex-col items-center"
      >
        {/* Brand Header */}
        <Link to="/" className="flex flex-col items-center text-center mb-6 group">
          <span className="text-[#9F0712] font-serif text-4xl sm:text-5xl font-extrabold tracking-tight transition-colors duration-300 hover:text-[#c2151f]">
            RouteLanka
          </span>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/60 text-slate-600 text-xs font-semibold mt-3">
            Smart Transport. Stronger Business.
          </div>
        </Link>

        {/* Welcome Tagline */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-slate-800 mb-1">
            Log In
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          {/* Email */}
          <div>
            <label className="block text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="email"
                placeholder="admin@routelanka.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2984D1] focus:bg-white focus:ring-4 focus:ring-[#2984D1]/10 outline-none transition-all pl-10 pr-4 text-slate-800 placeholder:text-slate-400 text-sm"
              />
            </div>
            {errors.email && (
              <p className="text-[#9F0712] text-xs mt-1 font-medium">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-[11px] font-semibold text-[#2984D1] hover:text-[#12348c] transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Lock
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors({ ...errors, password: '' });
                }}
                className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2984D1] focus:bg-white focus:ring-4 focus:ring-[#2984D1]/10 outline-none transition-all pl-10 pr-4 text-slate-800 placeholder:text-slate-400 text-sm"
              />
            </div>
            {errors.password && (
              <p className="text-[#9F0712] text-xs mt-1 font-medium">
                {errors.password}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="flex items-center pt-0.5">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                className="rounded border-slate-300 bg-slate-50 text-[#12348c] focus:ring-0 focus:ring-offset-0 w-3.5 h-3.5 cursor-pointer"
              />
              <span className="text-[11px] text-slate-500 group-hover:text-slate-600 transition-colors">
                Remember me
              </span>
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full h-11 rounded-xl overflow-hidden bg-gradient-to-r from-sky-500 to-cyan-500 hover:brightness-110 active:scale-[0.99] transition-all duration-200 shadow-md shadow-sky-500/10 font-bold text-white flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
            {!loading && (
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-5 w-full">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            </span>
          </div>
        </div>

        {/* Demo Credentials */}
        <div className="w-full rounded-2xl border border-sky-100 bg-sky-50/50 p-4 relative overflow-hidden group">
          <div className="flex justify-between items-center mb-1.5">
            <p className="text-[#12348c] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
              <CheckCircle2 size={11} className="text-[#2984D1]" />
              Demo Credentials
            </p>
            {/* <button 
              type="button"
              onClick={() => {
                setEmail('demo@routelanka.com');
                setPassword('demo123');
                setErrors({});
              }}
              className="text-[9px] bg-[#2984D1]/10 hover:bg-[#2984D1]/20 text-[#12348c] font-bold px-2 py-0.5 rounded transition-colors cursor-pointer"
            >
              Autofill
            </button> */}
          </div>
          <div className="space-y-0.5 text-xs text-slate-500">
            <p>Email: <span className="text-slate-800 font-medium select-all">demo@routelanka.com</span></p>
            <p>Password: <span className="text-slate-800 font-medium select-all">demo123</span></p>
          </div>
        </div>

        {/* Footer / Sign Up */}
        <p className="text-center text-slate-500 text-xs mt-8">
          Don&apos;t have an account?{' '}
          <Link
            to="/register"
            className="text-[#2984D1] hover:text-[#12348c] font-semibold transition-colors"
          >
            Create Account
          </Link>
        </p>

        <p className="text-center mt-3">
          {/* <Link
            to="/"
            className="text-xs text-slate-400 hover:text-slate-500 font-medium transition-colors"
          >
            ← Back to Homepage
          </Link> */}
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;