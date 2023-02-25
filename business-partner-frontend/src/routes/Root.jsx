import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
export default function Root() {
    return (
        <>
            <Header/>
            <div className="h-screen">
                <Outlet />
            </div>
            <Footer/>
        </>
    );
}