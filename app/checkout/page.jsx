'use client';

import Link from 'next/link';
import React from 'react';

const CheckoutPage = () => {
    const dummyCart = [
        {
            id: 1,
            name: '22K Gold Necklace',
            price: 72000,
            quantity: 1,
        },
        {
            id: 2,
            name: '24K Gold Ring',
            price: 22000,
            quantity: 2,
        },
    ];

    const subtotal = dummyCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-[#fdf6e3] py-10 px-4 md:px-10">
            <h1 className="text-4xl font-bold text-yellow-800 text-center mb-10">
                Checkout
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Billing & Shipping Form */}
                <div className="bg-white rounded-xl shadow-md p-6 space-y-6 border border-yellow-200">
                    <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
                        Billing & Shipping Information
                    </h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="p-3 border border-gray-300 rounded-md w-full placeholder-black"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="p-3 border border-gray-300 rounded-md w-full placeholder-black"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="p-3 border border-gray-300 rounded-md w-full placeholder-black"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="p-3 border border-gray-300 rounded-md w-full placeholder-black"
                        />
                        <input
                            type="text"
                            placeholder="Address Line 1"
                            className="p-3 border border-gray-300 rounded-md w-full placeholder-black"
                        />
                        <input
                            type="text"
                            placeholder="Address Line 2"
                            className="p-3 border border-gray-300 rounded-md w-full placeholder-black"
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="City"
                                className="p-3 border border-gray-300 rounded-md w-full placeholder-black"
                            />
                            <input
                                type="text"
                                placeholder="State"
                                className="p-3 border border-gray-300 rounded-md w-full placeholder-black"
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Pincode"
                                className="p-3 border border-gray-300 rounded-md w-full placeholder-black"
                            />
                            <input
                                type="text"
                                placeholder="Country"
                                className="p-3 border border-gray-300 rounded-md w-full placeholder-black"
                            />
                        </div>
                    </form>

                </div>

                {/* Order Summary */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-yellow-200">
                    <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
                        Order Summary
                    </h2>
                    <div className="space-y-4">
                        {dummyCart.map((item) => (
                            <div key={item.id} className="flex justify-between">
                                <div>
                                    <p className="font-medium text-yellow-800">{item.name}</p>
                                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                </div>
                                <p className="text-yellow-700 font-semibold">
                                    ₹ {(item.price * item.quantity).toLocaleString()}
                                </p>
                            </div>
                        ))}
                        <hr />
                        <div className="flex justify-between font-semibold text-yellow-800">
                            <span>Subtotal</span>
                            <span>₹ {subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-green-700 font-medium">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold text-yellow-900 pt-4 border-t">
                            <span>Total</span>
                            <span>₹ {subtotal.toLocaleString()}</span>
                        </div>
                        <Link href="/order-success">
                            <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg mt-6 transition">
                                Place Order
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
