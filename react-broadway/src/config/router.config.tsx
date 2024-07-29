import { BrowserRouter, Routes,Route, Outlet } from "react-router-dom"
import LandingPage from "../pages/landing/landing.page"
import { RegisterPage,LoginPage,UserActivate } from "../pages/auth/auth_pages.page"

import { CategoryDetail } from "../pages/category/category-detail.page"
import { ErrorPage } from "../pages/error/error.page"
import AuthContext from "../context/auth.context"
import { useEffect, useState } from "react"
import authServiceInstance from "../pages/auth/auth.service"
import { CheckPermission } from "./rbac.config"
import { UserRoles } from "./constants"
import { AdminDashboardLayout, CustomerDashboardLayout, HomePageLayout, SellerDashboardLayout } from "../pages/layout"
import { AdminDashboard, CustomerDashboard, SellerDashboard } from "../pages/dashboard"

const RouterConfig = () => {
    const [loggedInUser, setLoggedInUser] = useState(null)

    // function to retrive loggedin user through token
    const getLoggedInUser = async () => {
        try {
           const response:any = await  authServiceInstance.getRequest('/auth/me',{auth:true});
              console.log(response)
              setLoggedInUser(response?.result)
        } catch (error) {
            console.log(error)
            
        }
    }


    useEffect(() => {
        // get logged in user
        getLoggedInUser();
    }, [])
    return (
        <>
        <AuthContext.Provider value={loggedInUser}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePageLayout/>}>
            <Route index element = {<LandingPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/categories" element={<div>category</div>}/>
            <Route path="/category/:slug" element={<CategoryDetail/>}/>
            </Route>
            
            {/* Admin dashboard routes */}
            <Route path="/admin"  element={<CheckPermission allowedBy={UserRoles.ADMIN }><AdminDashboardLayout/></CheckPermission>}>
            <Route index element= {<AdminDashboard/>}/>
            </Route>


            {/* seller dashboard routes */}
            <Route path="/seller"  element={<><SellerDashboardLayout/> <Outlet/></>}>
            <Route index element= {<><SellerDashboard/></>}/>
            </Route>

              {/* seller dashboard routes */}
              <Route path="/customer"  element={<><CustomerDashboardLayout/><Outlet/></>}>
            <Route index element= {<><CustomerDashboard/></>}/>
            </Route>

            <Route path="/activate/:token" element={<UserActivate/>}/>
            {/* 404 page */}
            <Route path="*" element={<ErrorPage url="/" label="Back to Homepage"/>}/>
        </Routes>
        </BrowserRouter>
        </AuthContext.Provider>
        </>
    )
}


export default RouterConfig