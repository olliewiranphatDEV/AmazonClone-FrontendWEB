import { AlignJustify } from 'lucide-react'
import React from 'react'
import ReloadingLink from '../ReloadingLink'
import useAuthStore from '../../store/UserStore'
import { useUser } from '@clerk/clerk-react'

function SecondNavBar() {
    const { user } = useUser() //CLERK
    // console.log('role',user?.publicMetadata.role);


    return (
        <div className='w-full h-[35px] text-white text-[11px] bg-[#232f3e] px-4 flex items-center gap-2 flex-wrap'>

            {/* ALL NAVBAR */}
            <button
                className='font-bold gap-[1px] bg-inherit h-[80%] flex items-center px-1 justify-center rounded-sm hover:bg-slate-700 hover:duration-300'
            >
                <AlignJustify className='h-[18px]' />
                <span>All</span>
            </button>

            {/* TOPIC DETAILS */}
            <ReloadingLink to=''
                className='ml-3 h-[80%] p-2 flex items-center cursor-pointer rounded-sm hover:bg-slate-700 hover:duration-300'
            >
                <span>Today's Deal</span>
            </ReloadingLink>

            <ReloadingLink to=''
                className='h-[80%] p-2 flex items-center cursor-pointer rounded-sm hover:bg-slate-700 hover:duration-300'
            >
                <span>Customer Service</span>
            </ReloadingLink>

            <ReloadingLink to=''
                className='h-[80%] p-2 flex items-center cursor-pointer rounded-sm hover:bg-slate-700 hover:duration-300'
            >
                <span>Registry</span>
            </ReloadingLink>

            <ReloadingLink to=''
                className='h-[80%] p-2 flex items-center cursor-pointer rounded-sm hover:bg-slate-700 hover:duration-300'
            >
                <span>Gift Carts</span>
            </ReloadingLink>

            {/* SELLER SETUP */}
            <ReloadingLink to='/switch-to-seller'
                className='h-[80%] p-2 flex items-center cursor-pointer rounded-sm hover:bg-slate-700 hover:duration-300'
            >
                <span>Seller Center</span>
            </ReloadingLink>


            {/* ADMIN ACCESS */}
            {
                user?.publicMetadata.role === "ADMIN" && (
                    <ReloadingLink to='/admin-center'
                        className='h-[80%] p-2 flex items-center cursor-pointer rounded-sm hover:bg-slate-700 hover:duration-300'
                    >
                        <span>Admin Center</span>
                    </ReloadingLink>
                )
            }
        </div>
    )
}

export default SecondNavBar