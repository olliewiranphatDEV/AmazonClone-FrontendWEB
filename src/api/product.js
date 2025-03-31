import axios from "axios"

export const getMyProducts = async (token, userID) => {
    return await axios(`http://localhost:8080/seller-center/products/all-products/${userID}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const updateProductID = async (token, productID, data) => {
    return await axios.put(`http://localhost:8080/seller-center/products/update-product/${productID}`, data, {
        headers: { Authorization: `Bearer ${token}` }
    })
}




export const deleteProductID = async (token, productID) => {
    return await axios.delete(`http://localhost:8080/seller-center/products/delete-product/${productID}`, {
        headers: { Authorization: `Bearer ${token}` }
    })
}


///// for Centric HOME :
export const getAllProductDB = async () => {
    return await axios('http://localhost:8080/admin/management/all-products')
}


///// Find Products by categoryID : 
// export const PDCategoryID = async (categoryID) => {
//     return await axios(`http://localhost:8080/products/${categoryID}`)
// } 

// export const searchProducts = async (categoryID, search) => {
//     return await axios(`http://localhost:8080/user/search-products?categoryID=${categoryID}&search=${search}`)
// } 

export const searchProducts = async (categoryID, search) => {
    const params = new URLSearchParams();

    if (categoryID) params.append("categoryID", categoryID);
    if (search) params.append("search", search);

    return await axios(`http://localhost:8080/user/search-products?${params.toString()}`);
};