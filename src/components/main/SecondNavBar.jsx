import { AlignJustify } from 'lucide-react'
import React from 'react'

function SecondNavBar() {
    return (
        <div className='h-[35px] w-full bg-[#232f3e] px-4 flex items-center gap-2 text-white text-[11px]'>
            <div className=' bg-inherit h-[80%] flex items-center px-1 justify-center rounded-sm hover:bg-black'>
                <button className='font-bold flex items-center gap-[1px]'>
                    <AlignJustify className='h-[18px]' />
                    <span>All</span>
                </button>
            </div>

            <div className='ml-2'>Today's Deal</div>
            <div className=''>Customer Service</div>
            <div className=''>Registry</div>
            <div className=''>Gift Carts</div>
            <div className=''>Seller Center</div>

        </div>
    )
}

export default SecondNavBar