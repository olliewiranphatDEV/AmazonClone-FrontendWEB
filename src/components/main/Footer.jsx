import React from 'react'
import { Link } from 'react-router'

function Footer() {
    return (
        <div className='w-full min-h-[280px] bg-[#131921] text-white py-[50px] flex justify-center'>
            <div className="px-[20px] flex flex-col text-[11px] gap-2">
                <span className='text-[14px] font-bold'>Get to Know Us</span>
                <Link to='/careers'>Careers</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about-centric'>About Centric</Link>
                <Link to='/investor'>Investor Relations</Link>
                <Link to='/devices'>Centric Devices</Link>
                <Link to='/science'>Centric Science</Link>
            </div>
            <div className="px-[20px] flex flex-col text-[11px] gap-2">
                <span className='text-[14px] font-bold'>Get to Know Us</span>
                <Link to='/make-money'>Make Money with Us</Link>
                <Link to='/seller-register'>Sell products on Centric</Link>
                <Link to='/sell-business'>Sell on Centric Business</Link>
                <Link to='/investor'>Investor Relations</Link>
                <Link to='/devices'>Centric Devices</Link>
                <Link to='/science'>Centric Science</Link>
            </div>
            <div className="px-[20px] flex flex-col text-[11px] gap-2">
                <span className='text-[14px] font-bold'>Get to Know Us</span>
                <Link to='/careers'>Careers</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about-centric'>About Centric</Link>
                <Link to='/investor'>Investor Relations</Link>
                <Link to='/devices'>Centric Devices</Link>
                <Link to='/science'>Centric Science</Link>
            </div>
            <div className="px-[20px] flex flex-col text-[11px] gap-2">
                <span className='text-[14px] font-bold'>Get to Know Us</span>
                <Link to='/careers'>Careers</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about-centric'>About Centric</Link>
                <Link to='/investor'>Investor Relations</Link>
                <Link to='/devices'>Centric Devices</Link>
                <Link to='/admin/management'>Centric Staff</Link>
            </div>
        </div>
    )
}

export default Footer