import { ChevronDown, Search } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import useCategoryStore from '../../../store/CategoryStore';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import useProductStore from '../../../store/ProductStore';
import { useAuth } from '@clerk/clerk-react';
import { CSSTransition } from 'react-transition-group';
import CategoriesPopup from './CategoriesPopup';

function MainSearchBar({ setBgFocus }) {
    const actionsearchProductsDB = useProductStore(state => state.actionsearchProductsDB);
    const navigate = useNavigate();

    const [showCate, setShowCate] = useState(false);
    const [selectedCategoryName, setSelectedCategoryName] = useState("All");
    const wrapperRef = useRef(null);
    const dropdownRef = useRef(null);
    const { register, handleSubmit, setValue } = useForm(); //react-hook-form to submit
    const inputSearchRef = useRef(null)

    useEffect(() => {
        if (selectedCategoryName && selectedCategoryName !== "All" && inputSearchRef.current) {
            setBgFocus(true)
            inputSearchRef.current.focus()
        }
    }, [selectedCategoryName])




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


    //SUBMIT TO SEARCH!
    const hdlSubFormSearch = async (value) => {
        setShowCate(false)
        setBgFocus(false)
        console.log('value', value);

        const { categoryID, search } = value;


        if (!categoryID && !search) {
            navigate('/'); // GO HOME
            return;
        }

        //EITHER FILL TEXT INPUT OR JUST SELECT CATEGOTY --> SEARCH IN DB + NAVIGATE('/search/related-products')
        await actionsearchProductsDB(categoryID, search); //KEEP DATA IN GLOBAL STATE
        setValue("search", ""); // CLEAR VALUE OF SEARCH WORD INPUT

        const query = new URLSearchParams()
        //IF HAVE CATEGORYID
        if (categoryID) {
            query.set("categoryID", categoryID)
        }
        //IF HAVE SEARCH WORD
        if (search) {
            query.set("search", value.search)
        }
        navigate(`/search/related-products?${query.toString()}`); //NAV TO SEARCH-RELATED-PRODUCTS

    };



    return (
        <div ref={wrapperRef} className="relative min-w-[50%] flex flex-col h-full">
            {/* Search Form */}
            <form
                onSubmit={handleSubmit(hdlSubFormSearch)}
                className="relative w-full h-[40px] flex items-center mt-2 bg-pink-400 rounded-[5px]"
            >
                {/* CATEGORIES "ALL" */}
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setShowCate(!showCate)}
                        className="h-[40px] bg-[#e3e6e6] text-[11px] flex items-center justify-center rounded-l-[5px] pl-2 text-gray-600 hover:text-black hover:duration-300 hover:bg-gray-300"
                    >
                        {/* DEFAULT "ALL" */}
                        <span className="truncate text-left account">{selectedCategoryName}</span>
                        <ChevronDown className={`h-[12px] duration-300 ${showCate ? "rotate-180" : ""}`} />
                    </button>
                </div>

                {/* SEARCH TEXT INPUT */}
                <input
                    {...register("search", { required: false })}
                    type="text"
                    placeholder="Search Centric"
                    className="w-full h-full text-[12px] text-black pl-2 pr-10 rounded-r-[5px]"
                    ref={(e) => {
                        register("search").ref(e); // ✅ ผูกกับ RHF
                        inputSearchRef.current = e; // ✅ เอาไว้สำหรับ focus
                    }}
                />


                {/* GLASSES SUBMIT SEARCH */}
                <button
                    type="submit"
                    className="group w-[40px] h-full absolute top-0 right-0 bg-[#FEBD69] hover:bg-[#f3a238] transition duration-300 flex items-center justify-center rounded-r-[5px]"
                >
                    <Search className="text-gray-800 h-[20px] group-hover:scale-125 transition-transform duration-300" />
                </button>

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
                <CategoriesPopup
                    setValue={setValue}
                    setSelectedCategoryName={setSelectedCategoryName}
                    showCate={showCate}
                    setShowCate={setShowCate}
                    dropdownRef={dropdownRef}
                />
            </CSSTransition>

        </div>
    );
}

export default MainSearchBar;