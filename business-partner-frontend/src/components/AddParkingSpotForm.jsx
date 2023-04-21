import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";


function AddParkingSpotForm({data}) {
    const navigate = useNavigate();
    const [address, setAddress] = useState(data ? data.address : '');
    const [lat, setLat] = useState(data ? data.lat : 0);
    const [lng, setLng] = useState(data ? data.lng : 0);
    const [price, setPrice] = useState(data ? data.price : 0);
    const [available, setAvailable] = useState(data ? data.available : true);
    const [fileEncoded, setFileEncoded] = useState(data ? `data:image/jpeg;base64,${data.image}` : '');


    const onAddressSelected = ({address, lat, lng}) => {
        setAddress(address);
        setLat(lat);
        setLng(lng);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (price <= 0) {
            alert('Price must be greater than 0');
            return;
        }

        const payload = {
            address,
            available,
            price: parseFloat(price),
            lat,
            lng,
            image: fileEncoded ? fileEncoded.replace('data:image/jpeg;base64,', '') : (data ? data.image : null),
        };


        console.log(payload)
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");
        const authString = `${username}:${password}`;
        const base64Auth = btoa(authString);

        fetch(data ? `http://localhost:8080/bp/parking-spots/${data.id}` : 'http://localhost:8080/bp/parking-spots', {
            method: data ? "PUT" : "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Basic ${base64Auth}`,
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                if (response.status === 200 || response.status === 201) navigate("/home");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const handleDelete = () => {
        const confirmation = window.confirm('Are you sure you want to delete this parking spot?');

        if (!confirmation) {
            return;
        }

        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        const authString = `${username}:${password}`;
        const base64Auth = btoa(authString);

        fetch(`http://localhost:8080/bp/parking-spots/${data.id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Basic ${base64Auth}`,
            },
        })
            .then((response) => {
                if (response.status === 200) navigate('/home');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    const encodeFileAsBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result.split(',')[1]);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(file);
        });
    };
    const handleSelect = async (value) => {
        try {
            const results = await geocodeByAddress(value);
            const latLng = await getLatLng(results[0]);
            onAddressSelected({
                address: results[0].formatted_address,
                lat: latLng.lat,
                lng: latLng.lng,
            });
        } catch (error) {
            console.error('Error fetching selected address', error);
        }
    };


    const handleChange = (value) => {
        setAddress(value);
    };
    const handleFileChange = async (event) => {
        const base64String = await encodeFileAsBase64(event.target.files[0]);
        setFileEncoded(base64String);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mt-2 bg-white rounded-lg overflow-hidden shadow-md p-6"
        >
            <h2 className="text-xl font-semibold mb-4">Please Fill Out Form</h2>
            <PlacesAutocomplete
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}
            >
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <div className="relative">
                        <input
                            {...getInputProps({
                                placeholder: 'Search address...',
                                className:
                                    'location-search-input w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500',
                            })}
                        />
                        <div
                            className={`${
                                suggestions.length ? 'border border-gray-300 bg-white' : ''
                            } absolute w-full z-10 mt-1 rounded-md shadow-md`}
                        >
                            {loading && (
                                <div className="p-2">
                                    <span className="text-gray-500">Loading...</span>
                                </div>
                            )}
                            {suggestions.map((suggestion) => (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                        className: `p-2 ${
                                            suggestion.active
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'text-gray-700'
                                        }`,
                                    })}
                                >
                                    {suggestion.description}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>

            <div className="mb-4">
                <label
                    htmlFor="price"
                    className="block font-medium text-gray-700 mb-2"
                >
                    Price
                </label>
                <input
                    type="number"
                    id="price"
                    min="0.00"
                    step="0.01"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}>
                </input>
            </div>
            <div className="mb-4">
                <label
                    htmlFor="available"
                    className="block font-medium text-gray-700 mb-2"
                >
                    Parking Spot Available
                </label>
                <input
                    type="checkbox"
                    id="available"
                    className="mr-2"
                    checked={available}
                    onChange={(e) => setAvailable(e.target.checked)}
                />
            </div>
            <div className='mb-4'>
                <label htmlFor="file" className="block font-medium text-gray-700 mb-2">Image</label>
                <input type="file" accept=".jpg,.jpeg,.png,.gif" onChange={handleFileChange}/>
            </div>
            <button type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Submit
            </button>
            {data && (
                <button
                    onClick={handleDelete}
                    className="w-full mt-4 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-500 focus:ring-opacity-50"
                >
                    Delete
                </button>
            )}
        </form>

    );
}

export default AddParkingSpotForm;
