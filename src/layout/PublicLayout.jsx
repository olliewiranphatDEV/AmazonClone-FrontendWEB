import React from 'react'
import MainNavBar from '../components/main/MainNavBar'
import { Outlet } from 'react-router'
import Footer from '../components/main/Footer'
import SecondNavBar from '../components/main/SecondNavBar'

function PublicLayout() {
    return (
        <>
            <div className=''>
                <MainNavBar />
            </div>
            <div className='mt-[60px] flex flex-col'>
                <SecondNavBar />
            </div>
            <div className='mt-[-75px] flex-1'>
                <Outlet />
            </div>

            <Footer />

        </>
    )
}

export default PublicLayout