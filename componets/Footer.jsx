'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-10 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* About / Logo */}
                <div>
                    <h2 className="text-2xl font-bold text-yellow-500 mb-4">Ristel Gold</h2>
                    <p className="text-sm leading-relaxed">
                        Discover exquisite craftsmanship with Ristel Gold. Premium gold jewelry for every occasion. Elegance in every piece.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/" className="hover:text-yellow-500">Home</Link></li>
                        <li><Link href="/products" className="hover:text-yellow-500">Products</Link></li>
                        <li><Link href="/about" className="hover:text-yellow-500">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-500">Contact</Link></li>
                    </ul>
                </div>

                {/* Customer Service */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
                    <ul className="space-y-2">
                        <li><Link href="/faq" className="hover:text-yellow-500">FAQ</Link></li>
                        <li><Link href="/shipping" className="hover:text-yellow-500">Shipping & Returns</Link></li>
                        <li><Link href="/terms" className="hover:text-yellow-500">Terms & Conditions</Link></li>
                        <li><Link href="/privacy" className="hover:text-yellow-500">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>

                    <Link href="/admin-login" >
                        <button className="bg-yellow-500 p-5 text-black font-semibold py-2 rounded hover:bg-yellow-600 transition">
                            Admin
                        </button>
                    </Link>


                </div>
            </div>

            {/* Bottom */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Ristel Gold. All rights reserved.
            </div>
        </footer>
    );
}
