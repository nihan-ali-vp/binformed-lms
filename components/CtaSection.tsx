import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, Loader, User, Phone, Briefcase } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS - Replace with your actual Service ID
emailjs.init('0XYZSTfH3umuQq2U6');

const CtaSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      // Validate form fields
      if (!formData.name || !formData.email || !formData.interest) {
        setMessage({ type: 'error', text: 'Please fill in all required fields.' });
        setIsLoading(false);
        return;
      }

      if (!formData.email.includes('@')) {
        setMessage({ type: 'error', text: 'Please enter a valid email address.' });
        setIsLoading(false);
        return;
      }

      // Send email using EmailJS with template variables
      const response = await emailjs.send(
        'service_d0u786a',
        'template_i3rfjrt',
        {
          email: formData.email,
          name: formData.name,
          phone: formData.phone || 'Not provided',
          interest: formData.interest,
          title: 'New Waitlist Signup',
          message: `New user joined the waitlist:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'Not provided'}\nInterest: ${formData.interest}`,
        },
        '0XYZSTfH3umuQq2U6'
      );

      console.log('EmailJS Success:', response);
      setMessage({ type: 'success', text: 'Successfully joined the waitlist! Check your email.' });
      setFormData({ name: '', email: '', phone: '', interest: '' });
    } catch (error: any) {
      console.error('EmailJS error details:', error);
      const errorMessage = error?.text || error?.message || 'Failed to join waitlist. Please try again.';
      setMessage({ type: 'error', text: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="join" className="py-24 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900 to-slate-900 -z-20"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 -z-10"></div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to accelerate your career?
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Stay tuned for tutorials, guides, and insider tips that help you grow faster. Join the Binformed community today.
            </p>

            <form onSubmit={handleSubmit} ref={formRef} className="space-y-6 max-w-2xl mx-auto mb-8">
              {/* Name Input */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your phone (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                />
              </div>

              {/* Interest/Course Select */}
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 z-10 pointer-events-none" />
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-4 bg-slate-950 border border-slate-600 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select your interest</option>
                  <option value="Data Analytics">Data Analytics</option>
                  <option value="Business Intelligence">Business Intelligence</option>
                  <option value="Data Science">Data Science</option>
                  <option value="SQL Fundamentals">SQL Fundamentals</option>
                  <option value="Career Services">Career Services</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-brand-600 hover:bg-brand-500 disabled:bg-brand-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-900/50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    Joining Waitlist...
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </form>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 px-4 py-3 rounded-lg text-sm font-medium ${
                  message.type === 'success'
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}
              >
                {message.text}
              </motion.div>
            )}

            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>Free weekly tips</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>Exclusive webinars</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-400" />
                <span>No spam, ever</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;