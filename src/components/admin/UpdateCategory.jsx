import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { updateCategoty } from '../../api/category';
import { useAuth } from '@clerk/clerk-react';

function UpdateCategory({ categoryID }) {
    const { getToken } = useAuth()
    const { register, handleSubmit } = useForm()
    const hdlUpdateCate = async (value) => {
        console.log("categoryID", categoryID);
        console.log('value', value);
        const token = await getToken()
        const resUPDATECate = await updateCategoty(token, categoryID, value)
        console.log('resUPDATECate', resUPDATECate);

    }
    return (
        <form onSubmit={handleSubmit(hdlUpdateCate)} className='flex flex-col gap-4 w-[300px] mt-4 p-5 border rounded-md border-gray-400'>
            <span className='text-[14px] font-semibold'>Update category</span>
            <span className='text-[12px]'>Category Name</span>
            <input {...register("name")} type="text" placeholder='new name' className='p-2 border border-[#0a1421] rounded-md ' />
            <button className='mx-auto px-4 py-2 my-3 rounded-sm transform transition hover:scale-125 bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'>Save</button>
        </form>
    )
}

export default UpdateCategory