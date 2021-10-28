import React, { useEffect, useState } from 'react';
import './Profile.css';
import useAuth from '../../Hooks/useAuth';
import { Container } from 'react-bootstrap';
import Loading from "../Loading/Loading";

const Profile = () => {
    const [myEvents, setMyEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();

    const handleEventDelete = id => {
        setIsLoading(true);

        fetch(`https://volunteer-network-server-1.herokuapp.com/volunteers/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    setIsLoading(false);
                };
            });
    };

    useEffect(() => {
        fetch(`https://volunteer-network-server-1.herokuapp.com/events?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyEvents(data);
                setIsLoading(false);
            });
    }, [isLoading]);

    return (
        <Container className="my-5">
            {
                isLoading
                    ?
                    <Loading></Loading>
                    :
                    <div className="row row-cols-1 row-cols-lg-2 g-4">
                        {
                            myEvents.map(event => {
                                return (
                                    <div className="col">
                                        <div className="card mb-3" style={{ maxWidth: "540px" }}>
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={event.banner} class="img-fluid rounded-start" alt={event.eventTitle} />
                                                </div>

                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">
                                                            {event.eventTitle}
                                                        </h5>

                                                        <p className="card-text text-muted">
                                                            {event.description.slice(0, 100)}
                                                        </p>

                                                        <small className="card-text text-muted fw-bold">
                                                            {event.date}
                                                        </small>

                                                        <div className="d-flex justify-content-end">
                                                            <button onClick={() => handleEventDelete(event._id)} className="btn btn-danger px-5">
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
            }

            {
                myEvents.length === 0 ? <h2 className="display-6 text-center text-primary fw-bold py-5">
                    YOU HAVE NO EVENTS
                </h2> : null
            }
        </Container>
    );
};

export default Profile;