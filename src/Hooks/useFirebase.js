import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import {
    getAuth,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const loginWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logout = () => {
        setIsLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            };

            setIsLoading(false);
        });

        return () => unsubscribed;
    }, []);

    return {
        user,
        setUser,
        setErrorMessage,
        setIsLoading,
        errorMessage,
        isLoading,
        loginWithGoogle,
        logout
    };
};

export default useFirebase;