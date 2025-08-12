"use client";
import React from "react";

const categories = [
    {
        name: "Earrings",
        image:
            "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw83758477/homepage/shopByCategory/earrings-cat.jpg",
    },
    {
        name: "Finger Rings",
        image:
            "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw47da8133/homepage/shopByCategory/rings-cat.jpg",
    },
    {
        name: "Pendants",
        image:
            "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0804c74f/homepage/shopByCategory/pendants-cat.jpg",
    },
    {
        name: "Mangal Sutra",
        image:
            "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw6760c2cb/homepage/shopByCategory/mangalsutra-cat.jpg",
    },
];

const ShopCategory = () => {
    return (
        <section className="py-10 bg-[#fff8f0]">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Find Your Perfect Match</h1>
                <p className="text-lg text-gray-500">Shop by Categories</p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-10">
                {categories.map((cat, index) => (
                    <div key={index} className="text-center">
                        <div className="overflow-hidden rounded-lg shadow-md cursor-pointer">
                            <img
                                src={cat.image}
                                alt={cat.name}
                                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <p className="mt-3 text-lg font-medium text-gray-700">{cat.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopCategory;
