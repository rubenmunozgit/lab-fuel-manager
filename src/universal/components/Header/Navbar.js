import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useAuth } from '../../contexts/authContext';
import LoginSignUp from './LoginSignUp';
import LogOut from './LogOut';

const NavBar = () => {
  const { isAuth } = useAuth();

  return (
    <>
      <Navbar bg='success' variant='dark' expand='sm'>
        <Container fluid>
          <Navbar.Brand href='/'>FuelManager</Navbar.Brand>
          <div className='col-md-3 text-end'>
            {!isAuth && <LoginSignUp />}
            {isAuth && <LogOut />}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
