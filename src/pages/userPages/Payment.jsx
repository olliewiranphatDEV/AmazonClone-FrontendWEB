import useAuthStore from '../../store/UserStore';

import React, { useCallback, useState, useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { useAuth } from '@clerk/clerk-react';
import { payment } from '../../api/user';
import useCartStore from '../../store/CartStore';
import { renderAlert } from '../../utils/renderAlert';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test secret API key.
const stripePromise = loadStripe("pk_test_51QzCa7GzgqobIesy3LmpQalmx0iSnxRk0BtLGV63GxiXrToSx3wqrHMHYvGuotSruzgdIKwizRgPuTWFhcPYqcCo007gTqy6RB");

// EmbeddedCheckoutProvider: ทำหน้าที่เป็น context provider สำหรับการจัดการข้อมูลของ Stripe และการตั้งค่าต่าง ๆ ที่เกี่ยวข้องกับ EmbeddedCheckout.
// EmbeddedCheckout: ใช้สำหรับแสดงหน้าชำระเงินในแอปของคุณ โดยไม่ต้อง redirect ผู้ใช้ไปที่หน้าชำระเงินของ Stripe.


function Payment() {
    const { getToken } = useAuth()
    const userCart = useCartStore(state => state.userCart)
    console.log('userCart', userCart); //Current Cart, Ready to order

    const fetchClientSecret = useCallback(async () => {
        try {
            const token = await getToken()
            const resPayment = await payment(token, userCart) //Create Session for Checkout from Server
            console.log('resPayment', resPayment);
            return resPayment.data.clientSecret //session Checkout
        } catch (error) {
            console.log("Cannot Create SESSION Checkout, ERROR", error);
            renderAlert("Cannot Create Payment Checkout!", "error")
        }
    })

    //ฟังก์ชันนี้ถูก เรียกใช้จาก EmbeddedCheckoutProvider 
    // ในการกำหนด options ที่จะส่งต่อให้ EmbeddedCheckout
    // การดึง client secret จะเกิดขึ้นเมื่อหน้า Payment ถูกแสดงขึ้นมา 
    // (หรือเมื่อ EmbeddedCheckoutProvider ต้องการให้ client secret เพื่อเริ่มกระบวนการชำระเงิน).
    //fetchClientSecret = session.id, EmbeddedCheckout ใช้ในการดำเนินการชำระเงิน.
    // ***** เมื่อ EmbeddedCheckout ถูก render ขึ้นมา, fetchClientSecret() จะถูกเรียกโดยอัตโนมัติ. *****
    const options = { fetchClientSecret } //return = resPayment.data.clientSecret
    // ตัวแปร options ที่ส่งเข้าไปใน EmbeddedCheckoutProvider คือ fetchClientSecret 
    // ซึ่งจะช่วยให้ EmbeddedCheckout รับข้อมูลการชำระเงินจาก Stripe โดยใช้ client secret 
    // ที่ได้รับจากการสร้าง session ใน Stripe.

    // เมื่อชำระเงินสำเร็จ,return_url: `http://localhost:5173/user/payment/complete/{CHECKOUT_SESSION_ID}`, //= {CHECKOUT_SESSION_ID} : sessionID
    // Stripe จะส่ง webhook กลับมายัง Backend ของคุณเพื่อตรวจสอบและอัปเดตสถานะการจองหรือการชำระเงิน.
    return (

        <div id="checkout">
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>

                <EmbeddedCheckout />

            </EmbeddedCheckoutProvider>
        </div>
    )
}

export default Payment

//ฟังก์ชัน fetchClientSecret() และ payment() จะทำงานเมื่อผู้ใช้เข้าสู่หน้า Payment
// และ EmbeddedCheckout ต้องการข้อมูล client secret เพื่อเริ่มต้นการชำระเงินผ่าน Stripe Checkout.
// การทำงานเหล่านี้จะเกิดขึ้นเมื่อหน้า Payment ถูกแสดงขึ้นในแอปพลิเคชันของคุณ
// และ client secret จะถูกดึงจาก server โดยอัตโนมัติผ่าน API ที่คุณสร้างขึ้น.