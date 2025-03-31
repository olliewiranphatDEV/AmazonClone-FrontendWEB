import { PackageSearch, Store, User } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';
import UserPicSB from '../user/UserPicSB';
import ReloadingLink from '../ReloadingLink';

function SellerSideBar() {

    return (
        < div className='flex-1 flex flex-col items-center bg-[#131921] text-white h-full' >
            {/* User Picture */}
            <UserPicSB />

            <div className='w-full mt-3  flex flex-col gap-1'>
                {/* Dashboard */}
                <Link to='/seller-center' className='hover:bg-slate-400  hover:font-semibold hover:text-black w-full h-full p-1 pt-2 hover:duration-300 rounded-sm cursor-pointer'>
                    <div className='flex relative mb-2'>
                        <Store className='h-[18px]' />
                        <span className=' absolute pl-9 bottom-[-3px] text-[12px]'>Dashboard</span>
                    </div>
                </Link>
                {/* All Products */}
                <Link to='/seller-center/all-products' className='hover:bg-slate-400  hover:font-semibold hover:text-black w-full h-full p-1 pt-2 hover:duration-300 rounded-sm cursor-pointer'>
                    <div className='flex relative mb-2'>
                        <PackageSearch className='h-[18px]' />
                        <span className=' absolute pl-9 bottom-[-3px] text-[12px]'>All Products</span>
                    </div>
                </Link>

                {/* All Orders */}
                <Link to='/seller-center/orders-revenue' className='hover:bg-slate-400 hover:font-semibold hover:text-black w-full h-full p-1 pt-2 hover:duration-300 rounded-sm cursor-pointer'>
                    <div className='flex relative mb-2'>
                        <Store className='h-[18px]' />
                        <span className=' absolute pl-9 bottom-[-3px] text-[12px]'>Orders & Revenue</span>
                    </div>
                </Link>
                <div>
                    <div className='account flex items-center gap-1 relative'>
                        <User className='h-[20px]' />
                        <span className=' absolute pl-9 bottom-[-3px] text-[12px]'>Account</span>
                    </div>
                    <ul className='pl-9 flex flex-col gap-3 mt-4 mb-5 text-[11px]'>
                        <ReloadingLink to='/user/update-account' className='block pb-1 w-[36px] cursor-pointer border-transparent hover:border-b-2  hover:border-slate-400 hover:duration-200'>Profile</ReloadingLink>
                        <ReloadingLink to='/user/order/payment' className='block pb-1 w-[71px] cursor-pointer border-transparent hover:border-b-2  hover:border-slate-400 hover:duration-200'>Bank & Cards</ReloadingLink>
                        <ReloadingLink to='/user/cart' className='w-[43px] pb-1 cursor-pointer border-transparent hover:border-b-2  hover:border-slate-400 hover:duration-200'>My Cart</ReloadingLink>
                    </ul>
                </div>

            </div>
        </div >
    )
}

export default SellerSideBar