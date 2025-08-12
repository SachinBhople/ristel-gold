"use client";
import Link from 'next/link';
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

/* --- Dummy products (extended) --- */
const productsData = [
    { id: 1, name: "Gold Chain", categoryId: "gold", material: "Gold", price: 5000, weight: 10, occasion: "Casual", gender: "Men", image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/P/JP06422-8YS300_11_listfront.jpg" },
    { id: 2, name: "Gold Ring", categoryId: "gold", material: "Gold", price: 3000, weight: 5, occasion: "Wedding", gender: "Women", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw57f5c07f/images/hi-res/504025HMTAAA00_1.jpg?sw=480&sh=480" },
    { id: 3, name: "Silver Necklace", categoryId: "silver", material: "Silver", price: 2000, weight: 15, occasion: "Party", gender: "Women", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf98bc69f/images/hi-res/504025CINAA00_2.jpg?sw=480&sh=480" },
    { id: 4, name: "Platinum Bracelet", categoryId: "platinum", material: "Platinum", price: 8000, weight: 20, occasion: "Festival", gender: "Women", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9d70b7b3/images/hi-res/50D5B2BECAA02_2.jpg?sw=480&sh=480" },
    { id: 5, name: "Diamond Ring", categoryId: "jewellery", material: "Diamond", price: 15000, weight: 8, occasion: "Wedding", gender: "Women", image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR03570-1YS300_11_listfront.jpg" },
    { id: 6, name: "Gold Earrings", categoryId: "jewellery", material: "Gold", price: 4500, weight: 6, occasion: "Festival", gender: "Women", image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE10282-YGP900_11_listfront.jpg" },
    { id: 7, name: "Silver Bangles", categoryId: "jewellery", material: "Silver", price: 2500, weight: 12, occasion: "Casual", gender: "Women", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dweb95855a/images/hi-res/504015VNK1A02_2.jpg?sw=480&sh=480" },
    { id: 8, name: "Platinum Necklace", categoryId: "platinum", material: "Platinum", price: 12000, weight: 18, occasion: "Party", gender: "Women", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwe122e2ed/images/hi-res/50D2P2NYZAA32_2.jpg?sw=480&sh=480" },
    { id: 9, name: "Gold Coin 5g", categoryId: "coins", material: "Gold", price: 25000, weight: 5, occasion: "Festival", gender: "Women", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwee6e317a/images/hi-res/600102ZNARAS00_2.jpg?sw=480&sh=480" },
    { id: 10, name: "Custom Silver Coin", categoryId: "coins", material: "Silver", price: 5000, weight: 10, occasion: "Wedding", gender: "Men", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwee6e317a/images/hi-res/600102ZNARAS00_2.jpg?sw=480&sh=480" },
    { id: 11, name: "Platinum Ring", categoryId: "platinum", material: "Platinum", price: 9000, weight: 7, occasion: "Casual", gender: "Men", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw71944a55/images/hi-res/513013FLTAA00_2.jpg?sw=480&sh=480" },
    { id: 12, name: "Diamond Necklace", categoryId: "jewellery", material: "Diamond", price: 20000, weight: 14, occasion: "Festival", gender: "Women", image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL05824-YGS300_11_listfront.jpg" },
    { id: 13, name: "Gold Bracelet", categoryId: "gold", material: "Gold", price: 6000, weight: 9, occasion: "Party", gender: "Women", image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/B/JB01382-2YP500_11_listfront.jpg" },
    { id: 14, name: "Silver Chain", categoryId: "silver", material: "Silver", price: 3000, weight: 8, occasion: "Wedding", gender: "Men", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8e2f01f8/images/hi-res/51M5B1CIHAA00_2.jpg?sw=480&sh=480" },
    { id: 15, name: "Diamond Earrings", categoryId: "jewellery", material: "Diamond", price: 12000, weight: 5, occasion: "Party", gender: "Women", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa25216a5/images/hi-res/50F1D1SIGAGA32_2.jpg?sw=480&sh=480" },
    { id: 16, name: "Platinum Coin", categoryId: "coins", material: "Platinum", price: 15000, weight: 15, occasion: "Festival", gender: "Women", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwee6e317a/images/hi-res/600102ZNARAS00_2.jpg?sw=480&sh=480" },
    { id: 17, name: "Gold Anklet", categoryId: "jewellery", material: "Gold", price: 3500, weight: 4, occasion: "Casual", gender: "Women", image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL05716-2YP500_11_listfront.jpg" },
    { id: 18, name: "Silver Earrings", categoryId: "jewellery", material: "Silver", price: 2200, weight: 6, occasion: "Party", gender: "Women", image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw27753abc/images/hi-res/50K4I1SIKAGA02_2.jpg?sw=480&sh=480" },
    { id: 19, name: "Diamond Bracelet", categoryId: "jewellery", material: "Diamond", price: 17000, weight: 10, occasion: "Wedding", gender: "Women", image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/T/KT02125-2Y0000_11_listfront.jpg" },
    { id: 20, name: "Platinum Earrings", categoryId: "jewellery", material: "Platinum", price: 11000, weight: 9, occasion: "Casual", gender: "Women", image: "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE10282-YGP900_11_listfront.jpg" },
];

export default function CategoryPage() {
    const { id } = useParams(); // e.g. 'gold', 'silver', ...

    // UI: mobile toggle
    const [showFiltersMobile, setShowFiltersMobile] = useState(false);

    // Filter states (multi-select where makes sense)
    const [priceFilter, setPriceFilter] = useState({ min: 0, max: 25000 });
    const [weightFilter, setWeightFilter] = useState({ min: 0, max: 25 });
    const [selectedMaterials, setSelectedMaterials] = useState([]); // []
    const [selectedOccasions, setSelectedOccasions] = useState([]);
    const [selectedGenders, setSelectedGenders] = useState([]);


    const [filteredProducts, setFilteredProducts] = useState([]);

    // derived: products inside this category
    const categoryProducts = useMemo(
        () => productsData.filter((p) => p.categoryId === id),
        [id]
    );

    // derived: unique options for filters based on this category's products
    const materialsOptions = useMemo(
        () => Array.from(new Set(categoryProducts.map((p) => p.material))).sort(),
        [categoryProducts]
    );
    const occasionsOptions = useMemo(
        () => Array.from(new Set(categoryProducts.map((p) => p.occasion))).sort(),
        [categoryProducts]
    );
    const gendersOptions = useMemo(
        () => Array.from(new Set(categoryProducts.map((p) => p.gender))).sort(),
        [categoryProducts]
    );

    // When category changes -> set sensible defaults (bounds) and reset selections
    useEffect(() => {
        if (!id) return;
        if (categoryProducts.length === 0) {
            setFilteredProducts([]);
            return;
        }
        const prices = categoryProducts.map((p) => p.price);
        const weights = categoryProducts.map((p) => p.weight);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        const minWeight = Math.min(...weights);
        const maxWeight = Math.max(...weights);

        // set defaults to full range available in category
        setPriceFilter({ min: minPrice, max: maxPrice });
        setWeightFilter({ min: minWeight, max: maxWeight });

        // clear selections (user starts fresh when switching category)
        setSelectedMaterials([]);
        setSelectedOccasions([]);
        setSelectedGenders([]);

        // initial list = all category products
        setFilteredProducts(categoryProducts);
        // close mobile filters
        setShowFiltersMobile(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]); // only when id changes

    // helper to toggle checkbox arrays
    const toggleSelection = (value, setFn, array) => {
        if (array.includes(value)) {
            setFn(array.filter((a) => a !== value));
        } else {
            setFn([...array, value]);
        }
    };

    // clamp helper
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    // apply filters whenever any filter changes
    useEffect(() => {
        if (!id) return;
        let products = [...categoryProducts];

        // price
        products = products.filter(
            (p) => p.price >= (priceFilter.min ?? 0) && p.price <= (priceFilter.max ?? Infinity)
        );

        // weight
        products = products.filter(
            (p) => p.weight >= (weightFilter.min ?? 0) && p.weight <= (weightFilter.max ?? Infinity)
        );

        // materials (multi-select) - if none selected => don't filter by material
        if (selectedMaterials.length > 0) {
            products = products.filter((p) => selectedMaterials.includes(p.material));
        }

        // occasions
        if (selectedOccasions.length > 0) {
            products = products.filter((p) => selectedOccasions.includes(p.occasion));
        }

        // genders
        if (selectedGenders.length > 0) {
            products = products.filter((p) => selectedGenders.includes(p.gender));
        }

        setFilteredProducts(products);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, priceFilter, weightFilter, selectedMaterials, selectedOccasions, selectedGenders]);

    // Clear all filters (reset to category defaults)
    const clearAll = () => {
        if (categoryProducts.length === 0) return;
        const prices = categoryProducts.map((p) => p.price);
        const weights = categoryProducts.map((p) => p.weight);
        setPriceFilter({ min: Math.min(...prices), max: Math.max(...prices) });
        setWeightFilter({ min: Math.min(...weights), max: Math.max(...weights) });
        setSelectedMaterials([]);
        setSelectedOccasions([]);
        setSelectedGenders([]);
    };

    if (!id) return <div className="p-6">Loading...</div>;

    return (
        <div className="max-w-7xl mx-auto mt-24 px-4 py-6">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Products in Category: {id}</h1>

                {/* Mobile: toggle filters */}
                <button
                    className="md:hidden px-3 py-2 border rounded-md"
                    onClick={() => setShowFiltersMobile((s) => !s)}
                >
                    {showFiltersMobile ? "Hide Filters" : "Show Filters"}
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Sidebar */}
                <aside
                    className={`md:col-span-3 bg-white shadow rounded-md p-4 ${showFiltersMobile ? "" : "hidden md:block"
                        }`}
                >
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Filters</h2>
                        <button className="text-sm text-blue-600" onClick={clearAll}>
                            Clear All
                        </button>
                    </div>


                    <div className="p-4 max-w-md">
                        {/* Price Filter */}
                        <div className="mb-8">
                            <h3 className="font-medium">Price (₹)</h3>
                            <input
                                type="range"
                                min={priceFilter.min}
                                max={100000}
                                value={priceFilter.max}
                                onChange={(e) =>
                                    setPriceFilter((prev) => ({
                                        ...prev,
                                        max: Number(e.target.value),
                                    }))
                                }
                                className="w-full accent-yellow-500"
                            />
                            <p className="text-sm text-gray-500 mt-2">
                                ₹{priceFilter.min} — ₹{priceFilter.max}
                            </p>
                        </div>

                        {/* Weight Filter */}
                        <div className="mb-8">
                            <h3 className="font-medium">Weight (g)</h3>
                            <input
                                type="range"
                                min={weightFilter.min}
                                max={1000}
                                value={weightFilter.max}
                                onChange={(e) =>
                                    setWeightFilter((prev) => ({
                                        ...prev,
                                        max: Number(e.target.value),
                                    }))
                                }
                                className="w-full accent-yellow-500"
                            />
                            <p className="text-sm text-gray-500 mt-2">
                                {weightFilter.min}g — {weightFilter.max}g
                            </p>
                        </div>
                    </div>





                    {/* Material (multi-select) */}
                    <div className="mb-4">
                        <h3 className="font-medium">Material</h3>
                        <div className="mt-2 space-y-1">
                            {materialsOptions.length === 0 && <p className="text-sm text-gray-500">No options</p>}
                            {materialsOptions.map((mat) => (
                                <label key={mat} className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={selectedMaterials.includes(mat)}
                                        onChange={() => toggleSelection(mat, setSelectedMaterials, selectedMaterials)}
                                        className="w-4 h-4"
                                    />
                                    {mat}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Occasion (multi-select) */}
                    <div className="mb-4">
                        <h3 className="font-medium">Occasion</h3>
                        <div className="mt-2 space-y-1">
                            {occasionsOptions.map((occ) => (
                                <label key={occ} className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={selectedOccasions.includes(occ)}
                                        onChange={() => toggleSelection(occ, setSelectedOccasions, selectedOccasions)}
                                        className="w-4 h-4"
                                    />
                                    {occ}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Gender (multi-select) */}
                    <div className="mb-2">
                        <h3 className="font-medium">Gender</h3>
                        <div className="mt-2 space-y-1">
                            {gendersOptions.map((g) => (
                                <label key={g} className="flex items-center gap-2 text-sm">
                                    <input
                                        type="checkbox"
                                        checked={selectedGenders.includes(g)}
                                        onChange={() => toggleSelection(g, setSelectedGenders, selectedGenders)}
                                        className="w-4 h-4"
                                    />
                                    {g}
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Product list */}
                <main className="md:col-span-9">
                    {filteredProducts.length === 0 ? (
                        <p className="text-gray-600">No products found for this selection.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="border rounded-md shadow hover:shadow-lg transition bg-white overflow-hidden"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full mt-5 h-48 object-contain"
                                        loading="lazy"
                                    />
                                    <div className="p-4">
                                        <h2 className="font-semibold text-lg">{product.name}</h2>
                                        <p className="text-sm text-gray-600">
                                            {product.material} • {product.weight}g
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {product.occasion} • {product.gender}
                                        </p>
                                        <p className="text-yellow-700 font-bold mt-2">₹{product.price}</p>
                                        <Link href="/cart">
                                            <button
                                                onClick={() => console.log(`Added ${product.name} to cart`)}
                                                className="mt-3 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md"
                                            >
                                                Add to Cart
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
