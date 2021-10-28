import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logout, setUser, setErrorMessage, setIsLoading } = useAuth();
    const history = useHistory();
    const redirect_uri = '/register';

    const handleLogout = () => {
        logout()
            .then(() => {
                setUser({});
                history.push(redirect_uri);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <NavLink to="/">
                        <img
                            src="https://i.ibb.co/X5YdXnY/Group-1329.png"
                            alt="logo"
                            className="img-fluid logo"
                        />
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" to="/">
                            <button className="btn w-100">Home</button>
                        </NavLink>

                        <NavLink className="nav-link" to="/donation">
                            <button className="btn w-100">Donation</button>
                        </NavLink>

                        <NavLink className="nav-link" to="/events">
                            <button className="btn w-100">Events</button>
                        </NavLink>

                        <NavLink className="nav-link" to="/blog">
                            <button className="btn w-100">Blog</button>
                        </NavLink>

                        {
                            user.email
                                ?
                                <>
                                    <NavLink className="nav-link" to="/profile">
                                        <button className="btn w-100 fw-bold">
                                            {user.displayName}
                                        </button>
                                    </NavLink>

                                    <NavLink className="nav-link" to="">
                                        <button onClick={handleLogout} className="btn btn-primary px-5 w-100 fw-normal">Logout</button>
                                    </NavLink>
                                </>

                                :

                                <NavLink className="nav-link" to="/register">
                                    <button className="btn btn-primary px-5 w-100 fw-normal">Register</button>
                                </NavLink>
                        }

                        <NavLink className="nav-link" to="/admin">
                            <button className="btn btn-dark px-5 w-100 fw-normal">Admin</button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;