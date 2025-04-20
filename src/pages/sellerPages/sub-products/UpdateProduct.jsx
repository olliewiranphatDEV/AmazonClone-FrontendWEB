import { useParams } from 'react-router'
import { Loader, Pencil } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { useForm } from 'react-hook-form'
import { resizeFile } from '../../../utils/resizer'
import { addPDImgsCloud } from '../../../api/images'
import { renderAlert } from '../../../utils/renderAlert'
import useCategoryStore from '../../../store/CategoryStore'
import useSellerStore from '../../../store/SellerStore'
import axios from 'axios'
import { updateProductID } from '../../../api/product'
import ProductImages from '../../../components/seller/products/ProductImages'
import { updateProductByID } from '../../../api/seller'

function UpdateProduct() {
    const { productID } = useParams()
    // console.log('productID', productID);
    const { myProducts, actionGetMyProducts } = useSellerStore()
    // console.log('myProducts', myProducts);
    const thisProduct = myProducts.find(item => item.productID === parseInt(productID))
    console.log('thisProduct', thisProduct);

    const allCategories = useCategoryStore(state => state.allCategories)
    // console.log('allCategories', allCategories);
    //SELECT CATEGORIES:
    const renderAllCategories = allCategories.map(el => {
        // console.log('el.name', el.name);
        return (<option value={el.categoryID} key={el.categoryID}>{el.name}</option>)
    })

    const { getToken } = useAuth()
    const [imageData, setImageData] = useState(thisProduct.ProductImage)
    const [showImage, setShowImage] = useState(false)
    const [loading, setLoading] = useState(false)
    const [adding, setAdding] = useState(false)

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            productName: thisProduct.productName,
            description: thisProduct.description,
            categoryID: thisProduct.categoryID,
            price: thisProduct.price,
            stockQuantity: thisProduct.stockQuantity
        }
    })


    const hdlSubmitProduct = async (value) => {
        console.log('value', value);
        console.log('imageData', imageData);

        if (imageData.length === 0) {
            return renderAlert("Please select Product Images", "error")
        }

        const requiredFields = {
            productName: "Product Name",
            description: "Description",
            categoryID: "Category",
            price: "Price",
            stockQuantity: "Stock Quantity"
        };


        //CHECK EVERY FILED AS DYNAMIC:
        for (const [field, label] of Object.entries(requiredFields)) {
            console.log('value[field]', value[field]); //HAVE VALUE??

            if (!value[field]) {
                return renderAlert(`Please fill ${label}`, "error");
            }
        }

        //API BACKEN TO DATABASE:
        try {
            setAdding(true)
            const token = await getToken()
            const response = await updateProductByID(token, value, imageData, thisProduct.productID)
            console.log('res.updateProductByID', response);
            await actionGetMyProducts(token)
            renderAlert("Update Product Success!", "success")
        } catch (error) {
            console.log("Cannot update ProductByID!, ERROR", error);
            renderAlert("Cannot update this Product!", "error")
        } finally {
            setAdding(false)
        }
    }


    useEffect(() => {
        setShowImage(true)
    }, [])

    useEffect(() => {
        if (adding) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }, [adding])



    return (
        <div className='h-[700px] flex flex-col gap-2 p-5 px-6 mb-96 text-[#131921] relative'>
            <span className='account font-bold text-[18px]'>Update Product</span>
            <form onSubmit={handleSubmit(hdlSubmitProduct)}
                className='pl-5 mt-4'
            >
                <ProductImages
                    imageData={imageData} setImageData={setImageData}
                    showImage={showImage} setShowImage={setShowImage}
                    loading={loading} setLoading={setLoading}
                />


                {/* Product Detail */}
                <label className='flex flex-col gap-2 mt-9'>
                    <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Product Name</span>
                    <input {...register("productName")} type="text" className='border border-[#a4a5a5] w-[90%] h-7 rounded-sm px-4 text-[10px]' placeholder='product name' />
                </label>
                <label className='flex flex-col gap-2 mt-7'>
                    <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Description</span>
                    <textarea {...register("description")} type="text" className='border border-[#a4a5a5] w-[90%] h-16 rounded-sm px-4 py-2 text-justify text-[10px]' placeholder='What is this product about?' />
                </label>
                <label className='flex flex-col gap-2 mt-7'>
                    <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Category</span>
                    <select {...register("categoryID")} className='text-[11px] px-2 py-1 w-[90%] rounded-[5px] cursor-pointer'>
                        {renderAllCategories}
                    </select>
                </label>
                <div className='flex mt-7 w-[90%] gap-2'>
                    <label className='flex flex-col flex-1 gap-2'>
                        <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Price ($)</span>
                        <input {...register("price")} type="text" className='w-full border border-[#a4a5a5] h-7 rounded-sm px-4 text-[10px]' placeholder='$ xxxxx.xx' />
                    </label>
                    <label className='flex flex-col flex-1 gap-2'>
                        <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Stock Quatity</span>
                        <input {...register("stockQuantity")} type="text" className='flex-1 border border-[#a4a5a5] w-full h-7 rounded-sm px-4 text-[10px]' placeholder='fill number' />
                    </label>
                </div>
                <div className='flex mt-9 gap-2 w-[90%] justify-center'>
                    <button className='transition-transform duration-300  hover:scale-125 px-4 py-2 my-3 rounded-sm bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'>Save</button>
                </div>
            </form>
            {
                adding && (<div
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                    }}>
                    <svg
                        className='w-[10%] absolute top-[10%] left-[35%] animate-spin'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#c2c2c2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <path d="M21 12a9 9 0 11-6.219-8.56"></path> </g>
                    </svg>
                </div>
                )
            }
        </div >
    )
}
export default UpdateProduct