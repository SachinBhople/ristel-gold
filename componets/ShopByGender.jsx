"use client";
import React from "react";

const genders = [
    {
        name: "Women Jewellery",
        image:
            "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw811805ad/homepage/ShopByGender/sbg-women.jpg",
    },
    {
        name: "Men Jewellery",
        image:
            "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwe6fec18e/homepage/ShopByGender/sbg-men.jpg",
    },
    {
        name: "Kids Jewellery",
        image:
            "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1e976d94/homepage/ShopByGender/sbg-kids.jpg",
    },
];

const ShopByGender = () => {
    return (
        <section className="py-10 bg-[#fff8f0]">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800">Curated For You</h1>
                <p className="text-lg text-gray-500">Shop By Gender</p>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10">
                {genders.map((item, index) => (
                    <div
                        key={index}
                        className="text-center rounded-lg overflow-hidden shadow-md bg-white cursor-pointer group"
                    >
                        <div className="overflow-hidden mt-5">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-72 object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <p className="mt-4 text-lg font-medium text-gray-700 group-hover:text-yellow-600 transition-colors">
                            {item.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ShopByGender;
