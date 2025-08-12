"use client";
import React from "react";

const trendingItems = [
    {
        name: "Auspicious Occasion",
        image:
            "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw04fafb24/homepage/trendingNow/auspicious-trending.jpg",
    },
    {
        name: "Gifting Jewellery",
        image:
            "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd7004c0d/homepage/trendingNow/gifting.jpg",
    },
    {
        name: "18Kt Jewellery",
        image:
            "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw28989eec/homepage/trendingNow/18kt-jewellery.jpg",
    },
    {
        name: "Everyday Wear",
        image:
            "https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/categories/inside-categories/earrings/jhumkas-at.jpg",
    },
];

const Trending = () => {
    return (
        <section className="py-10 bg-[#fff8f0]">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-800">Trending Now</h1>
                <p className="text-lg text-gray-500">
                    Jewellery pieces everyone’s eyeing right now
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-10">
                {trendingItems.map((item, index) => (
                    <div
                        key={index}
                        className="text-center rounded-lg overflow-hidden shadow-md bg-white cursor-pointer group"
                    >
                        <div className="overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
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

export default Trending;
