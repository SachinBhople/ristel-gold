'use client';
import React, { useState } from 'react';

export default function StocksPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        productId: '',
        quantity: '',
        location: '',
        remarks: ''
    });

    // Mock product list for select box
    const productsList = [
        { id: 'STK001', name: 'Gold Necklace' },
        { id: 'STK002', name: 'Silver Ring' },
        { id: 'STK003', name: 'Diamond Bracelet' },
    ];

    // Stock data
    const [stocks, setStocks] = useState([
        { product: 'Gold Necklace', stockId: 'STK001', quantity: 10, location: 'Main Store', remarks: 'New Stock' },
        { product: 'Silver Ring', stockId: 'STK002', quantity: 5, location: 'Warehouse', remarks: 'Low Stock' },
    ]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedProduct = productsList.find(p => p.id === formData.productId);
        if (!selectedProduct) return;

        setStocks([
            ...stocks,
            {
                product: selectedProduct.name,
                stockId: selectedProduct.id,
                quantity: formData.quantity,
                location: formData.location,
                remarks: formData.remarks
            }
        ]);

        setIsOpen(false);
        setFormData({ productId: '', quantity: '', location: '', remarks: '' });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Stock Management</h1>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
                    >
                        + Add Stock
                    </button>
                </div>

                {/* Stock Table */}
                <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                    <table className="w-full border-collapse">
                        <thead className="bg-gradient-to-r from-yellow-100 to-yellow-100 sticky top-0">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Product</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Stock ID</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Quantity</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Location</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stocks.map((stock, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 text-gray-800">{stock.product}</td>
                                    <td className="px-6 py-4 text-gray-600">{stock.stockId}</td>
                                    <td className="px-6 py-4 font-medium">{stock.quantity}</td>
                                    <td className="px-6 py-4 text-gray-600">{stock.location}</td>
                                    <td className="px-6 py-4 text-gray-600">{stock.remarks}</td>
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

                            <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Stock</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-black">Select Product</label>
                                    <select
                                        name="productId"
                                        value={formData.productId}
                                        onChange={handleChange}
                                        className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-300"
                                        required
                                    >
                                        <option value="">-- Select Product --</option>
                                        {productsList.map((product) => (
                                            <option key={product.id} value={product.id}>
                                                {product.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-black">Quantity</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-black">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-300"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-black">Remarks</label>
                                    <textarea
                                        name="remarks"
                                        value={formData.remarks}
                                        onChange={handleChange}
                                        className="mt-1 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-300"
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
                                        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                                    >
                                        Save Stock
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
