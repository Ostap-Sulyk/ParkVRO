import React, {useEffect, useState} from 'react';
import ParkingSpotForm from "../components/ParkingSpotForm.jsx";
import {useParams} from "react-router-dom";

function Home() {
    const {id} = useParams();
    const [customerId, setCustomerId] = useState(null);
    const [parkingData, setParkingData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/customer/all")
            .then((response) => response.json())
            .then((data) => {
                const lastId = data.pop().id;
                setCustomerId(lastId)
                return fetch(`http://localhost:8080/parking/available`);
            })
            .then((response) => response.json())
            .then((data) => setParkingData(data))
            .catch((error) => console.error(error));
    }, []);


    return (<div className="flex items-center flex-col w-screen h-screen p-2 flex-grow pb-12 mb-2 z-0">
        <h1 className="font-bold my-4" style={{fontSize: '2.5rem', color: 'black'}}>
            List of available Parking Spots
        </h1>
        {parkingData.length > 0 ? (parkingData.map((parkingSpot) => {
            const {id, address, available} = parkingSpot;
            return (
                <div key={id}
                     className="bg-white rounded-lg shadow-xl flex flex-row justify-between items-center w-full p-4 max-w-screen-lg my-2 hover:scale-105 transition duration-300">
                    <div className="w-full mr-4">
                        <ParkingSpotForm parkingId={id} address={address} available={available}/>
                    </div>
                </div>
            );
        })) : (<>
                <h1 className="text-4xl font-regular mb-4 text-gray-700">Seems Like There are no Available
                    Parking</h1>
                <h2 className="text-2xl font-bold text-gray-600 mb-4">please come back later</h2>
            </>

        )}
    </div>);

}

export default Home;
