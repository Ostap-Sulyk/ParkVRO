import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ParkingCard({ id, address, available }) {
    const navigate = useNavigate();
    const icon = available ? (
        <FaCheckCircle className="text-green-500" />
    ) : (
        <FaTimesCircle className="text-red-500" />
    );

    const [isBooking, setIsBooking] = useState(false);

    const handleBooking = (event) => {
        event.preventDefault();
        setIsBooking(true);
        fetch(`http://localhost:8080/booking/customer/1/parkingSpot/${id}`, {
            method: "POST",
        })
    };

    return (
        <div className="bg-white rounded-lg p-4">
            <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center ">
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-semibold">{address}</h3>
                    <p className="text-gray-500">{available ? 'Available' : 'Booked'}</p>
                </div>
            </div>
        </div>
    );
}

export default ParkingCard;
