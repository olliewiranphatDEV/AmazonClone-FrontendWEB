import { SignInButton, useAuth } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { changeToSeller } from '../../../api/seller'

function FinalSwitch({ setIsLoading }) {
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
                    console.log('res', res);
                    setIsLoading(false)
                    navigate('/seller-center/all-products')
                } catch (error) {
                    console.log("Cannot switch! ERROR", error);

                }
            }

            updateRole()
        }
    }, [isSignedIn, getToken, searchParams, readyToSeller, navigate])


    return (
        <div className='w-full text-[#161e2d] account p-20'>
            <div className='mx-auto xl:w-[90%] grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='flex flex-col gap-6 flex-1'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col text-center xl:text-start'>
                            <span className='text-[50px] font-extrabold'>Start selling</span>
                            <span className='text-[50px] font-extrabold'>with Centric</span>
                        </div>
                        <span className='text-[18px]'>Try selling in a store that customers trust using high-impact tools and programs.</span>
                    </div>
                    {
                        isSignedIn ? (
                            <button onClick={() => setReadyToSeller(true)}
                                className='hover:scale-110 text-center text-[25px] font-bold bg-[#FF6200] py-6 px-8 rounded-full shadow-2xl hover:bg-[#ff5100] hover:duration-300 hover:text-gray-900 '>
                                Switch to Seller *
                            </button>
                        ) : (
                            <SignInButton
                                mode='modal' forceRedirectUrl='/switch-to-seller?auto=switch'
                                className='hover:scale-110 mx-auto text-center text-[25px] font-bold bg-[#FF6200] py-6 px-8 rounded-full shadow-2xl hover:bg-[#ff5100] hover:duration-300 hover:text-gray-900 '
                            >
                                Switch to Seller *
                            </SignInButton>
                        )
                    }
                    <div className='w-full text-center'>Get <strong>10% back</strong> on your first <strong>$50,000</strong>in branded sales</div>

                </div>
                <div className='flex-1'>
                    <img src="https://i.ibb.co/G30p8Fjm/Screenshot-2025-04-13-192448-removebg-preview.png" alt="signup" className='w-full h-full object-cover rounded-2xl' />
                </div>
            </div>
        </div>
    )
}

export default FinalSwitch