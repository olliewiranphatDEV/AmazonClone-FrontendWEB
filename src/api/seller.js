import axios from "axios"

export const getDashboard = async (token, userID) => {
    return await axios(`http://localhost:8080/seller-center/dashboard/${userID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getMyProducts = async (token, userID) => {
    return await axios(`http://localhost:8080/seller-center/products/all-products/${userID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}