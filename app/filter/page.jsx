'use client';
import React, { useState } from 'react';

const productsData = [
    { id: 1, name: 'Gold Necklace', price: 50000, category: 'Necklace', material: '22K Gold', occasion: 'Wedding', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8cb3dd2f/images/hi-res/513319NHCAA00_2.jpg?sw=480&sh=480' },
    { id: 2, name: 'Gold Ring', price: 15000, category: 'Ring', material: '18K Gold', occasion: 'Casual', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe4bf267c/images/hi-res/510122FAAAA00_1.jpg?sw=480&sh=480' },
    { id: 3, name: 'Gold Bracelet', price: 25000, category: 'Bracelet', material: '22K Gold', occasion: 'Party', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe2a70403/images/hi-res/51D2D1BISAA00_1.jpg?sw=480&sh=480' },
    { id: 4, name: 'Gold Earrings', price: 18000, category: 'Earrings', material: '18K Gold', occasion: 'Casual', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw83e8a32b/images/hi-res/510429FBAAA00_1.jpg?sw=480&sh=480' },
    { id: 5, name: 'Wedding Gold Necklace', price: 75000, category: 'Necklace', material: '22K Gold', occasion: 'Wedding', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwed81a680/images/hi-res/512113NZIAA00_2.jpg?sw=480&sh=480' },
    { id: 6, name: 'Daily Wear Gold Ring', price: 12000, category: 'Ring', material: '18K Gold', occasion: 'Casual', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe4bf267c/images/hi-res/510122FAAAA00_1.jpg?sw=480&sh=480' },
    { id: 7, name: 'Party Gold Bracelet', price: 32000, category: 'Bracelet', material: '22K Gold', occasion: 'Party', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw500a6c9e/images/hi-res/51M5A1BAHAA00_2.jpg?sw=480&sh=480' },
    { id: 8, name: 'Gold Stud Earrings', price: 14000, category: 'Earrings', material: '18K Gold', occasion: 'Wedding', image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6b0692f7/images/hi-res/513220DBNABA00_2.jpg?sw=480&sh=480' },
];

export default function FilterPage() {
    const [filters, setFilters] = useState({
        category: [],
        material: [],
        occasion: [],
        minPrice: '',
        maxPrice: '',
    });

    const handleCheckboxChange = (filterType, value) => {
        setFilters((prev) => {
            const current = prev[filterType];
            return {
                ...prev,
                [filterType]: current.includes(value)
                    ? current.filter((item) => item !== value)
                    : [...current, value],
            };
        });
    };

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const filteredProducts = productsData.filter((product) => {
        return (
            (filters.category.length === 0 || filters.category.includes(product.category)) &&
            (filters.material.length === 0 || filters.material.includes(product.material)) &&
            (filters.occasion.length === 0 || filters.occasion.includes(product.occasion)) &&
            (filters.minPrice === '' || product.price >= Number(filters.minPrice)) &&
            (filters.maxPrice === '' || product.price <= Number(filters.maxPrice))
        );
    });

    return (
        <div className="flex flex-col md:flex-row p-4 md:p-10 bg-gray-50 min-h-screen gap-6">
            {/* Filters Sidebar */}
            <div className="w-full md:w-1/4 bg-white p-4 rounded-xl shadow-lg">
                <h2 className="text-xl font-bold mb-4">Filters</h2>

                {/* Category */}
                <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-black">Category</h3>
                    {['Necklace', 'Ring', 'Bracelet', 'Earrings'].map((cat) => (
                        <label key={cat} className="block text-black">
                            <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange('category', cat)}
                                checked={filters.category.includes(cat)}
                                className="mr-2"
                            />
                            {cat}
                        </label>
                    ))}
                </div>

                {/* Material */}
                <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-black">Material</h3>
                    {['22K Gold', '18K Gold'].map((mat) => (
                        <label key={mat} className="block text-black">
                            <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange('material', mat)}
                                checked={filters.material.includes(mat)}
                                className="mr-2"
                            />
                            {mat}
                        </label>
                    ))}
                </div>

                {/* Occasion */}
                <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-black">Occasion</h3>
                    {['Wedding', 'Casual', 'Party'].map((occ) => (
                        <label key={occ} className="block text-black">
                            <input
                                type="checkbox"
                                onChange={() => handleCheckboxChange('occasion', occ)}
                                checked={filters.occasion.includes(occ)}
                                className="mr-2"
                            />
                            {occ}
                        </label>
                    ))}
                </div>

                {/* Price */}
                <div>
                    <h3 className="font-semibold mb-2 text-black">Price Range</h3>
                    <input
                        type="number"
                        name="minPrice"
                        placeholder="Min Price"
                        value={filters.minPrice}
                        onChange={handlePriceChange}
                        className="w-full p-2  border-4 rounded mb-2"
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max Price"
                        value={filters.maxPrice}
                        onChange={handlePriceChange}
                        className="w-full p-2 border-4 rounded"
                    />
                </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
                <h1 className="text-3xl font-bold mb-6">Gold Products</h1>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                            <div className="p-4">
                                <h2 className="text-lg font-bold text-gray-500">{product.name}</h2>
                                <p className="text-yellow-600 font-semibold">₹ {product.price.toLocaleString()}</p>
                                <p className="text-sm text-gray-500">{product.material} • {product.occasion}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {filteredProducts.length === 0 && (
                    <p className="text-center text-gray-500 mt-6">No products found</p>
                )}
            </div>
        </div>
    );
}
