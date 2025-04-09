import React from 'react'
import MainNavBar from '../components/main/MainNavBar'
import { Outlet } from 'react-router'
import Footer from '../components/main/Footer'
import SecondNavBar from '../components/main/SecondNavBar'

function PublicLayout() {
    return (
        <>
            <div className='z-50'>
                <MainNavBar />
            </div>
            <div className='mt-[60px] flex flex-col'>
                <SecondNavBar />
            </div>

            <Outlet />
            <Footer />

        </>
    )
}

export default PublicLayout