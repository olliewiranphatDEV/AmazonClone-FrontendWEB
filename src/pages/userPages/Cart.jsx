import React, { useEffect, useRef, useState } from 'react'
import useCartStore from '../../store/CartStore'
import useAuthStore from '../../store/UserStore'
import { useAuth, useUser } from '@clerk/clerk-react'
import { cartUpdateQuantity } from '../../api/user'
import ReloadingLink from '../../components/ReloadingLink'
import { useNavigate } from 'react-router'
import { renderAlert } from '../../utils/renderAlert'
import { CSSTransition } from 'react-transition-group';

function Cart() {
    const navigate = useNavigate()
    const { getToken } = useAuth()


    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)


    const [bgFocus, setBgFocus] = useState(false)
    const overlayRef = useRef(null) //useRef with CSSTransition

    const {
        userCart,
        checkedItems,
        actionGetUserCart,
        toggleCheckedItem,
        toggleCheckAll,
        deleteCheckedItems,
        calculateTotalCheckedPrice,
        calculateTotalPriceRegardless,
        updateQuantityLocal,
        setTokenFunction
    } = useCartStore()

    useEffect(() => {
        const fetch = async () => {
            try {
                const token = await getToken()
                // console.log('token', token);

                setTokenFunction(() => getToken)
                await actionGetUserCart(token)
                setIsError(false)
            } catch (err) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }
        fetch()
    }, [])

    const hdlUpdateQuantity = async (cartID, productID, newQty) => {
        if (newQty < 1) return
        updateQuantityLocal(cartID, productID, newQty)
        try {
            const token = await getToken()
            await cartUpdateQuantity(token, {
                cartID,
                productID,
                updatedQTY: newQty
            })
        } catch (err) {
            console.error("Error updating quantity", err)
        }
    }

    const hdlDeleteChecked = async () => {
        console.log('checkedItems', checkedItems);
        setBgFocus(true)
        try {
            const token = await getToken()
            await deleteCheckedItems(token);
        } catch (error) {
            console.log("Cannot Delete CheckedItems, ERROR", error);
            renderAlert("Cannot Delete CheckedItems", error)
        } finally {
            setBgFocus(false)
        }
    }

    const isAllChecked = () => {
        const allItems = []
        userCart.forEach(cart => {
            cart.ProductOnCart.forEach(item => allItems.push(item.productID))
        })
        return allItems.every(id => checkedItems[id])
    }

    const SkeletonItem = () => (
        <div className='bg-white p-6 shadow-md rounded-md mb-6 animate-pulse'>
            <div className='flex gap-4'>
                <div className='bg-gray-300 h-24 w-24 rounded-sm'></div>
                <div className='flex-1 space-y-3'>
                    <div className='bg-gray-300 h-4 w-3/4 rounded'></div>
                    <div className='bg-gray-300 h-4 w-1/3 rounded'></div>
                    <div className='bg-gray-300 h-6 w-1/2 rounded mt-4'></div>
                </div>
            </div>
        </div>
    )





    return (
        <div className='min-h-screen bg-gray-100 px-4 sm:px-20 pt-10 pb-20'>
            <h2 className='text-lg sm:text-xl font-bold mb-6 text-center sm:text-left'>Your Shopping Cart</h2>

            {isLoading ? (
                <>
                    <SkeletonItem />
                    <SkeletonItem />
                </>
            ) : isError ? (
                <div className='text-center text-red-600'>
                    <p>Something went wrong while loading your cart.</p>
                    <button
                        onClick={() => {
                            setIsLoading(true)
                            setIsError(false)
                            actionGetUserCart().finally(() => setIsLoading(false))
                        }}
                        className='mt-4 px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500 transition'
                    >
                        Retry
                    </button>
                </div>
            ) : userCart?.length > 0 ? (
                <>
                    <div className='flex justify-between items-center mb-4'>
                        <label className='flex items-center gap-2 text-sm'>
                            <input
                                type='checkbox'
                                checked={isAllChecked()}
                                onChange={(e) => toggleCheckAll(e.target.checked)}
                            />
                            Select All
                        </label>
                        <button
                            onClick={hdlDeleteChecked}
                            className='text-red-500 text-sm underline hover:text-red-700'
                        >
                            Delete Selected
                        </button>
                    </div>

                    {userCart.map(cart => (
                        <div key={cart.cartID} className='space-y-4'>
                            {cart.ProductOnCart.map(item => {
                                const { productID, quantity, product } = item
                                const { productName, price, ProductImage } = product || {}
                                const isChecked = checkedItems[productID]

                                return (
                                    <div
                                        key={productID}
                                        className='bg-white p-4 sm:p-6 flex flex-col sm:flex-row gap-4 shadow-md rounded-md mb-6'
                                    >
                                        <input
                                            type='checkbox'
                                            className='self-center sm:self-start mt-1'
                                            checked={isChecked}
                                            onChange={() => toggleCheckedItem(productID)}
                                        />
                                        <img
                                            src={ProductImage?.[0]?.secure_url}
                                            alt={productName}
                                            className='w-full sm:w-24 h-full object-cover rounded-sm mx-auto sm:mx-0'
                                        />
                                        <div className='flex-1 flex flex-col justify-between text-center sm:text-left'>
                                            <div>
                                                <h3 className='text-sm font-semibold'>{productName}</h3>
                                                <p className='text-red-500 text-sm'><sup>$</sup>{price}</p>
                                            </div>
                                            <div className='flex justify-center sm:justify-start items-center gap-2 mt-2'>
                                                <span className='text-xs'>Qty:</span>
                                                <div className='flex items-center gap-1'>
                                                    <button
                                                        className='bg-gray-300 px-2 rounded hover:bg-gray-400'
                                                        onClick={() => hdlUpdateQuantity(cart.cartID, productID, quantity - 1)}
                                                    >-</button>
                                                    <span className='px-3'>{quantity}</span>
                                                    <button
                                                        className='bg-gray-300 px-2 rounded hover:bg-gray-400'
                                                        onClick={() => hdlUpdateQuantity(cart.cartID, productID, quantity + 1)}
                                                    >+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center sm:items-end justify-between'>
                                            <span className='text-xs text-gray-500'>Total:</span>
                                            <span className='text-sm font-semibold'>
                                                ${(parseFloat(price) * quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    ))}

                    <div className='flex flex-col sm:flex-row justify-between mt-8 px-2 sm:px-0'>
                        <div className='text-sm flex flex-col gap-2'>
                            <span className='font-bold'>Total (checked only): <span className='font-semibold text-red-600'>${calculateTotalCheckedPrice()}</span></span>
                            <span className='text-gray-600 font-semibold'>Total (all items): <span className='font-semibold'>${calculateTotalPriceRegardless()}</span></span>
                        </div>
                        <ReloadingLink
                            to='/user/payment'
                            className='mx-auto lg:mx-0 mt-10 sm:mt-0 px-6 py-2 bg-[#febd69] text-black rounded-md hover:bg-yellow-400 transition'
                        >
                            Proceed to Checkout
                        </ReloadingLink>
                    </div>
                </>
            ) : (
                <p className='text-gray-600 text-center'>Your cart is empty.</p>
            )}
            <CSSTransition
                in={bgFocus}
                timeout={90}
                classNames={{
                    enter: 'opacity-0 scale-95',
                    enterActive: 'opacity-100 scale-100 transition duration-200 ease-in',
                    exit: 'opacity-100 scale-100',
                    exitActive: 'opacity-0 scale-95 transition duration-200 ease-in'
                }}
                unmountOnExit
                nodeRef={overlayRef}
            >
                <div
                    ref={overlayRef}
                    onClick={() => setBgFocus(false)}
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0, 0, 0.5)",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        zIndex: "10",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <svg
                        className='w-[10%] absolute top-[7%] animate-spin'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#c2c2c2"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <path d="M21 12a9 9 0 11-6.219-8.56"></path> </g>
                    </svg>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Cart
