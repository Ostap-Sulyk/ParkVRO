import AddressForm from "../components/AddressForm.jsx";
import {useState} from "react";

const AddParkingSpot = () => {
    const [address, setAddress] = useState('');

    const handleAddressSelect = (address) => {
        setAddress(address.formatted_address);
    };

    return (
        <div>
            <AddressForm/>
        </div>
    );
}

export default AddParkingSpot