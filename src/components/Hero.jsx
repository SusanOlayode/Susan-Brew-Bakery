import React from 'react';
import heroImg from '../assets/hero_bg.png';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax-like overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImg}
                    alt="Premium Coffee Shop Interior"
                    className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 hero-gradient"></div>
            </div>

            {/* Hero Content Hub */}
            <div className="relative z-10 text-center px-8 max-w-5xl">
                <div className="animate-fade-in-up">
                    <span className="inline-block text-gold-light text-sm font-semibold uppercase tracking-[0.4em] mb-6">
                        EST. 2015 • Crafting Excellence
                    </span>
                    <h2 className="text-white text-6xl lg:text-8xl font-heading leading-tight mb-8">
                        Welcome to <br />
                        <span className="text-gold">Susan’s Brew & Bakery</span>
                    </h2>
                    <p className="text-cream-off text-lg lg:text-xl font-body max-w-2xl mx-auto mb-12 opacity-90 leading-relaxed">
                        Experience the art of artisanal roasting and fresh-baked perfection.
                        Designed for the connoisseur, built for your morning ritual.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="#menu-section" className="btn-primary w-full sm:w-auto">
                            Full Menu
                        </a>
                        <a href="#pastry-section" className="btn-outline w-full sm:w-auto">
                            Pastry Box
                        </a>
                        <a href="#orders-section" className="btn-outline w-full sm:w-auto">
                            My Orders
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
                <a href="#menu-section" className="flex flex-col items-center gap-2">
                    <span className="text-[10px] text-white uppercase tracking-[0.2em]">Scroll to Menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;
