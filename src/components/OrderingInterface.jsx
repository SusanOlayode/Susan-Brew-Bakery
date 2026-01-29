import React, { useState } from 'react';
import latteArt from '../assets/latte_art.png';
import pastryImg from '../assets/pastries.png';

const COFFEE_MENU = [
    { id: 1, name: 'Flat White', price: 4.50, description: 'Velvety microfoam over double espresso', image: latteArt, popular: true },
    { id: 2, name: 'Cappuccino', price: 4.25, description: 'Balance of espresso, steamed milk and foam', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Americano', price: 3.75, description: 'Double espresso with hot water', image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Spanish Latte', price: 5.25, description: 'Sweetened with condensed milk', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=400&q=80' },
];

const PASTRY_PAIRS = [
    { id: 101, name: 'Almond Croissant', price: 4.75, image: 'https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&fit=crop&w=400&q=80' },
    { id: 102, name: 'Blueberry Muffin', price: 3.50, image: 'https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&w=400&q=80' },
];

const OrderingInterface = () => {
    const [selectedCoffee, setSelectedCoffee] = useState(COFFEE_MENU[0]);
    const [cart, setCart] = useState([]);

    const handleCheckout = () => {
        const total = calculateTotal();
        const items = cart.map(item => `${item.name} ($${item.price.toFixed(2)})`).join(', ');
        const body = `Order Details: ${items}\nTotal: $${total}`;
        window.location.href = `mailto:masonzoe@gmail.com?subject=New Coffee Order from Susan's&body=${encodeURIComponent(body)}`;
    };
    const [customization, setCustomization] = useState({
        size: 'Medium',
        milk: 'Whole Milk',
        temp: 'Hot',
        shots: 2
    });

    const addToCart = (item, isCoffee = true) => {
        const cartItem = isCoffee ? {
            ...item,
            customization: { ...customization },
            cartId: Date.now()
        } : { ...item, cartId: Date.now() };

        setCart([...cart, cartItem]);
    };

    const removeFromCart = (cartId) => {
        setCart(cart.filter(item => item.cartId !== cartId));
    };

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column - Customization & Menu (8 Columns) */}
            <div className="lg:col-span-8 space-y-16">

                {/* Step 1: Selection */}
                <section id="menu-section">
                    <header className="mb-8">
                        <h3 className="text-4xl font-heading mb-4 text-espresso">Artisan Coffee</h3>
                        <p className="text-espresso-light opacity-60">Select your preference and craft your perfect cup.</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {COFFEE_MENU.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedCoffee(item)}
                                className={`group cursor-pointer p-6 rounded-large border-2 transition-all duration-500 overflow-hidden relative ${selectedCoffee?.id === item.id ? 'border-gold bg-white shadow-premium' : 'border-transparent bg-white hover:border-gold-light opacity-70 hover:opacity-100'}`}
                            >
                                <div className="flex gap-6 items-center">
                                    <div className="w-24 h-24 rounded-small overflow-hidden flex-shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                    <div>
                                        {item.popular && (
                                            <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1 block">Most Loved</span>
                                        )}
                                        <h4 className="text-xl font-heading text-espresso mb-1">{item.name}</h4>
                                        <p className="text-xs text-espresso-light opacity-60 mb-2">{item.description}</p>
                                        <span className="text-sm font-semibold">${item.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Step 2: Customization (The Bakery Bridge Side-by-side) */}
                {selectedCoffee && (
                    <section className="bg-white rounded-large p-10 shadow-premium border border-cream transition-all animate-fade-in-up">
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">

                            {/* Coffee Mods */}
                            <div>
                                <h4 className="text-2xl font-heading mb-8">Personalize Selection</h4>

                                <div className="space-y-8">
                                    {/* Size Selection */}
                                    <div>
                                        <label className="text-xs uppercase tracking-widest font-bold text-espresso-light block mb-4">Volume</label>
                                        <div className="flex gap-4">
                                            {['Small', 'Medium', 'Large'].map(size => (
                                                <button
                                                    key={size}
                                                    onClick={() => setCustomization({ ...customization, size })}
                                                    className={`flex-1 py-3 px-4 rounded-small text-xs font-semibold uppercase tracking-widest transition-all ${customization.size === size ? 'bg-espresso text-white shadow-premium' : 'bg-cream-off text-espresso-light hover:bg-cream border border-transparent'}`}
                                                >
                                                    {size}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Milk Selection */}
                                    <div>
                                        <label className="text-xs uppercase tracking-widest font-bold text-espresso-light block mb-4">Dairy & Alternatives</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {['Whole Milk', 'Oat Milk', 'Almond Milk', 'Soy Milk'].map(milk => (
                                                <button
                                                    key={milk}
                                                    onClick={() => setCustomization({ ...customization, milk })}
                                                    className={`py-3 px-4 rounded-small text-xs font-semibold transition-all border ${customization.milk === milk ? 'border-gold text-espresso bg-gold-light bg-opacity-10' : 'border-cream text-espresso-light hover:border-gold-light'}`}
                                                >
                                                    {milk}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => addToCart(selectedCoffee)}
                                    className="w-full mt-10 btn-primary"
                                >
                                    Add to Order — ${selectedCoffee.price.toFixed(2)}
                                </button>
                            </div>

                            {/* The Bakery Bridge (Frequently Paired With) */}
                            <div className="xl:border-l xl:pl-12 border-cream">
                                <h4 className="text-2xl font-heading mb-8">Frequently Paired With</h4>
                                <div className="space-y-6">
                                    {PASTRY_PAIRS.map(pastry => (
                                        <div key={pastry.id} className="flex gap-4 items-center p-4 rounded-large hover:bg-cream-off transition-colors group">
                                            <div className="w-16 h-16 rounded-small overflow-hidden flex-shrink-0">
                                                <img src={pastry.image} alt={pastry.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="font-heading text-lg">{pastry.name}</h5>
                                                <p className="text-xs text-espresso-light font-semibold">${pastry.price.toFixed(2)}</p>
                                            </div>
                                            <button
                                                onClick={() => addToCart(pastry, false)}
                                                className="w-8 h-8 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all transform group-hover:scale-110"
                                            >
                                                +
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 p-6 bg-cream-off rounded-large text-center">
                                    <p className="text-xs text-espresso-light font-body leading-relaxed">
                                        "The Almond Croissant pairs exceptionally well with our Flat White, cutting through the creamy milk with subtle nuttiness."
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>
                )}
            </div>

            {/* Right Column - Sticky Sidebar Summary (4 Columns) */}
            <div className="lg:col-span-4 sticky top-28">
                <div className="bg-espresso text-white rounded-large p-8 shadow-premium overflow-hidden relative">
                    {/* Subtle Decor */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>

                    <h3 className="text-2xl font-heading mb-8 flex justify-between items-end border-b border-white border-opacity-10 pb-6">
                        Your Selection
                        <span className="text-xs font-sans font-normal opacity-60">{cart.length} Items</span>
                    </h3>

                    <div className="space-y-6 mb-10 min-h-[100px] max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                        {cart.length === 0 ? (
                            <div className="text-center py-8 opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                <p className="text-sm">Start building your morning ritual</p>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div key={item.cartId} className="group animate-fade-in">
                                    <div className="flex justify-between items-start mb-1">
                                        <h5 className="font-heading text-lg group-hover:text-gold transition-colors">{item.name}</h5>
                                        <button onClick={() => removeFromCart(item.cartId)} className="text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-red-400">Remove</button>
                                    </div>
                                    {item.customization ? (
                                        <p className="text-xs text-cream-off opacity-60 leading-relaxed font-body">
                                            {item.customization.size} • {item.customization.milk} • {item.customization.temp} • {item.customization.shots} Shots
                                        </p>
                                    ) : (
                                        <p className="text-xs text-cream-off opacity-60">Fresh Bakery Selection</p>
                                    )}
                                    <div className="mt-2 text-right">
                                        <span className="text-sm font-semibold">${item.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Human Readable Summary */}
                    {cart.length > 0 && (
                        <div className="bg-white bg-opacity-5 rounded-small p-4 mb-8 border border-white border-opacity-5">
                            <p className="text-xs text-cream-off opacity-80 italic leading-relaxed">
                                "You've selected {cart.length} artisan items. Your {cart[0].name} will be prepared fresh with {cart[0].customization?.milk.toLowerCase() || 'no modifications'}."
                            </p>
                        </div>
                    )}

                    <div className="space-y-3 pt-6 border-t border-white border-opacity-10 text-sm">
                        <div className="flex justify-between opacity-60">
                            <span>Subtotal</span>
                            <span>${calculateTotal()}</span>
                        </div>
                        <div className="flex justify-between items-center text-xl font-heading pt-4">
                            <span>Total</span>
                            <span className="text-gold">${calculateTotal()}</span>
                        </div>
                    </div>

                    <button
                        onClick={handleCheckout}
                        className="w-full mt-10 bg-gold hover:bg-gold-muted text-white py-4 rounded-small font-bold text-sm uppercase tracking-[0.2em] shadow-premium transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={cart.length === 0}
                    >
                        Secure Checkout
                    </button>

                    <p className="text-[10px] text-center mt-6 opacity-40 uppercase tracking-widest">
                        Average Pickup Time: 5-8 Minutes
                    </p>
                </div>
            </div>

        </div>
    );
};

export default OrderingInterface;
