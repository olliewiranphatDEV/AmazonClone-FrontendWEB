import axios from "axios"
const BASE_URL = import.meta.env.VITE_API_URL

///// PUT Update UserData in DB (DB: No have ClerkID yet --> Create new data, if have alreadt --> Update)
export const createUpdateAccount = async (token, input) => {
    return await axios.put(`${BASE_URL}/user/update-account`, input, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}



export const getMyAccount = async (token) => {
    return await axios(`${BASE_URL}/user/my-account`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const updateImageAccount = async (token, imageUrl) => {
    return await axios.patch(`${BASE_URL}/user/update-image-account`, imageUrl, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}



export const deleteUserAccount = async (token) => {
    return await axios.delete(`${BASE_URL}/user/delete-account`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const ADDtoCart = async (token, cart) => {
    return await axios.post(`${BASE_URL}/user/add-to-cart`,
        { cart },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}

export const cartUpdateQuantity = async (token, data) => {
    return await axios.patch(`${BASE_URL}/user/cart/update-quantity`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}




export const getUserCartAPI = async (token) => {
    return await axios(`${BASE_URL}/user/cart`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteCartItemAPI = async (token) => {
    return await axios.delete(`${BASE_URL}/user/cart/delete-all-cart-items`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const payment = async (token, data) => {
    return await axios.post(`${BASE_URL}/user/payment/checkout`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}



export const checkOutStatus = async (token, session, userID) => {
    return await axios.get(`${BASE_URL}/user/payment-status/${session}/${userID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}