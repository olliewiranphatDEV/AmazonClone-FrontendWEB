import { useAuth } from '@clerk/clerk-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../../api/category';
import ProductItem from './ProductItem';

function ProductList({ el }) {
    console.log('ProductItem', el);
    const [allCates, setAllCates] = useState([])
    const [image, setImage] = useState("")
    const { getToken } = useAuth()
    const getPDImage = async () => {
        const token = await getToken()
        const allCates = await getAllCategories(token)
        setAllCates(allCates.data.results)
        const PDImage = await axios.get(`http://localhost:8080/seller-center/products/product-image/${el.productID}`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        // console.log('PDImage', PDImage);
        setImage(PDImage.data.results.productImage)
        // console.log('allCates', allCates);
    }
    useEffect(() => {
        getPDImage()
    }, [])
    // console.log('image', image);
    // console.log('allCates', allCates);
    const cateNames = allCates.filter(cate => cate.categoryID == el.categoryID)
    // console.log('cateNames', cateNames);


    return (
        <div className='w-full h-[60px] flex justify-between items-center my-4 gap-6'>
            <ProductItem el={el} image={image} cateNames={cateNames} />
        </div>
    )
}

export default ProductList