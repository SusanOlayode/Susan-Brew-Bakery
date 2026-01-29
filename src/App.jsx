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

      {/* Order History Placeholder Section */}
      <section id="orders-section" className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading text-espresso mb-4">Your Order History</h3>
            <p className="text-espresso-light opacity-60">Track your past rituals and favorite brews.</p>
          </div>
          <div className="bg-white rounded-large p-12 shadow-premium text-center border border-cream transition-all hover:shadow-premium-hover">
            <div className="w-20 h-20 bg-cream-off rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-espresso-light opacity-60 italic mb-4">No recent orders found.</p>
            <p className="text-sm font-body max-w-md mx-auto">Once you complete your first order, your history will appear here for easy re-ordering and tracking.</p>
          </div>
        </div>
      </section>

      <LiveSupport />
      <Footer />
    </div>
  );
}

export default App;
