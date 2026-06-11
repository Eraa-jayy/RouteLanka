// Format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-LK', {
    style: 'currency',
    currency: 'LKR',
    currencyDisplay: 'code',
  }).format(amount);
};

// Format date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Get status color
export const getStatusColor = (status) => {
  const colors = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    maintenance: 'bg-secondary-100 text-secondary-800',
    idle: 'bg-orange-100 text-orange-800',
    pending: 'bg-primary-100 text-primary-800',
    approved: 'bg-green-100 text-green-800',
    rejected: 'bg-red-100 text-red-800',
    completed: 'bg-green-100 text-green-800',
    on_leave: 'bg-orange-100 text-orange-800',
    in_progress: 'bg-primary-100 text-primary-800',
    scheduled: 'bg-purple-100 text-purple-800',
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

// Format number
export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-IN').format(num);
};

// Capitalize text
export const capitalize = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

// Generate random color
export const getRandomColor = () => {
  const colors = [
    '#0ea5e9', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Validate email
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Format phone number
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91-${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
  }
  return phone;
};
