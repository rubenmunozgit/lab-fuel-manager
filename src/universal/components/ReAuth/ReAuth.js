import React from 'react';
import {Col, Container, Row, Spinner} from 'react-bootstrap';

export default function ReAuth() {
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md={8}>
                    <Container className='my-5 text-center'>
                        <h4>Something went wrong...</h4>
                        <p>Trying to Authenticate again.</p>
                        <Spinner animation='border' variant='info'/>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
