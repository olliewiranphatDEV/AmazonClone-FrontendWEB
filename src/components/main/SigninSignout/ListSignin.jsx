import { SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react'
import React from 'react'

function ListSignin() {

    return (
        <SignedOut>
            <ul className='hidden absolute group-hover:block top-12 rounded-md left-[-42px] p-2 bg-white w-[160px] text-black'>
                <SignInButton className='cursor-pointer bg-[#ffd814] rounded-md w-[130px] my-2 mx-auto flex justify-center items-center h-8' mode='modal'>
                    Sign in
                </SignInButton>
                <div className='text-[9px] my-3 pl-2'>
                    <span className='mr-1'>New Customer?</span>
                    <SignUpButton mode='modal' className='cursor-pointer font-semibold underline text-blue-600'>Start here</SignUpButton>
                </div>
            </ul>
        </SignedOut>
    )
}

export default ListSignin