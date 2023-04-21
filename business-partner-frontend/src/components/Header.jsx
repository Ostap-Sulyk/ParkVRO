import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {HiUser as UserIcon} from 'react-icons/hi';

const Header = () => {
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        fetchBalance();
    }, []);

    const fetchBalance = async () => {
        const u = localStorage.getItem('username');
        const p = localStorage.getItem('password');

        try {
            const response = await fetch('http://localhost:8080/bp', {
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + btoa(`${u}:${p}`)
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch balance');
            }

            const data = await response.json();
            setBalance(data.balance);
        } catch (error) {
            console.error(error);
        }
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
                <Link to="/addParking" className="ml-4 text-gray-500 hover:text-white">
                    Add Parking
                </Link>
                <Link to="/about" className="ml-4 text-gray-500 hover:text-white">
                    About Us
                </Link>
                <Link to="/safety" className="ml-4 text-gray-500 hover:text-white">
                    Safety
                </Link>
                <Link to="/help" className="ml-4 text-gray-500 hover:text-white">
                    Help
                </Link>
            </div>
            <div className="flex items-center">
                    <span className="text-white bg-green-500 py-1 px-3 rounded mr-3 text-xl font-bold">Balance: ${balance ? balance : 0 }</span>
                <Link to="/profile" className="text-gray-500 hover:text-white mr-3">
                    <UserIcon/>
                </Link>
            </div>
        </header>
    );
};

export default Header;
