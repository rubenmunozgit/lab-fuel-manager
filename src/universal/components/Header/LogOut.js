import React from 'react';
import Cookies from 'js-cookie';
import {useAuth} from '../../contexts/authContext';

const LogOut = () => {
    const {logOut} = useAuth();

    const handleLogOut = () => {
        logOut();
        Cookies.remove('token');
        window.location.assign('/');
    };

    const handleDashB = () => {
        window.location.assign('/dashboard');
    };

    return (
        <>
            <button type='button' className='btn btn-primary me-2' onClick={handleDashB}>
                Dashboard
            </button>
            <button
                type='button'
                className='btn bg-white me-2'
                onClick={handleLogOut}
            >
                Log-Out
            </button>
        </>
    );
};

export default LogOut;
