import { ChevronFirst, FilePenLineIcon } from 'lucide-react';
import React, { useRef, useState } from 'react'
import useCategoryStore from '../../store/CategoryStore';
import { useAuth } from '@clerk/clerk-react';
import { deleteCategory, updateCategoty } from '../../api/category';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

function CategoryItem({ el }) {
    // console.log('el', el);
    const { getToken } = useAuth()
    const [showUpdate, setShowUpdate] = useState(false)

    const hdlDeleteCate = async (categoryID) => {
        console.log('categoryID', categoryID);
        const { isConfirmed } = await Swal.fire({
            text: "Are you sure to delete?",
            showCancelButton: true
        })
        console.log('isConfirmed', isConfirmed);
        if (isConfirmed === true) {
            const token = await getToken()
            const resDELELTECate = await deleteCategory(token, categoryID)
            console.log('resDELELTECate', resDELELTECate);
        }
    }
    const [input, setInput] = useState("")
    console.log('input', input);
    const hdlUpdateCate = async (e) => {
        setInput(e.target.value)
        const token = await getToken()
        const resUpdateCate = await updateCategoty(token, el.categoryID, input)
        console.log('resUpdateCate', resUpdateCate);

    }
    return (<div className='flex w-full text-[10px] py-2 flex-wrap'>
        <div className='w-[20%]'>{el.categoryID}</div>
        {
            showUpdate
                ? <input defaultValue={el.name} onChange={hdlUpdateCate} />
                : <span className='bg-inherit pl-2' >{el.name}</span>
        }
        <div className='flex-1 flex justify-center'>
            {
                showUpdate
                    ? <ChevronFirst onClick={() => setShowUpdate(!showUpdate)} />
                    : <FilePenLineIcon onClick={() => setShowUpdate(!showUpdate)} className='h-[18px] text-gray-600 cursor-pointer' />
            }
        </div>
        <button className='flex-1 flex justify-center'><FilePenLineIcon onClick={() => hdlDeleteCate(el.categoryID)} className='h-[18px] text-gray-600 cursor-pointer' /></button>
    </div>


    )
}

export default CategoryItem