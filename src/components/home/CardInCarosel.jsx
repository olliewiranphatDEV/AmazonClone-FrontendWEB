import React from 'react'

function CardInCarosel() {
    return (
        <div className=' gap-2 flex justify-center items-center absolute bg-transparent w-[85%] h-[300px] top-60'>
            <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                <span className='font-bold'>New year, new supplies</span>
                <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>Shop office products</span>
            </div>
            <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                <span className='font-bold'>FREE Shipping to Thailand</span>
                <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>Learn more</span>
            </div>
            <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                <span className='font-bold'>Get your game on</span>
                <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>Shop gaming</span>
            </div>
            <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                <span className='font-bold'>Gaming accessories</span>
                <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>See more</span>
            </div>
        </div>
    )
}

export default CardInCarosel