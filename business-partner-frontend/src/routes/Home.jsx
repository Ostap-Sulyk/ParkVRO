import React, { useEffect, useState } from 'react';
import ParkingCard from "../components/ParkingCard.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
    const [bpId, setBpId] = useState(null);
    const [parkingData, setParkingData] = useState([]);
    const navigate = useNavigate();

    const handleButtonClick = (id) => {
        navigate(`/addParking/${id}`);
    };

    useEffect(() => {
        fetch("http://localhost:8080/bp/all")
            .then((response) => response.json())
            .then((data) => {
                const lastId = data.pop().id;
                setBpId(lastId)
                return fetch(`http://localhost:8080/parking/all/bp/${lastId}`);
            })
            .then((response) => response.json())
            .then((data) => setParkingData(data))
            .catch((error) => console.error(error));
    }, []);


    return (
        <div
            className="flex items-center flex-col w-screen h-screen p-2 flex-grow pb-12 mb-2 z-0"
            style={{
                backgroundImage: `url('https://www.rmit.edu.au/content/dam/rmit/rmit-images/news/2020/oct/car-parking-melbourne/underground-car-parking-1220_x_732.jpg')`,
                backgroundSize: 'cover',
                position: 'relative',
                top: 0,
                left: 0
            }}
        >
            <h1 className="font-bold font-3xl my-4" style={{ fontSize: '2.5rem', color: 'white' }}>
                List of your Parking Spots
            </h1>
            {parkingData.length > 0 ? (
                parkingData.map((parkingSpot) => {
                    const { id, address, available } = parkingSpot;
                    return (
                        <div
                            key={id}
                            className="bg-white rounded-lg shadow-xl flex flex-row justify-between items-center w-full p-4 max-w-screen-lg my-2 hover:scale-105 transition duration-300"
                        >

                            <div className="w-full mr-4">
                                <ParkingCard address={address} available={available} />
                            </div>
                            {available ? (
                                <span
                                    className="bg-green-500 text-white py-2 px-4 rounded-md"
                                >
                                    Available For Booking
                                </span>
                            ) : (
                                <span className="bg-gray-400 text-white py-2 px-4 rounded-md text-center">
                                    Booked
                                </span>
                            )}
                        </div>
                    );
                })
            ) : (
                <>
                    <h1 className="text-4xl font-regular mb-4 text-white">Ops! There are no parking spots</h1>
                    <h2 className="text-2xl font-bold text-white mb-4">registered under your Account</h2>
                    <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded"
                        onClick={() => handleButtonClick(bpId)}>Register Parking Spot
                    </button>
                </>

            )}
        </div>
    );

}

export default Home;
