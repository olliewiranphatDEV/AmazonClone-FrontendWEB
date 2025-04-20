import { LoaderCircle, Pencil } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { renderAlert } from '../../utils/renderAlert'
import { useAuth } from '@clerk/clerk-react'
import axios from 'axios'
import useAuthStore from '../../store/UserStore'

function MerchantInfo() {
    const { actionGetMyAccount, userData } = useAuthStore()
    // console.log('userData', userData);

    const { getToken } = useAuth()
    //CREATE STATE FOR EDITING THE MERCHANT NAME 
    const [editMerchantName, setEditMerchantName] = useState(false)
    const [merchantName, setMerchantName] = useState(userData.merchantName || "New Merchant ") //FOR DEFAULT VALUE INPUT
    const [loading, setLoading] = useState(false)
    const inputRef = useRef(null)

    //WHEN editMerchantName === true OPEN EDIT MODE --> autoFocus at INPUT BY useRef() + useEffect calling automatically
    useEffect(() => {
        if (editMerchantName && inputRef.current) { //true
            inputRef.current.focus() //FOCUS WHEN OPEN EDIT MODE
        }
    }, [editMerchantName]) //TELL useEffect work! WHEN editMerchantName HAS CHANGE from SAME

    const hdlClickEditMerchantName = () => {
        console.log("Pencil");
        // inputRef.current.focus()
        setEditMerchantName(!editMerchantName) //true
    }
    // console.log('editMerchantName', editMerchantName);

    const handleSave = async () => {
        setLoading(true)
        // console.log('merchantName', merchantName);
        const token = await getToken()
        try {
            const resEditMerchantName = await axios.put(
                "http://localhost:8080/seller-center/user/my-merchant-name",
                { merchantName },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            console.log('resEditMerchatName', resEditMerchantName);
            actionGetMyAccount(token)
            console.log('userData.merchantName', userData.merchantName);
            setMerchantName(merchantName) //SET NEW NAME FROM STATE

        } catch (error) {
            console.log("Cannot Edit Merchant Name", error);
            renderAlert("Cannot Edit Merchant Name", "error")
        } finally {
            setLoading(false)
            renderAlert("Change Merchant Name already!", "success")
            setEditMerchantName(false)
        }
    }
    // console.log('merchantName >>', merchantName);

    return (
        <div className='flex items-center justify-between xl:justify-end gap-10 w-full xl:w-[50%] account text-[14px] text-[#131921]'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2 justify-center'>
                    <div className='flex gap-2 relative'>
                        <span>Merchant :</span>
                        <input
                            type="text"
                            value={merchantName}
                            onChange={(e) => setMerchantName(e.target.value)} //CHANGE STATE VALUE WHRN TYPING
                            disabled={!editMerchantName}
                            ref={inputRef} //CONNECT WITH useRef TO autoFocus
                            className={`bg-transparent px-2 font-bold text-[16px] text-center ${loading ? "text-gray-500" : ""}`}
                        />
                        {
                            loading && <LoaderCircle className='absolute bottom-0 xl:top-0 left-[50%] animate-spin text-gray-500' />
                        }
                    </div>
                    <Pencil
                        onClick={hdlClickEditMerchantName} //OPEN TO EDIT MODE WHEN CLICK PENCIL
                        className='h-[18px] cursor-pointer'
                    />
                </div>
                {editMerchantName && (
                    <button
                        onClick={handleSave}
                        className='hover:font-semibold mx-auto text-[12px] px-4 py-1 rounded-sm hover:scale-110 bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'
                    >
                        Save
                    </button>
                )}
            </div>
            <div className='w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden'>
                <img src="https://i.ibb.co/LDL0Q7QB/Orange-and-Gray-Tag-Cart-Virtual-Shop-Logo.jpg" alt="merchant-logo" className='w-full h-full object-cover' />
            </div>
        </div>
    )
}

export default MerchantInfo