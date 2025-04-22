import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css';

function ImagesProductGallery({ ProductImage }) {
    const [mainImage, setMainImage] = useState(ProductImage[0].secure_url)
    const [enterImage, setEnterImage] = useState(false)
    const hdlShowEnterImage = () => {
        setEnterImage(true)
        setMainImage(secure_url)
    }


    return (
        <div className="flex gap-4">
            {/* THUMBNAIL IMAGES SECTION */}
            <div className="overflow-y-auto scroll-smooth scrollbar-hide w-[60px] pt-2"> {/* ตั้งขนาดของ thumbnail ใหญ่ขึ้น */}
                <Swiper
                    direction="vertical" // ตั้งค่าให้เลื่อนในแนวตั้ง
                    spaceBetween={60} // ระยะห่างระหว่างภาพ
                    slidesPerView={4} // แสดงภาพ 4 ภาพในแต่ละรอบ
                    className="thumbnail-gallery"
                >
                    {
                        ProductImage.length > 0 && ProductImage.map(({ imageID, secure_url }) => (
                            <SwiperSlide key={imageID}>
                                <div onMouseEnter={() => setMainImage(secure_url)}
                                    className={`cursor-pointer w-[50px] h-[50px]  hover:scale-110 hover:duration-200 mx-auto`}
                                >
                                    <img src={secure_url} alt="image-thumbnail" className="w-full h-full object-contain rounded-xl" /> {/* กำหนดขนาดภาพ thumbnail */}
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            {/* MAIN IMAGE */}
            <div className="w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] bg-white hover:scale-110 hover:duration-300 cursor-pointer">
                <img src={mainImage} alt="main-product" className="w-full h-full object-contain" />
            </div>
        </div>
    )
}

export default ImagesProductGallery;
