import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-600/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-brand-300 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Next cohort starts soon
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          Learn <span className="text bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">Smarter</span>, Not <br className="hidden md:block" /> Harder.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Empowering you with skills that matter — from mastering Power BI, SQL, and Python to building a strong resume and acing your next interview.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a
            href="#curriculum"
            className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-500/25 flex items-center gap-2 group w-full sm:w-auto justify-center"
          >
            Explore Courses
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold transition-all border border-slate-700 w-full sm:w-auto justify-center flex"
          >
            Career Guidance
          </a>
        </motion.div>

        {/* Floater Icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-1/3 left-10 md:left-20 hidden lg:block opacity-30"
        >
          <Brain className="w-16 h-16 text-brand-400" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/4 right-10 md:right-20 hidden lg:block opacity-30"
        >
          <Zap className="w-16 h-16 text-yellow-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;