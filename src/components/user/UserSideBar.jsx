import { BellRing, HandCoins, Rows4, TicketPercent, User } from 'lucide-react';
import React from 'react'
import SellerAccess from '../seller/SellerAccess';
import AdminAccess from '../admin/AdminAccess';
import useAuthStore from '../../store/UserStore';
import UserPicSB from './UserPicSB';
import ReloadingLink from '../ReloadingLink';

function UserSideBar() {
    const role = useAuthStore((state) => state.userData?.role)
    console.log('role', role);

    return (
        < div className='flex-1 flex flex-col items-center bg-[#131921] text-white h-full' >
            {/* User Picture */}
            <UserPicSB />

            <div className='w-full mt-3 flex flex-col gap-1'>
                <div className='account flex items-center gap-1 relative px-4'>
                    <User className='h-[18px]' />
                    <span className=' absolute pl-9 bottom-[-3px] text-[12px]'>Account</span>
                </div>
                <ul className='pl-14 flex flex-col gap-3 mt-3 mb-2 text-[11px]'>
                    <ReloadingLink to='/user/update-account' className='block pb-1 w-[36px] cursor-pointer border-transparent hover:border-b-2  hover:border-slate-400 hover:duration-200'>Profile</ReloadingLink>
                    <ReloadingLink to='/user/order/payment' className='block pb-1 w-[71px] cursor-pointer border-transparent hover:border-b-2  hover:border-slate-400 hover:duration-200'>Bank & Cards</ReloadingLink>
                    <ReloadingLink to='/user/cart' className='w-[43px] pb-1 cursor-pointer border-transparent hover:border-b-2  hover:border-slate-400 hover:duration-200'>My Cart</ReloadingLink>
                </ul>
                <div className='account flex justify-start gap-2 hover:bg-slate-400 hover:font-semibold hover:text-black w-full py-[10px] px-4 hover:duration-300 rounded-sm cursor-pointer'>
                    <Rows4 className='h-[18px]' />
                    <ReloadingLink to='/user/order-history' className='ml-1 bottom-[2px] text-[12px] cursor-pointer'>Order History</ReloadingLink>
                </div>
                <div className='account flex justify-start gap-2 hover:bg-slate-400 hover:font-semibold hover:text-black w-full py-[10px] px-4 hover:duration-300 rounded-sm cursor-pointer'>
                    <BellRing className='h-[18px]' />
                    <ReloadingLink to='*' className='ml-1 bottom-[2px] text-[12px] cursor-pointer'>Notifications</ReloadingLink>
                </div>
                <div className='account flex justify-start gap-2 hover:bg-slate-400 hover:font-semibold hover:text-black w-full py-[10px] px-4 hover:duration-300 rounded-sm cursor-pointer'>
                    <TicketPercent className='h-[18px]' />
                    <ReloadingLink to='*' className='ml-1 bottom-[2px] text-[12px] cursor-pointer'>My Discount</ReloadingLink>
                </div>
                <div className='account flex justify-start gap-2 hover:bg-slate-400 hover:font-semibold hover:text-black w-full py-[10px] px-4 hover:duration-300 rounded-sm cursor-pointer'>
                    <HandCoins className='h-[18px]' />
                    <ReloadingLink to='*' className='ml-1 bottom-[2px] text-[12px] cursor-pointer'>My Centric Coins</ReloadingLink>
                </div>
                {/* Show SELLER Access */}
                {
                    role == "SELLER" && <SellerAccess />
                }
                {
                    role == "ADMIN" && <AdminAccess />
                }
            </div>
        </div >
    )
}

export default UserSideBar