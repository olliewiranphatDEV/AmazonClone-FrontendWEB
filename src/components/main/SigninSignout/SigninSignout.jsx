import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react'
import ListSignin from './ListSignin'
import ListSignout from './ListSignout'
import axios from 'axios'

function SigninSignout() {
    const { user } = useUser()



    return (
        <div className='relative group rounded-md hover:bg-slate-800 hover:duration-300 p-2'>

            {/* SIGN-IN BTN */}
            <SignedOut>
                <button className='flex flex-col justify-center text-[10px]'>
                    <span className='account lg:text-[9px]'>Hello, sign in</span>
                    <span className='hidden lg:flex text-[12px] font-bold'>Account & Lists</span>
                </button>
            </SignedOut>

            {/* SIGN-OUT BTN */}
            <SignedIn>
                <button className='flex justify-center items-center'  >
                    <div className="flex flex-col">
                        <span className='account text-[9px]'>Hello, {user?.firstName || "Welcome"}</span>
                        <span className='text-[12px] font-bold'>Account & Lists</span>
                    </div>
                    <ChevronDown className='text-white w-3 ' />
                </button>
            </SignedIn>

            {/* SIGN-IN LIST*/}
            <ListSignin />

            {/* SIGN-OUT LIST */}
            <ListSignout />

        </div>
    )
}

export default SigninSignout