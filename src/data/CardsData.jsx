export const card1 = [
    <div className="flex flex-col h-full gap-5 justify-between">
        <div className="flex flex-col gap-3">
            <span className='font-bold'>Shop deals in Fashion</span>
            <div className='flex flex-col gap-5 text-[8.7px] text-black'>
                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                    <button
                        onClick={() => console.log("Jeans")}
                        className='flex-1 flex flex-col cursor-pointer text-start '>
                        <img src="https://i.ibb.co/BVjTDf4N/DQC-APR-TBYB-W-BOTTOMS-1x-SY116-CB624172947.jpg" alt="" className='w-full h-full object-cover' />
                        <span >Jeans under $50</span>
                    </button>
                    <button
                        onClick={() => console.log("Top")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <div className='flex-1 flex flex-col'>
                            <img src="https://i.ibb.co/spvcYR87/DQC-APR-TBYB-W-TOPS-1x-SY116-CB623353881.jpg" alt="" className='w-full h-full object-cover' />
                        </div>
                        <span>Top under $25</span>
                    </button>
                </div>
                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                    <button
                        onClick={() => console.log("Dresses")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <img src="https://i.ibb.co/Ld4W0d8Z/DQC-APR-TBYB-W-DRESSES-1x-SY116-CB623353881.jpg" alt="" className='w-full h-full object-cover' />
                        <span>Dresses under $30</span>
                    </button>
                    <button
                        onClick={() => console.log("Shoes")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <div className='flex-1 flex flex-col'>
                            <img src="https://i.ibb.co/TDLfccMY/DQC-APR-TBYB-W-SHOES-1x-SY116-CB624172947.jpg" alt="" className='w-full h-full object-cover' />
                        </div>
                        <span>Shoes under $50</span>
                    </button>
                </div>
            </div >
        </div>
        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'>See all deals</span>
    </div>,
    <div className="flex flex-col h-full gap-5 justify-between">
        <div className="flex flex-col gap-3 h-[90%]">
            <span className='font-bold'>FREE Shipping to Thailand</span>

            <button
                onClick={() => console.log("Free")}
                className='cursor-pointer h-[70%] sm:h-[82%]'>
                <img src="https://i.ibb.co/Y4YNzvDR/1460058-2528408-us-gw-pc-single-category-card-1x-379x304-us-en-SY304-CB609924360.jpg" alt="" className='w-full h-full object-cover' />
            </button>

        </div>
        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account  '>Learn more</span>
    </div>,
    <div className="flex flex-col h-full gap-5 justify-between">
        <div className="flex flex-col gap-3">
            <span className='font-bold'>Shop for your home essentials</span>
            <div className='flex flex-col gap-5 text-[8.7px] text-black'>
                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                    <button
                        onClick={() => console.log("Cleaning Tools")}
                        className='flex-1 flex flex-col cursor-pointer text-start '>
                        <img src="https://i.ibb.co/rj3gDff/Cleaning-Tool-1x-SY116-CB563137408.jpg" alt="" className='w-full h-full object-cover' />
                        <span >Cleaning Tools</span>
                    </button>
                    <button
                        onClick={() => console.log("Home Storage")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <img src="https://i.ibb.co/0RySzShX/Home-Storage-1x-SY116-CB563137408.jpg" alt="" className='w-full h-full object-cover' />
                        <span>Home Storage</span>
                    </button>
                </div>
                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                    <button
                        onClick={() => console.log("Home Decor")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <img src="https://i.ibb.co/4RM3bXfj/Home-Decor-1x-SY116-CB563137408.jpg" alt="" className='w-full h-full object-cover' />
                        <span>Home Decor</span>
                    </button>
                    <button
                        onClick={() => console.log("Bedding")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <img src="https://i.ibb.co/mrfvXxmj/Bedding-1x-SY116-CB563137408.jpg" alt="" className='w-full h-full object-cover' />
                        <span>Bedding</span>
                    </button>
                </div>
            </div >
        </div>
        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'>Discover more in Home</span>
    </div>,
    <div className="flex flex-col h-full gap-5 justify-between">
        <div className="flex flex-col gap-3">
            <span className='font-bold'>Gaming accessories</span>
            <div className='flex flex-col gap-5 text-[8.7px] text-black'>
                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                    <button
                        onClick={() => console.log("Headsets")}
                        className='flex-1 flex flex-col cursor-pointer text-start '>
                        <img src="https://i.ibb.co/Sg5L4ZB/Fuji-Quad-Headset-1x-SY116-CB667159060.jpg" alt="" className='w-full h-full object-cover' />
                        <span >Headsets</span>
                    </button>
                    <button
                        onClick={() => console.log("Keyboards")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <img src="https://i.ibb.co/yFKZ95mt/Fuji-Quad-Keyboard-1x-SY116-CB667159063.jpg" alt="" className='w-full h-full object-cover' />
                        <span>Keyboards</span>
                    </button>
                </div>
                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                    <button
                        onClick={() => console.log("Computer mice")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <img src="https://i.ibb.co/yczzV46X/Fuji-Quad-Mouse-1x-SY116-CB667159063.jpg" alt="" className='w-full h-full object-cover' />
                        <span>Computer mice</span>
                    </button>
                    <button
                        onClick={() => console.log("Shoes")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <img src="https://i.ibb.co/mC5DY8XS/Fuji-Quad-Chair-1x-SY116-CB667159060.jpg" alt="" className='w-full h-full object-cover' />
                        <span>Chairs</span>
                    </button>
                </div>
            </div >
        </div>
        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'>See all deals</span>
    </div>
]

export const card2 = [
    <>
        <span className='font-bold'>Shop deals in Fashion</span>
        <div className='flex flex-col gap-5 text-[8.7px] mt-[5%] mb-4 text-black'>
            <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                <button
                    onClick={() => console.log("Jeans")}
                    className='flex-1 flex flex-col cursor-pointer text-start '>
                    <img src="https://i.ibb.co/BVjTDf4N/DQC-APR-TBYB-W-BOTTOMS-1x-SY116-CB624172947.jpg" alt="" className='w-full h-full object-cover' />
                    <span >Jeans under $50</span>
                </button>
                <button
                    onClick={() => console.log("Top")}
                    className='flex-1 flex flex-col cursor-pointer text-start'>
                    <div className='flex-1 flex flex-col'>
                        <img src="https://i.ibb.co/spvcYR87/DQC-APR-TBYB-W-TOPS-1x-SY116-CB623353881.jpg" alt="" className='w-full h-full object-cover' />
                    </div>
                    <span>Top under $25</span>
                </button>
            </div>
            <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                <button
                    onClick={() => console.log("Dresses")}
                    className='flex-1 flex flex-col cursor-pointer text-start'>
                    <img src="https://i.ibb.co/Ld4W0d8Z/DQC-APR-TBYB-W-DRESSES-1x-SY116-CB623353881.jpg" alt="" className='w-full h-full object-cover' />
                    <span>Dresses under $30</span>
                </button>
                <button
                    onClick={() => console.log("Shoes")}
                    className='flex-1 flex flex-col cursor-pointer text-start'>
                    <div className='flex-1 flex flex-col'>
                        <img src="https://i.ibb.co/TDLfccMY/DQC-APR-TBYB-W-SHOES-1x-SY116-CB624172947.jpg" alt="" className='w-full h-full object-cover' />
                    </div>
                    <span>Shoes under $50</span>
                </button>
            </div>
        </div >
        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mb-4'>See all deals</span>
    </>,
    <>
        <span className='font-bold'>FREE Shipping to Thailand</span>
        <div className='flex flex-col gap-5 text-[8.7px] mt-[5%] mb-4 text-black w-full bg-slate-500 h-[66%] sm:h-[76%]'>
            <button
                onClick={() => console.log("Free")}
                className='flex flex-col cursor-pointer text-start h-full'>
                <img src="https://i.ibb.co/Y4YNzvDR/1460058-2528408-us-gw-pc-single-category-card-1x-379x304-us-en-SY304-CB609924360.jpg" alt="" className='w-full h-full object-cover' />
            </button>
        </div >
        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mb-4'>Learn more</span>
    </>,
    <>
        <span className='font-bold'>Get your game on</span>
        <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>Shop gaming</span>
    </>,
    <>
        <span className='font-bold'>Gaming accessories</span>
        <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>See more</span>
    </>
]