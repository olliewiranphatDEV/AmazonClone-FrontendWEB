import { FilePenLine, Trash2 } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import useCategoryStore from '../../../store/CategoryStore'
import { useAuth } from '@clerk/clerk-react'
import { deleteProductID } from '../../../api/product'
import Swal from 'sweetalert2'
import useSellerStore from '../../../store/SellerStore'
import useAuthStore from '../../../store/UserStore'

function ProductItem({ item }) {
    const { getToken } = useAuth()
    const actionGetMyProducts = useSellerStore(state => state.actionGetMyProducts)
    const userData = useAuthStore(state => state.userData)

    // console.log('item', item);
    const { categoryID, description, price, productID, productImage, productName, stockQuantity, userID } = item
    // console.log('productImage', productImage);
    const allCategories = useCategoryStore(state => state.allCategories)
    // console.log('allCategories', allCategories);
    const cateItem = allCategories.find(el => el.categoryID == categoryID)
    // console.log('cateItem', cateItem);
    const hdlDeletePDID = async (productID) => {
        console.log("Delete", productID);
        const { isConfirmed } = await Swal.fire({
            text: "Are you sure to delete?",
            showCancelButton: true
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
        <div className=' flex justify-between mt-4'>
            <div className='flex-[10%] h-full flex gap-4 '>
                <div className='w-[60px] h-[60px]'>
                    <img src={productImage[0].productImage} alt="image" className='w-full h-full object-fill rounded-sm' />
                </div>
                <div className='flex flex-col gap-1'>
                    <span className='text-[9px] text-[#a4a5a5]'>Name</span>
                    <span className='text-[11px]'>{productName.slice(0, 25)}...</span>
                </div>
            </div>
            <div className='flex-1 h-full flex flex-col gap-1'>
                <span className='text-[9px] text-[#a4a5a5]'>Category</span>
                <span className='text-[11px]'>{cateItem.name}</span>

            </div>
            <div className='flex-1 h-full flex flex-col gap-1'>
                <span className='text-[9px] text-[#a4a5a5]'>Stock Quantity</span>
                <span className='text-[11px]'>{stockQuantity}</span>
            </div>
            <div className='flex-1 h-full flex flex-col gap-1'>
                <span className='text-[9px] text-[#a4a5a5]'>Price</span>
                <span className='text-[11px]'>{price}</span>
            </div>
            <div className='relative flex-1 h-full flex flex-wrap'>
                <div className=' flex-1 '>
                    <span className='absolute left-0 top-0 text-[9px] text-[#a4a5a5] mr-16'>Edit</span>
                    <Link to={`/seller-center/all-products/update-product/${productID}`}>
                        <FilePenLine className='h-[18px] absolute top-5 left-0 text-gray-600' />
                    </Link>
                </div>
                <div className=' flex-1 '>
                    <span className='absolute top-0 text-[9px] text-[#a4a5a5]'>Delete</span>
                    <button onClick={() => hdlDeletePDID(productID)}>
                        <Trash2 className='h-[18px] absolute top-5 right-16 text-gray-600' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem