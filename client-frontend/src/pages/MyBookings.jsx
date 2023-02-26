import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Booking from "../components/Booking.jsx";

function MyBookings() {
    const {id} = useParams();
    const [customerId, setCustomerId] = useState(null);
    const [parkingData, setParkingData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/customer/all`)
            .then((response) => response.json())
            .then((data) => {
                const lastId = data.pop().id;
                setCustomerId(lastId)
                return fetch(`http://localhost:8080/booking/customer/${id}`);
            })
            .then((response) => response.json())
            .then((data) => setParkingData(data))
            .catch((error) => console.error(error));
    }, []);

    console.log(parkingData)


    return (<div className="flex items-center flex-col w-screen h-screen p-2 flex-grow pb-12 mb-2 z-0">
        <h1 className="font-bold my-4" style={{fontSize: '2.5rem', color: 'black'}}>
            List of Your Bookings
        </h1>
        {parkingData.length > 0 ? (parkingData.map((parkingSpot) => {
            return (
                <div key={parkingSpot.id} className="w-full mr-4">
                    <Booking reservation={parkingSpot}/>
                </div>
            );
        })) : (<>
                <h1 className="text-4xl font-regular mb-4 text-gray-700">Seems Like You Haven't Made any Bookings</h1>
                <h2 className="text-2xl font-bold text-gray-600 mb-4">please come back later</h2>
            </>

        )}
    </div>);

}

export default MyBookings;
