'use client';
import React, { useState } from 'react';

export default function ProductsPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        stockId: '',
        price: '',
        category: '',
        description: ''
    });

    const [products, setProducts] = useState([
        { name: 'Gold Necklace', stockId: 'STK001', price: 50000, category: 'Jewellery', description: '22K Gold', status: 'In Stock' },
        { name: 'Silver Ring', stockId: 'STK002', price: 1500, category: 'Jewellery', description: 'Pure Silver', status: 'Out of Stock' },
    ]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts([...products, { ...formData, status: 'In Stock' }]);
        setIsOpen(false);
        setFormData({ name: '', stockId: '', price: '', category: '', description: '' });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Products</h1>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
                    >
                        + Add Product
                    </button>
                </div>

                {/* Products Table */}
                <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                    <table className="w-full border-collapse">
                        <thead className="bg-gradient-to-r from-indigo-100 to-purple-100 sticky top-0">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Product Name</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Stock ID</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price (₹)</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 text-gray-800">{product.name}</td>
                                    <td className="px-6 py-4 text-gray-600">{product.stockId}</td>
                                    <td className="px-6 py-4 text-gray-600">{product.category}</td>
                                    <td className="px-6 py-4 text-gray-800 font-medium">₹{product.price}</td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`px-3 py-1 text-sm rounded-full ${product.status === 'In Stock'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                                }`}
                                        >
                                            {product.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            >
                                ✖
                            </button>

                            <h2
                                className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
                            >Add New Product</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-black">Product Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-black">Stock ID</label>
                                    <input
                                        type="text"
                                        name="stockId"
                                        value={formData.stockId}
                                        onChange={handleChange}
                                        className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-black">Price (₹)</label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-black">Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-black">Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-indigo-300"
                                    ></textarea>
                                </div>
                                <div className="flex justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
                                    >
                                        Save Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
