import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Root from "./routes/Root.jsx"
import ErrorPage from "./ErrorPage.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Help from "./routes/Help.jsx";
import Profile from "./routes/Profile.jsx";
import Signup from "./components/Signup.jsx";
import Safety from "./routes/Safety.jsx";
import AddParkingSpot from "./routes/AddParkingSpot.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "signup",
                element: <Signup/>
            },
            {
                path: "home",
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
                path: "addParking/:id",
                element: <AddParkingSpot/>
            },

        ]
    },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
