import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OrderingInterface from './components/OrderingInterface';
import LiveSupport from './components/LiveSupport';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('Full Menu');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cream-off">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} isScrolled={isScrolled} />
      <Hero />
      <main id="menu" className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <OrderingInterface />
      </main>
      <LiveSupport />
      <Footer />
    </div>
  );
}

export default App;
