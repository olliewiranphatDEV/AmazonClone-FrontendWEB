import axios from "axios"

export const addCategory = async (token, value) => {
    return await axios.post('http://localhost:8080/category/add-category', value, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const updateCategoty = async (token, categoryID, input) => {
    return await axios.patch(`http://localhost:8080/admin/management/all-categories/update-category/${categoryID}`, { input }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteCategory = async (token, categoryID) => {
    return await axios.delete(`http://localhost:8080/admin/management/all-categories/delete-category/${categoryID}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getAllCategories = async () => {
    return await axios.get('http://localhost:8080/category/all-categories')
}

