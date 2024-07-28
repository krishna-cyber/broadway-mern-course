import { BrowserRouter, Routes,Route } from "react-router-dom"
import LandingPage from "../pages/landing/landing.page"
import { RegisterPage,LoginPage,UserActivate } from "../pages/auth/auth_pages.page"
import { HomePageLayout } from "../pages/layout/homepage.layout"
import {AdminPanel} from "../pages/layout/dashboard.layout"
import { CategoryDetail } from "../pages/category/category-detail.page"
import { ErrorPage } from "../pages/error/error.page"
import AuthContext from "../context/auth.context"
import { useEffect, useState } from "react"
import authServiceInstance from "../pages/auth/auth.service"
import AdminDashboard from "../pages/dashboard/admin.dashboard.page"

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
            <Route path="/admin" element={<AdminPanel/>}>
            <Route index element= {<AdminDashboard/>}/>
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