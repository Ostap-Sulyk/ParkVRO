import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {HiUser as UserIcon} from 'react-icons/hi';

const Header = () => {
    const [customerId, setCustomerId] = useState(null);
    const navigate = useNavigate();

    const handleAddParking = () => {
        fetch('http://localhost:8080/customer/all')
            .then((response) => response.json())
            .then((data) => {
                const lastId = data.pop().id;
                setCustomerId(lastId);
                navigate(`/home/${lastId}`);
            });
    };
    const handleSeeBookings = () => {
        fetch('http://localhost:8080/customer/all')
            .then((response) => response.json())
            .then((data) => {
                const lastId = data.pop().id;
                setCustomerId(lastId);
                navigate(`/myBookings/${lastId}`);
            });
    };
    return (
        <header className="bg-gray-900 p-3 flex justify-between items-center">
            <div className="flex items-center">
                <button onClick={handleAddParking} className="text-gray-500 font-bold hover:text-white ml-3">ParkVRO
                </button>
                <button onClick={handleAddParking} className="ml-4 text-gray-500 hover:text-white">Home</button>
                <Link to="/about" className="ml-4 text-gray-500 hover:text-white">About Us</Link>
                <Link to="/safety" className="ml-4 text-gray-500 hover:text-white">Safety</Link>
                <Link to="/help" className="ml-4 text-gray-500 hover:text-white">Help</Link>
                <button onClick={handleSeeBookings} className="ml-4 text-gray-500 hover:text-white">My Bookings</button>
            </div>
            <div className="flex items-center">
                <Link to="/profile" className="text-gray-500 hover:text-white mr-3"><UserIcon/></Link>
            </div>
        </header>
    );
};

export default Header;
