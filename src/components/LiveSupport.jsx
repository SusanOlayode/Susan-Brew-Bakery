import React, { useState } from 'react';

const LiveSupport = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-10 right-10 z-[100]">
            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-96 glass-card rounded-large overflow-hidden transition-all duration-500 animate-fade-in-up">
                    <div className="bg-espresso p-6 flex justify-between items-center text-white">
                        <div className="flex gap-4 items-center">
                            <div className="w-10 h-10 rounded-full bg-gold-light bg-opacity-20 flex items-center justify-center border border-gold-light border-opacity-30">
                                <span className="text-gold font-bold">B</span>
                            </div>
                            <div>
                                <h5 className="font-heading text-lg">Live Support</h5>
                                <p className="text-[10px] uppercase tracking-widest opacity-60">Barista Online · 1m reply</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="opacity-60 hover:opacity-100 p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="h-80 p-6 bg-cream-off overflow-y-auto custom-scrollbar flex flex-col gap-4">
                        <div className="self-start bg-white p-4 rounded-large rounded-tl-none shadow-sm text-sm text-espresso border border-cream">
                            Hi there! Welcome to Susan's. Any questions about our coffee beans or today's fresh bakes?
                        </div>
                        <div className="self-end bg-espresso text-white p-4 rounded-large rounded-tr-none shadow-sm text-sm">
                            Does the Almond Croissant contain gluten?
                        </div>
                        <div className="self-start bg-white p-4 rounded-large rounded-tl-none shadow-sm text-sm text-espresso border border-cream">
                            Yes, our croissants are made with traditional wheat flour. We do have a Gluten-Free Flourless Cocoa Cake today!
                        </div>
                    </div>

                    <div className="p-4 bg-white border-t border-cream flex gap-4">
                        <input
                            type="text"
                            placeholder="Ask our Barista..."
                            className="flex-1 bg-cream-off border-none rounded-small px-4 text-sm focus:ring-1 focus:ring-gold outline-none"
                        />
                        <button className="bg-espresso text-white w-10 h-10 rounded-small flex items-center justify-center hover:bg-gold transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-espresso text-white rounded-full flex items-center justify-center shadow-premium hover:shadow-premium-hover hover:bg-gold transition-all duration-300 group animate-pulse-soft"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full border-2 border-white"></span>
            </button>
        </div>
    );
};

export default LiveSupport;
