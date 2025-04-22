import React, { useState } from 'react'
import { Link, useParams } from 'react-router'
import useProductStore from '../../store/ProductStore';
import AddToCart from '../../components/main/orderhistory/AddToCart';
import BuyNow from '../../components/main/orderhistory/BuyNow';
import ImagesProductGallery from '../../components/main/search-bar/ImagesProductGallery';

function ProductDetail() {
    const { productID } = useParams()
    // console.log('productID', productID);
    const searchProductsDB = useProductStore(state => state.searchProductsDB)
    const thisProduct = searchProductsDB.find(el => el.productID == productID) || ""
    // console.log('thisProduct', thisProduct);


    return (
        <div className='w-full flex gap-5 px-6 py-10 flex-wrap lg:flex-nowrap'>
            {/* PRODUCT IMAGES */}
            <ImagesProductGallery ProductImage={thisProduct?.ProductImage} />

            {/* PRODUCT DETAILS */}
            <div className='w-[600px] flex flex-col gap-4 px-3'>
                <div className='flex flex-col gap-4 border-b-[1px] border-[#d5d9d9] pb-3'>
                    <span className='text-[20px] account'>{thisProduct?.productName}</span>
                    <div>
                        <sup>$</sup>
                        <span className='text-[22px] font-semibold mx-[2px]'>{thisProduct?.price.split(".")[0]}</span>
                        {
                            thisProduct?.price.split(".")[1].length < 2 ? (<sup>{thisProduct?.price.split(".")[1]}0</sup>) : (<sup>{thisProduct?.price.split(".")[1]}</sup>)
                        }
                    </div>
                </div>
                <div className='py-3 flex flex-col gap-2 text-[12px]'>
                    <span className='font-bold'>About this item</span>
                    <span>{thisProduct?.description}</span>
                </div>
                <div className='flex gap-4 text-[12px]'>
                    <span className='font-bold'>Category</span>
                    <span>{thisProduct?.category.name}</span>
                </div>
            </div>

            {/* ADD TO CART & BUY NOW */}
            <div className='w-[200px] h-[500px] xl:h-[700px] bg-blue-500'>

            </div>
        </div>
    )
}

export default ProductDetail