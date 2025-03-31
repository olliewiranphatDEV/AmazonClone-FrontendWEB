import { create } from "zustand";
import { getAllProductDB, searchProducts } from "../api/product"
import { persist } from "zustand/middleware";
import _ from "lodash"
import axios from "axios";
import { ADDtoCart } from "../api/user";

const ProductStore = (set, get) => ({
    carts: [],
    allProductsDB: null,
    searchProductsDB: null,
    categoryID: null,
    search: null,
    actionGetAllProductsDB: async () => {
        const allproducts = await getAllProductDB()
        // console.log('allproducts', allproducts);
        set({ allProductsDB: allproducts.data.results })
    },
    actionsearchProductsDB: async (categoryID, search) => {
        const resSearchPD = await searchProducts(categoryID, search)
        // console.log('resSearchPD', resSearchPD);
        set({ searchProductsDB: resSearchPD.data.results, categoryID, search })
    },
    actionADDtoCarts: async (token, userID, product, pickQuantity) => {
        // console.log(token);
        // console.log('userID', userID);
        console.log(product);
        console.log(pickQuantity);
        ///1st
        const cart = get().carts
        ///2nd 
        const exisSettingPD = cart.find(el => el.productID == product.productID)
        // console.log('exisSettingPD', exisSettingPD);
        if (exisSettingPD) {
            const updatedCart = cart.map(el => el.productID === product.productID ? { ...el, quantity: el.quantity + pickQuantity, checked: false } : el)
            set({ carts: updatedCart })
        } else {
            set({ carts: [...cart, { ...product, quantity: pickQuantity, checked: false }] })
        }
        // console.log('cart', cart);//[]
        const response = await ADDtoCart(token, userID, cart)
        console.log('response', response);


    },
    actionSelectedPD: (productID) => {
        const cart = get().carts
        // console.log('productID', productID);
        const updatedCart = cart.map(el =>
            el.productID === productID ? { ...el, checked: !el.checked } : el)
        set({ carts: updatedCart })
    }
})
const useProductStore = create(persist(ProductStore, { name: "ProductStore" }))
export default useProductStore