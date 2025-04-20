import { Edit, FilePenLine, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import useCategoryStore from '../../../store/CategoryStore'
import { useAuth } from '@clerk/clerk-react'
import { deleteProductID } from '../../../api/product'
import Swal from 'sweetalert2'
import useSellerStore from '../../../store/SellerStore'
import useAuthStore from '../../../store/UserStore'

function ProductItem({ item, setLoading }) {
    console.log('item >>', item);
    const { categoryID, description, price, ProductImage, productName, stockQuantity, createAt, productID } = item
    const navigate = useNavigate()
    const { getToken } = useAuth()
    const actionGetMyProducts = useSellerStore(state => state.actionGetMyProducts)
    const userData = useAuthStore(state => state.userData)

    const allCategories = useCategoryStore(state => state.allCategories)
    const cateItem = allCategories.find(el => el.categoryID == categoryID)
    console.log('cateItem', cateItem);

    const hdlUpdateProduct = () => {
        console.log('productID', productID);

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            navigate(`/seller-center/all-products/update-product/${productID}`)
        }, 1000)
    }




    const hdlDeletePDID = async () => {
        console.log("Delete", productID);
        const { isConfirmed } = await Swal.fire({
            text: "Are you sure to delete?",
            showCancelButton: true,
            customClass: {
                popup: "rounded-2xl shadow-lg",
                confirmButton: 'bg-[#131921] text-white px-4 py-2 rounded hover:bg-[#febd69] hover:text-black  hover:duration-300 outline-none mx-4',
                cancelButton: 'bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 hover:duration-300 outline-none'
            },
            buttonsStyling: false
        })
        console.log('isConfirmed', isConfirmed);

        if (isConfirmed === true) {
            const token = await getToken()
            const response = await deleteProductID(token, productID)
            console.log('response', response);
            actionGetMyProducts(token, userData.userID)
        }
    }

    return (
        <div className='flex gap-4 justify-between items-center text-[#131921] text-[10px] py-2'>
            <div className='w-[15%]'>
                <div className='w-[50px] h-[50px] flex flex-'>
                    <img src={ProductImage[0]?.secure_url} alt="product-image" className='w-full h-full object-cover rounded-md' />
                </div>
            </div>
            <div className='w-[15%]'>
                <span className=''>
                    {productName.slice(0, 25)}...
                </span>
            </div>
            <div className='w-[20%]'>
                <span className=''>
                    {description.slice(0, 25)}...
                </span>
            </div>
            <div className='w-[10%]'>
                <span className=''>
                    {cateItem.name}
                </span>
            </div>
            <div className='w-[10%] text-center'>
                $ {price}
            </div>
            <div className='w-[10%] text-center'>
                {stockQuantity}
            </div>
            <div className='w-[10%] text-end'>

                {new Date(createAt).toLocaleDateString('en-US', {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}

            </div>

            <div className='w-[5%]'>
                <Edit onClick={hdlUpdateProduct}
                    className='w-[20px] text-gray-600 mx-auto cursor-pointer hover:scale-[120%] hover:duration-300'
                />
            </div>
            <div className='w-[5%]'>
                <Trash2 onClick={hdlDeletePDID}
                    className='w-[20px] mx-auto text-red-700 cursor-pointer hover:scale-[120%] hover:duration-300'
                />
            </div>
        </div>
    )
}

export default ProductItem