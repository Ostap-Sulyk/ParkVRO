import React, {useState} from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom';

function Signup() {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        phoneNumber: '',
    });
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8080/bp/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        });

        if (response.ok) {
            toast.success('Account successfully created');
            setFormValues({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
                address: '',
                phoneNumber: '',
            });
            navigate('/home');
        } else {
            navigate('/home');
        }
    };

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    const isPasswordMatched = formValues.password === formValues.confirmPassword;

    return (
        <div className="flex justify-center items-center bg-gray-200 h-screen">
            <div className="w-1/2 p-8 bg-white rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <label className="block font-medium text-lg mb-2" htmlFor="firstName">
                        First Name:
                        <input
                            className="border border-gray-400 p-2 rounded w-full"
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formValues.firstName}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="block font-medium text-lg mb-2" htmlFor="lastName">
                        Last Name:
                        <input
                            className="border border-gray-400 p-2 rounded w-full"
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formValues.lastName}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="block font-medium text-lg mb-2" htmlFor="email">
                        Email:
                        <input
                            className="border border-gray-400 p-2 rounded w-full"
                            type="email"
                            id="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </label>

                    <label className="block font-medium text-lg mb-2">
                        Address:
                        <input
                            className="border border-gray-400 p-2 rounded w-full"
                            type="text" name="address" value={formValues.address} onChange={handleChange}/>
                    </label>
                    <label className="block font-medium text-lg mb-2">
                        Phone Number:
                        <input className="border border-gray-400 p-2 rounded w-full" type="tel" name="phoneNumber"
                               value={formValues.phoneNumber} onChange={handleChange}/>
                    </label>
                    <label className="block font-medium text-lg mb-2" htmlFor="password">
                        Password:
                        <input
                            className="border border-gray-400 p-2 rounded w-full"
                            type="password"
                            id="password"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="block font-medium text-lg mb-2" htmlFor="confirmPassword">
                        Confirm Password:
                        <input
                            className="border border-gray-400 p-2 rounded w-full"
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                        />
                    </label>
                    {formValues.confirmPassword && !isPasswordMatched && (
                        <p className="text-red-500">Passwords do not match</p>
                    )}
                    <br/>
                    <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>

    );
}

export default Signup;