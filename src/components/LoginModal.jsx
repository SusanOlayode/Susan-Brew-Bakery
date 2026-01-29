import React, { useState } from 'react';

const LoginModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (!isOpen) return null;

    const handleLogin = (e) => {
        e.preventDefault();
        onClose();
        alert('Welcome back, Sue!');
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-espresso bg-opacity-80 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-large w-full max-w-md overflow-hidden shadow-premium transition-all transform animate-fade-in-up">
                {/* Header */}
                <div className="bg-espresso p-8 text-white relative">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-cream-off opacity-60 hover:opacity-100 transition-opacity"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h3 className="text-3xl font-heading mb-2">Welcome Back</h3>
                    <p className="text-cream-off opacity-60 text-sm">Join the ritual, savor the moment.</p>
                </div>

                {/* Body */}
                <div className="p-8 space-y-6">
                    {/* Social Logic */}
                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center gap-3 py-3 border border-cream rounded-small hover:bg-cream-off transition-colors text-xs font-semibold uppercase tracking-widest">
                            <svg className="h-4 w-4" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Gmail
                        </button>
                        <button className="flex items-center justify-center gap-3 py-3 border border-cream rounded-small hover:bg-cream-off transition-colors text-xs font-semibold uppercase tracking-widest text-espresso">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Email
                        </button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-cream"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase tracking-widest">
                            <span className="px-4 bg-white text-espresso-light opacity-40 italic">or continue with</span>
                        </div>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-espresso-light ml-1">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-5 py-4 bg-cream-off border-none rounded-small text-sm focus:ring-1 focus:ring-gold outline-none transition-all"
                                placeholder="sue@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-espresso-light ml-1">Password</label>
                            <input
                                type="password"
                                required
                                className="w-full px-5 py-4 bg-cream-off border-none rounded-small text-sm focus:ring-1 focus:ring-gold outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full btn-primary py-4 text-sm mt-4 shadow-premium hover:shadow-premium-hover transition-all"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-center text-xs text-espresso-light opacity-60">
                        Don't have an account? <span className="text-gold cursor-pointer hover:underline font-semibold">Join Loyalty</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
