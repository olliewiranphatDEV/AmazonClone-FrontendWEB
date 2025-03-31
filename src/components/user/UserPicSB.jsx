import { useAuth, useUser } from '@clerk/clerk-react'
import { Loader, Pencil } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { resizeFile } from '../../utils/resizer'
import { addUserImgsCloud } from '../../api/images'

function UserPicSB() {
    const { user } = useUser()
    const { getToken } = useAuth()
    const [loading, setLoading] = useState(false)
    const usePencil = useRef()
    const [imageData, setImageData] = useState([])
    const hdlUpdateImage = async (e) => {
        const token = await getToken()
        setLoading(!loading)

        ///// send image to update at Clerk database
        ///// got the imageUrl from Clerk, send API to update in DB at user.imgaeUrl
    }

    return (
        <div className=' w-full p-4 flex gap-3 flex-col'>
            <div className='relative mt-1'>
                <img src={user?.imageUrl} alt='image' className='absolute left-2 w-[50px] h-[50px] rounded-full bg-[#e6e6e6] border-none' multiple />
                <input onChange={hdlUpdateImage} ref={usePencil} type='file' className='hidden  w-[100px] h-[100px] bg-[#e6e6e6] border-none' />
                <Pencil onClick={() => usePencil.current.click()} className='text-gray-500  cursor-pointer left-16 absolute w-4 top-7 border-transparent hover:border-b-2 hover:border-gray-500 hover:duration-75' />
                {loading && <Loader className='animate-spin left-5 top-5 absolute text-[#a4a5a5]' />}
            </div>
            <div className='mt-12 border-b-[1px] border-white pb-4 pl-1 text-[12px]'>
                <span className='account     mr-1'>{user?.firstName}</span>
                <span className='account'>{user?.lastName}</span>
            </div>
        </div>
    )
}

export default UserPicSB