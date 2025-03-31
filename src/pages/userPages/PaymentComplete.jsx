import { useAuth } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { renderAlert } from '../../utils/renderAlert'
import { checkOutStatus } from '../../api/user'
import useAuthStore from '../../store/UserStore'

function PaymentComplete() {
    const { getToken } = useAuth()
    const { session } = useParams()
    const userData = useAuthStore(state => state.userData)

    const checkSession = async () => {
        if (!session) return;
        try {
            const token = await getToken()
            const resCheckOutStatus = await checkOutStatus(token, session, userData.userID) //UPDATE Stutus in DB
            console.log('resCheckOutStatus', resCheckOutStatus);

        } catch (error) {
            renderAlert("Failed to verify payment", "error")
            console.error("Payment Verification Error", error);

        }
    }
    useEffect(() => {
        checkSession() //automatically
    }, [])


    return (
        <h1>Payment Complete</h1>
    )
}

export default PaymentComplete