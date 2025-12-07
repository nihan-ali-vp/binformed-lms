import React from 'react';
import { motion } from 'framer-motion';
import {
  BarChart3,
  Database,
  FileSpreadsheet,
  Search,
  Bot,
  Github,
  Cloud,
  Sigma,
  Code2
} from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  desc: string;
}

const Curriculum: React.FC = () => {
  const technologies: TechItem[] = [
    { name: 'Power BI', icon: <BarChart3 className="w-8 h-8 text-yellow-500" />, desc: 'Master dashboarding & DAX' },
    { name: 'Excel', icon: <FileSpreadsheet className="w-8 h-8 text-green-500" />, desc: 'Advanced formulas & Macros' },
    { name: 'SQL', icon: <Database className="w-8 h-8 text-blue-400" />, desc: 'Querying & Database Management' },
    { name: 'EDA', icon: <Search className="w-8 h-8 text-red-400" />, desc: 'Exploratory Data Analysis' },
    { name: 'ChatGPT', icon: <Bot className="w-8 h-8 text-teal-400" />, desc: 'AI-driven workflow optimization' },
    { name: 'GitHub', icon: <Github className="w-8 h-8 text-white" />, desc: 'Version Control & Portfolios' },
    { name: 'Azure', icon: <Cloud className="w-8 h-8 text-blue-600" />, desc: 'Cloud Data Fundamentals' },
    { name: 'Statistics', icon: <Sigma className="w-8 h-8 text-purple-500" />, desc: 'Foundation of Analytics' },
    { name: 'Python', icon: <Code2 className="w-8 h-8 text-yellow-300" />, desc: 'Scripting & Automation' },
  ];

  return (
    <section id="curriculum" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-900/10 -skew-x-12 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Core <span className="text-brand-500">Curriculum</span>
            </h2>
            <p className="text-slate-400 text-lg">
              We cover the end-to-end data stack. Whether you are starting from scratch or upskilling, our modules are designed for practical application.
            </p>
          </div>
          <button className="hidden md:block text-brand-400 font-semibold hover:text-brand-300 transition-colors">
            Download Syllabus &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl flex items-start gap-4 hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10 cursor-default transition-all group"
            >
              <div className="p-3 bg-slate-950 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-slate-700">
                {tech.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{tech.name}</h3>
                <p className="text-sm text-slate-400">{tech.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="text-brand-400 font-semibold hover:text-brand-300 transition-colors">
            Download Syllabus &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;