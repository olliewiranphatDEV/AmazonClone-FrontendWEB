import React from 'react'
import useProductStore from '../../store/ProductStore'
import useCategoryStore from '../../store/CategoryStore';
import { useLocation } from 'react-router';
import SearchedProductITEM from '../../components/main/search-bar/SearchedProductITEM';

function SearchRelatedProduct() {

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    //GET CATEGORYID && SEARCH WORD
    const categoryID = queryParams.get("categoryID") || ""
    const searchWord = queryParams.get("search") || ""
    console.log('categoryID', categoryID);
    console.log('searchWord', searchWord);

    //SEARCHED PRODUCTS (BACKEND -> GLOBAL STATE)
    const searchProductsDB = useProductStore(state => state.searchProductsDB)
    console.log('searchProductsDB', searchProductsDB);

    //GET CATEGORY NAME TO RENDER DYNAMICALLY
    const { allCategories } = useCategoryStore()

    let renderHeader = searchProductsDB.length > 1 ?
        (<span className='font-bold text-[18px]'>Results</span>)
        : (<span className='font-bold text-[18px]'>Result</span>)

    if (categoryID) {
        const thisCategoryName = allCategories.find(item => item.categoryID === parseInt(categoryID))
        console.log('thisCategoryName', thisCategoryName);
        renderHeader = (<span className='font-bold text-[18px]'>{thisCategoryName.name}</span>)
    }



    return (
        <div className='w-full px-8 py-6 flex flex-col gap-8'>
            {renderHeader}

            {/* SEARCHED PRODUCTS CONTAINER */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-items-center gap-6'>
                {
                    searchProductsDB.length !== 0 && searchProductsDB.map(item => <SearchedProductITEM key={item.productID} item={item} />)
                }
            </div>

        </div>
    )
}

export default SearchRelatedProduct