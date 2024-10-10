import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { LoginPages } from "../src/pages/auth/login";
import { RegisterPages } from "../src/pages/auth/register";
import { ForgotPages } from "../src/pages/auth/forgot";
import { ResetPass } from "../src/pages/auth/resetpass";
import { Base } from "../src/pages/app/base";
import { SearchUserPage } from "../src/pages/app/search-page";
import { ProfilePage } from "../src/pages/app/profile-page";
import { MyProfilePage } from "../src/pages/app/my-profile";
import { HomePost } from "../src/features/content/slicing/home-post";


export function Routes() {
    const router = createBrowserRouter([
        {
            element: <Outlet />,
            children: [
                {
                    path: "/login",
                    element: <LoginPages />,
                },
                {
                    path: "/register",
                    element: <RegisterPages />,
                },
                {
                    path: "/forgot",
                    element: <ForgotPages />,
                },
                {
                    path: "/reset",
                    element: <ResetPass />,
                },
            ]
        },
        {
            path: "/",
            element: <Base />,
            children: [
                {
                    index: true,
                    element: <HomePost />,
                },
                {
                    path: "/search",
                    element: <SearchUserPage />,
                },
                {
                    path: "/my-profile",
                    element: <MyProfilePage />,
                },
                {
                    path: "/profile/:userID",
                    element: <ProfilePage />,
                }
            ]
        },
    ])

    return <RouterProvider router={router} />
}