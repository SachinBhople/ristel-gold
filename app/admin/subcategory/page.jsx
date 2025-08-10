'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SubCategory() {
    const [subcategories, setSubcategories] = useState([]);
    const [categories, setCategories] = useState(["new"]);
    const [modalOpen, setModalOpen] = useState(false);
    const [editId, setEditId] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [subcategoryName, setSubcategoryName] = useState('');

    useEffect(() => {
        fetchSubcategories();
        fetchCategories();
    }, []);

    const fetchSubcategories = async () => {
        const res = await axios.get('/api/subcategory');
        setSubcategories(res.data);
    };

    const fetchCategories = async () => {
        const res = await axios.get('/api/category');
        setCategories(res.data);
    };

    const openModal = (id = null, name = '', categoryId = '') => {
        setEditId(id);
        setSubcategoryName(name);
        setSelectedCategory(categoryId);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setEditId(null);
        setSubcategoryName('');
        setSelectedCategory('');
    };

    const handleSubmit = async () => {
        if (!subcategoryName || !selectedCategory) return;

        if (editId) {
            await axios.put(`/api/subcategory/${editId}`, {
                name: subcategoryName,
                category: selectedCategory,
            });
        } else {
            await axios.post('/api/subcategory', {
                name: subcategoryName,
                category: selectedCategory,
            });
        }

        fetchSubcategories();
        closeModal();
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/subcategory/${id}`);
        fetchSubcategories();
    };

    return (
        <div className="p-6 text-black  min-h-screen">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Subcategories</h2>
                <button
                    onClick={() => openModal()}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
                >
                    Add Subcategory
                </button>
            </div>

            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-sm font-semibold">
                    <tr>
                        <th className="text-left px-4 py-3">Name</th>
                        <th className="text-left px-4 py-3">Category</th>
                        <th className="text-center px-4 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {subcategories.map((sub) => (
                        <tr key={sub._id} className="border-t border-gray-200 hover:bg-yellow-50 transition">
                            <td className="px-4 py-3">{sub.name}</td>
                            <td className="px-4 py-3">{sub.category?.name || 'N/A'}</td>
                            <td className="px-4 py-3 text-center space-x-2">
                                <button
                                    onClick={() => openModal(sub._id, sub.name, sub.category?._id)}
                                    className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm px-4 py-1.5 rounded transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(sub._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1.5 rounded transition"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {subcategories.length === 0 && (
                        <tr>
                            <td colSpan="3" className="text-center py-6 text-gray-500">
                                No subcategories added yet.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white text-black p-6 rounded-lg w-full max-w-md shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">
                            {editId ? 'Update Subcategory' : 'Add Subcategory'}
                        </h3>
                        <div className="mb-4">
                            <label className="block text-sm mb-1">Category</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                            >
                                <option value="">Select Category</option>
                                {categories.map((cat) => (
                                    <option key={cat._id} value={cat._id}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-1">Subcategory Name</label>
                            <input
                                type="text"
                                value={subcategoryName}
                                onChange={(e) => setSubcategoryName(e.target.value)}
                                placeholder="Enter subcategory name"
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={closeModal}
                                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
                            >
                                {editId ? 'Update' : 'Add'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
