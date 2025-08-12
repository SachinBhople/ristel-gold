'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTrashAlt } from 'react-icons/fa';

const dummyCart = [
    {
        id: 1,
        name: '22K Gold Necklace',
        price: 29999,
        quantity: 1,
        image: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
    {
        id: 2,
        name: 'Gold Ring',
        price: 8999,
        quantity: 2,
        image: 'https://i.imgur.com/O1RmFWTl.jpg',
    },
];

const CartPage = () => {
    const subtotal = dummyCart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleDelete = (id) => {
        console.log(`Delete item with id: ${id}`);
        // Here you would update the cart state
    };

    return (
        <div className="min-h-screen px-4 sm:px-6 lg:px-10 py-8 bg-gradient-to-b from-yellow-50 to-yellow-100 mt-20">
            <h1 className="text-3xl font-extrabold mb-8 text-center text-yellow-900 tracking-wide">
                🛒 Your Shopping Cart
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Cart Items */}
                <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-6 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-300">
                    {dummyCart.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col sm:flex-row items-center bg-white border border-yellow-100 rounded-lg p-4 hover:shadow-md transition-shadow relative"
                        >
                            {/* Delete Button */}
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="absolute top-4 right-4 sm:static sm:ml-auto sm:order-last sm:mt-0 text-red-500 hover:text-red-600 bg-red-100 hover:bg-red-200 p-2 rounded-full shadow-sm transition"
                                aria-label="Delete item"
                            >
                                <FaTrashAlt className="w-4 h-4" />
                            </button>

                            {/* Product Image */}
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={120}
                                height={120}
                                className="object-cover rounded-md shadow-sm"
                            />

                            {/* Product Details */}
                            <div className="sm:ml-6 mt-4 sm:mt-0 flex-1 w-full">
                                <h2 className="text-lg font-semibold text-yellow-800">
                                    {item.name}
                                </h2>
                                <p className="text-gray-600">₹ {item.price.toLocaleString()}</p>

                                {/* Quantity Control */}
                                <div className="flex items-center mt-3 space-x-2">
                                    <button className="w-8 h-8 text-lg font-bold text-yellow-800 bg-yellow-200 rounded-full hover:bg-yellow-300 shadow-sm transition">
                                        -
                                    </button>
                                    <span className="px-3 font-medium">{item.quantity}</span>
                                    <button className="w-8 h-8 text-lg font-bold text-yellow-800 bg-yellow-200 rounded-full hover:bg-yellow-300 shadow-sm transition">
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="text-right mt-4 sm:mt-0 mx-5">
                                <p className="text-gray-700 font-medium text-lg">
                                    ₹ {(item.price * item.quantity).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Section */}
                <div className="bg-white shadow-lg rounded-xl p-6 sticky top-20 self-start">
                    <h2 className="text-xl font-bold text-yellow-800 mb-6">Summary</h2>

                    <div className="flex justify-between mb-3">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium text-gray-800">₹ {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-600">Shipping</span>
                        <span className="text-green-600 font-medium">Free</span>
                    </div>

                    <hr className="my-4 border-yellow-200" />

                    <div className="flex justify-between text-lg font-bold text-yellow-900">
                        <span>Total</span>
                        <span>₹ {subtotal.toLocaleString()}</span>
                    </div>

                    <Link href="/checkout">
                        <button className="w-full mt-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition transform hover:scale-105">
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default CartPage;
