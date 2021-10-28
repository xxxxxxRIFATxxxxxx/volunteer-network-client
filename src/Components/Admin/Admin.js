import React from 'react';
import { Container } from 'react-bootstrap';
import AddEvent from '../AddEvent/AddEvent';
import SideBar from '../SideBar/SideBar';
import VolunteerList from '../VolunteerList/VolunteerList';
import './Admin.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import PrivateRoute from '../PrivateRoute/PrivateRoute';


const Admin = () => {
    return (
        <Container className="my-5 admin">
            <div className="row">
                <Router>
                    <SideBar></SideBar>

                    <Switch>
                        <PrivateRoute exact path="/volunteerList">
                            <VolunteerList></VolunteerList>
                        </PrivateRoute>

                        <PrivateRoute exact path="/addEvent">
                            <AddEvent></AddEvent>
                        </PrivateRoute>
                    </Switch>
                </Router>
            </div>
        </Container>
    );
};

export default Admin;