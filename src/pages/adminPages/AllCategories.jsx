
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
    console.log('allCategories', allCategories);

    const [showUpdate, setShowUpdate] = useState(false)
    const [categoryID, setCategoryID] = useState("")


    const hdlClickUpdate = (categoryID) => {
        console.log('categoryID', categoryID);
        setShowUpdate(!showUpdate)
        setCategoryID(categoryID)

    }



    return (
        <div className='w-full py-8 px-6 flex flex-col flex-wrap h-full mb-20 gap-3 text-[#131921]'>
            <span className='font-bold text-[18px] pl-4'>All Categories</span>
            <div className='w-[90%] mx-auto justify-center flex flex-wrap gap-10'>
                <div className='flex-1 mt-4 border border-gray-400 rounded-md p-4'>
                    <div className='flex w-full text-[12px] font-bold border-gray-400 border-b-[1px] pb-2'>
                        <div className='w-[20%] text-center'>ID</div>
                        <div className='w-[30%] ml-2'>Name</div>
                        <div className='flex-1 text-center'>Update</div>
                        <div className='flex-1 text-center'>Delete</div>
                    </div>
                    {
                        allCategories.map(el => (<CategoryItem key={el.categoryID} el={el} hdlClickUpdate={hdlClickUpdate} />))
                    }

                </div>

                {/* ADD A NEW CATEGORY  */}
                <AddCategory />
            </div>
        </div>
    )
}

export default AllCategories