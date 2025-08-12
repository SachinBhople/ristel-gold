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
        name: 'Rajwada Vaibhav',
        image: 'https://staticimg.tanishq.co.in/microsite/gold-page/assets/images/collection/51O5B1VOI2AP3.jpg',
        category: 'traditional',
        price: '₹50,000',
    },
    {
        id: 4,
        name: 'Fern Glod Earrings',
        image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6d335820/images/hi-res/51D1D1DBVABA00_2.jpg?sw=640&sh=640',
        category: 'daily',
        price: '₹12,000',
    },
    {
        id: 5,
        name: 'Tamil Bride ',
        image: 'https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/7.png',
        category: 'wedding',
        price: '₹25,000',
    },
    {
        id: 6,
        name: 'Dazzling Diamond',
        image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw24637c6e/images/hi-res/50D4B32NXABA02_2.jpg?sw=480&sh=480',
        category: 'diamond',
        price: '₹75,000',
    },
    {
        id: 7,
        name: 'Layered Legacy',
        image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw6e2b74ba/images/hi-res/51O5GJ2AW1BAP3_1.jpg',
        category: 'traditional',
        price: '₹50,000',
    },
    {
        id: 8,
        name: 'Circular Gold Earings',
        image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw84108123/images/hi-res/512220SFOABA00_2.jpg?sw=640&sh=640',
        category: 'daily',
        price: '₹12,000',
    },
    {
        id: 9,
        name: 'Telgu Bride',
        image: 'https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/12.png',
        category: 'wedding',
        price: '₹25,000',
    },
    {
        id: 10,
        name: 'Laced Reverie Diamond',
        image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw984db1e1/images/hi-res/50O5SW2ARDBA09_2.jpg?sw=480&sh=480',
        category: 'diamond',
        price: '₹75,000',
    },
    {
        id: 11,
        name: 'Nakshi Elegance',
        image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwebbbe997/images/hi-res/51W4PIVOJ2AP3_1.jpg',
        category: 'traditional',
        price: '₹50,000',
    },
    {
        id: 12,
        name: 'Gold finger Ring',
        image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw37fc740c/images/hi-res/51M4C1FFEAA00_1.jpg?sw=640&sh=640',
        category: 'daily',
        price: '₹12,000',
    }, {
        id: 13,
        name: ' Kannadiga Bride',
        image: 'https://staticimg.tanishq.co.in/microsite/rivaah-homepage/assets/images/journey/2.png',
        category: 'wedding',
        price: '₹25,000',
    },
    {
        id: 14,
        name: 'Whimsical Diamond',
        image: 'https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw7ec43fd6/images/hi-res/50O4VF2CIDBA02_2.jpg?sw=480&sh=480',
        category: 'diamond',
        price: '₹75,000',
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
                            <div className="relative w-full mt-4 h-64">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain   "
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
