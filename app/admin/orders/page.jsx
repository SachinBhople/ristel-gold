'use client';
import React, { useState } from 'react';

export default function OrdersPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        orderId: '',
        customerName: '',
        product: '',
        quantity: '',
        status: 'Pending',
        date: ''
    });

    // Mock orders list
    const [orders, setOrders] = useState([
        { orderId: 'ORD001', customerName: 'John Doe', product: 'Gold Necklace', quantity: 1, status: 'Delivered', date: '2025-08-01' },
        { orderId: 'ORD002', customerName: 'Jane Smith', product: 'Silver Ring', quantity: 2, status: 'Pending', date: '2025-08-05' },
    ]);

    // Handle form change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setOrders([...orders, formData]);
        setIsOpen(false);
        setFormData({
            orderId: '',
            customerName: '',
            product: '',
            quantity: '',
            status: 'Pending',
            date: ''
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}

                {/* Orders Table */}
                <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                    <table className="w-full border-collapse text-sm sm:text-base">
                        <thead className="bg-gradient-to-r from-blue-100 to-indigo-100">
                            <tr>
                                <th className="px-6 py-3 text-left font-semibold text-gray-700">Order ID</th>
                                <th className="px-6 py-3 text-left font-semibold text-gray-700">Customer</th>
                                <th className="px-6 py-3 text-left font-semibold text-gray-700">Product</th>
                                <th className="px-6 py-3 text-left font-semibold text-gray-700">Qty</th>
                                <th className="px-6 py-3 text-left font-semibold text-gray-700">Status</th>
                                <th className="px-6 py-3 text-left font-semibold text-gray-700">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 text-gray-800">{order.orderId}</td>
                                    <td className="px-6 py-4 text-gray-600">{order.customerName}</td>
                                    <td className="px-6 py-4 text-gray-600">{order.product}</td>
                                    <td className="px-6 py-4 font-medium">{order.quantity}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 text-xs sm:text-sm rounded-full font-medium ${order.status === 'Delivered'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-yellow-100 text-yellow-700'
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
}
