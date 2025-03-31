import axios from "axios"

export const getAllSellers = async (token) => {
    return await axios('http://localhost:8080/admin/management/all-sellers', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

