import { Outlet } from "react-router-dom"
import TopNav from "./topNav"

const Layout = () => {
    return (
        <>
            <TopNav />
            <Outlet />
        
        </>
    )
}

export default Layout