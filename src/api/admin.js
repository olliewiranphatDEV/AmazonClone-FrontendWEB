import axios from "axios"
const BASE_URL = import.meta.env.VITE_API_URL




export const getAllSellers = async (token) => {
    return await axios(`${BASE_URL}/admin/management/all-sellers`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

