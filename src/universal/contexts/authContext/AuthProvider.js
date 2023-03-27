import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { authApp } from '../../../firebase-client';

const AuthProvider = ({ children, isSSRAuth, ssrReAuth, user }) => {
    const [state, setState] = useState({
        isAuth: isSSRAuth,
        reAuth: ssrReAuth,
        token: '',
        user
    });

    useEffect(() => {
        const unsubscribe = authApp.onAuthStateChanged(authApp.auth, (user) => {
            if (user) {
                setState({
                    isAuth: true,
                    reAuth: false,
                    token: user.accessToken,
                    user: {
                        displayName: user?.displayName || user.email,
                        email: user.email
                    }
                });
            } else {
                setState({
                    isAuth: isSSRAuth,
                    reAuth: ssrReAuth,
                    token: '',
                    user
                });
            }
        });
        return () => unsubscribe();
    }, []);

    const emailPassSignUp = async (email, password) => await authApp.createUserWithEmailAndPassword(
        authApp.auth,
        email,
        password
    );

    const emailPassSignIn = async (email, password) => await authApp.signInWithEmailAndPassword(
        authApp.auth,
        email,
        password
    );

    const googleSignIn = async () => await authApp.signInWithRedirect(authApp.auth, authApp.googleProvider)

    const logOut = () => authApp.signOut(authApp.auth);

    const context = {
        ...state,
        emailPassSignIn,
        emailPassSignUp,
        logOut,
        google: {
            googleSignIn
        },
    };
    return (
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
