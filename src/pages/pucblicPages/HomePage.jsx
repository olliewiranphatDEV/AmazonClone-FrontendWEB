import React, { useEffect } from 'react'
import Corosel from '../../components/main/Corosel'
import useCategoryStore from '../../store/CategoryStore'
import useProductStore from '../../store/ProductStore'
import { useUser } from '@clerk/clerk-react'
import CardInCarosel from '../../components/home/CardInCarosel'
import CategoryCarousel from '../../components/carousel/CategoryCarousel '
import ProductCarousel from '../../components/carousel/ProductCarousel'

const mockCategories = [
    {
        image: "https://i.ibb.co/FbV64mFx/Screenshot-2025-03-26-121519.png",
        label: "Fashion & beauty"
    },
    {
        image: "https://i.ibb.co/4nwfyt6V/Screenshot-2025-03-26-121733.png",
        label: "Organization"
    },
    {
        image: "https://i.ibb.co/XfFn0yNB/Screenshot-2025-03-26-122008.png",
        label: "Patio"
    },
    {
        image: "https://i.ibb.co/6c2XMhjH/Screenshot-2025-03-26-122112.png",
        label: "Outdoors"
    },
    {
        image: "https://i.ibb.co/whZgSYmr/Screenshot-2025-03-26-122236.png",
        label: "Spring Favorites"
    },
    {
        image: "https://i.ibb.co/7J0wB0FX/Screenshot-2025-03-26-123127.png",
        label: "Premium Brands"
    },
    {
        image: "https://i.ibb.co/WpW2nDb6/Screenshot-2025-03-26-123244.png",
        label: "Customer Loved"
    },
    {
        image: "https://i.ibb.co/whZgSYmr/Screenshot-2025-03-26-122236.png",
        label: "Spring Favorites"
    },
    {
        image: "https://i.ibb.co/7J0wB0FX/Screenshot-2025-03-26-123127.png",
        label: "Premium Brands"
    },
    {
        image: "https://i.ibb.co/WpW2nDb6/Screenshot-2025-03-26-123244.png",
        label: "Customer Loved"
    },
    {
        image: "https://i.ibb.co/FbV64mFx/Screenshot-2025-03-26-121519.png",
        label: "Fashion & beauty"
    },
    {
        image: "https://i.ibb.co/4nwfyt6V/Screenshot-2025-03-26-121733.png",
        label: "Organization"
    },
    {
        image: "https://i.ibb.co/XfFn0yNB/Screenshot-2025-03-26-122008.png",
        label: "Patio"
    },
    {
        image: "https://i.ibb.co/6c2XMhjH/Screenshot-2025-03-26-122112.png",
        label: "Outdoors"
    },
]



function HomePage() {

    const { user } = useUser()
    // console.log('user', user);

    const actionGetAllCate = useCategoryStore(state => state.actionGetAllCate)
    const actionGetAllProductsDB = useProductStore(state => state.actionGetAllProductsDB)
    useEffect(() => {
        actionGetAllCate()
        actionGetAllProductsDB()
    }, [])
    const allProductsDB = useProductStore(state => state.allProductsDB)
    console.log('allProductsDB', allProductsDB);


    return (
        <>
            <div className='relative flex justify-center h-[550px]'>
                <Corosel />
                <CardInCarosel />
            </div>
            <CategoryCarousel title="Save up to 40%" data={mockCategories} />
            {/* Row 2 */}
            <div className="w-[85%] mt-5 mx-auto flex gap-2">
                <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                    <span className='font-bold text-[15px] mt-[2px]'>Shop for your home essentials</span>
                    <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                    <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>Discover more in home</span>
                </div>
                <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                    <span className='font-bold'>Shop deals in Fahsion</span>
                    <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                    <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>See all deals</span>
                </div>
                <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                    <span className='font-bold'>Top categories in Kitchen appliances</span>
                    <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                    <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>Explore all products in Kitchen</span>
                </div>
                <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                    <span className='font-bold'>New home arrivals under $50</span>
                    <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                    <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>Shop the laset from Home</span>
                </div>
            </div>
            {/* Carosel */}
            <ProductCarousel title="Best Sellers in Clothing, Shoes & Jewelry" data={allProductsDB} />
            <ProductCarousel title="Related to items you've viewed" data={allProductsDB} />
        </>

    )
}


export default HomePage