import axios from "axios"
const BASE_URL = import.meta.env.VITE_API_URL

export const changeToSeller = async (token) => {
    // console.log('token', token);

    return await axios.put(`${BASE_URL}/seller-center/switch-to-seller`,
        { role: "SELLER" },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}

export const getDashboard = async (token, userID) => {
    return await axios(`${BASE_URL}/seller-center/dashboard/${userID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getMyProducts = async (token, userID) => {
    return await axios(`${BASE_URL}/seller-center/products/all-products/${userID}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}

export const addProductImagesCloud = async (token, formData) => {
    return await axios.post(`${BASE_URL}/seller-center/products/add-images-cloud`,
        formData,
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": 'multipart/form-data'
            }
        }
    )
}


export const deleteProductImageCloud = async (token, id) => {
    return await axios.delete(`${BASE_URL}/seller-center/products/delete-image-cloud?public_id=${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}


export const addNewProduct = async (token, value, imageData) => {
    return await axios.post(`${BASE_URL}/seller-center/products/add-product`,
        { value, imageData },
        {
            headers: { Authorization: `Bearer ${token}` }
        }
    )
}


export const updateProductByID = async (token, value, imageData, productID) => {
    return await axios.put(`${BASE_URL}/seller-center/products/update-product/${productID}`,
        { value, imageData },
        {
            headers: { Authorization: `Bearer ${token}` }
        }
    )
}