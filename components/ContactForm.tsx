/**
 * Contact Form Component
 * 
 * Demonstrates:
 * - Form handling with custom hooks
 * - Validation
 * - API integration
 * - Error/success feedback
 */

import React from 'react';
import { useForm } from '@/lib/hooks';
import axios from 'axios';
import clsx from 'clsx';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const { formData, handleChange, handleSubmit, loading, error, success, reset } = useForm<ContactFormData>(
    {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    async (data) => {
      const response = await axios.post('/api/contact', data);
      if (response.status === 201) {
        reset();
        onSuccess?.();
      }
    }
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={clsx(
            'w-full bg-dark-secondary border rounded-lg px-4 py-2 text-white placeholder-gray-500',
            'focus:outline-none focus:border-accent transition',
            'disabled:opacity-50'
          )}
          placeholder="Your name"
          disabled={loading}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={clsx(
            'w-full bg-dark-secondary border rounded-lg px-4 py-2 text-white placeholder-gray-500',
            'focus:outline-none focus:border-accent transition',
            'disabled:opacity-50'
          )}
          placeholder="your@email.com"
          disabled={loading}
        />
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className={clsx(
            'w-full bg-dark-secondary border rounded-lg px-4 py-2 text-white placeholder-gray-500',
            'focus:outline-none focus:border-accent transition',
            'disabled:opacity-50'
          )}
          placeholder="Subject"
          disabled={loading}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={clsx(
            'w-full bg-dark-secondary border rounded-lg px-4 py-2 text-white placeholder-gray-500',
            'focus:outline-none focus:border-accent transition resize-none',
            'disabled:opacity-50'
          )}
          placeholder="Your message..."
          disabled={loading}
        />
      </div>

      {/* Error */}
      {error && <div className="p-3 bg-red-900 text-red-200 rounded-lg text-sm">{error}</div>}

      {/* Success */}
      {success && (
        <div className="p-3 bg-green-900 text-green-200 rounded-lg text-sm">
          ✅ Message sent successfully! I&apos;ll get back to you soon.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className={clsx(
          'w-full py-3 px-4 rounded-lg font-bold transition',
          'bg-accent hover:bg-accent-secondary text-dark',
          'disabled:opacity-50 disabled:cursor-not-allowed'
        )}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};
