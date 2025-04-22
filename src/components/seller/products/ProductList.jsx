import ReactPaginate from 'react-paginate';
import ProductItem from './ProductItem';
import { useState, useEffect } from 'react';

function ProductList({ myProducts, setLoading }) {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(0);

    const offset = currentPage * itemsPerPage;
    const currentItems = myProducts.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(myProducts.length / itemsPerPage);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    // Auto scroll to top on page change
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [currentPage]);

    return (
        <div className='w-full text-[#131921] text-[12px] flex flex-col flex-wrap'>
            {/* HEADER */}
            <div className='hidden md:flex w-full gap-4 justify-between font-semibold items-center py-2'>
                <div className='w-[15%]'>Product Image</div>
                <div className='w-[15%]'>Product Name</div>
                <div className='w-[20%]'>Description</div>
                <div className='w-[10%]'>Category</div>
                <div className='w-[10%] text-center'>Price</div>
                <div className='w-[10%] text-center'>Stock Quantity</div>
                <div className='w-[10%] text-end'>Created At</div>
                <div className='w-[5%]'>Update</div>
                <div className='w-[5%]'>Delete</div>
            </div>

            {/* PRODUCT ITEMS */}
            {currentItems.map((item) => (
                <ProductItem key={item.productID} item={item} setLoading={setLoading} />
            ))}

            {/* PAGINATION */}
            <div className='mt-6 mb-10 flex justify-center'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next ›"
                    previousLabel="‹ Prev"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    containerClassName="flex flex-wrap justify-center items-center gap-2 text-[11px] sm:text-sm"
                    pageClassName="px-3 py-1 sm:px-4 sm:py-2 border border-gray-300 rounded-full hover:bg-gray-200 transition duration-200"
                    activeClassName="bg-[#febd69] text-black font-bold border-[#131921]"
                    breakClassName="px-3 py-1 sm:px-4 sm:py-2 text-gray-500"
                    nextClassName="px-3 py-1 sm:px-4 sm:py-2 text-gray-700 rounded-full bg-gray-100 hover:bg-gray-300 transition"
                    previousClassName="px-3 py-1 sm:px-4 sm:py-2 text-gray-700 rounded-full bg-gray-100 hover:bg-gray-300 transition"
                    disabledClassName="opacity-40 cursor-not-allowed"
                />
            </div>
        </div>
    );
}

export default ProductList;
