import React from 'react'
import MainNavBar from '../components/main/MainNavBar'
import SecondNavBar from '../components/main/SecondNavBar'
import { Outlet } from 'react-router'
import Footer from '../components/main/Footer'
import AdminSideBar from '../components/admin/AdminSideBar'

function AdminLayout() {
    return (
        <>
            <MainNavBar />

            <div className='mt-[60px] flex flex-col'>
                <SecondNavBar />
            </div>
            <div className='flex'>
                <div className='w-[200px]'>
                    <AdminSideBar />
                </div>

                <div className="flex-1">
                    <Outlet />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AdminLayout