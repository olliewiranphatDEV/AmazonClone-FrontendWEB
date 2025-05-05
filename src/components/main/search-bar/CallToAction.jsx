import { SignInButton, useAuth } from '@clerk/clerk-react'
import React from 'react'

function CallToAction({ hdlAddToCart }) {
    const { userId } = useAuth()
    if (!userId) {
        return (
            <div className='flex flex-col gap-3'>

                <SignInButton mode='modal'>
                    <button
                        className='w-full bg-[#FFD814] rounded-full py-1 hover:bg-amber-400 hover:duration-300'>
                        Add to Cart
                    </button>
                </SignInButton>

                <SignInButton mode='modal'>
                    <button
                        className='w-full bg-[#FFA41C] rounded-full py-1 hover:bg-orange-500 hover:duration-300'
                    >
                        Buy Now
                    </button>
                </SignInButton>
            </div>
        )
    }





    return (
        <div className='flex flex-col gap-3'>
            <button onClick={hdlAddToCart}
                className='w-full bg-[#FFD814] rounded-full py-1 hover:bg-amber-400 hover:duration-300'
            >
                Add to Cart
            </button>

            {/* BUY NOW */}
            <button
                className='w-full bg-[#FFA41C] rounded-full py-1 hover:bg-orange-500 hover:duration-300'
            >
                Buy Now
            </button>
        </div>
    )
}

export default CallToAction