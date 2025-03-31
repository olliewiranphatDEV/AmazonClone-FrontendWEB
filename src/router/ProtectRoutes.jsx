import { SignInButton, useAuth, useUser } from '@clerk/clerk-react'
import React from 'react'
import { renderAlert } from '../utils/renderAlert';
import { Link } from 'react-router';
import { Loader, Loader2, Loader2Icon, LoaderCircle, LoaderCircleIcon, LoaderPinwheel, LucideLoader } from 'lucide-react';

function ProtectRoutes({ el, allows }) {

    const { user } = useUser()
    // console.log('user', user);

    const role = user?.publicMetadata.role
    // console.log('role', role);


    const { isSignedIn, isLoaded } = useAuth()
    if (!isLoaded) {
        return <Loader className='m-auto mt-[22%] animate-spin text-gray-400 font-semibold' />
    }

    if (!isSignedIn) {
        return (
            <SignInButton mode='madal'>
            </SignInButton >
        )
    }

    if (!allows.includes(role)) {
        return (
            <div className='flex flex-col gap-2 m-auto  mt-[20%]'>
                <span>Access Denied!!</span>
                <Link to='/'>Go to Home</Link>
            </div>
        )
    }


    return el

}

export default ProtectRoutes