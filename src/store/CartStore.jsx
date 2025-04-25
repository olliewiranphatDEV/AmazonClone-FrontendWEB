// 📁 store/CartStore.js
import { create } from 'zustand'
import { getUserCartAPI, deleteCartItemAPI, cartUpdateQuantity } from '../api/user'

const useCartStore = create((set, get) => ({
    userCart: [],
    checkedItems: {},

    actionGetUserCart: async (token) => {
        const res = await getUserCartAPI(token)
        const fetchedCart = res.data.results

        const allChecked = {}
        fetchedCart.forEach(cart => {
            cart.ProductOnCart.forEach(item => {
                allChecked[item.productID] = true
            })
        })

        set({ userCart: fetchedCart, checkedItems: allChecked })
    },

    toggleCheckedItem: (productID) => {
        set(state => ({
            checkedItems: {
                ...state.checkedItems,
                [productID]: !state.checkedItems[productID]
            }
        }))
    },

    toggleCheckAll: (checked) => {
        const all = {}
        const userCart = get().userCart
        userCart.forEach(cart => {
            cart.ProductOnCart.forEach(item => {
                all[item.productID] = checked
            })
        })
        set({ checkedItems: all })
    },

    deleteCheckedItems: async (token) => {
        const checkedItems = get().checkedItems
        const userCart = get().userCart
        const deletePromises = []

        userCart.forEach(cart => {
            cart.ProductOnCart.forEach(item => {
                if (checkedItems[item.productID]) {
                    deletePromises.push(deleteCartItemAPI(token, cart.cartID, item.productID))
                }
            })
        })

        await Promise.all(deletePromises)
        await get().actionGetUserCart(token)
    },

    calculateTotalCheckedPrice: () => {
        const { userCart, checkedItems } = get()
        let total = 0
        userCart.forEach(cart => {
            cart.ProductOnCart.forEach(item => {
                if (checkedItems[item.productID]) {
                    total += parseFloat(item.product.price) * item.quantity
                }
            })
        })
        return total.toFixed(2)
    },
    updateQuantityLocal: (cartID, productID, newQty) => {
        const newCart = get().userCart.map(cart => {
            if (cart.cartID !== cartID) return cart
            return {
                ...cart,
                ProductOnCart: cart.ProductOnCart.map(item =>
                    item.productID === productID ?
                        { ...item, quantity: newQty }
                        : item
                )
            }
        })
        set({ userCart: newCart })
    },
    hdlUpdateQuantity: async (cartID, productID, updatedQTY) => {
        if (updatedQTY < 1) return
        try {
            const token = await get().getToken()
            await cartUpdateQuantity(token, { cartID, productID, updatedQTY })

            // ✅ Update state without refetch
            const newCart = get().userCart.map(cart => {
                if (cart.cartID !== cartID) return cart
                return {
                    ...cart,
                    ProductOnCart: cart.ProductOnCart.map(item =>
                        item.productID === productID ? { ...item, quantity: updatedQTY } : item
                    )
                }
            })
            set({ userCart: newCart })
        } catch (error) {
            console.log(error)
        }
    },

    calculateTotalPriceRegardless: () => {
        const { userCart } = get()
        let total = 0
        userCart.forEach(cart => {
            cart.ProductOnCart.forEach(item => {
                total += parseFloat(item.product.price) * item.quantity
            })
        })
        return total.toFixed(2)
    },

    getToken: null,
    setTokenFunction: (tokenFn) => set({ getToken: tokenFn }),
}))

export default useCartStore
