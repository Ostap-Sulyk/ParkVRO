import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiUser as UserIcon } from 'react-icons/hi';

const Header = () => {
    const [bpId, setBpId] = useState(null);
    const navigate = useNavigate();

    const handleAddParking = () => {
        fetch('http://localhost:8080/bp/all')
            .then((response) => response.json())
            .then((data) => {
                const lastId = data.pop().id;
                setBpId(lastId);
                navigate(`/addParking/${lastId}`);
            });
    };

    return (
        <header className="bg-gray-900 p-3 flex justify-between items-center z-10">
            <div className="flex items-center">
                <Link to="/home" className="text-gray-500 font-bold hover:text-white ml-3">
                    ParkVRO
                </Link>
                <Link to="/home" className="ml-4 text-gray-500 hover:text-white">
                    Home
                </Link>
                <Link to="/about" className="ml-4 text-gray-500 hover:text-white">
                    About Us
                </Link>
                <Link to="/safety" className="ml-4 text-gray-500 hover:text-white">
                    Safety
                </Link>
                <button onClick={handleAddParking} className="ml-4 text-gray-500 hover:text-white">
                    Add Parking
                </button>
                <Link to="/help" className="ml-4 text-gray-500 hover:text-white">
                    Help
                </Link>
            </div>
            <div className="flex items-center">
                <Link to="/profile" className="text-gray-500 hover:text-white mr-3">
                    <UserIcon />
                </Link>
            </div>
        </header>
    );
};

export default Header;
