import React from 'react';
import { AuthProvider } from '../contexts/authContext';
import NavBar from '../components/Header/Navbar';

const Dashboard = ({ initialState }) => {
  const { isSSRAuth } = initialState;
  return (
    <AuthProvider isSSRAuth={isSSRAuth}>
      <>
        <NavBar />
        <h1>Dashboard</h1>
      </>
    </AuthProvider>
  );
};

export default Dashboard;
