import axios from "axios"
const BASE_URL = import.meta.env.VITE_API_URL

export const getDashboard = async (token, userID) => {
    return await axios(`${BASE_URL}/seller-center/dashboard/${userID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getMyProducts = async (token, userID) => {
    return await axios(`${BASE_URL}/seller-center/products/all-products/${userID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}