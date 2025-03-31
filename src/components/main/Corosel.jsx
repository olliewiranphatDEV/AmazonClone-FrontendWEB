import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Corosel() {
    return (
        <div className='w-[90%] m-auto -z-50'>

            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                // autoplay={{ delay: 2000 }}
                pagination={{ clickable: true }}
                navigation
                spaceBetween={50}
                slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className='bg-gradient-to-b from-[#f7b047] to-white h-[400px] relative flex justify-center'>
                        <div className='w-[60%] flex mt-16 relative'>
                            <div className='flex flex-col'>
                                <span className='text-[#222b38] text-3xl font-bold'>FREE Shipping to Thailand</span>
                                <span className='text-[#222b38] text-[20px] pl-6 mb-5 account' >On qualifying order* over USD 35</span>
                                <span className='text-[#222b38] text-[10px] account text-center'>*Restrictions apply</span>
                            </div>
                            <img src="https://i.ibb.co/cXC13wFm/snapedit-1740366754170.png" className='w-[400px] absolute top-[-30px] right-[-100px] ' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-b from-[#3061a1] to-white h-[400px] relative'></div>
                </SwiperSlide>


            </Swiper>
        </div>
    )
}

export default Corosel