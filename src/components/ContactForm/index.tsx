import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        'service_xxxxxxx', // Service ID from EmailJS
        'template_xxxxxxx', // Template ID from EmailJS
        e.currentTarget,
        'xxxxxxxxxxxxxx' // Public Key from EmailJS
      );
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-white mb-2 font-mono">Name</label>
        <input
          type="text"
          name="from_name"
          id="name"
          required
          className="w-full px-4 py-2 bg-black/50 text-white rounded-lg
            border border-purple-500/20 focus:border-purple-500/50
            focus:ring-2 focus:ring-purple-500/20 focus:outline-none
            transition-all duration-300"
          placeholder="Your name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-white mb-2 font-mono">Email</label>
        <input
          type="email"
          name="reply_to"
          id="email"
          required
          className="w-full px-4 py-2 bg-black/50 text-white rounded-lg
            border border-purple-500/20 focus:border-purple-500/50
            focus:ring-2 focus:ring-purple-500/20 focus:outline-none
            transition-all duration-300"
          placeholder="your@email.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-white mb-2 font-mono">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-2 bg-black/50 text-white rounded-lg
            border border-purple-500/20 focus:border-purple-500/50
            focus:ring-2 focus:ring-purple-500/20 focus:outline-none
            transition-all duration-300 resize-none"
          placeholder="Your message..."
        />
      </div>

      {status && (
        <div className={`text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
          {status === 'success' 
            ? 'Message sent successfully!' 
            : 'Failed to send message. Please try again.'}
        </div>
      )}
      
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-purple-600 text-white py-3 rounded-lg
          hover:bg-purple-700 transition-colors duration-300
          focus:outline-none focus:ring-2 focus:ring-purple-500/50
          disabled:opacity-50 disabled:cursor-not-allowed
          flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}