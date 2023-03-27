import React from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../../contexts/authContext';

const ProfileLink = () => {
    const { user } = useAuth();

    const displayName = user?.displayName || user?.email;

    return (
        <Button className='me-2' variant='primary' href='/profile'>
            {displayName}
        </Button >
    );
}

export default ProfileLink;