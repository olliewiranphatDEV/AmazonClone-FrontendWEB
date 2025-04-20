import { SignInButton, useAuth } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { changeToSeller } from '../../../api/seller'
import { useNavigate, useSearchParams } from 'react-router'

function SwitchButton({ setIsLoading }) {
    const navigate = useNavigate()
    const { isSignedIn, getToken } = useAuth()
    const [readyToSeller, setReadyToSeller] = useState(false)
    const [searchParams] = useSearchParams()

    useEffect(() => {
        const auto = searchParams.get("auto") //switch
        if (readyToSeller || isSignedIn && auto === "switch") {
            setIsLoading(true)
            const updateRole = async () => {
                const token = await getToken()
                try {
                    const res = await changeToSeller(token)
                    // console.log('res', res);
                    setIsLoading(false)
                    navigate('/seller-center/all-products')
                } catch (error) {
                    console.error("Failed to change role:", error)
                }
            }

            updateRole()

        }

    }, [searchParams, isSignedIn, readyToSeller, getToken, navigate])


    //IMG SCALE WHEN OPEN PAGE
    useEffect(() => {
        const img = document.getElementById("img")
        img.style.transform = "scale(1.15)"
        img.style.transition = "transform 0.8s ease"

        setTimeout(() => {
            img.style.transform = "scale(1)"
        }, 600)
    }, [])



    return (
        <div className='flex flex-col mb-5'>
            <div className='py-9 gap-10 xl:gap-5 sm:justify-end justify-center flex flex-wrap '>
                <div className='w-full md:w-[95%] mx-auto xl:w-[58%] flex flex-col gap-7 justify-center items-center text-center xl:text-start'>
                    <span className='text-[40px] xl:text-[60px] font-extrabold'>Sell with the fastest-growing and preferred acquisition channel1</span>
                    <div className='w-full flex justify-center'>
                        {
                            isSignedIn ?
                                (<button onClick={() => setReadyToSeller(true)}
                                    className='hover:scale-110 hover:duration-300 flex justify-center xl:justify-start gap-5 items-center w-[90%]'>
                                    <div
                                        className='text-center text-[25px] font-bold bg-[#FF6200] py-6 px-8 rounded-full shadow-2xl hover:bg-[#ff5100] hover:duration-300 hover:text-gray-900'
                                    >Switch to Seller *</div>
                                    <div className='w-[30%] account'>Get <strong>10% back</strong> on your first <strong>$50,000</strong>in branded sales</div>
                                </button>)
                                : (
                                    <SignInButton
                                        mode="modal"
                                        forceRedirectUrl="/switch-to-seller?auto=switch"
                                    >
                                        <button className='className="hover:scale-110 hover:duration-300 flex gap-5 items-center cursor-pointer'>
                                            <div className="text-center text-[25px] font-bold bg-[#FF6200] py-6 px-8 rounded-full shadow-2xl hover:bg-[#ff5100] hover:text-gray-900">
                                                Switch to Seller *
                                            </div>
                                            <div className="w-[25%] sm:w-[30%]">
                                                Get <strong>10% back</strong> on your first <strong>$50,000</strong> in branded sales
                                            </div>
                                        </button>
                                    </SignInButton>
                                )
                        }
                    </div>
                </div>

                <div className='w-full xl:w-[35%] h-[300px] sm:h-[400px] scale-[115%]' id='img'>
                    <img
                        src="https://i.ibb.co/d07QTpF5/CN2-NA-lofi.png"
                        alt="Seller" className='w-full h-full object-cover' />
                </div>
            </div>
            <div className='w-full mt-3 p-4 sm:px-8 text-center text-[14px] sm:text-[30px] font-bold bg-[#232f3e] text-white'>
                More than 70% of Amazon sellers generate their first sale in less than 60 days.2
            </div>
        </div>
    )
}

export default SwitchButton