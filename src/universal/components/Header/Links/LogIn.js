import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import LoginModal from '../../Modals/Login';

const LogIn = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const showLogin = () => setShowLoginModal(true);
    const hideLogin = () => setShowLoginModal(false);

    return (
        <>
            <Button className='me-2' variant='light' onClick={showLogin}>
                Log-In
            </Button>

            <LoginModal show={showLoginModal} hide={hideLogin} />
        </>
    );

};

export default LogIn;