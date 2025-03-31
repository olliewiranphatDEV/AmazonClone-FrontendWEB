import { useAuth } from '@clerk/clerk-react'
import React, { useEffect, useState } from 'react'
import { getAllSellers } from '../../api/admin'
import SellerItem from '../../components/admin/SellerItem'
import CategoryItem from '../../components/admin/CategoryItem'

function AllSellers() {
    const { getToken } = useAuth()
    const [allSellers, setAllSellers] = useState([])
    const fetchAllSellers = async () => {
        const token = await getToken()
        const resAllSellers = await getAllSellers(token)
        console.log('resAllSellers', resAllSellers);
        setAllSellers(resAllSellers.data.results)
    }
    useEffect(() => {
        fetchAllSellers()
    }, [])
    console.log('allSellers', allSellers);

    return (
        <div className='w-full p-2 flex flex-col flex-wrap h-full gap-2'>
            <span span className='account font-bold text-[18px] pl-4' > All Categories</span >

            <div className='w-full m-auto mt-4 border border-gray-400 rounded-md'>
                <div className='flex w-full text-[12px] font-semibold border-gray-400 border-b-[1px] pb-2'>
                    <div className='w-[5%] text-center'>ID</div>
                    <div className='w-[5%] text-center'>Image</div>
                    <div className='w-[10%] text-center'>Name</div>
                    <div className='w-[5%] text-center'>Gender</div>
                    <div className='w-[15%] mx-3 text-center'>Email</div>
                    <div className='w-[15%]  text-center'>Address</div>
                    <div className='w-[15%] text-center'>Phone Number</div>
                    <div className='w-[55px] bg-gray-400 text-center'>Status</div>
                    <div className='bg-gray-300 w-[30px] text-center'>Create At</div>
                </div>
                {
                    allSellers.map(el => (<SellerItem key={el.userID} el={el} />))
                }

            </div>

        </div >
    )
}

export default AllSellers