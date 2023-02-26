import axios from "axios";
import {FaCheckCircle, FaTimesCircle} from "react-icons/all.js";
import {useParams} from "react-router-dom";


function ParkingSpotForm({parkingId, address, available}) {
    const {id} = useParams();
    const handleSubmit = (event) => {
        event.preventDefault();
        const destination = `http://localhost:8080/booking/customer/${id}/parkingSpot/${parkingId}`;
        console.log(destination)
        axios.post(destination)
            .then(response => {
                // handle successful response
                window.location.reload(); // trigger page reload
            })
            .catch(error => {
                // handle error
            });
    };

    const icon = available ? (
        <FaCheckCircle className="text-green-500"/>
    ) : (
        <FaTimesCircle className="text-red-500"/>
    );
    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4">
            <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-semibold">{address}</h3>
                    <p className="text-gray-500">
                        {available ? "Available" : "Not Available"}
                    </p>
                </div>
                <button
                    type="submit"
                    className="bg-green-500 text-white ml-auto inline-flex items-center px-4 py-2 rounded-md focus:outline-none"
                >
                    Book
                </button>
            </div>
        </form>

    );
}

export default ParkingSpotForm;
