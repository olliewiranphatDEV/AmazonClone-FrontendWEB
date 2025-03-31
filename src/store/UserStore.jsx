import { create } from "zustand";
import { createUpdateAccount, getMyAccount } from "../api/user";
import { persist } from "zustand/middleware";

const authStore = (set) => ({ //set : set role as new value == Global State
    userData: null, //useZustand to keep State ROLE to show SELLER or ADMIN ??
    myOrder: null,
    selectedPDItem: [],
    actionUserAccount: async (token, input) => { //Update Account-ROLE
        const response = await createUpdateAccount(token, input)
        console.log('UserZustand', response);
        set({ userData: response.data.results })
    },
    actionGetMyAccount: async (token) => { //Get My Account
        const response = await getMyAccount(token)
        console.log('response', response);
        set({ userData: response.data.results })
    },

})

const useAuthStore = create(persist(authStore, { name: "user" })) //persist : keep User Data got from DB on Browser LocalStorage

export default useAuthStore


