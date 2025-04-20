import { useAuth } from '@clerk/clerk-react'
import axios from 'axios'
import { Loader, LoaderCircle, Pencil } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { renderAlert } from '../../../utils/renderAlert'
import { addProductImagesCloud, deleteProductImageCloud } from '../../../api/seller'

function ProductImages({ imageData, setImageData, showImage, setShowImage, loading, setLoading }) {
    const { getToken } = useAuth()

    const usePencil = useRef()

    const hdlAddImage = async (e) => {
        try {
            // let allImages = []
            setLoading(true)
            const token = await getToken()

            const files = e.target.files
            if (files.length === 0) {
                console.log("No file selected");
                return;
            }

            // // if MANY FILES USING for loop add into FormData
            for (let i = 0; i < files.length; i++) {
                const formData = new FormData()
                formData.append("image", e.target.files[i]); //IMAGE FILE THAT SELECTED FROM INPUT TYPE="FILE"
                const resUploadCloud = await addProductImagesCloud(token, formData)
                console.log('resUploadCloud', resUploadCloud); //respond.data from Backend

                setImageData((prev) => [...prev, resUploadCloud.data.results])
                setShowImage(true)

            }
        } catch (error) {
            console.log("Cannot upload image to Cloudinary", error);

        } finally {
            setLoading(false)
        }
    }
    const hdlDeleteImg = async (id) => {
        try {
            const results = imageData.filter(el => el.public_id !== id)
            console.log('results.length', results.length);

            if (results.length == 0) {
                setShowImage(false)
            }
            setImageData(results)
            const token = await getToken()
            const resDeleteCloud = await deleteProductImageCloud(token, id)
            console.log('resDeleteCloud', resDeleteCloud);

        } catch (error) {
            console.log("Cannot Delete this image, Cloud", error);
            renderAlert("Cannot delete this image", "error")
            const theDeleted = imageData.filter(el => el.public_id === id)
            setImageData((prev) => [...prev, theDeleted])
        }
    }
    const renderImg = imageData.map((el, inx) => {
        return (<div key={inx} className="relative w-[150px] h-[150px]">
            <img src={el.secure_url} className='w-full h-full object-contain' />
            <button onClick={() => hdlDeleteImg(el.public_id)}
                type='button'
                className='bg-[#a4a5a5] hover:bg-[#dddddd] hover:duration-300 hover:text-red-500 rounded-full w-7 h-7 flex items-center justify-center absolute right-[-10px] top-[-10px] text-xl text-white select-none'
            >x
            </button>
        </div>)
    })


    const noneImage = (<div className='flex justify-center items-center gap-2 w-[150px] rounded-sm border border-[#a4a5a5] border-dashed h-[150px]'>
        <span className='text-[30px] text-[#b1b2b2]'>+</span>
    </div>)

    return (
        <>
            <div className='flex relative text-[12px] mb-5 '>
                <span className='account'>Product Images</span>
                <input
                    onChange={hdlAddImage}
                    ref={usePencil} //use with ICON Pencil instead of input
                    type='file'
                    className='hidden  w-[100px] h-[100px] bg-[#e6e6e6] border-none'
                    multiple //SEND MANY FILES
                />
                <Pencil
                    onClick={() => usePencil.current.click()} //useRef WORK!
                    className='text-gray-500  cursor-pointer absolute w-4 left-[100px] bottom-[-1px] border-transparent hover:border-b-2 hover:border-gray-500 hover:duration-75'
                />
                {loading && <LoaderCircle className='animate-spin top-[-5px] left-[124px] absolute text-[#a4a5a5]' />}
            </div>
            <div className='w-full h-[150px] flex gap-4'>
                {showImage === false && noneImage}
                {showImage === true && renderImg}
            </div>

        </>
    )
}

export default ProductImages