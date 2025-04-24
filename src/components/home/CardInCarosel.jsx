import React from 'react'
import useProductStore from '../../store/ProductStore'
import { useNavigate } from 'react-router'
import { renderAlert } from '../../utils/renderAlert'



function CardInCarosel({ setLoading }) {
    const { actionsearchProductsDB } = useProductStore()
    const navigate = useNavigate()


    const hdlSearchProductByCard = async (categoryID, search) => {
        setLoading(true)
        try {
            await actionsearchProductsDB(categoryID, search)
            setTimeout(() => {
                const query = new URLSearchParams()
                //IF HAVE CATEGORYID
                if (categoryID) {
                    query.set("categoryID", categoryID)
                }
                //IF HAVE SEARCH WORD
                if (search) {
                    query.set("search", search)
                }
                setLoading(false)
                navigate(`/search/related-products?${query.toString()}`); //NAV TO SEARCH-RELATED-PRODUCTS
            }, 900)
        } catch (error) {
            console.log("Cannot search products, ERROR", error);
            renderAlert("Cannot search products", error)

        }
    }


    return (
        <div className='w-full absolute top-[50%] z-10'>
            <div className="overflow-x-auto scroll-smooth scrollbar-hide w-[95%] mx-auto">
                <div className="flex gap-4 px-4 w-max">
                    {/* CARD1 */}
                    <div className="max-w-[231px] sm:max-w-[280px] max-h-[330px] sm:max-h-[350px] bg-white p-4 shrink-0 overflow-y-hidden flex flex-col gap-5 justify-between">
                        <div className="flex flex-col gap-3">
                            <span className='font-bold'>Shop deals in Fashion</span>
                            <div className='flex flex-col gap-5 text-[8.7px] account text-black'>
                                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Jean")}
                                        className='flex-1 flex flex-col cursor-pointer text-start '>
                                        <img src="https://i.ibb.co/BVjTDf4N/DQC-APR-TBYB-W-BOTTOMS-1x-SY116-CB624172947.jpg" alt="" className='w-full h-full object-cover' />
                                        <span >Jeans under $50</span>
                                    </button>
                                    <button
                                        onClick={() => hdlSearchProductByCard(9, "Top")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <div className='flex-1 flex flex-col'>
                                            <img src="https://i.ibb.co/spvcYR87/DQC-APR-TBYB-W-TOPS-1x-SY116-CB623353881.jpg" alt="" className='w-full h-full object-cover' />
                                        </div>
                                        <span>Top under $25</span>
                                    </button>
                                </div>
                                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Dress")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <img src="https://i.ibb.co/Ld4W0d8Z/DQC-APR-TBYB-W-DRESSES-1x-SY116-CB623353881.jpg" alt="" className='w-full h-full object-cover' />
                                        <span>Dresses under $30</span>
                                    </button>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Shoe")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <div className='flex-1 flex flex-col'>
                                            <img src="https://i.ibb.co/TDLfccMY/DQC-APR-TBYB-W-SHOES-1x-SY116-CB624172947.jpg" alt="" className='w-full h-full object-cover' />
                                        </div>
                                        <span>Shoes under $50</span>
                                    </button>
                                </div>
                            </div >
                        </div>
                        <button onClick={() => hdlSearchProductByCard(9, null)}
                            className='text-start text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'
                        >
                            See all deals
                        </button>
                    </div>

                    {/* CARD2 */}
                    <div className="max-w-[231px] sm:max-w-[280px] max-h-[330px] sm:max-h-[350px] bg-white p-4 shrink-0 overflow-y-hidden flex flex-col gap-5 justify-between">
                        <div className="flex flex-col gap-3 h-full">
                            <span className='font-bold'>FREE Shipping to Thailand</span>

                            <button
                                onClick={() => hdlSearchProductByCard(null, "e")}
                                className='cursor-pointer h-[70%] sm:h-[90%]'>
                                <img src="https://i.ibb.co/Y4YNzvDR/1460058-2528408-us-gw-pc-single-category-card-1x-379x304-us-en-SY304-CB609924360.jpg" alt="" className='w-full h-full object-cover' />
                            </button>

                        </div>
                        <button onClick={() => hdlSearchProductByCard(null, "e")}
                            className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'>
                            Learn more
                        </button>
                    </div>

                    {/* CARD3 */}
                    <div className="max-w-[231px] sm:max-w-[280px] max-h-[330px] sm:max-h-[350px] bg-white p-4 shrink-0 overflow-y-hidden flex flex-col gap-5 justify-between">
                        <div className="flex flex-col gap-3">
                            <span className='font-bold'>Shop for your home essentials</span>
                            <div className='flex flex-col gap-5 text-[8.7px] text-black'>
                                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Cleaning")}
                                        className='flex-1 flex flex-col cursor-pointer text-start '>
                                        <img src="https://i.ibb.co/rj3gDff/Cleaning-Tool-1x-SY116-CB563137408.jpg" alt="" className='w-full h-full object-cover' />
                                        <span >Cleaning Tools</span>
                                    </button>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Home")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <img src="https://i.ibb.co/0RySzShX/Home-Storage-1x-SY116-CB563137408.jpg" alt="" className='w-full h-full object-cover' />
                                        <span>Home Storage</span>
                                    </button>
                                </div>
                                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Home")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <img src="https://i.ibb.co/4RM3bXfj/Home-Decor-1x-SY116-CB563137408.jpg" alt="" className='w-full h-full object-cover' />
                                        <span>Home Decor</span>
                                    </button>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Bed")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <img src="https://i.ibb.co/mrfvXxmj/Bedding-1x-SY116-CB563137408.jpg" alt="" className='w-full h-full object-cover' />
                                        <span>Bedding</span>
                                    </button>
                                </div>
                            </div >
                        </div>
                        <button onClick={() => hdlSearchProductByCard(19, null)}
                            className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'>
                            Discover more in Home
                        </button>
                    </div>

                    {/* CARD4 */}
                    <div className="max-w-[231px] sm:max-w-[280px] max-h-[330px] sm:max-h-[350px] bg-white p-4 shrink-0 overflow-y-hidden flex flex-col gap-5 justify-between">
                        <div className="flex flex-col gap-3">
                            <span className='font-bold'>Gaming accessories</span>
                            <div className='flex flex-col gap-5 text-[8.7px] text-black'>
                                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Headset")}
                                        className='flex-1 flex flex-col cursor-pointer text-start '>
                                        <img src="https://i.ibb.co/Sg5L4ZB/Fuji-Quad-Headset-1x-SY116-CB667159060.jpg" alt="" className='w-full h-full object-cover' />
                                        <span >Headsets</span>
                                    </button>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Keyboard")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <img src="https://i.ibb.co/yFKZ95mt/Fuji-Quad-Keyboard-1x-SY116-CB667159063.jpg" alt="" className='w-full h-full object-cover' />
                                        <span>Keyboards</span>
                                    </button>
                                </div>
                                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Computer")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <img src="https://i.ibb.co/yczzV46X/Fuji-Quad-Mouse-1x-SY116-CB667159063.jpg" alt="" className='w-full h-full object-cover' />
                                        <span>Computer mice</span>
                                    </button>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Chair")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <img src="https://i.ibb.co/mC5DY8XS/Fuji-Quad-Chair-1x-SY116-CB667159060.jpg" alt="" className='w-full h-full object-cover' />
                                        <span>Chairs</span>
                                    </button>
                                </div>
                            </div >
                        </div>
                        <button onClick={() => hdlSearchProductByCard(33, null)}
                            className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'>
                            See all deals
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardInCarosel