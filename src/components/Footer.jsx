import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-espresso text-cream-off py-20">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    <div className="md:col-span-4">
                        <h4 className="font-heading text-3xl mb-6">Susan’s</h4>
                        <p className="text-sm opacity-60 leading-relaxed max-w-xs mb-8">
                            Crafting premium morning rituals since 2015. Every bean is ethically sourced, every pastry is hand-rolled.
                        </p>
                        <div className="flex gap-4">
                            {['Instagram', 'Twitter', 'Facebook'].map(social => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white border-opacity-20 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-4 h-4 bg-white opacity-20"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h5 className="text-xs uppercase tracking-widest font-bold mb-6 text-gold">Explore</h5>
                        <ul className="space-y-4 text-sm opacity-60">
                            <li><a href="#" className="hover:text-gold transition-colors">Menu</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Locations</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Wholesale</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h5 className="text-xs uppercase tracking-widest font-bold mb-6 text-gold">Support</h5>
                        <ul className="space-y-4 text-sm opacity-60">
                            <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gold transition-colors">Terms</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h5 className="text-xs uppercase tracking-widest font-bold mb-6 text-gold">The Weekly Sip</h5>
                        <p className="text-sm opacity-60 mb-6">Join our loyalty club for exclusive recipes and early access to seasonal bakes.</p>
                        <div className="flex p-1 bg-white bg-opacity-10 rounded-small border border-white border-opacity-10">
                            <input type="email" placeholder="Email Address" className="bg-transparent border-none text-white px-4 flex-1 text-sm outline-none" />
                            <button className="bg-white text-espresso px-6 py-2 rounded-small text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors">Sub</button>
                        </div>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-white border-opacity-10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 text-[10px] uppercase tracking-widest">
                    <p>© 2026 Susan’s Brew & Bakery. All rights reserved.</p>
                    <div className="flex gap-10">
                        <a href="#">Security</a>
                        <a href="#">Accessibility</a>
                        <a href="#">Sustainability</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
