import React from 'react';
import { Rocket, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">Binformed</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Binformed helps students and professionals learn smarter — not harder. Empowering you with skills that matter.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-500 hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Learning</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Business Intelligence</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Data Science</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">SQL Fundamentals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Career Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Resume Building</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Interview Prep</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Portfolio Review</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">1-on-1 Coaching</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>info@binformed.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Binformed. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;