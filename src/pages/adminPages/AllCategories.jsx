
import { useAuth } from '@clerk/clerk-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { addCategory } from '../../api/category'
import useCategoryStore from '../../store/CategoryStore'
import AddCategory from '../../components/admin/AddCategory'
import { FilePenLine, FilePenLineIcon } from 'lucide-react'
import CategoryItem from '../../components/admin/CategoryItem'
import UpdateCategory from '../../components/admin/UpdateCategory'

function AllCategories() {
    const allCategories = useCategoryStore(state => state.allCategories)
    const [showUpdate, setShowUpdate] = useState(false)
    const [categoryID, setCategoryID] = useState("")
    const hdlClickUpdate = (categoryID) => {
        console.log('categoryID', categoryID);
        setShowUpdate(!showUpdate)
        setCategoryID(categoryID)

    }



    return (
        <div className='w-full p-4 flex flex-col flex-wrap h-full gap-2'>
            <span className='account font-bold text-[18px] pl-4'>All Categories</span>
            <div className='w-full flex px-4 justify-center'>
                <div className='w-[50%] mt-4 border border-gray-400 rounded-md p-4'>
                    <div className='flex w-full text-[12px] font-semibold border-gray-400 border-b-[1px] pb-2'>
                        <div className='w-[20%]'>ID</div>
                        <div className='flex-1 ml-2'>Name</div>
                        <div className='flex-1 text-center'>Update</div>
                        <div className='flex-1 text-center'>Delete</div>
                    </div>
                    {
                        allCategories.map(el => (<CategoryItem key={el.categoryID} el={el} hdlClickUpdate={hdlClickUpdate} />))
                    }

                </div>
                <div className=' ml-7'>
                    <AddCategory />

                </div>
            </div>
        </div>
    )
}

export default AllCategories