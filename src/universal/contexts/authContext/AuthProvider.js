import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import { authApp } from '../../../firebase-client';

const AuthProvider = ({ children, isSSRAuth, ssrReAuth }) => {
  const [state, setState] = useState({
    isAuth: isSSRAuth,
    reAuth: ssrReAuth,
    token: '',
  });

  useEffect(() => {
    const unsubscribe = authApp.onAuthStateChanged(authApp.auth, (user) => {
      if (user) {
        setState({
          isAuth: true,
          reAuth: false,
          token: user.accessToken,
        });
      } else {
        setState({
          isAuth: false,
          reAuth: false,
          token: '',
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const emailPassSignIn = (email, password) => {
    return authApp.signInWithEmailAndPassword(authApp.auth, email, password);
  };

  const logOut = () => {
    return authApp.signOut(authApp.auth);
  };

  const context = {
    ...state,
    emailPassSignIn,
    logOut,
    google: '',
  };
  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
