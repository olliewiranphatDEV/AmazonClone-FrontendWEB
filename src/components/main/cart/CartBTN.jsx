import { SignInButton, useAuth } from '@clerk/clerk-react'
import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import ReloadingLink from '../../ReloadingLink'
import useCartStore from '../../../store/CartStore'

function CartBTN() {

    const { userCart } = useCartStore()
    console.log('userCart', userCart);






    const { userId } = useAuth()

    if (!userId) {
        return (
            <SignInButton mode='modal' forceRedirectUrl='/user/order-history'>
                <div className='cursor-pointer rounded-md hover:bg-slate-800 hover:duration-300 p-2  relative h-[45px] flex w-[74px]'>
                    <ShoppingCart className='h-[20px] absolute top-2' />
                    <span className='absolute left-8 bottom-[2px] font-bold pr-2'>Cart</span>
                </div>
            </SignInButton>
        )
    }



    return (
        <ReloadingLink to='/user/cart' className='cursor-pointer rounded-md hover:bg-slate-800 hover:duration-300 p-2  relative h-[45px] flex w-[74px]'>
            <ShoppingCart className='h-[20px] absolute top-2' />

            {
                userCart.length !== 0 && <span className='text-[14px] text-red-700 font-bold absolute top-1 right-1' >{userCart.length}</span>
            }

            <span className='absolute left-8 bottom-[2px] font-bold pr-2'>Cart</span>
        </ReloadingLink>
    )
}

export default CartBTN