import React from 'react'
import notfoundpage from '../../images/notfoundpage.png'
import { useAuth } from '@clerk/clerk-react'
import { Loader } from 'lucide-react'
import MainNavBar from '../../components/main/MainNavBar'
import SecondNavBar from '../../components/main/SecondNavBar'

function NotFound() {
    const { isLoaded } = useAuth()
    if (!isLoaded) {
        return <Loader className='m-auto mt-[22%] animate-spin text-gray-400 font-semibold' />
    }
    return (
        <>
            <MainNavBar />
            <div className='mt-[60px]'>
                <SecondNavBar />
            </div>
            <div className='bg-red-300 flex flex-col relative h-[500px]'>
                <img src={notfoundpage} alt='Not found page' className='w-[500px] right-0 absolute mt-24' />
            </div>
        </>
    )
}

export default NotFound