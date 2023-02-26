import {useState} from "react";

function UserProfileCard({user}) {
    const {firstName, lastName, email, password } = user;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="w-1/3 mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-11">
            <div className="flex justify-center items-center h-20 bg-green-600" style={{height: "200px"}}>
                <img
                    src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y&s=400"
                    alt="Default profile picture"
                    className="w-40 h-40 rounded-full object-cover"
                />

            </div>
            <div className="py-6 px-8 p-3">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-semibold text-gray-600">Name:</p>
                    <h2 className="text-3xl font-semibold text-gray-800">{firstName} {lastName}</h2>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-semibold text-gray-600">Email:</p>
                    <p className="text-lg text-gray-600">{email}</p>
                </div>

                <div className="flex justify-between items-center mt-6">
                    <p className="text-lg font-semibold text-gray-600 mb-2">Password:</p>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold mr-2">
                            {isPasswordVisible ? password : "*".repeat(password.length)}
                        </p>
                        <button
                            onClick={togglePasswordVisibility}
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {isPasswordVisible ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default UserProfileCard;
