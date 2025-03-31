import axios from "axios"
///// PUT Update UserData in DB (DB: No have ClerkID yet --> Create new data, if have alreadt --> Update)
export const createUpdateAccount = async (token, input) => {
    return await axios.put('http://localhost:8080/user/update-account', input, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}



export const getMyAccount = async (token) => {
    return await axios(`http://localhost:8080/user/my-account`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}





export const updateImageAccount = async (token, imageUrl) => {
    return await axios.patch('http://localhost:8080/user/update-image-account', imageUrl, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}



export const deleteUserAccount = async (token) => {
    return await axios.delete('http://localhost:8080/user/delete-account', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const ADDtoCart = async (token, userID, cart) => {
    return await axios.post(`http://localhost:8080/user/add-to-cart/${userID}`, { cart }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const cartUpdateQuantity = async (token, userID, data) => {
    return await axios.patch(`http://localhost:8080/user/cart/update-quantity/${userID}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}




export const GETUserCart = async (token, userID) => {
    return await axios(`http://localhost:8080/user/cart/${userID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const payment = async (token, userCart) => {
    return await axios.post(`http://localhost:8080/user/payment/checkout/`, { userCart }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const checkOutStatus = async (token, session, userID) => {
    return await axios.get(`http://localhost:8080/user/payment-status/${session}/${userID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}