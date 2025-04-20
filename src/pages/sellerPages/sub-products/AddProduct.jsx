import { Loader, Pencil } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { useForm } from 'react-hook-form'
import { renderAlert } from '../../../utils/renderAlert'
import useCategoryStore from '../../../store/CategoryStore'
import ProductImages from '../../../components/seller/products/ProductImages'
import { addNewProduct } from '../../../api/seller'


function AddProduct() {
    const { getToken } = useAuth()
    const allCategories = useCategoryStore(state => state.allCategories)
    // console.log('allCategories', allCategories);
    //SELECT CATEGORIES:
    const renderAllCategories = allCategories.map(el => {
        // console.log('el.name', el.name);
        return (<option value={el.categoryID} key={el.categoryID}>{el.name}</option>)
    })


    const [imageData, setImageData] = useState([])
    const [showImage, setShowImage] = useState(false)
    const [loading, setLoading] = useState(false)
    const [adding, setAdding] = useState(false)

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        if (allCategories.length > 0) {
            reset({
                productName: "",
                description: "",
                categoryID: allCategories[0].categoryID,
                price: "",
                stockQuantity: ""
            });
        }
    }, [allCategories, reset]);


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
            const response = await addNewProduct(token, value, imageData)
            console.log('res.ADDProduct', response);
            renderAlert("Add product success!", "success")
            //RESET VALUE STATE:
            setImageData([])
            setShowImage(false)
            reset({
                productName: "",
                description: "",
                categoryID: allCategories[0].categoryID,
                price: "",
                stockQuantity: ""
            })
        } catch (error) {
            console.log("Cannot add a new product!, ERROR", error);
            renderAlert("Cannot add a new product!", "error")
        } finally {
            setAdding(false)
        }
    }

    useEffect(() => {
        if (adding) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    }, [adding])

    return (
        <div className='w-full h-full relative'>
            <div className='flex flex-col gap-2 text-[#131921] w-[90%] mx-auto py-10 mb-32'>
                <span className='font-semibold text-[18px]'>Add Product</span>
                <form className='pl-5 mt-4' onSubmit={handleSubmit(hdlSubmitProduct)}>
                    <ProductImages
                        imageData={imageData} setImageData={setImageData}
                        showImage={showImage} setShowImage={setShowImage}
                        loading={loading} setLoading={setLoading}
                    />


                    {/* Product Detail */}
                    <label className='flex flex-col gap-2 mt-9'>
                        <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Product Name</span>
                        <input {...register("productName")} type="text" className='border border-[#a4a5a5] w-[90%] h-7 rounded-sm px-4 text-[10px]' placeholder='Product name' />
                    </label>
                    <label className='flex flex-col gap-2 mt-7'>
                        <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Description</span>
                        <textarea {...register("description")} type="text" className='border border-[#a4a5a5] w-[90%] h-16 rounded-sm px-4 py-2 text-justify text-[10px]' placeholder='What is this product about?' />
                    </label>
                    <label className='flex flex-col gap-2 mt-7'>
                        <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Category</span>
                        <select
                            {...register("categoryID")}
                            disabled={allCategories.length === 0}
                            className='text-[11px] px-2 py-1 w-[90%] rounded-[5px] cursor-pointer'
                        >
                            {allCategories.length === 0
                                ? <option value="">Loading...</option>
                                : renderAllCategories
                            }
                        </select>
                    </label>
                    <div className='flex mt-7 w-[90%] gap-2'>
                        <label className='flex flex-col flex-1 gap-2'>
                            <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Price ($)</span>
                            <input {...register("price")} type="text" className='w-full border border-[#a4a5a5] h-7 rounded-sm px-4 text-[10px]' placeholder='$ xxxxx.xx' />
                        </label>
                        <label className='flex flex-col flex-1 gap-2'>
                            <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Stock Quatity</span>
                            <input {...register("stockQuantity")} type="text" className='flex-1 border border-[#a4a5a5] w-full h-7 rounded-sm px-4 text-[10px]' placeholder='Fill number' />
                        </label>
                    </div>
                    <div className='flex mt-9 gap-2 w-[90%] justify-center'>
                        <button className='transition-transform duration-300  hover:scale-125 px-4 py-2 my-3 rounded-sm bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'>Save</button>
                    </div>
                </form>
            </div>
            {
                adding && (<div
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        position: "absolute",
                        top: "0",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        paddingLeft: "40%"
                        // justifyContent: "center"
                    }}>
                    <svg
                        className='w-[10%] absolute top-[7%] animate-spin'
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
        </div>
    )
}
export default AddProduct