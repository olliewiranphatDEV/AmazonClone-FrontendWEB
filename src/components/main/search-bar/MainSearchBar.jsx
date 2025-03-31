import { Search } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import useCategoryStore from '../../../store/CategoryStore';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import useProductStore from '../../../store/ProductStore';
import { useAuth } from '@clerk/clerk-react';

function MainSearchBar() {
    const actionsearchProductsDB = useProductStore(state => state.actionsearchProductsDB)
    const navigate = useNavigate()
    const allCategories = useCategoryStore((state) => state.allCategories);
    // console.log('allCategories', allCategories);
    const location = useLocation()
    const { register, handleSubmit } = useForm()
    const { isLoaded } = useAuth()
    const hdlSubFormSearch = async (value) => {
        console.log('value', value);
        const { categoryID, search } = value
        if (!categoryID && !search) {
            console.log("HOME");
            navigate('/')
        }

        await actionsearchProductsDB(categoryID, search)
        if (location.pathname !== '/search/related-products') {
            window.location.href = '/search/related-products'
            navigate('/search/related-products')
            if (!isLoaded) {
                return <Loader className='m-auto mt-[22%] animate-spin text-red-500 font-semibold' />
            }
        }
    }



    return (
        <div className="w-[50%] flex flex-col h-full relative">
            <form onSubmit={handleSubmit(hdlSubFormSearch)} className="overflow-hidden w-full h-[40px] rounded-sm relative flex items-center top-2">
                <select {...register("categoryID")} className="bg-[#e3e6e6] account cursor-pointer w-[50px] h-full pl-2 text-black flex justify-center items-center text-[11px]">
                    <option value="">All</option> {/* เพิ่ม value="" ให้กับ option "All" */}
                    {allCategories?.map((cate) =>
                        <option value={cate.categoryID} key={cate.categoryID}>
                            {cate.name}
                        </option>
                    )}
                </select>
                <div className="h-full w-full">
                    <input {...register("search")} type="text" placeholder="Search Centric" className='flex-1 h-full text-[12px] w-full text-black p-41 pl-2' />
                    <button className="w-[40px] bg-[#FEBD69] hover:bg-[#f3a238] hover:duration-300 flex items-center justify-center h-[40px] absolute top-0 right-0">
                        <Search className="text-gray-800 h-[20px]" />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default MainSearchBar;