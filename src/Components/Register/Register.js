import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import './Register.css';

const Register = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';
    const {
        loginWithGoogle,
        setUser,
        errorMessage,
        setErrorMessage,
        setIsLoading
    } = useAuth();

    const handleGoogleLogin = () => {
        setErrorMessage("");
        loginWithGoogle()
            .then((result) => {
                setUser(result.user);
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
        <div className="register">
            <Container className="my-5 volunteer">
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

                    <div className="bg-white border px-4 py-5 mt-5 register-form">
                        <h4 className="text-center fs-4 mb-4">Login With</h4>
                        <button className="btn btn-light border fs-5 fw-normal rounded-pill px-5" onClick={handleGoogleLogin}>
                            <img className="google-logo img-fluid me-2" src="https://i.ibb.co/jbBwfgT/google-logo-9808.png" alt="google logo" />

                            <span>Continue with Google</span>
                        </button>

                        <div>
                            <small>
                                <span className="small-text">Don't have account?</span>
                                <NavLink className="ms-1 small-text text-decoration-none" to="/register">
                                    create an account
                                </NavLink>
                            </small>
                        </div>

                        <div className="text-center mt-4">
                            {errorMessage ? <h6 className="text-danger">{errorMessage}</h6> : null}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Register;