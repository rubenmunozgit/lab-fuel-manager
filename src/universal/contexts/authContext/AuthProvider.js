import React, {useState, useEffect} from 'react';
import AuthContext from './AuthContext';
import {authApp} from '../../../firebase-client';

const isAuthenticated = (user) => {
  return user ? true : false
}

const AuthProvider = ({children, isSSRAuth}) => {
  const [isAuth, setIsAuth] = useState(isSSRAuth);
  const [token, setToken] = useState('');

  useEffect(() => {
    const unsubscribe = authApp.onAuthStateChanged(authApp.auth, (user) => {
      if (user) {
        setIsAuth(true);
        setToken(user.accessToken);
      }
      else {
        setIsAuth(false);
        setToken('');
      }
    });
    return () => unsubscribe();
  },[]);

  const emailPassSignIn = (email, password) => {
    return authApp.signInWithEmailAndPassword(authApp.auth, email, password);
  }

  const logOut = () => {
    return authApp.signOut(authApp.auth);
  };

  const context = {
    token,
    isAuth,
    emailPassSignIn,
    logOut,
    google: ''
  }
  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;