import React, { forwardRef } from 'react';

const ProductStockPopup = forwardRef(({ stockQuantity, setSelectedQuantity, setShowStock }, ref) => {
    const handleSelect = (qty) => {
        setSelectedQuantity(qty);
        setShowStock(false);
    };

    return (
        <div
            ref={ref}
            className="absolute mt-1 w-full max-h-[200px] bg-white border border-gray-300 rounded-md shadow-lg overflow-y-auto z-50"
        >
            {Array.from({ length: stockQuantity }, (_, i) => i + 1).map((qty) => (
                <button
                    key={qty}
                    onClick={() => handleSelect(qty)}
                    className="block w-full text-left px-4 py-2 text-[13px] hover:bg-gray-200 hover:text-black text-gray-800"
                >
                    {qty}
                </button>
            ))}
        </div>
    );
});

export default ProductStockPopup;
