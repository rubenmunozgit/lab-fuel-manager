import React from 'react';
import { AuthProvider } from '../contexts/authContext';
import DashContent from '../components/DashContent/DashContent';

const Dashboard = ({ initialState }) => {
  const { isSSRAuth } = initialState;
  return (
    <AuthProvider isSSRAuth={isSSRAuth}>
      <DashContent />
    </AuthProvider>
  );
};

export default Dashboard;
