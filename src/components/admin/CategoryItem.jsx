import { ChevronFirst, FilePenLineIcon, LoaderCircle, Save } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import useCategoryStore from '../../store/CategoryStore';
import { useAuth } from '@clerk/clerk-react';
import { deleteCategory, updateCategoty } from '../../api/category';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { renderAlert } from '../../utils/renderAlert';

function CategoryItem({ el }) {
    const { actionGetAllCate } = useCategoryStore()
    // console.log('el', el);
    const { getToken } = useAuth()
    const [showUpdate, setShowUpdate] = useState(false) //SHOW UPDATE STATE
    // console.log('showUpdate', showUpdate);
    const [loading, setLoading] = useState(false)

    const [inputCate, setInputCate] = useState(el.name)
    // console.log('inputCate', inputCate);
    const inputRef = useRef(null)

    useEffect(() => {
        if (showUpdate && inputRef.current) {
            inputRef.current.focus() //FOCUS WHEN showUpdate === true
        }
    }, [showUpdate]) //DETECT showUpdate, WORK WHEN IT HAS CHANGE!

    const hdlDeleteCate = async (categoryID) => {
        console.log('categoryID', categoryID);

        const { isConfirmed } = await Swal.fire({
            text: "Are you sure to delete?",
            showCancelButton: true
        })
        console.log('isConfirmed', isConfirmed);
        if (isConfirmed === true) {
            try {
                const token = await getToken()
                const resDELELTECate = await deleteCategory(token, categoryID)
                console.log('resDELELTECate', resDELELTECate);
                actionGetAllCate()
                renderAlert(`Delete ${el.name} Category already!`, "success")
            } catch (error) {
                console.log(`Cannot Delete ${el.name} Category, ERROR`, error);
                renderAlert(`Cannot Delete ${el.name} Category`, "error")
            }
        }
    }

    const hdlUpdateCateName = async () => {
        setLoading(true)
        console.log('el.categoryID', el.categoryID);
        setShowUpdate(false)
        try {
            const token = await getToken()
            const resUpdateCate = await updateCategoty(token, el.categoryID, inputCate)
            console.log('resUpdateCate', resUpdateCate);
            actionGetAllCate()
            setLoading(false)
            renderAlert("Update new name already!", "success")
        } catch (error) {
            console.log("Cannot Update Category Name, ERROR", error);
            setLoading(false)
            renderAlert("Cannot Update Category Name", "error")
        }
    }





    return (
        <div className='flex items-center w-full text-[10px] py-2 flex-wrap text-[#131921] account'>
            <div className='w-[20%] text-center font-semibold'>{el.categoryID}</div>
            <div className='w-[30%] relative'>
                <input
                    ref={inputRef} //CONNECT WITH useRef()
                    type="text"
                    value={inputCate}
                    onChange={(e) => setInputCate(e.target.value)}
                    disabled={!showUpdate} //true
                    className='w-full truncate bg-transparent p-2'
                    //PRESS 'Enter' --> AUTO SAVE!
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            hdlUpdateCateName() //autoSave!! when Enter
                        }
                    }}
                />
                {
                    loading && (<LoaderCircle className='text-gray-500 animate-spin absolute top-2 left=[48%]' />)
                }
            </div>

            {/* UPDATE NAME CATEGORY */}
            <div className='flex-1 flex justify-center items-center'>
                {
                    showUpdate ?
                        (<button
                            onClick={hdlUpdateCateName}
                            className='px-4 py-2 bg-[#131921] text-white rounded-lg hover:scale-110 duration-300 hover:bg-[#febd69] hover:text-[#131921] hover:font-semibold'
                        >
                            Save
                        </button>)
                        : (<svg
                            onClick={() => setShowUpdate(true)}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={2} stroke="#131921"
                            className="size-5 cursor-pointer hover:scale-[120%] duration-300">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                        </svg>)
                }
            </div>

            {/* DELETE BUTTON */}
            <div className='flex-1 flex justify-center'>
                <svg
                    onClick={() => hdlDeleteCate(el.categoryID)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="#C30010"
                    className="size-5 cursor-pointer hover:scale-[120%] duration-300">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                </svg>

            </div>
        </div>
    )
}

export default CategoryItem