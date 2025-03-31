import React from 'react'
import MainNavBar from '../components/main/MainNavBar'
import { Outlet } from 'react-router'
import Footer from '../components/main/Footer'
import SellerSideBar from '../components/seller/SellerSideBar'

function SellerLayout() {
    return (
        <>
            <MainNavBar />
            <div className='mt-[60px] flex'>
                <div className='w-[200px]'>
                    <SellerSideBar />
                </div>
                <div className='flex-1'>
                    <Outlet />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SellerLayout