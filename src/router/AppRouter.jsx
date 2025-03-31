import React from 'react'
import { Route, Routes } from 'react-router'
import NotFound from '../pages/pucblicPages/NotFound'
import HomePage from '../pages/pucblicPages/HomePage'
import Cart from '../pages/userPages/Cart'
import OrderHistory from '../pages/userPages/OrderHistory'
import PublicLayout from '../layout/PublicLayout'
import UserLayout from '../layout/UserLayout'
import UserAccount from '../pages/userPages/UserAccount'
import SellerLayout from '../layout/SellerLayout'
import SellerDashboard from '../pages/sellerPages/SellerDashboard'
import AdminLayout from '../layout/AdminLayout'
import Dashboard from '../pages/adminPages/Dashboard'
import AddProduct from '../pages/sellerPages/sub-products/AddProduct'
import ProtectRoutes from './ProtectRoutes'
import AllProducts from '../pages/sellerPages/AllProducts'
import UpdateProduct from '../pages/sellerPages/sub-products/UpdateProduct'
import OrdersRevenue from '../pages/sellerPages/OrdersRevenue'
import SearchRelatedProduct from '../pages/pucblicPages/SearchRelatedProduct'
import ProductDetail from '../pages/pucblicPages/ProductDetail'
import Orderpayment from '../pages/userPages/Orderpayment'
import AllCategories from '../pages/adminPages/AllCategories'
import AllSellers from '../pages/adminPages/AllSellers'
import Payment from '../pages/userPages/Payment'
import PaymentComplete from '../pages/userPages/PaymentComplete'


///// Manage router here : define each path for link to Page Components
function AppRouter() {
    return (
        <>
            <Routes>
                {/* PUBLIC */}
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='search/related-products' element={<SearchRelatedProduct />} />
                    <Route path='search/related-products/:productID' element={<ProductDetail />} />
                </Route>

                {/* USER */}
                <Route path='user' element={<UserLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='update-account' element={<UserAccount />} />
                    <Route path='order-history' element={<OrderHistory />} />
                    <Route path='order/payment' element={<Orderpayment />} />
                    <Route path='cart' element={<Cart />} />
                    {/* ORDER link to /user/payment */}

                    {/* PAYMENT */}
                    <Route path='payment' element={<Payment />} />
                    <Route path='payment/complete/:session' element={<PaymentComplete />} />
                </Route>

                {/* SELLER */}
                <Route path='seller-center' element={<ProtectRoutes el={<SellerLayout />} allows={["SELLER"]} />}>
                    <Route index element={<SellerDashboard />} />
                    <Route path='all-products' element={<AllProducts />} />
                    <Route path='all-products/add-product' element={<AddProduct />} />
                    <Route path='all-products/update-product/:productID' element={<UpdateProduct />} />
                    <Route path='orders-revenue' element={<OrdersRevenue />} />
                </Route>

                {/* ADMIN */}
                <Route path='admin' element={<ProtectRoutes el={<AdminLayout />} allows={["ADMIN"]} />}>
                    <Route index element={<Dashboard />} />
                    <Route path='management/all-categories' element={<AllCategories />} />
                    <Route path='management/all-sellers' element={<AllSellers />} />
                </Route>

                {/* Not found page */}
                <Route path='*' element={<NotFound />} />
            </Routes >
        </>
    )
}

export default AppRouter