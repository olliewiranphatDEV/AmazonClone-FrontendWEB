import React, { useEffect, useState } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { getMyProducts } from '../../api/product'
import useAuthStore from '../../store/UserStore'
import { Link } from 'react-router'
import ProductList from '../../components/seller/products/ProductList'
import useSellerStore from '../../store/SellerStore'
import ProductItem from '../../components/seller/products/ProductItem'



function AllProducts() {
    const userData = useAuthStore(state => state.userData)
    // console.log('userID', userData.userID);
    const { userID } = userData
    const { getToken } = useAuth()
    const actionGetMyProducts = useSellerStore(state => state.actionGetMyProducts)

    useEffect(() => { //ห้ามใช้ async ตรงนี้, useEffect ไม่ควรคืนเป็น promise
        const fetchData = async () => { // ย้าย async function ไปอยู่ภายใน useEffect
            const token = await getToken();
            actionGetMyProducts(token, userID);
        };
        fetchData(); // เรียกใช้ async function ทันที
    }, [userID, getToken, actionGetMyProducts]); // เพิ่ม dependencies, Fetchdata ใหม่ ทุกครั้งที่ ตัวแปรมีการเปลี่ยนแปลง

    const myProducts = useSellerStore(state => state.myProducts)
    // console.log('myProducts', myProducts);


    return (
        <div className='h-full w-full p-4 flex flex-col gap-2'>
            <div className='flex items-center w-full gap-[26px]'>
                <span className='account font-bold text-[18px] pl-4'>All Products</span>
                <Link to='/seller-center/all-products/add-product' className='hover:font-semibold text-[14px] px-4 py-2 my-3 rounded-sm transform transition hover:scale-110 bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'>Add new product</Link>
            </div>
            <div className=' border-t-[2px] border-[#a4a5a5] w-[98%] ml-[13px] h-full'>
                {
                    myProducts?.map(item => <ProductItem key={item.productID} item={item} />)
                }

            </div>
        </div>
    )
}

export default AllProducts