import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react'
import ListSignin from './ListSignin'
import ListSignout from './ListSignout'
import axios from 'axios'

function SigninSignout() {
    const { user } = useUser()



    return (
        <div className='relative group rounded-sm hover:bg-slate-400  hover:text-black hover:duration-300 p-2'>

            {/* btnSignin */}
            <SignedOut>
                <button className='flex flex-col justify-center'>
                    <span className='account text-[9px]'>Hello, sign in</span>
                    <span className='text-[12px] font-bold'>Account & Lists</span>
                </button>
            </SignedOut>

            {/* btnSignout */}
            <SignedIn>
                <button className='flex justify-center'  >
                    <div className="flex flex-col">
                        <span className='account text-[9px]'>Hello, {user?.firstName || "Welcome"}</span>
                        <span className='text-[12px] font-bold'>Account & Lists</span>
                    </div>
                    <ChevronDown className='text-black w-3 ' />
                </button>
            </SignedIn>

            {/* ulList Sign in*/}
            <ListSignin />
            {/* ulList */}
            <ListSignout />

        </div>
    )
}

export default SigninSignout