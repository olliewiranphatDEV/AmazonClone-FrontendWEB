import React, { useEffect, useState } from 'react'
import { useAuth } from '@clerk/clerk-react'
import useAuthStore from '../../store/UserStore'
import useSellerStore from '../../store/SellerStore'
import ProductItem from '../../components/seller/products/ProductItem'
import MerchantInfo from '../../components/seller/MerchantInfo'
import { useNavigate } from 'react-router'
import ProductList from '../../components/seller/products/ProductList'



function AllProducts() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const userData = useAuthStore(state => state.userData)
    // console.log('userID', userData.userID);
    const userID = userData?.userID ?? null

    const { getToken } = useAuth()
    const actionGetMyProducts = useSellerStore(state => state.actionGetMyProducts)

    useEffect(() => {
        if (!userID) return; // // หยุดถ้า userID ยังไม่มา

        const fetchData = async () => { // ย้าย async function ไปอยู่ภายใน useEffect
            const token = await getToken();
            actionGetMyProducts(token);
        };
        fetchData(); // เรียกใช้ async function ทันที
    }, [userID, getToken, actionGetMyProducts]); // เพิ่ม dependencies, Fetchdata ใหม่ ทุกครั้งที่ ตัวแปรมีการเปลี่ยนแปลง

    const myProducts = useSellerStore(state => state.myProducts)
    // console.log('myProducts', myProducts);

    const hdlChangePage = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            navigate('/seller-center/all-products/add-product')
        }, 1000)
    }

    return (
        <div className='relative w-full'>

            <div className='flex flex-col gap-2 text-[#131921] px-8 py-4'>

                <div className='flex flex-wrap justify-between w-full'>
                    <div className='flex-1 flex items-center justify-between sm:justify-start gap-20'>
                        <span className='font-semibold text-[18px]'>All Products</span>
                        <button
                            onClick={hdlChangePage}
                            className='hover:font-semibold min-w-[200px] xl:mx-0 text-[14px] px-4 py-2 my-3 rounded-sm transform transition hover:scale-110 bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'
                        >
                            Add new product
                        </button>
                    </div>
                    <MerchantInfo />
                </div>

                <div className='border-t-[2px] border-gray-300 py-2'>
                    {
                        myProducts?.length !== 0 ?
                            (<ProductList myProducts={myProducts} setLoading={setLoading} />)
                            : (<div className='w-full text-gray-500 text-[10px] md:text-[14px] flex flex-col gap-4 items-center py-20'>
                                <span>Hi, Seller! You no have any products yet.</span>
                                <span>Please add your new products for more Traffic!</span>
                            </div>)
                    }

                </div>

            </div>

            {
                loading &&
                (
                    <div
                        style={{
                            width: "100%",
                            height: "100vh",
                            backgroundColor: "rgba(206, 206, 206, 0.7)",
                            position: "absolute",
                            top: "0%",
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: "center",
                            gap: "25px",
                            paddingTop: "20%",
                        }}
                    >
                        {/* Skeleton loader with more noticeable pulse */}

                        <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-150'></div>
                        <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-200'></div>
                        <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-400'></div>
                        <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-400'></div>
                        <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-500'></div>


                    </div>
                )
            }
        </div>
    )
}

export default AllProducts