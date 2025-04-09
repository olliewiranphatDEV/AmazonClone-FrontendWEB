import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

// DEFINE ARROWS
const ArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.7} stroke="currentColor" className="sm:size-6 md:size-10 lg:size-14 hover:scale-125 hover:duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
)

const ArrowLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.7} stroke="currentColor" className="sm:size-6 md:size-10 lg:size-14 hover:scale-125 hover:duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
)



// COMPONENT
function CustomCarousel({ slides = [] }) {
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <div className='relative flex justify-center h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] w-[95%] mx-auto'>
            {/* CUSTOM ARROWS */}
            <div ref={prevRef} className="absolute top-[22%] left-2 -translate-y-1/2 z-10 cursor-pointer text-[#131921]">
                <ArrowLeft />
            </div>
            <div ref={nextRef} className="absolute top-[22%] right-2 -translate-y-1/2 z-10 cursor-pointer text-[#131921]">
                <ArrowRight />
            </div>

            <Swiper
                modules={[Navigation, Autoplay, Pagination, EffectFade]}
                effect="fade"
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500 }}
                slidesPerView={1}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current
                    swiper.params.navigation.nextEl = nextRef.current
                }}
                onSwiper={(swiper) => {
                    setTimeout(() => {
                        if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                            swiper.navigation.init()
                            swiper.navigation.update()
                        }
                    })
                }}
            >
                {
                    slides.map((slide, inx) => (
                        <SwiperSlide key={inx}>
                            {slide}
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div >
    )
}

export default CustomCarousel
