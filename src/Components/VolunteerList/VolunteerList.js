import React, { useEffect, useState } from 'react';
import './VolunteerList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading/Loading';

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleVolunteerDelete = id => {
        setIsLoading(true);
        fetch(`https://volunteer-network-server-1.herokuapp.com/volunteers/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                setVolunteers([]);
                if (result.deletedCount) {
                    setIsLoading(false);
                };
            });
    };

    useEffect(() => {
        fetch("https://volunteer-network-server-1.herokuapp.com/volunteers")
            .then(res => res.json())
            .then(data => {
                setVolunteers(data);
                setIsLoading(false);
            });
    }, [volunteers]);

    return (
        <div className="col-12 col-sm-12 col-md-12 col-lg-9">
            <div className="card py-3 border-0 rounded-0 px-4">
                <h4 className="fs-5">Volunteer Register List</h4>

                <table className="table mt-3">
                    <thead className="border-0">
                        <tr className="border-0 bg-light rounded">
                            <th scope="col" className="fw-normal text-muted border-0 ps-4 small-text">
                                Name
                            </th>

                            <th scope="col" className="fw-normal text-muted border-0 ps-4 small-text">
                                Email
                            </th>

                            <th scope="col" className="fw-normal text-muted border-0 ps-4 small-text">
                                Registration Date
                            </th>

                            <th scope="col" className="fw-normal text-muted border-0 ps-4 small-text">
                                Event Name
                            </th>

                            <th scope="col" className="fw-normal text-muted border-0 ps-4 small-text">
                                Action
                            </th>

                        </tr>
                    </thead>

                    <tbody className="border-0">
                        {isLoading ? <Loading></Loading> : null}

                        {
                            volunteers.map(volunteer => {
                                return (
                                    <tr>
                                        <td className="border-0 fw-bold ps-4 small-text">
                                            {volunteer.fullName}
                                        </td>

                                        <td className="border-0 fw-bold ps-4 small-text">
                                            {volunteer.email}
                                        </td>

                                        <td className="border-0 fw-bold ps-4 small-text">
                                            {volunteer.date}
                                        </td>

                                        <td className="border-0 fw-bold ps-4 small-text">
                                            {volunteer.eventTitle}
                                        </td>

                                        <td className="border-0 fw-bold ps-4 small-text">
                                            <button onClick={() => handleVolunteerDelete(volunteer._id)} className="btn btn-danger">
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VolunteerList;