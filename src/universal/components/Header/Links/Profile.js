import React from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../../contexts/authContext';

const ProfileLink = () => {
    const { user } = useAuth();

    return (
        <Button className='me-2' variant='primary' href='/profile'>
            {user.displayName}
        </Button >
    );
}

export default ProfileLink;