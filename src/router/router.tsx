import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const ZHome = lazy(() => import('../pages/home/ZHome'))

const router:RouteObject[] = [
    {
        path:'/',
        element:<ZHome />,
    }
]
export default router;