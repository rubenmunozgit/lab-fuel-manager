import React, { useState } from 'react';
import { Alert, Button, Form, Modal, Spinner } from 'react-bootstrap';
import { useAuth } from '../../contexts/authContext';

const SignupModal = ({ show, hide }) => {
    const [input, setInput] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { emailPassSignUp, updateProfile } = useAuth();

    const handleInputChange = (evt) => {
        const { name, value } = evt.currentTarget;
        setInput((input) => ({
            ...input,
            [name]: value,
        }));
    };

    const handleEmailPassSignUp = async () => {
        const { email, password, confPassword } = input;
        setError('');
        if (password !== confPassword) {
            setError('Password must match');
            return;
        }
        setLoading(true);
        try {
            await emailPassSignUp(email, password);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <Modal show={show} onHide={hide}>
            <Modal.Header>
                <Modal.Title>Sign Up to Fuel Manager</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3' controlId='formEmailSignUp'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Enter email'
                            name='email'
                            onChange={handleInputChange}
                        />
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formPasswordSignUp'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            name='password'
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formConfirmPasswordSignUp'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Repeat Password'
                            name='confPassword'
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
                    onClick={handleEmailPassSignUp}
                >
                    Sign Up
                </Button>
            </Modal.Body>
        </Modal>
    );
};

export default SignupModal;
