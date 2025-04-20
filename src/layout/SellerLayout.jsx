import React, { useRef, useState } from 'react'
import MainNavBar from '../components/main/MainNavBar'
import { Outlet } from 'react-router'
import Footer from '../components/main/Footer'
import SellerSideBar from '../components/seller/SellerSideBar'
import { CSSTransition } from 'react-transition-group';

function SellerLayout() {
    const [bgFocus, setBgFocus] = useState(false)
    const overlayRef = useRef(null) //useRef with CSSTransition

    return (
        <>
            <div className='relative w-full z-50'>
                <MainNavBar setBgFocus={setBgFocus} />
            </div>

            <div className='sm:mt-[60px] w-full flex relative'>
                <SellerSideBar />
                <div className='flex-1'>
                    <Outlet />
                </div>

                <CSSTransition
                    in={bgFocus}
                    timeout={90}
                    classNames={{
                        enter: 'opacity-0 scale-95',
                        enterActive: 'opacity-100 scale-100 transition duration-200 ease-out',
                        exit: 'opacity-100 scale-100',
                        exitActive: 'opacity-0 scale-95 transition duration-200 ease-in'
                    }}
                    unmountOnExit
                    nodeRef={overlayRef} // ✅ เพิ่มตรงนี้
                >
                    <div
                        ref={overlayRef} // ✅ ใส่ ref ให้กับ DOM ที่ transition
                        onClick={() => setBgFocus(false)}
                        style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0, 0, 0.5)",
                            position: "absolute",
                            top: "0",
                            zIndex: "10"
                        }}
                    />
                </CSSTransition>
            </div>

            <Footer />
        </>
    );
}


export default SellerLayout