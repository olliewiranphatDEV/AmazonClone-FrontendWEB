import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from '@stripe/react-stripe-js'
import { useAuth } from '@clerk/clerk-react'
import useCartStore from '../../store/CartStore'
import { payment } from '../../api/user'
import { renderAlert } from '../../utils/renderAlert'

const stripePromise = loadStripe('pk_test_51QzCa7GzgqobIesy3LmpQalmx0iSnxRk0BtLGV63GxiXrToSx3wqrHMHYvGuotSruzgdIKwizRgPuTWFhcPYqcCo007gTqy6RB')

function Payment() {
    const { getToken } = useAuth()

    const {
        userCart,
        checkedItems,
        actionGetUserCart,
        calculateTotalCheckedPrice,
        setTokenFunction
    } = useCartStore()

    const [clientSecret, setClientSecret] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCart = async () => {
            const token = await getToken()
            setTokenFunction(() => getToken)
            await actionGetUserCart(token)
        }
        fetchCart()
    }, [getToken])

    useEffect(() => {
        const runPayment = async () => {
            if (userCart.length === 0) return

            const filteredCart = userCart
                .map(cart => ({
                    ...cart,
                    ProductOnCart: cart.ProductOnCart.filter(
                        item => checkedItems[item.productID]
                    )
                }))
                .filter(cart => cart.ProductOnCart.length > 0)

            console.log('filteredCart ✅', filteredCart)

            if (filteredCart.length === 0) {
                renderAlert("No items selected for payment.", "warning")
                setLoading(false)
                return
            }

            try {
                const token = await getToken()
                const totalPriceCard = calculateTotalCheckedPrice()

                const res = await payment(token, {
                    filteredCart,
                    totalPriceCard
                })

                setClientSecret(res.data.clientSecret)
            } catch (err) {
                console.error("❌ Error creating Stripe session:", err)
                renderAlert("Failed to create payment session.", "error")
            } finally {
                setLoading(false)
            }
        }

        runPayment()
    }, [userCart, checkedItems])


    return (
        <div id="checkout" className="min-h-screen bg-gray-50 flex items-center justify-center">
            {loading ? (
                <div className="text-gray-600 text-sm">Loading your cart...</div>
            ) : clientSecret ? (
                <EmbeddedCheckoutProvider
                    stripe={stripePromise}
                    options={{ clientSecret }}
                    key={clientSecret}>
                    <EmbeddedCheckout />
                </EmbeddedCheckoutProvider>
            ) : (
                <div className="text-center bg-white p-10 rounded-lg shadow">
                    <p className="text-red-500 font-medium mb-4">⚠️ No items selected for payment.</p>
                    <button
                        onClick={() => window.location.href = '/user/cart'}
                        className="bg-yellow-400 px-6 py-2 rounded hover:bg-yellow-500 transition text-sm"
                    >
                        Go Back to Cart
                    </button>
                </div>
            )}
        </div>
    )
}

export default Payment
