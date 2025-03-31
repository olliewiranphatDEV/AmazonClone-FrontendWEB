import React, { useEffect, useState } from 'react'
import useProductStore from '../../store/ProductStore'
import { useAuth } from '@clerk/clerk-react'
import useCartStore from '../../store/CartStore'
import useAuthStore from '../../store/UserStore'
import { cartUpdateQuantity } from '../../api/user'
import { useNavigate } from 'react-router'
import ReloadingLink from '../../components/ReloadingLink'

function Cart() {
    const { getToken } = useAuth()
    const actionGetUserCart = useCartStore(state => state.actionGetUserCart)
    const userData = useAuthStore(state => state.userData)
    const userCart = useCartStore(state => state.userCart)
    console.log('userCart', userCart);

    const fetchUserCart = async () => {
        const token = await getToken()
        actionGetUserCart(token, userData.userID)
    }
    useEffect(() => {
        fetchUserCart()
    }, [])
    const { cartID, customerID, totalPrice, ProductOnCart } = userCart || {}
    console.log('ProductOnCart', ProductOnCart);

    const hdlUpdateQuantity = async (cartID, productID, quantity) => {
        console.log(cartID);
        console.log(productID);
        console.log(quantity);

        try {
            const token = await getToken()
            const resUpdateQuantity = await cartUpdateQuantity(token, userData.userID, { cartID, productID, quantity })
            console.log('resUpdateQuantity', resUpdateQuantity);
            fetchUserCart()
        } catch (error) {
            console.log(error);

        }

    }

    return (
        <div className='h-full p-4'>
            <span className='account'>Your Cart</span>
            <div className='flex flex-col items-center'>
                {ProductOnCart?.length && ProductOnCart.map(productItem => {
                    console.log('productItem', productItem);
                    const { cartID, product, productID, quantity } = productItem

                    const { categoryID, price, productImage, productName, stockQuantity } = product
                    return (
                        <div key={productID} className='w-[50%] h-[80px] flex bg-white shadow-sm rounded-md m-4 gap-3 items-center px-4'>
                            <div className='w-[50px] h-[50px]'>
                                <img src={productImage[0].productImage} alt="product-image" className='w-full h-full object-cover rounded-sm' />
                            </div>
                            <div className='h-full flex flex-col py-2 gap-1 w-[30%]'>
                                <span className='text-[9px] text-gray-400'>Product</span>
                                <span className='text-[10px]'>{productName.slice(0, 25)}...</span>
                                <span className='text-[9px] text-red-500'><sup>$</sup>{price}</span>
                            </div>
                            <div className='h-full flex flex-col py-2 gap-4 items-center bg-amber-200  w-[30%]'>
                                <span className='text-[9px] text-gray-400'>Quantity</span>
                                <div className='flex flex-wrap'>
                                    <button className='w-[30px] bg-slate-500' onClick={() => hdlUpdateQuantity(cartID, productID, quantity + 1)}>+</button>
                                    <div className='py-1 px-4 bg-white h-full flex-1'>{quantity}</div>
                                    <button className='w-[30px] bg-slate-500' onClick={() => hdlUpdateQuantity(cartID, productID, quantity - 1)}>-</button>
                                </div>
                            </div>
                            <div className='h-[70px] flex flex-col py-2 gap-1 items-center flex-1'>
                                <span className='text-[9px] text-gray-400'>Total Price</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <ReloadingLink to='/user/payment' className='flex justify-end w-full px-12'>
                <button className=' mt-8 px-4 py-2 my-3 rounded-sm transform transition hover:scale-125 bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'>Order</button>
            </ReloadingLink>
        </div>
    )
}

export default Cart