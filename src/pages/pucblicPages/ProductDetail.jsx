import React, { useState } from 'react'
import { Link, useParams } from 'react-router'
import useProductStore from '../../store/ProductStore';
import AddToCart from '../../components/main/orderhistory/AddToCart';
import BuyNow from '../../components/main/orderhistory/BuyNow';

function ProductDetail() {
    const { productID } = useParams()
    console.log('productID', productID);
    const searchProductsDB = useProductStore(state => state.searchProductsDB)
    const thisProduct = searchProductsDB.filter(el => el.productID == productID)
    // console.log('thisProduct', thisProduct);
    const { categoryID, updatedAt, description, price, productName, userID, productImage, stockQuantity } = thisProduct[0]
    const options = Array.from({ length: stockQuantity }, (_, index) => index + 1);
    const [pickQuantity, setPickQuantity] = useState(1)
    const hdlPickQuantity = (e) => {
        setPickQuantity(Number(e.target.value))
    }
    // console.log('pickQuantity', pickQuantity);

    return (
        <div className='mt-[75px] p-4 flex gap-4'>
            <div className='w-[25%] bg-pink-300'>
                {/* MAP Img */}
                <img src={productImage[0].productImage} alt="" />
            </div>
            <div className='flex-1 bg-amber-200'>
                <span>Name</span>
            </div>
            <div className='py-2 px-4 w-[20%] flex flex-col gap-2'>
                <span className='text-xl font-semibold my-2'><sup className='text-[11px]'>$</sup> {price}</span>
                <span>In stock</span>
                <select onChange={hdlPickQuantity} className='rounded-lg border-[1px] border-gray-400 px-3 py-1 cursor-pointer'>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

                <div className='bg-[#ffd814] rounded-full p-1 text-[12px] account hover:bg-[#ebc60d] hover:duration-200'>
                    <AddToCart thisProduct={thisProduct} pickQuantity={pickQuantity} />
                </div>
                <div className='bg-[#FFA41C] rounded-full py-1 text-[12px] account hover:bg-[#f09307] hover:duration-200'>
                    <BuyNow />
                </div>
            </div>
        </div>
    )
}

export default ProductDetail