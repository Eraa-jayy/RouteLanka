import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Building2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useAuth } from '../hooks/useContext';
import { Button, Input } from '../components/common';
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

    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email format';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (!confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    if (!companyName) newErrors.companyName = 'Company name is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    register(email, password, companyName);
    setTimeout(() => navigate('/dashboard'), 1500);
  };

  return (
    <div className="relative min-h-screen h-screen w-screen bg-linear-to-br from-primary-600 to-primary-900 flex items-center justify-center p-4 overflow-auto">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      {/* Form container */}
      <div className="relative bg-white rounded-2xl shadow-xl p-8 w-full max-w-md max-h-[calc(100vh-3rem)] overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">
            F
          </div>
          <div>
            <h1 className="font-bold text-2xl text-gray-900">Fleetora</h1>
            <p className="text-xs text-gray-500">Fleet Management System</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h2>
        <p className="text-gray-600 mb-6">Start managing your fleet today</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Company Name"
            type="text"
            placeholder="Your Transport Company"
            icon={Building2}
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
              if (errors.companyName) setErrors({ ...errors, companyName: '' });
            }}
            error={errors.companyName}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            icon={Mail}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            error={errors.email}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            icon={Lock}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors({ ...errors, password: '' });
            }}
            error={errors.password}
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            icon={Lock}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
            }}
            error={errors.confirmPassword}
          />

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              className="w-4 h-4 rounded border-gray-300 text-primary-600 mt-1"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the{' '}
              <Link to="#" className="text-primary-600 hover:text-primary-700">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="#" className="text-primary-600 hover:text-primary-700">
                Privacy Policy
              </Link>
            </label>
          </div>

          <Button
            variant="primary"
            size="lg"
            type="submit"
            loading={loading}
            className="w-full"
          >
            {loading ? 'Creating account...' : 'Create Account'} <ArrowRight size={20} />
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <Link
            to="/login"
            className="flex items-center gap-2 justify-center text-primary-600 font-semibold hover:text-primary-700"
          >
            <ArrowLeft size={16} /> Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};
