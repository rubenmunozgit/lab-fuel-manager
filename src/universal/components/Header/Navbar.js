import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useAuth } from '../../contexts/authContext';
import LoginSignUp from './NavLinks/LoginSignUp';
import AuthLinks from './NavLinks/AuthLinks';

const NavBar = () => {
    const { isAuth } = useAuth();

    return (
        <>
            <Navbar bg='success' variant='dark' expand='sm'>
                <Container fluid>
                    <Navbar.Brand href='/'>FuelManager</Navbar.Brand>
                    <div className='col-md-6 d-inline-flex justify-content-end'>
                        {!isAuth && <LoginSignUp />}
                        {isAuth && <AuthLinks />}
                    </div>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
