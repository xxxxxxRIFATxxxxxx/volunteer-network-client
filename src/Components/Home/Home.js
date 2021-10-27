import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Search from '../Search/Search';
import './Home.css';
import Event from '../Event/Event';

const Home = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("https://volunteer-network-server-1.herokuapp.com/events")
            .then(res => res.json())
            .then(data => setEvents(data));
    }, []);

    return (
        <Container className="my-5">
            <Search></Search>

            {/* Events */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
                {
                    events.map(event => <Event key={event._id} event={event}></Event>)
                }
            </div>
        </Container>
    );
};

export default Home;