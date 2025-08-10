'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

    return (
        <div className="min-h-screen px-4 py-6 bg-yellow-50 mt-10">
            <h1 className="text-2xl font-bold mb-6 text-center text-yellow-900">
                Your Cart
            </h1>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Cart Items */}
                <div className="md:col-span-2 space-y-4">
                    {dummyCart.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col md:flex-row items-center bg-white shadow-sm rounded-lg p-4"
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={100}
                                height={100}
                                className="object-cover rounded-md"
                            />
                            <div className="md:ml-6 mt-4 md:mt-0 flex-1 w-full">
                                <h2 className="text-lg font-semibold text-yellow-800">
                                    {item.name}
                                </h2>
                                <p className="text-gray-600">₹ {item.price.toLocaleString()}</p>

                                <div className="flex items-center mt-2 space-x-2">
                                    <button className="w-8 h-8 text-lg font-bold text-yellow-800 bg-yellow-200 rounded hover:bg-yellow-300">
                                        -
                                    </button>
                                    <span className="px-2">{item.quantity}</span>
                                    <button className="w-8 h-8 text-lg font-bold text-yellow-800 bg-yellow-200 rounded hover:bg-yellow-300">
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="text-right mt-4 md:mt-0">
                                <p className="text-gray-700 font-medium">
                                    ₹ {(item.price * item.quantity).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Section */}
                <div className="bg-white shadow-sm rounded-lg p-4 h-fit">
                    <h2 className="text-lg font-bold text-yellow-800 mb-4">Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span className='text-yellow-300'>Subtotal</span>
                        <span className='text-yellow-300'>₹ {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className='text-yellow-300'>Shipping</span>
                        <span className="text-green-600">Free</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-semibold text-yellow-900 text-lg">
                        <span>Total</span>
                        <span>₹ {subtotal.toLocaleString()}</span>
                    </div>
                    <Link href="/checkout">
                        <button className="w-full mt-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-md">
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
