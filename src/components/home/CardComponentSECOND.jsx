import React from 'react'
import useProductStore from '../../store/ProductStore'
import { useNavigate } from 'react-router'
import { renderAlert } from '../../utils/renderAlert'

function CardComponentSECOND({ setLoading }) {
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
        <div className="overflow-x-auto scroll-smooth scrollbar-hide w-[95%] mx-auto">
            <div className="flex gap-4 px-4 w-max">
                {/* CARD1 */}
                <div
                    className="max-w-[231px] sm:max-w-[280px] max-h-[330px] sm:max-h-[350px] bg-white p-4 shrink-0 overflow-y-hidden"
                >
                    <div className="flex flex-col gap-3 h-full justify-between">
                        <div className="flex flex-col gap-3">
                            <span className='font-bold'>Top categories in Kitchen appliances</span>
                            <div className='flex flex-col gap-6 text-[10px] account text-black'>
                                <button
                                    onClick={() => hdlSearchProductByCard(null, "Cooker")}
                                    className='flex flex-col cursor-pointer text-start w-full h-[46%] sm:h-[45%]'>
                                    <img src="https://i.ibb.co/W4FKxXk5/313w-AT6-Iy2-L-SY160.jpg" alt="" className='w-full h-full object-cover' />
                                    <span >Cooker</span>
                                </button>
                                <div className='flex gap-1 w-full h-[80px] sm:h-[95px]'>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Coffee")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <img src="https://i.ibb.co/hRMWWyS2/21-W7-lnd-INL-SY75.jpg" alt="" className='w-full h-[60px] sm:h-[80px] object-cover' />
                                        <span>Coffee</span>
                                    </button>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Pot")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <div className='flex-1 flex flex-col'>
                                            <img src="https://i.ibb.co/6cfNxLvL/21-B-Nk-A9p-L-SY75.jpg" alt="" className='w-full h-[60px] sm:h-[80px] object-cover' />
                                        </div>
                                        <span>Pots and Pans</span>
                                    </button>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Kettle")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <div className='flex-1 flex flex-col'>
                                            <img src="https://i.ibb.co/kVJ1ZZPz/217-GQ1a2-Qz-L-SY75.jpg" alt="" className='w-full h-[60px] sm:h-[80px] object-cover' />
                                        </div>
                                        <span>Kettles</span>
                                    </button>
                                </div>
                            </div >
                        </div>
                        <button onClick={() => hdlSearchProductByCard(19, null)}
                            className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'
                        >
                            Explore all products in Kitchen
                        </button>
                    </div>
                </div>
                {/* CARD2 */}
                <div className='max-w-[231px] sm:max-w-[280px] max-h-[330px] sm:max-h-[350px] bg-white p-4 shrink-0 overflow-y-hidden flex flex-col gap-5 justify-between'>
                    <div className="flex flex-col h-full gap-5 justify-between">
                        <div className="flex flex-col gap-3 h-full">
                            <span className='font-bold'>Get your game on</span>

                            <button
                                onClick={() => hdlSearchProductByCard(null, "Gaming")}
                                className='cursor-pointer h-[90%] sm:h-[90%]'>
                                <img src="https://i.ibb.co/Q3q8DxFJ/Fuji-Gaming-store-Dashboard-card-1x-EN-SY304-CB564799420.jpg" alt="" className='w-full h-full object-cover' />
                            </button>

                        </div>
                        <button onClick={() => hdlSearchProductByCard(33, null)}
                            className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'
                        >
                            Shop gaming
                        </button>
                    </div>
                </div>
                {/* CARD3 */}
                <div className='max-w-[231px] sm:max-w-[280px] max-h-[330px] sm:max-h-[350px] bg-white p-4 shrink-0 overflow-y-hidden flex flex-col gap-5 justify-between'>
                    <div className="flex flex-col h-full gap-5 justify-between">
                        <div className="flex flex-col gap-3">
                            <span className='font-bold'>New home arrivals under $50</span>
                            <div className='flex flex-col gap-5 text-[8.7px] text-black account'>
                                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Kitchen")}
                                        className='flex-1 flex flex-col cursor-pointer text-start '>
                                        <img src="https://i.ibb.co/ymYpqS79/Home-Flip-Summer-2024-315-HP-New-Arrivals-Quad-Card-D-01-1x-SY116-CB555960040.jpg" alt="" className='w-full h-full object-cover' />
                                        <span >Kitchen & Dining</span>
                                    </button>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Home")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <img src="https://i.ibb.co/fVQNtb4J/Home-Flip-Summer-2024-316-HP-New-Arrivals-Quad-Card-D-02-1x-SY116-CB555960040.jpg" alt="" className='w-full h-full object-cover' />
                                        <span>Home Improvement</span>
                                    </button>
                                </div>
                                <div className='flex gap-3 w-full h-[80px] sm:h-[110px]'>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Home")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <img src="https://i.ibb.co/Gvg9ZXY2/Home-Flip-Summer-2024-317-HP-New-Arrivals-Quad-Card-D-03-1x-SY116-CB555960040.jpg" alt="" className='w-full h-full object-cover' />
                                        <span>Décor</span>
                                    </button>
                                    <button
                                        onClick={() => hdlSearchProductByCard(null, "Bed")}
                                        className='flex-1 flex flex-col cursor-pointer text-start'>
                                        <img src="https://i.ibb.co/BVjYThRj/Home-Flip-Summer-2024-318-HP-New-Arrivals-Quad-Card-D-04-1x-SY116-CB555960040.jpg" alt="" className='w-full h-full object-cover' />
                                        <span>Bedding & Bath</span>
                                    </button>
                                </div>
                            </div >
                        </div>
                        <button onClick={() => hdlSearchProductByCard(19, null)}
                            className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'
                        >
                            Shop the latest from Home
                        </button>
                    </div>
                </div>
                {/* CARD4 */}
                <div className='max-w-[231px] sm:max-w-[280px] max-h-[330px] sm:max-h-[350px] bg-white p-4 shrink-0 overflow-y-hidden flex flex-col gap-5 justify-between'>
                    <div className="flex flex-col h-full gap-5 justify-between">
                        <div className="flex flex-col gap-3 h-full">
                            <span className='font-bold'>Fill your basket with joy</span>

                            <button
                                onClick={() => hdlSearchProductByCard(null, "Easter")}
                                className='cursor-pointer h-[90%] sm:h-[90%]'>
                                <img src="https://i.ibb.co/TxymMb4r/Fuji-Desktop-Single-Image-Card-Easter25-1-X-EN-SY304-CB548389703.jpg" alt="" className='w-full h-full object-cover' />
                            </button>

                        </div>
                        <button onClick={() => hdlSearchProductByCard(null, "Easter")}
                            className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account'
                        >
                            Shop for Easter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponentSECOND