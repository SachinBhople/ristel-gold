'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Dummy products array
const products = [
    {
        id: 1,
        name: "22K Gold Necklace",
        description: "Elegant handcrafted necklace with floral motifs.",
        price: "₹72,000",
        image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb170b83a/images/hi-res/50D5PISJCAGA00_1.jpg",
    },
    {
        id: 2,
        name: "24K Gold Ring",
        description: "Pure gold ring with intricate details.",
        price: "₹22,000",
        image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw442a2739/homepage/shopByCategory/mangalsutra-cat.jpg",
    },
    {
        id: 3,
        name: "Gold Earrings Set",
        description: "Beautiful and traditional earrings.",
        price: "₹38,500",
        image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw04fafb24/homepage/trendingNow/auspicious-trending.jpg",
    },
    {
        id: 4,
        name: "22K Gold Necklace",
        description: "Elegant handcrafted necklace with floral motifs.",
        price: "₹72,000",
        image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb170b83a/images/hi-res/50D5PISJCAGA00_1.jpg",
    },
    {
        id: 5,
        name: "24K Gold Ring",
        description: "Pure gold ring with intricate details.",
        price: "₹22,000",
        image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw442a2739/homepage/shopByCategory/mangalsutra-cat.jpg",
    },
    {
        id: 6,
        name: "Gold Earrings Set",
        description: "Beautiful and traditional earrings.",
        price: "₹38,500",
        image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw04fafb24/homepage/trendingNow/auspicious-trending.jpg",
    },
    {
        id: 7,
        name: "22K Gold Necklace",
        description: "Elegant handcrafted necklace with floral motifs.",
        price: "₹72,000",
        image: "https://www.tanishq.co.in/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb170b83a/images/hi-res/50D5PISJCAGA00_1.jpg",
    },
    {
        id: 8,
        name: "24K Gold Ring",
        description: "Pure gold ring with intricate details.",
        price: "₹22,000",
        image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw442a2739/homepage/shopByCategory/mangalsutra-cat.jpg",
    },
    {
        id: 9,
        name: "Gold Earrings Set",
        description: "Beautiful and traditional earrings.",
        price: "₹38,500",
        image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw04fafb24/homepage/trendingNow/auspicious-trending.jpg",
    },
];

export default function ProductDetails() {
    const params = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = products.find(
            (p) => p.id === parseInt(params.id, 10)
        );
        setProduct(foundProduct);
    }, [params.id]);

    if (!product) {
        return (
            <div className="min-h-screen  flex items-center justify-center bg-yellow-50">
                <p className="text-yellow-800 text-lg font-medium">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen mt-24 bg-yellow-50 py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden md:flex">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-1/2 object-cover h-80 md:h-auto"
                />
                <div className="p-8 flex-1">
                    <h1 className="text-3xl font-bold text-yellow-800 mb-4">
                        {product.name}
                    </h1>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-xl font-semibold text-yellow-700 mb-6">
                        {product.price}
                    </p>
                    <Link href="/cart" >
                        <button className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition">
                            Add to Cart
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
