import React from 'react'

function OrderItem() {
    return (
        <div className='w-full my-2 h-[70px] flex'>
            <div className='flex-1 bg-slate-400 relative'>
                <img src="" alt="" className='bg-black w-[50px] h-[50px] absolute top-0 rounded-sm' />
                <span className='text-[10px] text-gray-600 absolute bottom-0 '>productName</span>
            </div>
            <div className='flex-1 bg-red-300'></div>
            <div className='flex-1 bg-green-300'></div>
            <div className='flex-1 bg-amber-200'></div>
            <div className='flex-1 bg-pink-400'></div>
        </div>
    )
}

export default OrderItem