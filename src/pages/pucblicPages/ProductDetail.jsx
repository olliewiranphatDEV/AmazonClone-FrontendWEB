import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router'
import useProductStore from '../../store/ProductStore';
import AddToCart from '../../components/main/orderhistory/AddToCart';
import BuyNow from '../../components/main/orderhistory/BuyNow';
import ImagesProductGallery from '../../components/main/search-bar/ImagesProductGallery';
import { ChevronDown } from 'lucide-react';
import CategoriesPopup from '../../components/main/search-bar/CategoriesPopup';
import { CSSTransition } from 'react-transition-group';
import { useForm } from 'react-hook-form';
import ProductStockPopup from '../../components/main/search-bar/ProductStockPopup';
import CallToAction from '../../components/main/search-bar/CallToAction';

function ProductDetail() {
    const { productID } = useParams()
    // console.log('productID', productID);
    const searchProductsDB = useProductStore(state => state.searchProductsDB)
    const thisProduct = searchProductsDB.find(el => el.productID == productID) || null
    if (!thisProduct) return <div className='p-6 text-red-500'>Product not found</div>
    // console.log('thisProduct', thisProduct);


    const formatPrice = (price) => {
        if (!price) return { dollars: "0", cents: "00" };
        const [dollars, cents = "00"] = price.toString().split(".");
        return {
            dollars,
            cents: cents.length === 1 ? cents + "0" : cents,
        };
    };
    const { dollars, cents } = formatPrice(thisProduct?.price);

    const getEstimatedDate = (offsetDays) => {
        const date = new Date();
        date.setDate(date.getDate() + offsetDays);
        return date.toLocaleDateString('en-US', {
            weekday: "short",
            month: "short",
            day: "numeric"
        });
    };


    // SELECT STOCK QUANTITY
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const [showStock, setShowStock] = useState(false);
    const stockDropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (stockDropdownRef.current && !stockDropdownRef.current.contains(e.target)) {
                setShowStock(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    console.log('selectedQuantity', selectedQuantity);



    return (
        <div className='w-full gap-5 px-6 py-10 flex flex-wrap lg:flex-nowrap justify-center'>
            {/* PRODUCT IMAGES */}
            <ImagesProductGallery ProductImage={thisProduct?.ProductImage} />

            {/* PRODUCT DETAILS */}
            <div className='flex flex-col gap-4 px-3 w-[600px] min-w-[300px]'>
                <div className='flex flex-col gap-4 border-b-[1px] border-[#d5d9d9] pb-3'>
                    <span className='text-[20px] account'>{thisProduct?.productName}</span>
                    <div>
                        <sup>$</sup>
                        <span className='text-[22px] font-semibold mx-[2px]'>{dollars}</span>
                        <sup>{cents}</sup>
                    </div>
                </div>
                <div className='py-3 flex flex-col gap-2 text-[12px]'>
                    <span className='font-bold'>About this item</span>
                    <span>{thisProduct?.description}</span>
                </div>
                <div className='flex gap-4 text-[12px]'>
                    <span className='font-bold'>Category</span>
                    <span>{thisProduct?.category.name}</span>
                </div>
            </div>

            {/* ADD TO CART & BUY NOW */}
            <div className='min-w-[200px] border border-gray-300 p-4 flex flex-col gap-4 rounded-lg account'>
                <div>
                    <sup>$</sup>
                    <span className='text-[22px] font-semibold mx-[2px]'>{dollars}</span>
                    <sup>{cents}</sup>
                </div>

                <div className='text-[11px] text-gray-600 flex flex-col'>
                    <span>$ {dollars}.{cents} Shipping & Import </span>
                    <span>Charges to Thailand</span>
                    <span className='text-black'>Delivery <span className='text-black font-bold'>{getEstimatedDate(5)}</span> to Thailand</span>
                </div>

                <span className='text-black text-[11px]'>Or fastest delivery <span className='text-black font-bold'>{getEstimatedDate(5)}</span></span>

                {/* CALL TO ACTION */}
                <div className='flex flex-col gap-3 account'>
                    <span className='text-green-700'>In Stock</span>

                    {/* ACTION */}
                    <div className='flex flex-col gap-3'>

                        {/* SELECT STOCK QUANTITY */}
                        <div className="relative" ref={stockDropdownRef}>
                            <button
                                onClick={() => setShowStock(prev => !prev)}
                                className="w-full h-[36px] bg-white border border-gray-300 rounded-md px-4 flex items-center justify-between text-[13px] hover:border-gray-500 hover:shadow-sm"
                            >
                                Quantity: {selectedQuantity}
                                <ChevronDown className={`h-[14px] text-gray-600 transition-transform ${showStock ? 'rotate-180' : ''}`} />
                            </button>

                            <CSSTransition
                                in={showStock}
                                timeout={100}
                                classNames={{
                                    enter: 'opacity-0 scale-95',
                                    enterActive: 'opacity-100 scale-100 transition duration-150 ease-out',
                                    exit: 'opacity-100 scale-100',
                                    exitActive: 'opacity-0 scale-95 transition duration-150 ease-in'
                                }}
                                unmountOnExit
                                nodeRef={stockDropdownRef}
                            >
                                <ProductStockPopup
                                    ref={stockDropdownRef}
                                    stockQuantity={thisProduct.stockQuantity}
                                    setSelectedQuantity={setSelectedQuantity}
                                    setShowStock={setShowStock}
                                />
                            </CSSTransition>
                        </div>
                        {/* ADD TO CART - KEEP DATA IN DATABASE + SHOW ON CART.JSX*/}
                        <CallToAction />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail