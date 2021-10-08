import React from 'react';
import { AuthProvider } from '../contexts/authContext';
import HomeContent from '../components/HomeContent/HomeContent';

const Homepage = ({ initialState }) => {
  const { isSSRAuth, ssrReAuth } = initialState;

  return (
    <AuthProvider isSSRAuth={isSSRAuth} ssrReAuth={ssrReAuth}>
      <HomeContent />
    </AuthProvider>
  );
};

export default Homepage;
