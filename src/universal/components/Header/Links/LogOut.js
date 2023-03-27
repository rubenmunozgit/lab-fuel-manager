import React from 'react';
import Cookies from 'js-cookie';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../../contexts/authContext';

const LogOut = () => {
    const { logOut } = useAuth();

    const handleLogOut = () => {
        logOut();
        Cookies.remove('token');
        window.location.href = '/';
    };

    return (
        <Button variant='light' onClick={handleLogOut}>
            Log-Out
        </Button>
    );

}

export default LogOut;