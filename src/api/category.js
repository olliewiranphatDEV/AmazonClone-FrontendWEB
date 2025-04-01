import axios from "axios"
const BASE_URL = import.meta.env.VITE_API_URL

export const addCategory = async (token, value) => {
    return await axios.post(`${BASE_URL}/category/add-category`, value, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const updateCategoty = async (token, categoryID, input) => {
    return await axios.patch(`${BASE_URL}/admin/management/all-categories/update-category/${categoryID}`, { input }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteCategory = async (token, categoryID) => {
    return await axios.delete(`${BASE_URL}/admin/management/all-categories/delete-category/${categoryID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getAllCategories = async () => {
    return await axios.get(`${BASE_URL}/category/all-categories`)
}

