import React from 'react';
import {Link} from "react-router-dom";
import {HiUser as UserIcon} from 'react-icons/hi';
import {HiQuestionMarkCircle as HelpIcon} from 'react-icons/hi';

const Header = () => {
    return (
        <header className="bg-gray-900 p-3 flex justify-between items-center">
            <div className="flex items-center">
                <Link to="/home" className="text-gray-500 font-bold hover:text-white ml-3">ParkVRO</Link>
                <Link to="/home" className="ml-4 text-gray-500 hover:text-white">Home</Link>
                <Link to="/about" className="ml-4 text-gray-500 hover:text-white">About Us</Link>
                <Link to="/safety" className="ml-4 text-gray-500 hover:text-white">Safety</Link>
                <Link to="/addParking" className="ml-4 text-gray-500 hover:text-white">Add Parking</Link>
                <Link to="/help" className="ml-4 text-gray-500 hover:text-white">Help</Link>
            </div>
            <div className="flex items-center">
                <Link to="/profile" className="text-gray-500 hover:text-white mr-3"><UserIcon/></Link>
            </div>
        </header>
    );
};

export default Header;
