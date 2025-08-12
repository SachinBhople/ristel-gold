'use client';
import React, { useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Gold Jewelry' },
        { id: 2, name: 'Diamond Rings' },
        { id: 3, name: 'Necklaces' },
        { id: 4, name: 'Bracelets' }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('Add New Category');
    const [categoryInput, setCategoryInput] = useState('');
    const [editCategoryId, setEditCategoryId] = useState(null);

    const openAddModal = () => {
        setModalTitle('Add New Category');
        setCategoryInput('');
        setEditCategoryId(null);
        setShowModal(true);
    };

    const openEditModal = (id, name) => {
        setModalTitle('Update Category');
        setCategoryInput(name);
        setEditCategoryId(id);
        setShowModal(true);
    };

    const handleSave = () => {
        if (categoryInput.trim() === '') return;

        if (editCategoryId) {
            setCategories(prev =>
                prev.map(cat => cat.id === editCategoryId ? { ...cat, name: categoryInput } : cat)
            );
        } else {
            setCategories([...categories, { id: Date.now(), name: categoryInput }]);
        }

        setShowModal(false);
        setCategoryInput('');
        setEditCategoryId(null);
    };

    const handleDelete = (id) => {
        setCategories(categories.filter(cat => cat.id !== id));
    };

    return (
        <div className="flex flex-col p-4 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h1 className="text-3xl font-bold text-black">Categories</h1>
                <button
                    onClick={openAddModal}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition"
                >
                    + Add Category
                </button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white w-[90%] max-w-sm rounded-lg p-6 shadow-2xl border border-gray-200">
                        <h2 className="text-xl font-semibold mb-4 text-black">{modalTitle}</h2>
                        <input
                            type="text"
                            value={categoryInput}
                            onChange={(e) => setCategoryInput(e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
                            placeholder="Category name"
                        />
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={handleSave}
                                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded"
                            >
                                {editCategoryId ? 'Update' : 'Save'}
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-300 hover:bg-gray-400 text-black font-medium py-2 px-4 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Category Table */}
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-black bg-white">
                    <thead className="bg-gray-300 text-sm font-semibold">
                        <tr>
                            <th className="text-left px-4 py-3">Name</th>
                            <th className="text-center px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.id} className="border-t border-gray-200 hover:bg-yellow-50 transition-colors">
                                <td className="px-4 py-3">{category.name}</td>
                                <td className="px-4 py-3 text-center space-x-2">
                                    <button
                                        onClick={() => openEditModal(category.id, category.name)}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm px-4 py-1.5 rounded transition"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(category.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1.5 rounded transition"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {categories.length === 0 && (
                            <tr>
                                <td colSpan="2" className="text-center py-6 text-gray-500 bg-white">
                                    No categories added yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default Category;
