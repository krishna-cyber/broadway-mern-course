import { Outlet } from "react-router-dom"


export const HomePageLayout = () => {

    return (
        <>
        {/* <HomeHeader/> */}
        <Outlet/>
        <footer>
            &copy; 2024 Broadway Infosys
        </footer>
        </>
    )
}