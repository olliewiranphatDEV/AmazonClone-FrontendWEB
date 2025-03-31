import { SignedIn, SignOutButton, useAuth } from '@clerk/clerk-react'
import { Loader } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import ReloadingLink from '../../ReloadingLink'


function ListSignout() {
    const { isLoaded } = useAuth()
    if (!isLoaded) {
        return <Loader className='m-auto animate-spin text-gray-400 font-semibold' />
    }
    return (
        <SignedIn>
            <ul className='py-4 hidden top-11 left-[-35px] rounded-md bg-white w-[158px] absolute group-hover:block text-black flex-col'>
                <SignOutButton className='cursor-pointer bg-[#ffd814] rounded-md w-[130px] mx-auto flex justify-center items-center h-8 text-[11px]' mode='modal'>
                    <li>Sign Out</li>
                </SignOutButton>
                <div className=' flex flex-col mt-3 gap-1  pl-8'>
                    <span className='text-[12px] font-bold mb-1'>Your Account</span>
                    <ReloadingLink to='/user/update-account' className='cursor-pointer text-[11px] account text-start hover:text-red-600 hover:underline hover:duration-200'>Account</ReloadingLink>
                    <ReloadingLink to='/user/order-history' className='cursor-pointer text-[11px] account text-start hover:text-red-600 hover:underline hover:duration-200'>Order History</ReloadingLink>
                    <ReloadingLink to='/user/cart' className='cursor-pointer text-[11px] account text-start hover:text-red-600 hover:underline hover:duration-200'>Cart</ReloadingLink>
                </div>
            </ul>
        </SignedIn>
    )
}

export default ListSignout