import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Search from '../Search/Search';
import './Home.css';

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
        </Container>
    );
};

export default Home;