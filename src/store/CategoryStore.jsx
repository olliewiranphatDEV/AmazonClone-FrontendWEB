import { create } from "zustand"
import { persist } from "zustand/middleware"
import { getAllCategories } from "../api/category"


const CategoryStore = (set) => ({
    allCategories: null,
    actionGetAllCate: async () => {
        const allcates = await getAllCategories()
        // console.log('allcates', allcates);
        set({ allCategories: allcates.data.results })
    }
})

const useCategoryStore = create(persist(CategoryStore, { name: "allCategories" }))
export default useCategoryStore