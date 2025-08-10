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
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            loop
            className="w-full mt-5"
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div
                        className="
                            w-full
                            min-h-[250px] sm:min-h-[350px] md:min-h-[500px] lg:h-screen
                            bg-contain bg-no-repeat bg-center
                            flex flex-col items-center justify-center
                            text-white px-4 sm:px-6
                        "
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {/* <div className="bg-black/50 p-4 sm:p-6 rounded-lg text-center max-w-[90%] sm:max-w-[600px]">
                            <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">

                            </h2>
                            <p className="mt-2 text-sm sm:text-base md:text-lg">

                            </p>
                        </div> */}
                    </div>
                </SwiperSlide >
            ))
            }
        </Swiper >
    );
}
