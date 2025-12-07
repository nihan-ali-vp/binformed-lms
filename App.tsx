import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Curriculum />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;