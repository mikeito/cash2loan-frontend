import { useLocation, Navigate, Outlet } from "react-router-dom"
import { storage } from "../../app/utils/local"

const RequireAuth = () => {
    const token = storage.getToken()
    const location = useLocation()

    return (
        token
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}
export default RequireAuth