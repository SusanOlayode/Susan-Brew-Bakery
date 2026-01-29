import React from 'react';

const Navbar = ({ activeTab, setActiveTab, isScrolled }) => {
    const tabs = ['Full Menu', 'Pastry Box', 'My Recent Orders', 'Find a Shop'];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-premium py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                {/* Brand */}
                <div className="flex items-center gap-12">
                    <div className="cursor-pointer group">
                        <h1 className={`font-heading text-2xl transition-colors duration-500 ${isScrolled ? 'text-espresso' : 'text-white'}`}>
                            Susan's
                        </h1>
                        <p className={`text-[10px] uppercase tracking-[0.2em] -mt-1 transition-colors duration-500 ${isScrolled ? 'text-espresso-light opacity-60' : 'text-cream-off opacity-80'}`}>
                            Brew & Bakery
                        </p>
                    </div>

                    {/* Integrated Navigation Tabs */}
                    <div className="hidden lg:flex items-center gap-10">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`nav-link text-xs uppercase tracking-widest ${activeTab === tab ? 'active' : ''} ${isScrolled ? 'text-espresso-light' : 'text-cream-off'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Hub - Universal Experience */}
                <div className="flex items-center gap-6">
                    <button className={`flex items-center gap-2 text-xs font-medium uppercase tracking-widest transition-colors ${isScrolled ? 'text-espresso-light hover:text-espresso' : 'text-cream-off hover:text-white'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        Sign In
                    </button>

                    <button className="bg-gold hover:bg-gold-muted text-white px-6 py-2.5 rounded-small text-xs font-semibold uppercase tracking-widest shadow-premium transition-all">
                        Join Loyalty
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
