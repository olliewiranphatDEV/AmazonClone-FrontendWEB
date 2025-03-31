import React from 'react'
import MainNavBar from '../components/main/MainNavBar'
import { Outlet } from 'react-router'
import Footer from '../components/main/Footer'
import SecondNavBar from '../components/main/SecondNavBar'
import UserSideBar from '../components/user/UserSideBar'

function UserLayout() {

    return (
        <>
            <MainNavBar />
            <div className='mt-[60px] flex flex-col'>
                <SecondNavBar />
            </div>
            <div className='flex'>
                <div className='w-[200px]'>
                    <UserSideBar />
                </div>

                <div className='flex-1'>
                    <Outlet />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default UserLayout