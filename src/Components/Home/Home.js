import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Search from '../Search/Search';
import './Home.css';
import Event from '../Event/Event';
import Loading from '../Loading/Loading';
import { useForm } from "react-hook-form";

const Home = () => {
    const [events, setEvents] = useState([]);
    const [SearchEvents, setSearchEvents] = useState([]);
    const [notFound, setNotFound] = useState(false);

    // For Search Event
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setSearchEvents([]);
        const query = events.filter(event => event.eventTitle.includes(data.searchText));

        if (query.length > 0) {
            setNotFound(false);
            setSearchEvents(query);
        }

        else {
            setNotFound(true);
        };
        reset();
    };

    useEffect(() => {
        fetch("https://volunteer-network-server-1.herokuapp.com/events")
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setSearchEvents(data);
                setNotFound(false);
            });
    }, []);


    return (
        <Container className="my-5">
            <Search
                register={register}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
            >
            </Search>

            {/* For Loading Screen */}
            {events.length === 0 && !notFound ? <Loading></Loading> : null}

            {/* For Search Result Not Found */}
            {notFound ? <h4 className="display-6 text-center mt-3">No Result Found</h4> : null}

            {/* Events */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
                {
                    SearchEvents.map(event => <Event key={event._id} event={event}></Event>)
                }
            </div>
        </Container>
    );
};

export default Home;