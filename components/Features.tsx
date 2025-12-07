import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Laptop, Trophy, Target, Sparkles } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Laptop className="w-8 h-8 text-brand-400" />,
      title: "Tech Skills",
      description: "Master the tools that open doors. Practical, project-based learning in Power BI, SQL, Python and more.",
      color: "from-blue-500/20 to-blue-600/5"
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      title: "Career Guidance",
      description: "Get results with personalized coaching, roadmap planning, and industry insider tips.",
      color: "from-emerald-500/20 to-emerald-600/5"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      title: "Resume & Interview",
      description: "Build a strong resume that stands out and practice mocks to ace your next big interview.",
      color: "from-purple-500/20 to-purple-600/5"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Everything you need to <span className="text-brand-400">succeed</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Binformed is your space for smart, practical learning. We don't just teach theory; we prepare you for the job.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -10 }}
              className={`p-8 rounded-2xl bg-gradient-to-b ${feature.color} border border-slate-800 backdrop-blur-sm hover:border-slate-600 transition-all duration-300`}
            >
              <div className="bg-slate-900/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-slate-700">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-800 pt-12">
            {[
                { label: "Students Mentored", value: "500+" },
                { label: "Job Offers", value: "92%" },
                { label: "Practical Projects", value: "50+" },
                { label: "Rating", value: "4.9/5" },
            ].map((stat, i) => (
                <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Features;