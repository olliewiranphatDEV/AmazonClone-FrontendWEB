import React, { useEffect } from 'react'
import useCategoryStore from '../../store/CategoryStore'
import useProductStore from '../../store/ProductStore'
import { useAuth, useUser } from '@clerk/clerk-react'
import useAuthStore from '../../store/UserStore'
import CustomCarousel from '../../components/carousel/CustomCarousel'
import LandingData from '../../data/LandingCarousel'
import CardInCarosel from '../../components/home/CardInCarosel'
import { card1, card2 } from '../../data/CardsData'
import CardComponent from '../../components/home/CardComponent'

const slides = [
    <div className="bg-gradient-to-b from-[#f7b047] to-white flex items-center justify-center">
        <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#222b38]">FREE Shipping to Thailand</h2>
    </div>,
    <div className="bg-gradient-to-b from-[#3061a1] to-white flex items-center justify-center">
        <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#222b38]">Slide 2 Content</h2>
    </div>,
]



function HomePage() {
    const actionGetMyAccount = useAuthStore(state => state.actionGetMyAccount)
    const { user } = useUser()
    // console.log('user', user);
    const { getToken, isSignedIn } = useAuth()

    const actionGetAllCate = useCategoryStore(state => state.actionGetAllCate)
    const actionGetAllProductsDB = useProductStore(state => state.actionGetAllProductsDB)
    useEffect(() => {
        if (isSignedIn) {
            const fetchUserAccount = async () => {
                try {
                    const token = await getToken()
                    actionGetMyAccount(token)
                } catch (error) {
                    console.log("ERROR, fetchUseraccount", error);

                }
            }
            fetchUserAccount()
        }
        actionGetAllCate()
        actionGetAllProductsDB()
    }, [isSignedIn])
    const allProductsDB = useProductStore(state => state.allProductsDB)
    // console.log('allProductsDB', allProductsDB);


    return (
        <>
            <div className='relative'>
                <CustomCarousel slides={LandingData} />
                <CardInCarosel cards={card1} />
            </div>

            {/* Row 2 */}

            <div className='w-full mt-[41%] sm:mt-[11%]'>
                <CardComponent cards={card2} />
            </div>

        </>

    )
}


export default HomePage