import React from 'react'
import centric from '../../images/centriclogo.png'
import { Globe, MapPin } from 'lucide-react'
import SigninSignout from './SigninSignout/SigninSignout'
import OrderHisBtn from './orderhistory/OrderHisBtn'
import MainSearchBar from './search-bar/MainSearchBar'
import { useUser } from '@clerk/clerk-react'
import CartBTN from './cart/CartBTN'
import ReloadingLink from '../ReloadingLink'


function MainNavBar() {
    const { user } = useUser()



    return (
        <div className='bg-[#131921] h-[60px] text-white z-50 justify-between pr-2 flex fixed top-0 w-full items-center'>
            <ReloadingLink to='/' className='flex items-center justify-end h-full ' >
                < img src={centric} alt="CENTRIC" className='h-[145px] ' />
            </ReloadingLink>
            {/* Deliver to */}
            <div className=' h-full flex items-center ' >
                <button className='h-[80%] rounded-sm hover:bg-slate-400 hover:text-black hover:duration-300 px-2 flex flex-col items-center justify-center'>
                    <span className='text-[9px] account'>Deliver to {user?.firstName || ""}</span>
                    <div className='flex items-center relative'>
                        <MapPin className='h-[16px] absolute left-[-6px]' />
                        <span className='text-[12px] font-bold pl-4'>Thailand</span>
                    </div>
                </button>
            </div>
            {/* SearchBar */}
            < MainSearchBar />
            {/* SetLanguge */}
            <div className='flex py-2 pr-2 pl-1 h-[40px] text-[12px] items-center justify-center rounded-sm hover:bg-slate-400  hover:text-black hover:duration-300' >
                <Globe className='h-4' />
                <span>EN</span>
            </div>

            {/* SigninSignout  */}
            <SigninSignout />

            <OrderHisBtn />

            <CartBTN />
        </div >
    )
}

export default MainNavBar