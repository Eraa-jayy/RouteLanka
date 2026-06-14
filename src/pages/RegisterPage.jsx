import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Lock,
  Building2,
  ArrowRight,
} from 'lucide-react';

import { useAuth } from '../hooks/useContext';
import { validateEmail } from '../utils/helpers';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, loading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!companyName) newErrors.companyName = 'Company name is required';

    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email format';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    await register(email, password, companyName);
    setTimeout(() => navigate('/dashboard'), 1500);
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
            Create Account
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4" autoComplete="off">
          {/* Company Name */}
          <div>
            <label className="block text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Company Name
            </label>
            <div className="relative">
              <Building2
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Your Transport Company"
                value={companyName}
                autoComplete="off"
                onChange={(e) => {
                  setCompanyName(e.target.value);
                  if (errors.companyName) setErrors({ ...errors, companyName: '' });
                }}
                className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2984D1] focus:bg-white focus:ring-4 focus:ring-[#2984D1]/10 outline-none transition-all pl-10 pr-4 text-slate-800 placeholder:text-slate-400 text-sm"
              />
            </div>
            {errors.companyName && (
              <p className="text-[#9F0712] text-xs mt-1 font-medium">
                {errors.companyName}
              </p>
            )}
          </div>

          {/* Email Address */}
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
                placeholder="you@example.com"
                value={email}
                autoComplete="off"
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
            <label className="block text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                autoComplete="one-time-code"
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

          {/* Confirm Password */}
          <div>
            <label className="block text-left text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <Lock
                size={15}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                autoComplete="one-time-code"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
                }}
                className="w-full h-11 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#2984D1] focus:bg-white focus:ring-4 focus:ring-[#2984D1]/10 outline-none transition-all pl-10 pr-4 text-slate-800 placeholder:text-slate-400 text-sm"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-[#9F0712] text-xs mt-1 font-medium">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Terms and Conditions Options */}
          <div className="flex items-start pt-0.5 gap-2">
            <input
              type="checkbox"
              id="terms"
              className="rounded border-slate-300 bg-slate-50 text-[#12348c] focus:ring-0 focus:ring-offset-0 w-3.5 h-3.5 mt-0.5 cursor-pointer"
              required
            />
            <label htmlFor="terms" className="text-[11px] text-slate-500 transition-colors leading-tight cursor-pointer select-none">
              I agree to the{' '}
              <Link to="#" className="text-[#2984D1] hover:text-[#12348c] font-semibold">
                Terms and Conditions
              </Link>{' '}
              and{' '}
              <Link to="#" className="text-[#2984D1] hover:text-[#12348c] font-semibold">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full h-11 rounded-xl overflow-hidden bg-gradient-to-r from-sky-500 to-cyan-500 hover:brightness-110 active:scale-[0.99] transition-all duration-200 shadow-md shadow-sky-500/10 font-bold text-white flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            {loading ? 'Creating account...' : 'Create Account'}
            {!loading && (
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            )}
          </button>
        </form>

        {/* Footer / Sign In link redirection */}
        <p className="text-center text-slate-500 text-xs mt-8">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-[#2984D1] hover:text-[#12348c] font-semibold transition-colors"
          >
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;