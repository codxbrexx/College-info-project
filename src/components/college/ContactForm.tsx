import React, { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call to send email
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real application, you would send this data to a backend service
    // e.g., using Firebase Functions, Node.js server, etc.
    console.log('Form submitted:', formData);

    if (formData.name && formData.email && formData.subject && formData.message) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-y"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full flex items-center justify-center rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                     bg-primary-600 text-white px-6 py-3 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" // Added focus styles
        >
          {status === 'submitting' ? (
            'Sending...'
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" /> {/* Added margin-right */}
              <span>Send Message</span>
            </>
          )}
        </button>
        {status === 'success' && (
          <div className="mt-4 flex items-center text-green-600 dark:text-green-400">
            <CheckCircle className="h-5 w-5 mr-2" />
            <span>Your message has been sent successfully!</span>
          </div>
        )}
        {status === 'error' && (
          <div className="mt-4 flex items-center text-red-600 dark:text-red-400">
            <XCircle className="h-5 w-5 mr-2" />
            <span>Failed to send message. Please try again.</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
