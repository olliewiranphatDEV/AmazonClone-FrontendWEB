import React, { useState } from 'react'
import centric from '../../images/centriclogo.png'
import { Globe, MapPin } from 'lucide-react'
import SigninSignout from './SigninSignout/SigninSignout'
import OrderHisBtn from './orderhistory/OrderHisBtn'
import MainSearchBar from './search-bar/MainSearchBar'
import { useUser } from '@clerk/clerk-react'
import CartBTN from './cart/CartBTN'
import ReloadingLink from '../ReloadingLink'



function MainNavBar({ setBgFocus, setLoading }) {
    const { user } = useUser()


    return (
        <div className='w-full h-[60px] bg-[#131921] text-white sm:fixed top-0 z-50 flex justify-between items-center px-2 gap-3'>

            {/* LOGO APP */}
            <ReloadingLink to='/' className='flex items-center justify-end  h-full overflow-hidden mr-1' >
                < img src="https://i.ibb.co/Zz7kphTn/Screenshot-2025-04-22-214714.png" alt="CENTRIC" className='w-[100px] sm:w-[120px]' />
            </ReloadingLink>

            {/* DELIVERY TO */}
            <button className='hidden lg:flex h-[80%] rounded-md hover:bg-slate-800 hover:duration-300 px-2  flex-col items-center justify-center' >

                <span className='text-[9px] account'>Deliver to {user?.firstName || ""}</span>
                <div className='flex items-center relative'>
                    <MapPin className='h-[16px] absolute left-[-6px]' />
                    <span className='text-[12px] font-bold pl-4'>Thailand</span>
                </div>

            </button>

            {/* MAIN SEARCH BAR */}
            < MainSearchBar
                setBgFocus={setBgFocus}
                setLoading={setLoading}
            />

            {/* SETUP LANGUAGE */}
            <button className='flex py-2 pr-2 pl-1 h-[40px] text-[12px] items-center justify-center rounded-md hover:bg-slate-800 hover:duration-300' >
                <Globe className='h-4' />
                <span>EN</span>
            </button>

            {/* SIGNIN-SIGNOUT  */}
            <SigninSignout />

            {/* ORDER-HISTORY */}
            <div className='hidden lg:flex'>
                <OrderHisBtn />
            </div>

            {/* CART */}
            <div className='hidden lg:flex'>
                <CartBTN />
            </div>



        </div >
    )
}

export default MainNavBar