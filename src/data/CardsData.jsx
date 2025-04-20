export const card1 = [
    <div className="flex flex-col h-full gap-5 justify-between">
        <div className="flex flex-col gap-3">
            <span className='font-bold'>Shop deals in Fashion</span>
            <div className='flex flex-col gap-5 text-[8.7px] account text-black'>
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
        <div className="flex flex-col gap-3 h-full">
            <span className='font-bold'>FREE Shipping to Thailand</span>

            <button
                onClick={() => console.log("Free")}
                className='cursor-pointer h-[70%] sm:h-[90%]'>
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
    <div className="flex flex-col gap-3 h-full justify-between">
        <div className="flex flex-col gap-3">
            <span className='font-bold'>Top categories in Kitchen appliances</span>
            <div className='flex flex-col gap-6 text-[10px] account text-black'>
                <button
                    onClick={() => console.log("Cooker")}
                    className='flex flex-col cursor-pointer text-start w-full h-[46%] sm:h-[45%]'>
                    <img src="https://i.ibb.co/W4FKxXk5/313w-AT6-Iy2-L-SY160.jpg" alt="" className='w-full h-full object-cover' />
                    <span >Cooker</span>
                </button>
                <div className='flex gap-1 w-full h-[80px] sm:h-[95px]'>
                    <button
                        onClick={() => console.log("Coffee")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <img src="https://i.ibb.co/hRMWWyS2/21-W7-lnd-INL-SY75.jpg" alt="" className='w-full h-[60px] sm:h-[80px] object-cover' />
                        <span>Coffee</span>
                    </button>
                    <button
                        onClick={() => console.log("Pots and Pans")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <div className='flex-1 flex flex-col'>
                            <img src="https://i.ibb.co/6cfNxLvL/21-B-Nk-A9p-L-SY75.jpg" alt="" className='w-full h-[60px] sm:h-[80px] object-cover' />
                        </div>
                        <span>Pots and Pans</span>
                    </button>
                    <button
                        onClick={() => console.log("Kettles")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <div className='flex-1 flex flex-col'>
                            <img src="https://i.ibb.co/kVJ1ZZPz/217-GQ1a2-Qz-L-SY75.jpg" alt="" className='w-full h-[60px] sm:h-[80px] object-cover' />
                        </div>
                        <span>Kettles</span>
                    </button>
                </div>
            </div >
        </div>
        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'>Explore all products in Kitchen</span>
    </div>,
    <div className="flex flex-col h-full gap-5 justify-between">
        <div className="flex flex-col gap-3 h-full">
            <span className='font-bold'>Get your game on</span>

            <button
                onClick={() => console.log("Gaming")}
                className='cursor-pointer h-[90%] sm:h-[90%]'>
                <img src="https://i.ibb.co/Q3q8DxFJ/Fuji-Gaming-store-Dashboard-card-1x-EN-SY304-CB564799420.jpg" alt="" className='w-full h-full object-cover' />
            </button>

        </div>
        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'>Shop gaming</span>
    </div>,
    <div className="flex flex-col h-full gap-5 justify-between">
        <div className="flex flex-col gap-3">
            <span className='font-bold'>New home arrivals under $50</span>
            <div className='flex flex-col gap-5 text-[8.7px] text-black account'>
                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                    <button
                        onClick={() => console.log("Kitchen & Dining")}
                        className='flex-1 flex flex-col cursor-pointer text-start '>
                        <img src="https://i.ibb.co/ymYpqS79/Home-Flip-Summer-2024-315-HP-New-Arrivals-Quad-Card-D-01-1x-SY116-CB555960040.jpg" alt="" className='w-full h-full object-cover' />
                        <span >Kitchen & Dining</span>
                    </button>
                    <button
                        onClick={() => console.log("Home Improvement")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <img src="https://i.ibb.co/fVQNtb4J/Home-Flip-Summer-2024-316-HP-New-Arrivals-Quad-Card-D-02-1x-SY116-CB555960040.jpg" alt="" className='w-full h-full object-cover' />
                        <span>Home Improvement</span>
                    </button>
                </div>
                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                    <button
                        onClick={() => console.log("Décor")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <img src="https://i.ibb.co/Gvg9ZXY2/Home-Flip-Summer-2024-317-HP-New-Arrivals-Quad-Card-D-03-1x-SY116-CB555960040.jpg" alt="" className='w-full h-full object-cover' />
                        <span>Décor</span>
                    </button>
                    <button
                        onClick={() => console.log("Bedding")}
                        className='flex-1 flex flex-col cursor-pointer text-start'>
                        <img src="https://i.ibb.co/BVjYThRj/Home-Flip-Summer-2024-318-HP-New-Arrivals-Quad-Card-D-04-1x-SY116-CB555960040.jpg" alt="" className='w-full h-full object-cover' />
                        <span>Bedding & Bath</span>
                    </button>
                </div>
            </div >
        </div>
        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'>Shop the latest from Home</span>
    </div>,
    <div className="flex flex-col h-full gap-5 justify-between">
        <div className="flex flex-col gap-3 h-full">
            <span className='font-bold'>Fill your basket with joy</span>

            <button
                onClick={() => console.log("Gaming")}
                className='cursor-pointer h-[90%] sm:h-[90%]'>
                <img src="https://i.ibb.co/TxymMb4r/Fuji-Desktop-Single-Image-Card-Easter25-1-X-EN-SY304-CB548389703.jpg" alt="" className='w-full h-full object-cover' />
            </button>

        </div>
        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'>Shop for Easter</span>
    </div>,
]



