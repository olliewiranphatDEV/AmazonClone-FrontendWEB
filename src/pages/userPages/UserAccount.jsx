
import { useAuth, useUser } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react'
import { deleteUserAccount } from '../../api/user';
import useAuthStore from '../../store/UserStore';
import { renderAlert } from '../../utils/renderAlert';
import Swal from 'sweetalert2';



///// userdata, token are at Clerk!! now

function UserAccount({ checkRole }) {
    const { getToken } = useAuth()
    ///// Zustand : 
    const actionGetMyAccount = useAuthStore(state => state.actionGetMyAccount)
    useEffect(() => {
        const fetchData = async () => {
            const token = await getToken()
            actionGetMyAccount(token)
        }
        fetchData()
    }, [])
    const actionUserAccount = useAuthStore((state) => state.actionUserAccount) //Keep ROLE in Zustand to show State ROLE at UserSideBar
    const userData = useAuthStore(state => state.userData)
    console.log('userData', userData);
    const dateBirtday = new Date(userData?.birthday).toLocaleDateString('en-CA')
    ///// CLERK :
    const { user } = useUser()
    console.log('user', user);
    // console.log('user.firstName', user.firstName);
    console.log('ROLE', user?.publicMetadata.role);


    const [input, setInput] = useState({
        firstName: user?.firstName || userData?.firstName,  // use User data from Clerk : initial value
        lastName: user?.lastName || userData?.lastName,
        email: user?.emailAddresses[0].emailAddress || userData?.email,
        phoneNumber: user?.phoneNumbers[0].phoneNumber || userData?.phoneNumber,
        address: userData?.address || userData?.address,
        birthDay: dateBirtday,
        gender: userData?.gender,
        role: user?.publicMetadata.role || userData?.role,
        imageUrl: user?.imageUrl || userData?.imageUrl,
    })
    // console.log('input', input);

    const hdlOnChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const hdlDELETEUser = async () => {
        const { isConfirmed } = await Swal.fire({
            text: "Are you sure to delete?",
            showCancelButton: true
        })
        console.log('isConfirmed', isConfirmed);
        if (isConfirmed === true) {
            const token = await getToken()
            const resDELETE = await deleteUserAccount(token)
            console.log('resDELETE', resDELETE);
        }



    }


    // Submit Form : Fill all input already:
    const hdlSubmitForm = async (event) => {
        event.preventDefault()
        ///// Check fill All?? :
        for (const key in input) {
            // console.log('value', input[key]);
            if (!input[key]) {
                return renderAlert(`Please fill ${key[0].toUpperCase() + key.slice(1)}`, "error")
            }
        }
        //// send new user data into Server for setup in database
        const token = await getToken()
        // console.log('token', token);
        // console.log('input', input);
        try {               ///// Work when Submit Form
            const response = await actionUserAccount(token, input) //at UserStore: function Update/Create New User in DB
            // console.log('response', response);
            renderAlert("Update Seccuss", "success")
        } catch (error) {
            console.log(error);

        }

    }


    return (
        <div className='w-full p-4 flex-wrap flex flex-col'>
            <span className='account font-bold text-[18px] pl-4'>Your Account</span>
            {/* Detail */}
            <div className='flex mt-7 mb-4 mx-auto w-[75%]'>
                <form className='flex-1 flex flex-col gap-4' onSubmit={hdlSubmitForm}>
                    <span className='account text-2xl font-bold'>My Profile</span>
                    <span className='account text-sm text-gray-500'>Manage and protect your account</span>
                    <div className='flex items-center justify-between gap-4 my-2'>
                        <div className='flex-1'>
                            <label className='account text-xs flex flex-col gap-2'>
                                <span>Firstname</span>
                                <input type="text" placeholder='Enter new firstname' className='border border-gray-300 bg-[#e6e6e6] h-8 w-[90%] px-2 rounded-md' name="firstName" value={input.firstName} onChange={hdlOnChange} />
                            </label>
                        </div>
                        <div className='flex-1'>
                            <label className='account text-xs flex flex-col gap-2'>
                                <span>Lastname</span>
                                <input type="text" placeholder='Enter new lastname' className='border border-gray-300 bg-[#e6e6e6] h-8 w-full px-2 rounded-md' name="lastName" value={input.lastName} onChange={hdlOnChange} />
                            </label>
                        </div>
                    </div>
                    <div className='my-2'>
                        <label className='account text-xs flex flex-col gap-2'>
                            <span>Address</span>
                            <input type="text" placeholder='Enter your address' className='border border-gray-300 bg-[#e6e6e6] h-8 w-full px-2 rounded-md' name="address" value={input.address} onChange={hdlOnChange} />
                        </label>
                    </div>
                    <div className='my-2'>
                        <label className='account text-xs flex flex-col gap-2'>
                            <span>Email</span>
                            <input type="email" placeholder='Enter your email' className='border border-gray-300 bg-[#e6e6e6] h-8 w-full px-2 rounded-md' name="email" value={input.email} onChange={hdlOnChange} />
                        </label>
                    </div>
                    <div className='flex items-center justify-between gap-4 my-2'>
                        <div className='flex-1'>
                            <label className='account text-xs flex flex-col gap-2'>
                                <span>Phone number</span>
                                <input type="text" placeholder='Enter your phone number' className='border border-gray-300 bg-[#e6e6e6] h-8 w-[90%] px-2 rounded-md' name="phoneNumber" value={input.phoneNumber} onChange={hdlOnChange} />
                            </label>
                        </div>
                        <div className='flex-1'>
                            <label className='account text-xs flex flex-col gap-1'>
                                <span>Birthday</span>
                                <input type="date" placeholder='Enter your birthday' className='border border-gray-300 bg-[#e6e6e6] h-8 w-[40%] px-2 rounded-md' name="birthDay" value={input.birthDay} onChange={hdlOnChange} />
                            </label>
                        </div>
                    </div>

                    <div className='my-3'>
                        <label className='account text-xs flex flex-col gap-2'>
                            <span>Gender</span>
                            <div className='flex w-full justify-start pl-16 gap-16 text-gray-700 mt-2'>
                                <label className='flex gap-1 items-center '>
                                    <input type="radio" name="gender" value="male" onChange={hdlOnChange} />
                                    <span>Male</span>
                                </label>
                                <label className='flex gap-1 items-center '>
                                    <input type="radio" name="gender" value="female" onChange={hdlOnChange} />
                                    <span>Female</span>
                                </label>
                                <label className='flex gap-1 items-center '>
                                    <input type="radio" name="gender" value="other" onChange={hdlOnChange} />
                                    <span>Other</span>
                                </label>
                            </div>
                        </label>
                    </div>
                    {/* {
                        userData?.role !== "ADMIN" && (<select onChange={hdlOnChange} name="role" value={input.role} className='px-2 py-1 rounded-md'>
                            <option>CUSTOMER</option>
                            <option>SELLER</option>
                        </select>)
                    } */}
                    <select onChange={hdlOnChange} name="role" value={input.role} className='px-2 py-1 rounded-md'>
                        <option>CUSTOMER</option>
                        <option>SELLER</option>
                        <option>ADMIN</option>
                    </select>

                    <button className='mx-auto mt-8 px-4 py-2 my-3 rounded-sm transform transition hover:scale-125 bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'>Save</button>
                </form>
            </div>
            <div className='flex items-center justify-end pr-28 mb-8 mt-[-25px]'>
                <button onClick={hdlDELETEUser} className='text-sm bg-[#949494] p-2 px-3 hover:bg-[#bbbcbc] hover:duration-300 hover:text-red-600 hover:font-bold rounded-sm'>Delete Account</button>
            </div>
        </div>

    )
}

export default UserAccount