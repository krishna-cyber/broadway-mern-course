import { BrowserRouter, Routes,Route } from "react-router-dom"
import LandingPage from "../pages/landing/landing.page"
import { RegisterPage,LoginPage } from "../pages/auth/auth.page"
import { HomePageLayout } from "../pages/layout/homepage.layout"

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
            </Route>
           


            {/* 404 page */}
            <Route path="*" element={<>page not found</>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}


export default RouterConfig