import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';

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
        <div>
            {errorMessage ? <h6>{errorMessage}</h6> : null}
            <button onClick={handleGoogleLogin}>Google</button>
        </div>
    );
};

export default Register;