import React from 'react'
import OrderItem from './OrderItem'

function RecentOrders() {
    return (
        <div className='w-[70%] rounded-sm'>
            <div className='p-4 text-white text-[14px] bg-[#4D5562]'>Recent Orders</div>
            <div className='bg-white p-4'>
                <div className='flex justify-between w-full'>
                    <span className='text-[11px] font-semibold text-gray-900'>Product</span>
                    <span className='text-[11px] font-semibold text-gray-900'>Amount</span>
                    <span className='text-[11px] font-semibold text-gray-900'>Total Price</span>
                    <span className='text-[11px] font-semibold text-gray-900'>Customer Name</span>
                    <span className='text-[11px] font-semibold text-gray-900'>Order Status</span>
                </div>
                <OrderItem />
            </div>
        </div>
    )
}

export default RecentOrders