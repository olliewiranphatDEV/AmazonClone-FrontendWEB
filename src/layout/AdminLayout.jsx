import React from 'react'
import MainNavBar from '../components/main/MainNavBar'
import SecondNavBar from '../components/main/SecondNavBar'
import { Outlet } from 'react-router'
import Footer from '../components/main/Footer'
import AdminSideBar from '../components/admin/AdminSideBar'

function AdminLayout() {
    const [loading, setLoading] = useState()
    const [bgFocus, setBgFocus] = useState(false)
    const overlayRef = useRef(null) //useRef with CSSTransition

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [loading])



    return (
        <div className='min-h-screen flex flex-col'>

            {/* NAVBAR */}
            <div className='relative w-full z-50'>
                <MainNavBar
                    setBgFocus={setBgFocus}
                    setLoading={setLoading}
                />
            </div>
            <div className='sm:mt-[60px]'>
                <SecondNavBar />
            </div>

            <div className='flex-grow w-full relative pb-20 flex'>
                <div className='w-[200px]'>
                    <AdminSideBar />
                </div>

                <div className="flex-1">
                    <Outlet />
                </div>

                <CSSTransition
                    in={bgFocus}
                    timeout={90}
                    classNames={{
                        enter: 'opacity-0 scale-95',
                        enterActive: 'opacity-100 scale-100 transition duration-200 ease-in',
                        exit: 'opacity-100 scale-100',
                        exitActive: 'opacity-0 scale-95 transition duration-200 ease-in'
                    }}
                    unmountOnExit
                    nodeRef={overlayRef}
                >
                    <div
                        ref={overlayRef}
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
                {
                    loading && (<div style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(206, 206, 206, 0.6)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                        alignItems: "center",
                        paddingTop: "10%",
                        position: "absolute",
                        top: "0",
                        zIndex: 30
                    }}>
                        <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-150'></div>
                        <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-200'></div>
                        <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-300'></div>
                        <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-500'></div>
                        <div className='w-[50%] h-[25px] bg-gray-400 animate-pulse scale-110 duration-500'></div>
                    </div>)
                }
            </div>

            <Footer />
        </div>
    )
}

export default AdminLayout