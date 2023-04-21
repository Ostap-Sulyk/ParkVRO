import {useNavigate} from 'react-router-dom';
import React from 'react';

function ParkingCard({parking}) {
    const {id} = parking;
    const {address, available, price, image} = parking;
    const navigate = useNavigate();

    const imgSrc = image && !image.includes("null")
        ? `data:image/png;base64,${image}`
        : "src/assets/placeholder.png";

    const availabilityText = available ? 'Available' : 'Not Available';
    const availabilityColor = available ? 'text-green-500' : 'text-red-500';

    return (
        <div className="relative rounded-4">
            <div className="h-80">
                <img
                    src={imgSrc}
                    alt="Parking spot image"
                    className="object-cover rounded-t"
                />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white rounded-b">
                <h3 className="text-lg font-semibold">{`${address}`}</h3>
                <h2 className="text-gray-500 font-medium">
                    Per Day: {price ? `$${price.toFixed(2)}` : ''}
                </h2>
                <p className={`font-bold ${availabilityColor}`}>{availabilityText}</p>
                <button
                    onClick={() => navigate(`/editParking/${id}`)}
                    className={`flex items-center justify-center w-full mt-4 py-2 px-4 rounded-md text-white font-medium 
          bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50`}
                >
                    Edit
                </button>
            </div>
        </div>
    );
}

export default ParkingCard;
