import { useAuth } from '@clerk/clerk-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { addCategory } from '../../api/category';
import { renderAlert } from '../../utils/renderAlert';
import useCategoryStore from '../../store/CategoryStore';
import { LoaderCircle } from 'lucide-react';

function AddCategory() {
    const { actionGetAllCate } = useCategoryStore()
    const { register, handleSubmit, reset } = useForm()
    const { getToken } = useAuth()
    const [loading, setLoading] = useState(false)

    const createCategory = async (value) => {
        console.log('value', value);
        if (!value.name) {
            return renderAlert("Please fill a New Category!", "error")
        }
        setLoading(true)
        try {
            const token = await getToken()
            // console.log('token', token);
            const response = await addCategory(token, value)
            // console.log('response', response);
            await actionGetAllCate()
            setLoading(false)
            renderAlert(`Add ${value.name} Category already!`, "success")
            reset() //reset VALUE INPUT BY useFORM()
        } catch (error) {
            console.log('ERROR', error);
            setLoading(false)
            renderAlert(`Cannot add this ${value.name} Category`, "error")
        }

    }
    // console.log('loading', loading);

    return (
        <form onSubmit={handleSubmit(createCategory)}
            className='flex flex-col gap-4 w-[300px] h-[250px] mt-4 p-5 border rounded-md border-gray-400 text-[#131921] account'
        >
            <span className='text-[14px] font-bold'>Add new category</span>
            <span className='text-[12px]'>Category Name</span>
            <div className='relative w-full'>
                <input
                    {...register("name")}
                    type="text"
                    placeholder='New Category'
                    className='py-2 px-3 text-[14px] border border-[#0a1421] rounded-md w-full'
                />
                {
                    loading && (<LoaderCircle className='animate-spin text-gray-500 absolute top-2 left-[48%]' />)
                }
            </div>
            <button type='submit'
                className='mx-auto px-5 py-2 my-3 rounded-lg transform transition hover:scale-110 bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-[#131921] hover:duration-300'>
                Save
            </button>

        </form>
    )
}
export default AddCategory