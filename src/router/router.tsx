import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const ZHome = lazy(() => import('../pages/home/ZHome'))
const User = lazy(() => import('../pages/user/user'))
const Login = lazy(() => import('../pages/login/login'))
const router:RouteObject[] = [
    {
        path:'/',
        element:<ZHome />,
    },{
        path:'/user',
        element:<User />,
    },{
        path:'/login',
        element:<Login />
    }
]
export default router;