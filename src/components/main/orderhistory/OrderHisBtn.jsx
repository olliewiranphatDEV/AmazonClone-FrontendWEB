import { SignInButton, useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router'
import ReloadingLink from '../../ReloadingLink'

function OrderHisBtn() {
    const { userId } = useAuth()


    if (!userId) {
        return (
            <SignInButton mode='modal' forceRedirectUrl='/user/order-history'>
                <div className='rounded-sm hover:bg-slate-400  hover:text-black hover:duration-300 p-2' >
                    <button className='flex flex-col justify-center'>
                        <span className='account text-[9px]'>Returns</span>
                        <span className='text-[12px] font-bold'>& Orders</span>
                    </button>
                </div >
            </SignInButton>
        )
    }



    return (
        <div className='rounded-sm hover:bg-slate-400  hover:text-black hover:duration-300 p-2' >
            <ReloadingLink to='/user/order-history' className='flex flex-col justify-center'>
                <span className='account text-[9px]'>Returns</span>
                <span className='text-[12px] font-bold'>& Orders</span>
            </ReloadingLink>
        </div >
    )

}

export default OrderHisBtn