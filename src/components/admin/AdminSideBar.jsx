import React from 'react'
import ReloadingLink from '../ReloadingLink'
import { LayoutDashboardIcon, Settings, SquareChartGantt, SquareKanban, User } from 'lucide-react'
import UserPicSB from '../user/UserPicSB'

function AdminSideBar() {
    return (
        < div className='flex-1 flex flex-col items-center bg-[#131921] text-white h-full' >
            {/* User Picture */}
            <UserPicSB />
            <ReloadingLink to='/admin' className='account flex justify-start gap-2 hover:bg-slate-400 hover:font-semibold hover:text-black w-full py-[10px] px-4 hover:duration-300 rounded-sm cursor-pointer'>
                <LayoutDashboardIcon className='h-[18px]' />
                <span className='ml-1 bottom-[2px] text-[12px] cursor-pointer'>Dashboard</span>
            </ReloadingLink>
            <div className='w-full mt-3 flex flex-col gap-1'>
                <div className='account flex items-center gap-1 relative px-4'>
                    <SquareChartGantt className='h-[18px]' />
                    <span className=' absolute pl-9 bottom-[-3px] text-[12px]'>Management</span>
                </div>
                <ul className='pl-14 flex flex-col gap-3 mt-4 mb-2 text-[11px]'>
                    <ReloadingLink to='/admin/management/all-categories' className='block pb-1 w-[70px] cursor-pointer border-transparent hover:border-b-2  hover:border-slate-400 hover:duration-200'>All Categories</ReloadingLink>
                    <ReloadingLink to='/admin/management/all-customers' className='block pb-1 w-[71px] cursor-pointer border-transparent hover:border-b-2  hover:border-slate-400 hover:duration-200'>All Customers</ReloadingLink>
                    <ReloadingLink to='/admin/management/all-sellers' className='w-[50px] pb-1 cursor-pointer border-transparent hover:border-b-2  hover:border-slate-400 hover:duration-200'>All Sellers</ReloadingLink>
                </ul>
            </div>
            <div className='w-full mt-3 flex flex-col gap-1'>
                <div className='account flex items-center gap-1 relative px-4'>
                    <User className='h-[18px]' />
                    <span className=' absolute pl-9 bottom-[-3px] text-[12px]'>Account</span>
                </div>
                <ul className='pl-14 flex flex-col gap-3 mt-4 mb-2 text-[11px]'>
                    <ReloadingLink to='/user/update-account' className='block pb-1 w-[36px] cursor-pointer border-transparent hover:border-b-2  hover:border-slate-400 hover:duration-200'>Profile</ReloadingLink>
                    <ReloadingLink to='/user/order/payment' className='block pb-1 w-[71px] cursor-pointer border-transparent hover:border-b-2  hover:border-slate-400 hover:duration-200'>Bank & Cards</ReloadingLink>
                    <ReloadingLink to='/user/cart' className='w-[43px] pb-1 cursor-pointer border-transparent hover:border-b-2  hover:border-slate-400 hover:duration-200'>My Cart</ReloadingLink>
                </ul>
            </div>
            <ReloadingLink to='*' className='account flex justify-start gap-2 hover:bg-slate-400 hover:font-semibold hover:text-black w-full py-[10px] px-4 hover:duration-300 rounded-sm cursor-pointer'>
                <Settings className='h-[18px]' />
                <span className='ml-1 bottom-[2px] text-[12px] cursor-pointer'>Settings</span>
            </ReloadingLink>
        </div >
    )
}

export default AdminSideBar