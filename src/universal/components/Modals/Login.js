import React, { useState } from 'react';
import { Alert, Button, Form, Modal, Spinner } from 'react-bootstrap';
import google from '../../../../assets/google.svg';
import { useAuth } from '../../contexts/authContext';

const LoginModal = ({ show, hide }) => {
    const [input, setInput] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { emailPassSignIn, google: { googleSignIn } } = useAuth();

    const handleEmailPassSignIn = async () => {
        const { email, password } = input;
        setError('');
        setLoading(true);
        try {
            await emailPassSignIn(email, password);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    const handleInputChange = (evt) => {
        const { name, value } = evt.currentTarget;
        setInput((input) => ({
            ...input,
            [name]: value,
        }));
    };

    return (
        <Modal show={show} onHide={hide}>
            <Modal.Header>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            name='email'
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    {loading && (
                        <div className='d-flex justify-content-center'>
                            <Spinner className='mb-3' animation='grow' variant='success' />
                        </div>
                    )}
                    {error && <Alert variant='warning'>{error}</Alert>}
                </Form>
                <Button
                    variant='primary'
                    className='w-100'
                    onClick={handleEmailPassSignIn}
                >
                    Login
                </Button>
            </Modal.Body>
            <Modal.Footer>
                <p className="text-center">Sign In with</p>
                <button className='btn'>
                    <img
                        src={google}
                        alt='google sign in'
                        onClick={googleSignIn}
                        width='32'
                        height='32'
                        loading='lazy'
                    />
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default LoginModal;
