import React, { useEffect } from 'react'
import useSellerStore from '../../store/SellerStore'
import { useAuth } from '@clerk/clerk-react'
import useAuthStore from '../../store/UserStore'
import OverviewTable from '../../components/seller/dashboard/OverviewTable'
import BarChart from '../../components/seller/dashboard/BarChart'
import AreaChart from '../../components/seller/dashboard/AreaChart'
import RecentOrders from '../../components/seller/dashboard/RecentOrders'
import CustomerRating from '../../components/seller/dashboard/CustomerRating'



function SellerDashboard() {
    const { getToken } = useAuth()
    const userData = useAuthStore(state => state.userData)
    const { userID } = userData

    const actionGetSellerDashboard = useSellerStore(state => state.actionGetSellerDashboard)
    useEffect(() => {
        const fetchData = async () => {
            const token = await getToken()
            actionGetSellerDashboard(token, userID)
        }
        fetchData()
    }, [])



    return (
        <div className='w-full p-4 flex-wrap flex flex-col gap-5'>
            <span className='account font-bold text-[18px] pl-4'>Seller Dashboard</span>
            {/* Overview Table*/}
            <div className='w-[95%] h-full flex gap-4 mx-auto'>
                <OverviewTable />
            </div>
            {/* Charts */}
            <div className='w-[95%]  flex mx-auto justify-between mt-4'>
                <div className='w-[450px]'>
                    <span className='account text-[12px]'>Statistics of Order</span>
                    <BarChart />
                </div>
                <div className='w-[450px]'>
                    <span className='account text-[12px]'>Analytics</span>
                    <AreaChart />
                </div>
            </div>
            {/* Orders & Review */}
            <div className='w-[95%] flex gap-4 mx-auto'>
                <RecentOrders />
                <CustomerRating />
            </div>
        </div>
    )
}

export default SellerDashboard