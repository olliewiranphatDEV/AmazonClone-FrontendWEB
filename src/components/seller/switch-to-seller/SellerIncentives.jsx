import React from 'react'

function SellerIncentives() {
    return (
        <div className="w-full px-4 py-20 grid grid-cols-1 xl:grid-cols-2 gap-5 justify-center items-center">
            {/* รูป */}
            <div className="w-full sm:w-[90%] mx-auto">
                <img
                    src="https://i.ibb.co/nMjm78R5/HL-NSI-02-Tall.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            {/* กล่องข้อความ */}
            <div className="flex flex-col gap-4 w-full h-full justify-center items-center sm:items-start">
                <div className="flex gap-2 bg-[#49850F] font-bold text-white p-2 rounded-full justify-center items-center w-[50%] sm:w-[38%]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                        />
                    </svg>
                    <span className="text-[16px]">New Seller Incentives</span>
                </div>
                <div className='text-[#232F3E] flex flex-col gap-1 text-center xl:text-start'>
                    <span className='text-[46px] font-extrabold'>Get started with over $50,000 in incentives</span>
                    <span className='text-[18px] account'>As a new seller, you can take advantage of a series of incentives.</span>
                </div>
                <div className='bg-[#F2F6E1] p-4 account w-[90%] flex flex-col gap-4 mx-auto'>
                    <div className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className='text-[13px]'><strong>10% back </strong>on your first $50,000 in branded sales, then <strong> 5% back </strong>through your first year until you reach $1,000,000</span>
                    </div>
                    <div className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-[18px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className='text-[13px]'><strong>$100 off </strong>shipments into the Amazon fulfillment network using the Centric Partnered Carrier program</span>
                    </div>
                    <div className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className='text-[13px]'><strong>Free storage and customer returns</strong> with auto-enrollment in the FBA New Selection program</span>
                    </div>
                    <div className='flex gap-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className='text-[13px]'><strong>$50 credit</strong> to create Sponsored Products or Sponsored Brands ads</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerIncentives