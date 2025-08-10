// app/collections/[category]/page.jsx

'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const products = [
    {
        id: 1,
        name: 'Mens Ring',
        image: 'https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/7.png',
        category: 'mens',
        price: '₹25,000',
    },
    {
        id: 2,
        name: 'Womens Necklace',
        image: 'https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/12.png',
        category: 'womens',
        price: '₹75,000',
    },
    {
        id: 3,
        name: 'Traditional Bangles',
        image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9b9e2bbf/images/hi-res/512016VZG1A00_2.jpg?sw=480&sh=480',
        category: 'traditional',
        price: '₹50,000',
    },
    {
        id: 4,
        name: 'Daily Wear Chain',
        image: 'https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/cards/diamond-jewellery.jpg',
        category: 'daily',
        price: '₹12,000',
    },
    {
        id: 5,
        name: 'Wedding ',
        image: 'https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/7.png',
        category: 'wedding',
        price: '₹25,000',
    },
    {
        id: 6,
        name: 'Womens Necklace',
        image: 'https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/12.png',
        category: 'diamond',
        price: '₹75,000',
    },
    {
        id: 7,
        name: 'Traditional Bangles',
        image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9b9e2bbf/images/hi-res/512016VZG1A00_2.jpg?sw=480&sh=480',
        category: 'traditional',
        price: '₹50,000',
    },
    {
        id: 8,
        name: 'Daily Wear Chain',
        image: 'https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/cards/diamond-jewellery.jpg',
        category: 'daily',
        price: '₹12,000',
    },
    {
        id: 9,
        name: 'Wedding Jewellery',
        image: 'https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/7.png',
        category: 'wedding',
        price: '₹25,000',
    },
    {
        id: 10,
        name: 'Womens Necklace',
        image: 'https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/12.png',
        category: 'diamond',
        price: '₹75,000',
    },
    {
        id: 11,
        name: 'Traditional Bangles',
        image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9b9e2bbf/images/hi-res/512016VZG1A00_2.jpg?sw=480&sh=480',
        category: 'traditional',
        price: '₹50,000',
    },
    {
        id: 12,
        name: 'Daily Wear Chain',
        image: 'https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/cards/diamond-jewellery.jpg',
        category: 'daily',
        price: '₹12,000',
    },
];

const CollectionProducts = () => {
    const params = useParams();
    const { category } = params;

    const filteredProducts = products.filter(
        (product) => product.category === category
    );

    return (
        <div className="min-h-screen mt-20 bg-[#fff8f0] px-6 py-12">
            <h1 className="text-4xl font-bold text-center text-yellow-800 mb-10 capitalize">
                {category} Gold Collection
            </h1>

            {filteredProducts.length === 0 ? (
                <p className="text-center text-gray-500">No products found.</p>
            ) : (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="relative w-full h-64">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-4 text-center">
                                <h2 className="text-xl font-semibold text-yellow-900">
                                    {product.name}
                                </h2>
                                <p className="text-yellow-700 mt-1">{product.price}</p>
                            </div>

                            {/* Centered Button */}
                            <div className="flex justify-center pb-4">
                                <Link href="/cart">
                                    <button className="bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 transition shadow-md">
                                        Add to Cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

            )}
        </div>
    );
};

export default CollectionProducts;
