import {Navigate, Outlet} from "react-router-dom"

const PrivateRoutes = () => {
    const isAuth = false
    return <>{isAuth ? <Outlet /> : <Navigate to='/login'/>}</>
}

const RestrictedRoutes = () => {
    const isAuth = false
    return <>{!isAuth ? <Outlet /> : <Navigate to='/dashboard'/>}</>
}

export {PrivateRoutes, RestrictedRoutes} 