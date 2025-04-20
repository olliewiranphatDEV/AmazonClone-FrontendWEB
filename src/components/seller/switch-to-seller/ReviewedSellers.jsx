import React from 'react'

function ReviewedSellers() {
    return (
        <div className='account w-full sm:w-[75%] py-9 mx-auto text-[#161e2d] gap-10 grid grid-cols-1 xl:grid-cols-2'>
            <div className='w-[90%] mx-auto sm:w-full flex flex-col gap-5 pl-[5%] sm:pl-0'>
                <div className='flex flex-col gap-2'>
                    <span className='text-[46px] font-extrabold'>Why create an Amazon selling account?</span>
                    <span className='text-[18px]'>There are endless reasons to sell with Amazon. Here are just a few.</span>
                </div>
                <div className='flex gap-5 w-full'>
                    <div className='w-[50px]'>
                        <img src="https://i.ibb.co/C3yh837Y/Screenshot-2025-04-12-205759.png" alt="graph" />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                        <span className='font-bold text-[20px]'>Grow more, spend less</span>
                        <span className='text-[13px]'>Programs like Fulfillment by Amazon (FBA) let you outsource time-consuming tasks like order handling, customer service, and shipping. Shipping with FBA also costs 70% less per unit than comparable premium options offered by other US fulfillment services. <sup>3</sup></span>
                    </div>
                </div>
                <div className='flex gap-5 w-full'>
                    <div className='w-[50px]'>
                        <img src="https://i.ibb.co/hFvsMc3w/Screenshot-2025-04-12-210058.png" alt="protect" />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                        <span className='font-bold text-[20px]'>Protect and build your brand</span>
                        <span className='text-[13px]'>Enroll you brand in Amazon Brand for free to start unlocking exclusive protection tools and selling benefits that can help you protect your IP, connect with more customers, and build loyalty for your brand.</span>
                    </div>
                </div>
                <div className='flex gap-5 w-full'>
                    <div className='w-[50px]'>
                        <img src="https://i.ibb.co/bqxRzQg/Screenshot-2025-04-12-210405.png" alt="advertising" />
                    </div>
                    <div className='flex flex-col gap-2 flex-1'>
                        <span className='font-bold text-[20px]'>Advertise with Amazon</span>
                        <span className='text-[13px]'>Get discovered, increase sales, and control costs with Amazon Ads. You can use costs-per-click campaigns to advertise your products or brand in and beyond the Amazon store. Small businesses using Amazon Ads attributed 30% of sales to our ads.<sup>4</sup></span>
                    </div>
                </div>
            </div>
            {/* REVIEWS */}
            <div>
                <div className='w-full flex flex-col gap-10 justify-center h-full'>
                    <img src="https://i.ibb.co/bMMNgyTR/Screenshot-2025-04-12-201805.png" alt="review" className='w-[60%] xl:w-[80%] mx-auto' />
                    <img src="https://i.ibb.co/Y75SyzYX/Screenshot-2025-04-12-202018.png" alt="review" className='w-[60%] xl:w-[80%] mx-auto' />
                </div>
            </div>
        </div>
    )
}

export default ReviewedSellers