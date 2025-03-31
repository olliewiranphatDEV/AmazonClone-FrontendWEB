import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useProductStore from '../../store/ProductStore';

function Carosel() {
    const allProductsDB = useProductStore(state => state.allProductsDB)
    console.log('allProductsDB >>>', allProductsDB);

    return (
        <div className='bg-white w-[90%] h-[200px] mx-auto my-4'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                navigation={true}
                pagination
                scrollbar={{ draggable: true }}
                spaceBetween={50}
                slidesPerView={8}

            >


                <SwiperSlide >
                    <div className='w-[160px] h-[160px] bg-purple-400'>
                        <span>1</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='w-[160px] h-[160px] bg-purple-400'>
                        <span>1</span>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='w-[160px] h-[160px] bg-purple-400'>
                        <span>1</span>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    )
}

export default Carosel