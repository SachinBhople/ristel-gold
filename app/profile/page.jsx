'use client';
import React, { useState } from 'react';

export default function UserProfilePage() {
    const [formData, setFormData] = useState({
        name: 'Sachin Bhople',
        email: 'sachin@example.com',
        phone: '9876543210',
        address: 'Aurangabad, Maharashtra',
    });

    const handleChange = () => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        e.preventDefault();
        console.log('Updated Profile:', formData);
        alert('Profile updated!');
    };

    return (
        <div className="max-w-md mx-auto px-3 py-6 bg-slate-50 mt-36">
            <h2 className="text-xl font-bold text-yellow-800 mb-4">My Profile</h2>

            <form onSubmit={handleSubmit} className="bg-white shadow rounded p-4 space-y-4 border border-yellow-200">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-xs font-medium text-yellow-700 mb-1">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full text-sm border border-yellow-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-xs font-medium text-yellow-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full text-sm border border-yellow-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-yellow-700 mb-1">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full text-sm border border-yellow-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                    />
                </div>

                {/* Address */}
                <div>
                    <label htmlFor="address" className="block text-xs font-medium text-yellow-700 mb-1">
                        Address
                    </label>
                    <textarea
                        name="address"
                        rows={2}
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full text-sm border border-yellow-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium px-4 py-1.5 rounded transition"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
}
