import { useAuth } from '@clerk/clerk-react'
import { Loader, Pencil } from 'lucide-react'
import React, { useRef, useState } from 'react'

function ProductImages() {
    const [imageData, setImageData] = useState([])
    const [loading, setLoading] = useState(false)
    const usePencil = useRef()
    const [showImage, setShowImage] = useState(false)
    const { getToken } = useAuth()
    const hdlAddImage = async (e) => {
        const token = await getToken()
        setLoading(!loading)
        const files = e.target.files
        console.log('files', files);
        let allImages = []
        for (let i = 0; i < files.length; i++) {
            await resizeFile(files[i]).then(async (resizedImage) => {
                const response = await addImages(token, resizedImage)
                console.log('response >>>>>', response);
                setLoading(false)
                allImages.push(response.data.results)
            })
        }
        setImageData([...imageData, ...allImages])
        setShowImage(true)
    }
    console.log('imageData', imageData);
    return (
        <>
            <div className='flex relative text-[12px] mb-5 '>
                <span>Product Images</span>
                <input onChange={hdlAddImage} ref={usePencil} type='file' className='hidden  w-[100px] h-[100px] bg-[#e6e6e6] border-none' multiple />
                <Pencil onClick={() => usePencil.current.click()} className='text-gray-500  cursor-pointer absolute w-4 left-[96px] bottom-[-1px] border-transparent hover:border-b-2 hover:border-gray-500 hover:duration-75' />
                {loading && <Loader className='animate-spin top-[-5px] left-[124px] absolute text-[#a4a5a5]' />}
            </div>
            <div className='w-full h-[150px] flex gap-4'>
                {showImage === false && noneImage}
                {showImage === true && renderImg}
            </div>
        </>
    )
}

export default ProductImages