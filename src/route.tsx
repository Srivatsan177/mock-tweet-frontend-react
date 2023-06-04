import { createBrowserRouter } from "react-router-dom";
import Home from "./components/tweets/Home";
import SignIn from "./components/auth/SignIn";
import Navbar from "./components/layouts/Navbar";
import { Outlet } from "react-router-dom";
import TweetDetail from "./components/tweets/TweetDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavbarWrapper />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <SignIn />
            },
            {
                path: "/tweet/:tweet_id",
                element: <TweetDetail />
            }
        ],
    },
])


function NavbarWrapper() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}