import {useEffect, useState} from "react";
import UserProfileCard from "../components/UserProfileCard.jsx";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        const authString = `${username}:${password}`;
        const base64Auth = btoa(authString);

        fetch("http://localhost:8080/bp", {
            headers: {
                Authorization: `Basic ${base64Auth}`
            }
        })
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error(error));
    }, []);

    return (
        userData ? <UserProfileCard user={userData}/> : <h1>Loading...</h1>
    )


};

export default Profile;
