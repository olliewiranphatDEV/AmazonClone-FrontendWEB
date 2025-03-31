import { create } from "zustand";
import { getMyProducts } from "../api/product"
import { persist } from "zustand/middleware";
import { accordionActionsClasses } from "@mui/material";
import { getDashboard } from "../api/seller";

const SellerStore = (set) => ({
    sellerDashboard: null,
    myProducts: null,
    actionGetMyProducts: async (token, userID) => {
        const myProducts = await getMyProducts(token, userID)
        // console.log('myProducts', myProducts);
        set({ myProducts: myProducts.data.results })
    },
    actionGetSellerDashboard: async (token, userID) => {
        const sellerDashboard = await getDashboard(token, userID)
        console.log('sellerDashboard', sellerDashboard);

    }
})

const useSellerStore = create(persist(SellerStore, { name: "SellerStore" }))
export default useSellerStore

///// เขียนย่อ :
// const useSellerStore = create(persist((set)=>{
//     myProducts:,
//     actionGetMyProducts: async (token, userID) => {
//         const myProducts = await getMyProducts(token, userID)
//         console.log('myProducts', myProducts);
//     }
// }, {name: "SellerProducts"}))
// export default useSellerStore