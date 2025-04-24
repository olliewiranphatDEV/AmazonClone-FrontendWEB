import axios from "axios"
const BASE_URL = import.meta.env.VITE_API_URL

export const getMyProducts = async (token) => {
    return await axios(`${BASE_URL}/seller-center/products/all-products`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const updateProductID = async (token, productID, data) => {
    return await axios.put(`${BASE_URL}/seller-center/products/update-product/${productID}`, data, {
        headers: { Authorization: `Bearer ${token}` }
    })
}




export const deleteProductID = async (token, productID) => {
    return await axios.delete(`${BASE_URL}/seller-center/products/delete-product/${productID}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}


///// for Centric HOME :
export const getAllProductDB = async () => {
    return await axios(`${BASE_URL}/admin/management/all-products`)
}



export const searchProducts = async (categoryID, search) => {
    const params = new URLSearchParams();

    if (categoryID) params.append("categoryID", categoryID);
    if (search) params.append("search", search);

    return await axios(`${BASE_URL}/user/search-products?${params.toString()}`);
};