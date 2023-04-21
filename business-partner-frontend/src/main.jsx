import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, useParams,} from "react-router-dom";
import Root from "./routes/Root.jsx"
import ErrorPage from "./ErrorPage.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Help from "./routes/Help.jsx";
import Profile from "./routes/Profile.jsx";
import Signup from "./components/Signup.jsx";
import Safety from "./routes/Safety.jsx";
import AddParkingSpot from "./routes/AddParkingSpot.jsx";
import AddParkingSpotForm from "./components/AddParkingSpotForm.jsx";


function EditParkingSpotWrapper() {
    const {id} = useParams();
    const [parkingData, setParkingData] = useState(null);

    useEffect(() => {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        const authString = `${username}:${password}`;
        const base64Auth = btoa(authString);

        fetch(`http://localhost:8080/bp/parking-spots/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Basic ${base64Auth}`,
            },
        })
            .then((response) => response.json())
            .then((data) => setParkingData(data))
            .catch((error) => console.error("Error:", error));
    }, [id]);

    return parkingData ? (
        <AddParkingSpotForm data={parkingData}/>
    ) : (
        <div>Loading...</div>
    );
}


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
                path: "addParking",
                element: <AddParkingSpot/>
            },
            {
                path: "editParking/:id",
                element: <EditParkingSpotWrapper/>
            },
        ]
    },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
