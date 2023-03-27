import React from 'react';
import { AuthProvider } from '../contexts/authContext';
import DashContent from '../components/DashContent/DashContent';

const Dashboard = ({ initialState }) => {
    const { isSSRAuth, user } = initialState;
    return (
        <AuthProvider isSSRAuth={isSSRAuth} user={user}>
            <DashContent />
        </AuthProvider>
    );
};

export default Dashboard;
