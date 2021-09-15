import React from 'react';
import { AuthProvider } from '../contexts/authContext';
import HomeContent from '../components/HomeContent/HomeContent';

const Homepage = ({ initialState }) => {
  const { isSSRAuth } = initialState;

  return (
    <AuthProvider isSSRAuth={isSSRAuth}>
      <HomeContent />
    </AuthProvider>
  );
};

export default Homepage;
