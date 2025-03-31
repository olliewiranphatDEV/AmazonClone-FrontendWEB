import { useAuth } from '@clerk/clerk-react';
import React from 'react'
import { useForm } from 'react-hook-form';
import { addCategory } from '../../api/category';

function AddCategory() {
    const { register, handleSubmit } = useForm()
    const { getToken } = useAuth()

    const createCategory = async (value) => {
        console.log('value', value);
        const token = await getToken()
        console.log('token', token);
        try {
            const response = await addCategory(token, value)
            console.log('response', response);

        } catch (error) {
            console.log(error);

        }

    }
    return (
        <form onSubmit={handleSubmit(createCategory)} className='flex flex-col gap-4 w-[300px] mt-4 p-5 border rounded-md border-gray-400'>
            <span className='text-[14px] font-semibold'>Add new category</span>
            <span className='text-[12px]'>Category Name</span>
            <input type="text" placeholder='new category' {...register("name")} className='p-2 border border-[#0a1421] rounded-md ' />
            <button className='mx-auto px-4 py-2 my-3 rounded-sm transform transition hover:scale-125 bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'>Save</button>
        </form>)
}
export default AddCategory