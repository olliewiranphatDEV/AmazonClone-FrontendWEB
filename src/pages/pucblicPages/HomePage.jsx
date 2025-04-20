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




function HomePage() {
    const actionGetMyAccount = useAuthStore(state => state.actionGetMyAccount)

    const { getToken, isSignedIn } = useAuth()

    const { actionGetAllCate } = useCategoryStore()
    const { actionGetAllProductsDB, triggerReload } = useProductStore()
    useEffect(() => {
        const fetchUserAccount = async () => {
            try {
                const token = await getToken()
                actionGetMyAccount(token)
            } catch (error) {
                console.log("ERROR, fetchUseraccount", error);

            }
        }
        if (isSignedIn) {
            fetchUserAccount()
        }
    }, [isSignedIn])


    useEffect(() => {
        actionGetAllCate()
        actionGetAllProductsDB()
    }, [])


    return (
        <div className='pb-20'>
            <div className='relative'>
                <CustomCarousel slides={LandingData} />
                <CardInCarosel cards={card1} />
            </div>

            {/* Row 2 */}

            <div className='w-full mt-[41%] md:mt-[19%] lg:mt-[11%] flex flex-col gap-4'>
                <CardComponent cards={card2} />
                {/* SWIPER CAROUSEL*/}
                <CardComponent cards={card2} />
                <CardComponent cards={card2} />
            </div>

        </div>

    )
}


export default HomePage