import React, { useRef } from 'react';
import useCategoryStore from '../../../store/CategoryStore';

function CategoriesPopup({ dropdownRef, setValue, setSelectedCategoryName, setShowCate }) {
    const allCategories = useCategoryStore(state => state.allCategories);

    return (
        <div
            ref={dropdownRef}
            className="absolute top-[72%] left-0 text-[10px] account bg-white p-1 text-black rounded-md max-h-[300px] overflow-y-auto shadow"
        >
            <span
                onClick={() => {
                    setValue("categoryID", "");
                    setSelectedCategoryName("All");
                    setShowCate(false);
                    // ไม่เปลี่ยนหน้าในกรณีเลือก 'All Department'
                }}
                className="block px-2 py-1 hover:bg-gray-200 cursor-pointer"
            >
                All Department
            </span>
            {allCategories?.map((cate) => (
                <span
                    key={cate.categoryID}
                    onClick={() => {
                        setValue("categoryID", cate.categoryID);
                        setSelectedCategoryName(cate.name);
                        setShowCate(false);
                    }}
                    className="block px-2 py-1 hover:bg-gray-200 cursor-pointer"
                >
                    {cate.name}
                </span>
            ))}
        </div>
    );
}

export default CategoriesPopup;
