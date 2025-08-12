
// final working code
// 'use client';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const slides = [
//     {
//         id: 1,
//         image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1ab21a3f/homepage/HeroBanner/festivals-of-diamond-offer-desktop.jpg',
//         title: 'Pure Gold Jewelry',
//         description: 'Elegance that never fades.',
//     },
//     {
//         id: 2,
//         image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2d6dfd57/homepage/HeroBanner/sparkling-avenues-desktop.jpg',
//         title: 'Handcrafted Perfection',
//         description: 'Made with love and tradition.',
//     },
//     {
//         id: 3,
//         image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb3ca7843/homepage/HeroBanner/dailywear-desktop1.jpg',
//         title: 'Luxury Redefined',
//         description: 'Experience the finest craftsmanship.',
//     },
// ];

// export default function Carousel() {
//     return (
//         <div className="w-full m-0 p-0 bg-black">
//             <Swiper
//                 modules={[Navigation, Pagination, Autoplay]}
//                 navigation
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 4000 }}
//                 loop
//                 autoHeight={true} // 🔹 This makes Swiper auto-adjust its height
//                 className="w-full mt-11 sm:mt-10 md:mt-24 lg:mt-20"
//             >
//                 {slides.map((slide) => (
//                     <SwiperSlide key={slide.id} className="flex justify-center items-center">
//                         <img
//                             src={slide.image}
//                             alt={slide.title}
//                             className="w-full h-auto object-contain"
//                         />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }


'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
    {
        id: 1,
        image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1ab21a3f/homepage/HeroBanner/festivals-of-diamond-offer-desktop.jpg',
        title: 'Pure Gold Jewelry',
        description: 'Elegance that never fades.',
    },
    {
        id: 2,
        image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2d6dfd57/homepage/HeroBanner/sparkling-avenues-desktop.jpg',
        title: 'Handcrafted Perfection',
        description: 'Made with love and tradition.',
    },
    {
        id: 3,
        image: 'https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwb3ca7843/homepage/HeroBanner/dailywear-desktop1.jpg',
        title: 'Luxury Redefined',
        description: 'Experience the finest craftsmanship.',
    },
];

export default function Carousel() {
    return (
        <div className="w-full m-0 p-0 bg-black">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{
                    clickable: true,
                    el: '.custom-pagination', // Custom container
                }}
                autoplay={{ delay: 4000 }}
                loop
                autoHeight={true}
                className="w-full mt-11 sm:mt-10 md:mt-24 lg:mt-20 relative"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="flex justify-center items-center">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-auto object-contain"
                        />
                    </SwiperSlide>
                ))}

                {/* Custom Pagination placed at bottom */}
                <div className="custom-pagination absolute bottom-2 left-0 w-full flex justify-center !z-50"></div>
            </Swiper>
        </div>
    );
}










