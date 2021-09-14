import React, {useState} from 'react';
import AuthContext from './AuthContext';
import {authApp} from '../../../firebase-client';

const isAuthenticated = (user) => {
  return user ? true : false
}

const AuthProvider = ({children, isSSRAuth}) => {
  const [user, setUser] = useState(isSSRAuth);

  authApp.onAuthStateChanged(authApp.auth, (user) => setUser(user));

  const emailPassSignIn = (email, password) => {
    return authApp.signInWithEmailAndPassword(authApp.auth, email, password);
  }

  const logOut = () => {
    return authApp.signOut(authApp.auth);
  };

  const context = {
    token: isAuthenticated(user) ? user.accessToken : false,
    isAuth: isAuthenticated(user),
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