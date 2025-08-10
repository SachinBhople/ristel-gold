'use client';
import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const SuccessPage = () => {
    const { width, height } = useWindowSize();

    useEffect(() => {
        // You could send order completion logic here
        console.log("Order placed successfully!");
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-white px-4">
            <Confetti width={width} height={height} />

            <CheckCircle size={100} className="text-green-600 mb-6 animate-bounce" />

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
                Thank You for Your Purchase!
            </h1>

            <p className="mt-4 text-gray-600 text-center max-w-lg">
                Your order has been successfully placed. You’ll receive a confirmation email shortly.
            </p>

            <Link href="/">
                <button className="mt-8 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 transition text-white font-semibold rounded-full shadow-lg">
                    Continue Shopping
                </button>
            </Link>
        </div>
    );
};

export default SuccessPage;
