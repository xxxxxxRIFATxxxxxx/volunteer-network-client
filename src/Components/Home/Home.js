import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://volunteer-network-server-1.herokuapp.com/events")
            .then(res => res.json())
            .then(data => setEvents(data));
    }, []);

    return (
        <div>
            {events.length};
        </div>
    );
};

export default Home;