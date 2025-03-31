import React from 'react'
import ReviewItem from './ReviewItem'

function CustomerRating() {
    return (
        <div className='flex-1 rounded-sm'>
            <div className='p-4 text-white text-[14px] bg-[#212B3C]'>Customer Review on the Product</div>
            <div className='bg-white p-4'>
                <div className='flex w-full'>
                    <div className='text-[11px] font-semibold text-gray-900 w-[30%]'>Customer</div>
                    <div className='text-[11px] font-semibold text-gray-900 flex-2 px-2'>Review & Rating</div>
                </div>
                <ReviewItem />
            </div>
        </div>
    )
}

export default CustomerRating