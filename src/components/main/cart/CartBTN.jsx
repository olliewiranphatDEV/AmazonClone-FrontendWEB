import { SignInButton, useAuth } from '@clerk/clerk-react'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import ReloadingLink from '../../ReloadingLink'

function CartBTN() {
    const { userId } = useAuth()

    if (!userId) {
        return (
            <SignInButton mode='modal' forceRedirectUrl='/user/order-history'>
                <div className='cursor-pointer rounded-sm hover:bg-slate-400  hover:text-black hover:duration-300 p-2  relative h-[45px] flex w-[74px]'>
                    <ShoppingCart className='h-[20px] absolute top-2' />
                    <span className='absolute left-8 bottom-[2px] font-bold pr-2'>Cart</span>
                </div>
            </SignInButton>
        )
    }



    return (
        <ReloadingLink to='/user/cart' className='cursor-pointer rounded-sm hover:bg-slate-400  hover:text-black hover:duration-300 p-2  relative h-[45px] flex w-[74px]'>
            <ShoppingCart className='h-[20px] absolute top-2' />
            <span className='absolute left-8 bottom-[2px] font-bold pr-2'>Cart</span>
        </ReloadingLink>
    )
}

export default CartBTN