import axios from "axios";

export const addPDImgsCloud = async (token, resizedImage) => {
    return await axios.post('http://localhost:8080/seller-center/products/add-images-cloud', { images: resizedImage }, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const addUserImgsCloud = async (token, resizedImage) => {
    return await axios.post('http://localhost:8080/user/add-images-cloud', { images: resizedImage }, {
        headers: { Authorization: `Bearer ${token}` }
    })
}


