import React, { useState } from 'react'
import SwitchButton from '../../components/seller/switch-to-seller/SwitchButton'
import { Check, LoaderCircle } from 'lucide-react'
import SellerIncentives from '../../components/seller/switch-to-seller/SellerIncentives'
import FinalSwitch from '../../components/seller/switch-to-seller/FinalSwitch'
import ReviewedSellers from '../../components/seller/switch-to-seller/ReviewedSellers'


function SwitchToSeller() {
    const [isLoading, setIsLoading] = useState(false)
    return (
        <div className='w-full bg-white text-[#161e2d] h-full relative pb-20'>
            <SwitchButton setIsLoading={setIsLoading} />

            <SellerIncentives />

            <ReviewedSellers />

            <FinalSwitch setIsLoading={setIsLoading} />
            {
                isLoading && (<div
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        position: "absolute",
                        top: "0",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                    <svg
                        className='w-[10%] absolute top-[7%] animate-spin'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#c2c2c2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <path d="M21 12a9 9 0 11-6.219-8.56"></path> </g>
                    </svg>
                </div>
                )
            }
        </div>
    )
}

export default SwitchToSeller