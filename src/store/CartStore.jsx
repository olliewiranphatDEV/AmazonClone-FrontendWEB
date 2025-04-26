// 📁 store/CartStore.js
import { create } from 'zustand'
import {
    getUserCartAPI,
    deleteCartItemAPI,
    cartUpdateQuantity
} from '../api/user'

const useCartStore = create((set, get) => ({
    userCart: [],
    checkedItems: {},
    getToken: null,

    // 🛒 Load user's cart
    actionGetUserCart: async (token) => {
        try {
            const res = await getUserCartAPI(token)
            const fetchedCart = res.data.results
            console.log('fetchedCart', fetchedCart)

            const allChecked = {}
            fetchedCart.forEach(cart => {
                cart.ProductOnCart.forEach(item => {
                    allChecked[item.productID] = true
                })
            })

            set({ userCart: fetchedCart, checkedItems: allChecked })
        } catch (error) {
            console.error('❌ Failed to fetch user cart:', error)
            throw error
        }
    },

    // ✅ Toggle single item checkbox
    toggleCheckedItem: (productID) => {
        set(state => ({
            checkedItems: {
                ...state.checkedItems,
                [productID]: !state.checkedItems[productID]
            }
        }))
    },

    // ✅ Toggle all checkboxes
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

    // ❌ Delete checked items
    deleteCheckedItems: async (token) => {
        const { userCart, checkedItems } = get()
        const deletePromises = []

        userCart.forEach(cart => {
            cart.ProductOnCart.forEach(item => {
                if (checkedItems[item.productID]) {
                    deletePromises.push(
                        deleteCartItemAPI(token, cart.cartID, item.productID)
                    )
                }
            })
        })

        await Promise.all(deletePromises)
        await get().actionGetUserCart(token)
    },

    // 💰 Calculate price from only checked items
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

    // 🔁 Update quantity visually (local)
    updateQuantityLocal: (cartID, productID, newQty) => {
        const newCart = get().userCart.map(cart => {
            if (cart.cartID !== cartID) return cart
            return {
                ...cart,
                ProductOnCart: cart.ProductOnCart.map(item =>
                    item.productID === productID
                        ? { ...item, quantity: newQty }
                        : item
                )
            }
        })
        set({ userCart: newCart })
    },

    // 🔁 Update quantity in DB, and sync local
    hdlUpdateQuantity: async (cartID, productID, updatedQTY) => {
        if (updatedQTY < 1) return
        try {
            const token = await get().getToken()
            await cartUpdateQuantity(token, { cartID, productID, updatedQTY })

            // ✅ Update local state directly
            const newCart = get().userCart.map(cart => {
                if (cart.cartID !== cartID) return cart
                return {
                    ...cart,
                    ProductOnCart: cart.ProductOnCart.map(item =>
                        item.productID === productID
                            ? { ...item, quantity: updatedQTY }
                            : item
                    )
                }
            })
            set({ userCart: newCart })
        } catch (error) {
            console.error('❌ Failed to update quantity:', error)
        }
    },

    // 💰 Calculate full price regardless of checkbox
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

    // 🎟️ Set function to get auth token (from Clerk)
    setTokenFunction: (tokenFn) => set({ getToken: tokenFn }),
}))

export default useCartStore
