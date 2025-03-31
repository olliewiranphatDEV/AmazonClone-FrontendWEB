import React from 'react'
import useProductStore from '../../store/ProductStore'
import useCategoryStore from '../../store/CategoryStore';
import { Link } from 'react-router';
import { useAuth } from '@clerk/clerk-react';

function SearchRelatedProduct() {

    const searchProductsDB = useProductStore(state => state.searchProductsDB)
    console.log('searchProductsDB', searchProductsDB);
    const categoryID = useProductStore(state => state.categoryID)
    // console.log('categoryID', categoryID);
    const allCategories = useCategoryStore(state => state.allCategories)
    console.log('allCategories', allCategories);

    const searchCate = allCategories.find(el => el.categoryID == categoryID)
    console.log('searchCate', searchCate);
    const searchWord = useProductStore(state => state.search)
    // console.log('searchWord', searchWord);

    if (searchProductsDB.length === 0) {
        return (<div className='h-[300px] w-full mt-[75px]'><div className='w-[30%] h-[10%] m-auto mt-[10%] flex justify-center items-center p-2'>No have Results :(</div></div>)
    }



    return (
        <div className='h-full flex flex-col mt-[75px]'>
            <div className='p-2 flex justify-between text-[12px] account border border-b-[1px] border-gray-500' >
                {searchProductsDB?.length === 1 && <span>1 result for {searchWord || searchCate?.name} </span>}
                {searchProductsDB?.length > 1 && <span>{searchProductsDB.length} results for {searchWord || searchCate?.name} </span>}
                <select className='p-1 rounded-md text-[9px]'>
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                </select>
            </div >
            <span className='py-3 px-4 text-[14px] font-semibold'>
                {searchProductsDB.length === 1 && <span>Result</span>}
                {searchProductsDB.length > 1 && <span>Results</span>}
            </span>
            <div className='py-3 px-8 flex gap-5 flex-wrap mb-8 justify-center'>
                {
                    searchProductsDB.map(el => {
                        return (
                            <Link to={`/search/related-products/${el.productID}`} key={el.productID} className='w-[200px] overflow-hidden flex flex-col gap-3 mb-5'>
                                <div className='w-[200px] h-[200px]'>
                                    <img src={el.productImage[0].productImage} alt="product-image" className='object-contain w-full h-full rounded-md' />
                                </div>
                                <span className='text-[14px]'>{el.productName}</span>
                                <span className='text-xl font-semibold my-1'><sup className='text-[11px]'>$</sup> {el.price}</span>
                                <span className='text-[11px] mt-1'><strong>Categories:</strong> {searchCate?.name}</span>
                                <span className='text-[11px]'><strong>Added:</strong> {new Date(el.updatedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}</span>
                            </Link>
                        )
                    })
                }

            </div>

        </div >
    )
}

export default SearchRelatedProduct