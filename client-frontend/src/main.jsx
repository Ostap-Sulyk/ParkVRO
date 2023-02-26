import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root from "./routes/root"
import ErrorPage from "./ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Help from "./pages/Help.jsx";
import Profile from "./pages/Profile.jsx";
import Signup from "./components/Signup.jsx";
import Safety from "./pages/Safety.jsx";
import MyBookings from "./pages/MyBookings.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/signup",
                element: <Signup/>
            },
            {
                path: "/home/:id",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "help",
                element: <Help/>
            },
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: "safety",
                element: <Safety/>
            },
            {
                path: "myBookings/:id",
                element: <MyBookings/>
            },

        ]
    },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
