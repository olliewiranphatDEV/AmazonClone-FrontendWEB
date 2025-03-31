import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
// Import Swiper styles
import 'swiper/css/pagination';

const CategoryCarousel = ({ title, data = [] }) => {
    return (
        <div className="px-4 py-6 shadow-sm relative w-[85%] mx-auto my-6 bg-white">
            <h2 className="text-[16px] font-bold mb-4">{title}</h2>

            <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                navigation
                slidesPerView={7}
                spaceBetween={20}
                breakpoints={{
                    1024: { slidesPerView: 7 },
                    768: { slidesPerView: 4 },
                    480: { slidesPerView: 2.5 },
                }}

            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center text-center group cursor-pointer">
                            <div
                                className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center overflow-hidden mb-2 transition-transform duration-300 group-hover:scale-105">
                                <img
                                    src={item.image}
                                    alt={item.label}
                                    className="w-16 h-16 object-contain rounded-full"
                                />
                            </div>
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CategoryCarousel 
