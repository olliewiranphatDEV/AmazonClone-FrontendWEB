import { Gem } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

function SellerAccess() {
    return (
        <div className='account my-4 flex flex-col gap-3'>
            < div className='flex gap-2' >
                <Gem className='h-[20px]' />
                <span className='ml-1 bottom-[2px] text-[14px] cursor-pointer w-[86px] border-transparent hover:border-b-2  hover:border-black hover:duration-75 '>Seller Center</span>
            </ div >
            <div className='flex flex-col text-[11px] pl-9 gap-3'>
                <Link to='/seller-center' className='cursor-pointer'>Dashborad</Link>
                <Link to='/seller-center/all-products' className='cursor-pointer'>All Products</Link>
                <Link to='/seller-center/all-customers' className='cursor-pointer'>All Customers</Link>
                <Link to='/seller-center/orders-revenue' className='cursor-pointer'>Orders & Revenue</Link>
            </div>

        </div >
    )
}

export default SellerAccess