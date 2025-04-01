import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL

export const addPDImgsCloud = async (token, resizedImage) => {
    return await axios.post(`${BASE_URL}/seller-center/products/add-images-cloud`, { images: resizedImage }, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const addUserImgsCloud = async (token, resizedImage) => {
    return await axios.post(`${BASE_URL}/user/add-images-cloud`, { images: resizedImage }, {
        headers: { Authorization: `Bearer ${token}` }
    })
}


