import React, { useEffect, useState } from 'react';
import './VolunteerRegister.css';
import { useForm } from "react-hook-form";
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useParams, useHistory } from 'react-router-dom';
import Loading from '../Loading/Loading';

const VolunteerRegister = () => {
    // For User
    const { user } = useAuth();

    // For Loading
    const [isLoading, setIsLoading] = useState(false);

    // For Event
    const { id } = useParams();
    const [event, setEvent] = useState({});

    useEffect(() => {
        fetch(`https://volunteer-network-server-1.herokuapp.com/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
            });
    }, []);



    // For Date
    const dateObj = new Date();
    dateObj.setDate(dateObj.getDate());
    const date = dateObj.toISOString().substr(0, 10);

    // For Handle Form
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setIsLoading(true);

        fetch("https://volunteer-network-server-1.herokuapp.com/volunteers", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setIsLoading(false);
                    history.push("/profile");
                };
            });
    };

    return (
        <Container className="my-5">
            {
                isLoading
                    ?
                    <Loading></Loading>
                    :
                    <>
                        <div className="text-center mb-4">
                            <Navbar.Brand>
                                <NavLink to="/">
                                    <img
                                        src="https://i.ibb.co/X5YdXnY/Group-1329.png"
                                        alt="logo"
                                        className="img-fluid logo"
                                    />
                                </NavLink>
                            </Navbar.Brand>
                        </div>

                        <form className="bg-white p-4 border" onSubmit={handleSubmit(onSubmit)}>
                            <h6 className="form-control border-0 fw-bold fs-5 mb-4 register-title">Register as a Volunteer</h6>

                            <div className="mb-3">
                                <input
                                    className="form-control border-0 border-bottom"
                                    type="text"
                                    placeholder="Full Name"
                                    value={user.displayName}
                                    {...register("fullName", { required: true })}
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    className="form-control border-0 border-bottom"
                                    type="email"
                                    placeholder="Email"
                                    value={user.email}
                                    {...register("email", { required: true })} />
                            </div>

                            <div className="mb-3">
                                <input
                                    className="form-control border-0 border-bottom"
                                    type="date"
                                    defaultValue={date}
                                    {...register("date", { required: true })} />
                            </div>

                            <div className="mb-3">
                                <textarea
                                    className="form-control border-0 border-bottom"
                                    placeholder="Description"
                                    value={event.description}
                                    {...register("description")}
                                    rows="1"
                                >
                                </textarea>
                            </div>

                            <div className="mb-3">
                                <input
                                    className="form-control border-0 border-bottom"
                                    type="text"
                                    placeholder="Event Title"
                                    value={event.eventTitle}
                                    {...register("eventTitle")}
                                />
                            </div>

                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className="btn btn-primary w-100 py-2 fw-normal" type="submit" value="Registration" />
                        </form>
                    </>

            }
        </Container>
    );
};

export default VolunteerRegister;