import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function UserProfileCard({user}) {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address: user.address,
        phoneNumber: user.phoneNumber,
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const {firstName, lastName, email, address, phoneNumber, password} = formValues;
        const payload = {
            firstName, lastName, email, address, phoneNumber, password
        };
        const u = localStorage.getItem('username');
        const p = localStorage.getItem('password');
        fetch('http://localhost:8080/bp', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${u}:${p}`)
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update user profile');
                }
                alert('User profile updated successfully');
                localStorage.setItem('password', password)
                localStorage.setItem('username', email)
            })
            .catch(error => {
                console.error(error);
                alert('Failed to update user profile');
            });
    };

    const deleteUser = () => {
        if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            const u = localStorage.getItem('username');
            const p = localStorage.getItem('password');
            fetch('http://localhost:8080/bp', {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Basic ' + btoa(`${u}:${p}`)
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to delete user account');
                    }
                    alert('User account deleted successfully');
                    localStorage.removeItem('password');
                    localStorage.removeItem('username');
                    navigate('/signup');
                })
                .catch(error => {
                    console.error(error);
                    alert('Failed to delete user account');
                });
        }
    };

    const validatePassword = () => {
        return formValues.password === formValues.confirmPassword;
    };

    return (
        <div className="top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="w-1/2">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">
                                First Name:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="firstName" type="text" name="firstName" value={formValues.firstName}
                                onChange={handleInputChange}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">
                                Last Name:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="lastName" type="text" name="lastName" value={formValues.lastName}
                                onChange={handleInputChange}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" type="email" name="email" value={formValues.email}
                                onChange={handleInputChange}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
                                Address:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="address" type="text" name="address" value={formValues.address}
                                onChange={handleInputChange}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="phoneNumber">
                                Phone Number:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phoneNumber" type="text" name="phoneNumber" value={formValues.phoneNumber}
                                onChange={handleInputChange}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password:
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" name="password" value={formValues.password}
                                onChange={handleInputChange}/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password:
                            </label>
                            <input
                                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${validatePassword() ? '' : 'border-red-500'}`}
                                id="confirmPassword" type="password" name="confirmPassword"
                                value={formValues.confirmPassword}
                                onChange={handleInputChange}/>
                            {!validatePassword() && <span className="text-red">Passwords do not match</span>}
                        </div>
                        <button type="submit" disabled={!validatePassword()}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Update Profile
                        </button>
                        <button type="button" onClick={deleteUser}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
                            Delete Account
                        </button>
                    </form>
                </div>
        </div>
    );
}

export default UserProfileCard;