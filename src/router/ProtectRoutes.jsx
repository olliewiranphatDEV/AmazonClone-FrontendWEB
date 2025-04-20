import { SignInButton, useAuth, useUser } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { renderAlert } from '../utils/renderAlert';
import { Link } from 'react-router';
import { Loader, Loader2, Loader2Icon, LoaderCircle, LoaderCircleIcon, LoaderPinwheel, LucideLoader } from 'lucide-react';

function ProtectRoutes({ el, allows }) {
    const [returnEL, setReturnEL] = useState(false)
    const [showSkeleton, setShowSkeleton] = useState(true)
    const { user } = useUser()
    // console.log('user', user);
    const role = user?.publicMetadata.role
    // console.log('role', role);
    const { isSignedIn, isLoaded } = useAuth()

    //SKELETON LOADER SHOW 1 SECOND BEFORE CHANGE PAGRE
    useEffect(() => {
        // setShowSkeleton(true)
        if (isLoaded) {
            // เริ่มแสดง Skeleton และหน่วงเวลา 1 วินาที
            const timer = setTimeout(() => {
                setShowSkeleton(false); // หยุดแสดง Skeleton
                setReturnEL(true); // แสดงหน้า el
            }, 1000); // 1 วินาที

            return () => clearTimeout(timer); // ทำความสะอาดเมื่อ unmount หรือ effect เปลี่ยนแปลง
        }
    }, [isLoaded])

    if (showSkeleton) {
        return (
            <div
                style={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "rgba(206, 206, 206, 0.1)",
                }}
            >
                {/* Skeleton loader with more noticeable pulse */}

                <div className='bg-gray-900 animate-pulse duration-100 h-[16%] w-full scale-110'></div>
                <div className='w-full flex h-screen relative'>
                    <div className='w-[14%] h-full bg-gray-900 animate-pulse duration-100 scale-110 absolute top-[34px]'></div>
                    <div className='flex-1 h-full flex flex-col pt-[20%] xl:pt-[7%] pl-[15%] items-center gap-10'>
                        <div className='w-[50%] h-[25px] bg-gray-300 animate-pulse scale-110 duration-150'></div>
                        <div className='w-[50%] h-[25px] bg-gray-300 animate-pulse scale-110 duration-200'></div>
                        <div className='w-[50%] h-[25px] bg-gray-300 animate-pulse scale-110 duration-300'></div>
                        <div className='w-[50%] h-[25px] bg-gray-300 animate-pulse scale-110 duration-500'></div>
                        <div className='w-[50%] h-[25px] bg-gray-300 animate-pulse scale-110 duration-500'></div>
                    </div>
                </div>
            </div>
        );
    }




    if (!allows.includes(role)) {
        return (
            <div className='flex flex-col gap-2 mx-auto mt-[20%] bg-[#131921] text-white rounded-md'>
                <span>Access Denied!!</span>
                <Link to='/'>Go to Home</Link>
            </div>
        )
    }


    return returnEL && el

}

export default ProtectRoutes