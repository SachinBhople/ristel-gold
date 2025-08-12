'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: 'admin@example.com',
        password: 'admin123',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Dummy check
        if (formData.email === 'admin@example.com' && formData.password === 'admin123') {
            router.push('/admin/home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-300">
            <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-yellow-800">Admin Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your admin email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-all"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
