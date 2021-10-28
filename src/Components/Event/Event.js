import React from 'react';
import { NavLink } from 'react-router-dom';
import './Event.css';

const Event = props => {
    const { _id, eventTitle, banner } = props.event;
    const bgColor = `#${Math.round(parseInt(_id) * (Math.random() * 10000)).toString().slice(0, 6)}`;
    return (
        <div className="col">
            <NavLink to={`/events/volunteerRegister/${_id}`} className="text-decoration-none">
                <div className="card h-100 border-0" style={{ backgroundColor: `${bgColor}` }}>
                    <img src={banner} class="card-img-top" alt={eventTitle} />
                    <div
                        className="card-body border-0 text-white py-3"
                        style={{ backgroundColor: `${bgColor}` }}
                    >
                        <h6 className="text-center text-white fs-5 fw-normal">
                            {eventTitle}
                        </h6>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Event;