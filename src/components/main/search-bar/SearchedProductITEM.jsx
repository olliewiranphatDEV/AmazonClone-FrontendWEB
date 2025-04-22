import React, { useState } from 'react'
import { useNavigate } from 'react-router';

function SearchedProductITEM({ item, setLoading, setScollToTop }) {
    const navigate = useNavigate()

    console.log('item', item);
    const { ProductImage, price, productName } = item


    const today = new Date()

    const deliveryDate = new Date(today)
    deliveryDate.setDate(today.getDate() + 5)

    const fastedDelivery = new Date(today)
    fastedDelivery.setDate(today.getDate() + 3)

    const renderDate = (date) => {
        return date.toLocaleDateString('en-US', {
            weekday: "short",
            month: "short",
            day: "numeric"
        })
    }


    const hdlProductDetail = () => {
        setScollToTop(true)
        setLoading(true)
        setTimeout(() => {
            navigate(`/search/related-products/${item.productID}`)
        }, 1000)
    }




    return (
        <button onClick={hdlProductDetail}
            className='w-[250px] flex flex-col gap-5'>
            <div className='h-[250px]'>
                <img src={ProductImage[0].secure_url} alt="product-image" className='w-full h-full object-cover rounded-lg' />
            </div>

            {/* PRODUCT DETAILS */}
            <div>
                <div className='h-[70px] text-[14px]'>
                    {
                        productName.length > 90 ? (<span>{productName.slice(0, 90)}...</span>) : <span>{productName}</span>
                    }
                </div>
                <div>
                    <sup>$</sup>
                    <span className='text-[22px] font-semibold mx-[2px]'>{price.split(".")[0]}</span>
                    {
                        price.split(".")[1].length < 2 ? (<sup>{price.split(".")[1]}0</sup>) : (<sup>{price.split(".")[1]}</sup>)
                    }
                </div>
                <div className='flex flex-col gap-1 text-[12px]'>
                    <div className='flex gap-1'>
                        <span>Delivery</span>
                        <span className='font-semibold'>{renderDate(deliveryDate)}</span>
                        <span>to Thailand</span>
                    </div>
                    <div className='flex gap-1'>
                        <span>Or fasted delivery</span>
                        <span className='font-semibold'>{renderDate(fastedDelivery)}</span>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default SearchedProductITEM