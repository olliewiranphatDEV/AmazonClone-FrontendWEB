import { ChevronDown, Search } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import useCategoryStore from '../../../store/CategoryStore';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import useProductStore from '../../../store/ProductStore';
import { useAuth } from '@clerk/clerk-react';
import { CSSTransition } from 'react-transition-group';

function MainSearchBar() {
    const actionsearchProductsDB = useProductStore(state => state.actionsearchProductsDB);
    const navigate = useNavigate();
    const allCategories = useCategoryStore(state => state.allCategories);
    const location = useLocation();
    const { register, handleSubmit, setValue } = useForm();
    const [showCate, setShowCate] = useState(false);
    const [selectedCategoryName, setSelectedCategoryName] = useState("All");
    const wrapperRef = useRef(null);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setShowCate(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setValue("categoryID", "");
        setSelectedCategoryName("All");
    }, [setValue]);

    const hdlSubFormSearch = async (value) => {
        const { categoryID, search } = value;
        if (!categoryID && !search) {
            navigate('/');
            return;
        }
        await actionsearchProductsDB(categoryID, search);
        if (location.pathname !== '/search/related-products') {
            window.location.href = '/search/related-products';
            navigate('/search/related-products');
        }
    };

    return (
        <div ref={wrapperRef} className="relative min-w-[50%] flex flex-col h-full">
            {/* Search Form */}
            <form
                onSubmit={handleSubmit(hdlSubFormSearch)}
                className="relative w-full h-[40px] flex items-center mt-2 bg-white rounded-[5px]"
            >
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setShowCate(!showCate)}
                        className="h-[40px] bg-[#e3e6e6] text-black text-[11px] flex items-center justify-center rounded-l-[5px] pl-2"
                    >
                        <span className="truncate text-left">{selectedCategoryName}</span>
                        <ChevronDown className="h-[12px]" />
                    </button>
                </div>

                <div className="flex-1 h-full relative">
                    <input
                        {...register("search")}
                        type="text"
                        placeholder="Search Centric"
                        className="w-[93%] h-full text-[12px] text-black pl-2 pr-10"
                    />
                    <button
                        type="submit"
                        className="group w-[40px] h-full absolute top-0 right-0 bg-[#FEBD69] hover:bg-[#f3a238] transition duration-300 flex items-center justify-center rounded-r-[5px]"
                    >
                        <Search className="text-gray-800 h-[20px] group-hover:scale-125 transition-transform duration-300" />
                    </button>
                </div>
                <input type="hidden" {...register("categoryID")} />
            </form>

            {/* Dropdown with CSSTransition */}
            <CSSTransition
                in={showCate}
                timeout={70}
                classNames={{
                    enter: 'opacity-0 scale-95',
                    enterActive: 'opacity-100 scale-100 transition duration-200 ease-out',
                    exit: 'opacity-100 scale-100',
                    exitActive: 'opacity-0 scale-95 transition duration-200 ease-in'
                }}
                unmountOnExit
                nodeRef={dropdownRef}
            >
                <div
                    ref={dropdownRef}
                    className="absolute top-[72%] left-0 z-20 text-[12px] bg-white p-1 text-black rounded-md max-h-[300px] overflow-y-auto shadow"
                >
                    <span
                        onClick={() => {
                            setValue("categoryID", "");
                            setSelectedCategoryName("All");
                            setShowCate(false);
                            navigate('/');
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
            </CSSTransition>
        </div>
    );
}

export default MainSearchBar;