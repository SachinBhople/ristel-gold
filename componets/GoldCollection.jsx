// 'use client';
// import Image from 'next/image';

// const collections = [
//     {
//         id: 1,
//         name: "Wedding Collection",
//         image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw770a9bca/homepage/tanishq-pillars/tw-nt-wedding-desktop.jpg',
//         link: '/collections/wedding',
//     },
//     {
//         id: 2,
//         name: "Diamond",
//         image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1f6a4391/homepage/tanishq-pillars/fod-diamond-desktop.jpg',
//         link: '/collections/diamond',
//     },
//     {
//         id: 3,
//         name: 'Daily Wear Gold',
//         image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0f91b4a3/homepage/tanishq-pillars/ai-dailywear-desktop.jpg',
//         link: '/collections/daily',
//     },
//     {
//         id: 4,
//         name: 'Traditional Gold',
//         image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw60988e8b/homepage/tanishq-pillars/tw-nt-gold-desktop.jpg',
//         link: '/collections/traditional',
//     },
// ];

// const CollectionsPage = () => {
//     return (
//         <div className="min-h-screen -mt-10 px-4 py-10 bg-[#fff8f0]">
//             <h1 className="text-3xl md:text-5xl font-bold text-center text-yellow-800 mb-12">
//                 Explore Our Gold Collections
//             </h1>

//             <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
//                 {collections.map((collection) => (
//                     <a
//                         key={collection.id}
//                         href={collection.link}
//                         className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
//                     >
//                         <div className="w-full h-64 relative overflow-hidden">
//                             <Image
//                                 src={collection.image}
//                                 alt={collection.name}
//                                 fill
//                                 className="object-contain group-hover:scale-110 transition-transform duration-300"
//                             />
//                         </div>
//                         <div className="p-4 text-center">
//                             <h2 className="text-lg font-semibold text-yellow-900">
//                                 {collection.name}
//                             </h2>
//                         </div>
//                     </a>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CollectionsPage;


'use client';
import Image from 'next/image';

const collections = [
    {
        id: 1,
        name: "Wedding Collection",
        image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw770a9bca/homepage/tanishq-pillars/tw-nt-wedding-desktop.jpg',
        link: '/collections/wedding',
    },
    {
        id: 2,
        name: "Diamond",
        image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1f6a4391/homepage/tanishq-pillars/fod-diamond-desktop.jpg',
        link: '/collections/diamond',
    },
    {
        id: 3,
        name: 'Daily Wear Gold',
        image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw0f91b4a3/homepage/tanishq-pillars/ai-dailywear-desktop.jpg',
        link: '/collections/daily',
    },
    {
        id: 4,
        name: 'Traditional Gold',
        image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw60988e8b/homepage/tanishq-pillars/tw-nt-gold-desktop.jpg',
        link: '/collections/traditional',
    },
];

const CollectionsPage = () => {
    return (
        <div className="min-h-screen -mt-10 px-4 py-10 bg-[#fff8f0]">
            <h1 className="text-3xl md:text-5xl font-bold text-center text-yellow-800 mb-12">
                Explore Our Gold Collections
            </h1>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
                {collections.map((collection) => (
                    <a
                        key={collection.id}
                        href={collection.link}
                        className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                    >
                        {/* Aspect ratio container for responsive images */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                            <Image
                                src={collection.image}
                                alt={collection.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h2 className="text-lg font-semibold text-yellow-900">
                                {collection.name}
                            </h2>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CollectionsPage;
