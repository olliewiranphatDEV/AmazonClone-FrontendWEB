import React, { useEffect, useState } from 'react'
import useCategoryStore from '../../store/CategoryStore'
import useProductStore from '../../store/ProductStore'
import { useAuth } from '@clerk/clerk-react'
import useAuthStore from '../../store/UserStore'
import CustomCarousel from '../../components/carousel/CustomCarousel'
import LandingData from '../../data/LandingCarousel'
import CardInCarosel from '../../components/home/CardInCarosel'
import CardComponentSECOND from '../../components/home/CardComponentSECOND'
import useCartStore from '../../store/CartStore'





function HomePage() {
    const actionGetMyAccount = useAuthStore(state => state.actionGetMyAccount)

    const { getToken, isSignedIn } = useAuth()

    const { actionGetAllCate } = useCategoryStore()
    const { actionGetAllProductsDB, triggerReload } = useProductStore()
    const { actionGetUserCart } = useCartStore()
    useEffect(() => {
        const fetchUserAccount = async () => {
            try {
                const token = await getToken()
                actionGetMyAccount(token)
                actionGetUserCart(token)
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


    const [loading, setLoading] = useState(false)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [loading])


    return (
        <div className='relative pb-20'>

            <div className='relative'>
                <CustomCarousel slides={LandingData} />
                <CardInCarosel setLoading={setLoading} />
            </div>

            {/* Row 2 */}

            <div className='w-full mt-[200px] lg:mt-[150px] xl:mt-[140px] flex flex-col gap-6'>
                <CardComponentSECOND setLoading={setLoading} />
                <CardComponentSECOND setLoading={setLoading} />
            </div>

            {
                loading && (<div style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(206, 206, 206, 0.6)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    alignItems: "center",
                    paddingTop: "10%",
                    position: "absolute",
                    top: "0",
                    zIndex: 30
                }}>
                    <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-150'></div>
                    <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-200'></div>
                    <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-300'></div>
                    <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-500'></div>
                    <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-500'></div>
                </div>)
            }

        </div>

    )
}


export default HomePage