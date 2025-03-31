import { create } from "zustand";
import { GETUserCart } from "../api/user";
import { persist } from "zustand/middleware";

const CartStore = (set) => ({ //set : set role as new value == Global State
    userCart: null, //useZustand to keep State ROLE to show SELLER or ADMIN ??
    actionGetUserCart: async (token, userID) => {
        const response = await GETUserCart(token, userID)
        console.log('HELLO', response);
        set({ userCart: response.data.results })
    },

})

const useCartStore = create(persist(CartStore, { name: "CartStore" })) //persist : keep User Data got from DB on Browser LocalStorage

export default useCartStore