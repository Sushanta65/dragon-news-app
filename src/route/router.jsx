import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/about',
        element: <h2>About</h2>
    }
])

export default router;