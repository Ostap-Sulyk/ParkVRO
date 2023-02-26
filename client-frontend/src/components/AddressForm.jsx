import React, { useState } from 'react';

function AddressForm() {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            address: `${street}, ${city}, ${state} ${zip}`
        };
        fetch('http://localhost:8080/parking/4', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-2 bg-white rounded-lg overflow-hidden shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Enter Your Address</h2>
            <div className="mb-4">
                <label htmlFor="street" className="block font-medium text-gray-700 mb-2">Street</label>
                <input type="text" id="street" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" value={street} onChange={(e) => setStreet(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="city" className="block font-medium text-gray-700 mb-2">City</label>
                <input type="text" id="city" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="state" className="block font-medium text-gray-700 mb-2">State</label>
                <input type="text" id="state" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" value={state} onChange={(e) => setState(e.target.value)} />
            </div>
            <div className="mb-4">
                <label htmlFor="zip" className="block font-medium text-gray-700 mb-2">Zip Code</label>
                <input type="text" id="zip" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" value={zip} onChange={(e) => setZip(e.target.value)} />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
        </form>
    );
}

export default AddressForm;
