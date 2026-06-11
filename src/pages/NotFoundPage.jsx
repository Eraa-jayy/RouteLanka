import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { Button } from '../components/common';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      {/* Content */}
      <div className="text-center">
        <div className="mb-6">
          <AlertCircle className="mx-auto text-yellow-500 mb-4" size={64} />
          <h1 className="text-6xl font-bold text-white mb-2">404</h1>
          <p className="text-2xl font-bold text-gray-300 mb-4">Page Not Found</p>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            variant="primary"
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2"
          >
            Go to Dashboard
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};
