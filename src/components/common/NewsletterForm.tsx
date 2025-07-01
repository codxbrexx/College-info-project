import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (email.includes('@') && email.includes('.')) {
      setStatus('success');
      setEmail('');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto  bg-white dark:bg-gray-900">
      <h3 className="text-white dark:text-gray-900 font-semibold mb-2">Stay Updated</h3>
      <p className="text-gray-400 dark:text-gray-600 mb-4">
        Subscribe to our newsletter for the latest college news and updates.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
                               bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 border-gray-700 border-solid dark:border-gray-300"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="px-6 py-2 rounded-md transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed
                    bg-blue-500 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" // Added focus styles
        >
          {status === 'submitting' ? (
            'Subscribing...'
          ) : (
            <>
              <Mail className="h-4 w-4 mr-2 " /> {/* Added margin-right */}
              <span>Subscribe</span>
            </>
          )}
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-2 text-green-500 text-sm">Successfully subscribed!</p>
      )}
      {status === 'error' && (
        <p className="mt-2 text-red-500 text-sm">Please enter a valid email address.</p>
      )}
    </div>
  );
};

export default NewsletterForm;
