import React, { useEffect, useState } from 'react'
import useProductStore from '../../store/ProductStore'
import useCategoryStore from '../../store/CategoryStore';
import { useLocation } from 'react-router';
import SearchedProductITEM from '../../components/main/search-bar/SearchedProductITEM';

function SearchRelatedProduct() {
    const [scollToTop, setScollToTop] = useState(false)
    const [loading, setLoading] = useState()
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


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [scollToTop])



    return (
        <div className='relative'>
            <div className='w-full px-8 py-6 flex flex-col gap-8 pb-20'>
                {renderHeader}

                {/* SEARCHED PRODUCTS CONTAINER */}
                {
                    searchProductsDB.length > 0 ?
                        (<div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-items-center gap-6'>
                            {
                                searchProductsDB.length !== 0 && searchProductsDB.map(item =>
                                    <SearchedProductITEM
                                        key={item.productID}
                                        item={item}
                                        setLoading={setLoading}
                                        setScollToTop={setScollToTop}
                                    />)
                            }
                        </div>) :
                        (<div className='flex justify-center pt-[15%] lg:pt-[10%] w-full h-[500px]'>
                            <span className='account'>The products are coming soon ...</span>
                        </div>)
                }
            </div>

            {/* SKELETON LOADING PAGE */}
            {
                loading && (<div style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(206, 206, 206, 0.6)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    alignItems: "center",
                    paddingTop: "10%",
                    position: "absolute",
                    top: "0"
                }}>
                    <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-150'></div>
                    <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-200'></div>
                    <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-300'></div>
                    <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-500'></div>
                    <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-500'></div>
                </div>)
            }
        </div>
    )
}

export default SearchRelatedProduct