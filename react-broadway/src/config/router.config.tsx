import { BrowserRouter, Routes,Route } from "react-router-dom"
import LandingPage from "../pages/landing/landing.page"

const RouterConfig = () => {

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>}>
                <Route path="/register" element={<>Register page</>}/>
                <Route path="/login" element={<>Login page</>}/>
            </Route>



            {/* 404 page */}
            <Route path="*" element={<>page not found</>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}


export default RouterConfig