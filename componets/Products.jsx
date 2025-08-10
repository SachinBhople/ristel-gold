'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

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

export default function Products() {
    return (
        <main className="min-h-screen bg-[#fdf6e3] py-12 px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-center text-yellow-700 mb-10">
                Our Gold Collection
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {products.map((product, index) => (
                    <Link key={product.id} href={`/prodcut-details/${product.id}`}>
                        <motion.div
                            className="bg-white shadow-xl rounded-2xl overflow-hidden border border-yellow-200 hover:shadow-yellow-400 transition-shadow cursor-pointer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-yellow-800 mb-2">
                                    {product.name}
                                </h2>
                                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                                <p className="text-lg font-bold text-yellow-700">{product.price}</p>
                                <button className="mt-4 w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition-colors">
                                    Add To Cart
                                </button>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
