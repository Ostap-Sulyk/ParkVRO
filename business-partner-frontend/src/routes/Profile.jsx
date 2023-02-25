import {useEffect, useState} from "react";
import UserProfileCard from "../components/UserProfileCard.jsx";

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/bp/all")
            .then((response) => response.json())
            .then((data) => setUserData(data.slice(-1)[0]))
            .catch((error) => console.log(error));
    }, []);

    return (
        userData ? <UserProfileCard user={userData}/> : <h1>Loading...</h1>
    )


};

export default Profile;
