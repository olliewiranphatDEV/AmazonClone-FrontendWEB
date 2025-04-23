import React from 'react'
import { useNavigate } from 'react-router';

function SearchedProductITEM({ item, setLoading, setScollToTop }) {
    const navigate = useNavigate()

    if (!item || !item.productName || !item.price || !item.ProductImage?.length) {
        return <div className='text-red-500'>Invalid product data</div>
    }
    const { ProductImage, price, productName, productID } = item


    const getEstimatedDate = (offsetDays) => {
        const date = new Date();
        date.setDate(date.getDate() + offsetDays);
        return date.toLocaleDateString('en-US', {
            weekday: "short",
            month: "short",
            day: "numeric"
        });
    };

    const hdlProductDetail = () => {
        setScollToTop(true)
        setLoading(true)
        setTimeout(() => {
            navigate(`/search/related-products/${productID}`)
        }, 1000)
    };


    const formatPrice = (price) => {
        const [dollars, cents = "00"] = price.toString().split(".");
        return {
            dollars,
            cents: cents.length === 1 ? cents + "0" : cents
        };
    };

    const { dollars, cents } = formatPrice(price);

    return (
        <button onClick={hdlProductDetail} className='w-[250px] flex flex-col gap-5'>

            {/* PRODUCT IMAGE */}
            <div className='h-[250px]'>
                <img
                    src={ProductImage?.[0]?.secure_url || "/fallback-image.png"}
                    alt="product-image"
                    className='w-full h-full object-cover rounded-lg'
                />
            </div>

            {/* PRODUCT DETAILS */}
            <div>

                {/* PRODUCT NAME */}
                <div className='h-[70px] text-[14px]'>
                    <span>{productName.length > 90 ? `${productName.slice(0, 90)}...` : productName}</span>
                </div>

                {/* PRODUCT PRICE */}
                <div>
                    <sup>$</sup>
                    <span className='text-[22px] font-semibold mx-[2px]'>{dollars}</span>
                    <sup>{cents}</sup>
                </div>

                {/* DELIVERY DATE */}
                <div className='flex flex-col gap-1 text-[12px]'>
                    <div className='flex gap-1'>
                        <span>Delivery</span>
                        <span className='font-semibold'>{getEstimatedDate(5)}</span>
                        <span>to Thailand</span>
                    </div>
                    <div className='flex gap-1'>
                        <span>Or fasted delivery</span>
                        <span className='font-semibold'>{getEstimatedDate(3)}</span>
                    </div>
                </div>
            </div>
        </button>
    );
}

export default SearchedProductITEM;
