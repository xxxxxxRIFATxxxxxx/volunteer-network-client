import React, { useEffect, useState } from 'react';
import './VolunteerList.css';

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);

    const handleVolunteerDelete = id => {
        fetch(`https://volunteer-network-server-1.herokuapp.com/volunteers/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                setVolunteers([]);
                console.log(result)
            });
    };

    useEffect(() => {
        fetch("https://volunteer-network-server-1.herokuapp.com/volunteers")
            .then(res => res.json())
            .then(data => setVolunteers(data));
    }, [volunteers]);

    return (
        <div>
            {volunteers.map(v => {
                return (
                    <div>
                        <h1>{v.email}</h1>
                        <button onClick={() => handleVolunteerDelete(v._id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
};

export default VolunteerList;