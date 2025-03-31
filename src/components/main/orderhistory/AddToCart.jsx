import { SignInButton, useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router'
import useProductStore from '../../../store/ProductStore'
import useAuthStore from '../../../store/UserStore'

function AddToCart({ thisProduct, pickQuantity }) {
    const userData = useAuthStore(state => state.userData)

    const actionADDtoCarts = useProductStore(state => state.actionADDtoCarts)
    const { userId, getToken } = useAuth()
    // console.log('thisProduct', thisProduct);
    const { categoryID, updatedAt, description, price, productName, userID, productImage, stockQuantity } = thisProduct[0]
    // console.log('pickQuantity', pickQuantity);


    if (!userId) {
        return (
            <SignInButton mode='modal' forceRedirectUrl='/user/cart'>
                <button className='flex justify-center cursor-pointer account text-[12px] px-4 py-1 mx-auto'>
                    <span>Add to Cart</span>
                </button>
            </SignInButton>
        )
    }

    const hdlADDtoCart = async () => {
        const token = await getToken()
        // console.log(token);
        // console.log(thisProduct[0]);
        // console.log(pickQuantity);
        console.log('userData.userID', userData.userID);
        actionADDtoCarts(token, userData.userID, thisProduct[0], pickQuantity)
    }


    return (
        <button onClick={hdlADDtoCart} className='flex justify-center cursor-pointer account text-[12px] px-4 py-1 mx-auto'>
            <span>Add to Cart</span>
        </button>

    )

}

export default AddToCart