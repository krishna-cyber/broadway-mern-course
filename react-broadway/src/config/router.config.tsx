import { BrowserRouter, Routes,Route } from "react-router-dom"
import LandingPage from "../pages/landing/landing.page"
import { RegisterPage,LoginPage } from "../pages/auth/auth.page"
import { HomePageLayout } from "../pages/layout/homepage.layout"
import {AdminPanel} from "../pages/layout/dashboard.layout"
import { CategoryDetail } from "../pages/category/category-detail.page"
import { ErrorPage } from "../pages/error/error.page"

const RouterConfig = () => {

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePageLayout/>}>
            <Route index element = {<LandingPage/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/categories" element={<div>category</div>}/>
            <Route path="/category/:slug" element={<CategoryDetail/>}/>
            </Route>
            <Route path="/admin" element={<AdminPanel/>}/>


            {/* 404 page */}
            <Route path="*" element={<ErrorPage url="/" label="Back to Homepage"/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}


export default RouterConfig