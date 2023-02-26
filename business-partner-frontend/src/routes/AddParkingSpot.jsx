import AddressForm from "../components/AddressForm.jsx";

import { useParams } from "react-router-dom";

const AddParkingSpot = () => {
    const { id } = useParams();
    return (
        <div>
            <AddressForm id={id}/>
        </div>
    );
};

export default AddParkingSpot