import React, { useEffect, useState } from 'react';
import './Profile.css';

const Profile = () => {
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        fetch("https://volunteer-network-server-1.herokuapp.com/events?email=munna@gmail.com")
            .then(res => res.json())
            .then(data => {
                setMyEvents(data)
            });
    }, []);

    return (
        <div>
            {myEvents.length}
        </div>
    );
};

export default Profile;