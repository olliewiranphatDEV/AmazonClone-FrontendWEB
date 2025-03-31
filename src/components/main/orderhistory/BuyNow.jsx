import { SignInButton, useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router'

function BuyNow() {
    const { userId } = useAuth()


    if (!userId) {
        return (
            <SignInButton mode='modal' forceRedirectUrl='/user/order/payment'>
                <button className='flex justify-center cursor-pointer account text-[12px] px-4 py-1 mx-auto'>
                    <span>Buy Now</span>
                </button>
            </SignInButton>
        )
    }



    return (
        <Link to='/user/order/payment' className='flex justify-center cursor-pointer account text-[12px] px-4 py-1 mx-auto'>
            <span>Buy Now</span>
        </Link>

    )

}

export default BuyNow