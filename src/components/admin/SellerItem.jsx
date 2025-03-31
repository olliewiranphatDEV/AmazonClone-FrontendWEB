import React from 'react'

function SellerItem({ el }) {
    console.log('el', el);

    return (
        <div className='flex w-full text-[12px] font-semibold border-b-[1px] py-2 pb-2 border-gray-400'>
            <div className='w-[5%] text-center'>{el.userID}</div>
            <div className='w-[5%]'>
                <img src={el.imageUrl} alt="image" className='rounded-full' />
            </div>
            <div className='w-[10%] text-center'>{el.firstName} {el.lastName}</div>
            <div className='w-[5%] text-center'>{el.gender}</div>
            <div className='w-[15%] mx-3' >{el.email}</div>
            <div className='w-[15%] text-center'>{el.address}</div>
            <div className='w-[15%] text-center'>{el.phoneNumber}</div>
            <div className='w-[55px] text-center bg-slate-300'>{el.userStatus}</div>
            <div className=' text-center'>{el.createdAt}</div>
        </div>
    )
}

export default SellerItem