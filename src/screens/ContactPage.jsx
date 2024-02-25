import React from 'react';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ContactPage.css';

function ContactPage() {
    return (
        <>
            <Header />

            <div className="form-container">
                <Form>
                    <Form.Group className="mb-5" controlId="formBasicName">
                        <Form.Label className='nameStyle'>Name</Form.Label>
                        <Form.Control type="name" placeholder=" " />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className='nameStyle'>Email</Form.Label>
                        <Form.Control type="email" placeholder=" " />
                    </Form.Group>
                    
                    <Form.Group className="mb-5" controlId="formBasicSubject">
                        <Form.Label className='nameStyle'>Subject</Form.Label>
                        <Form.Control type="subject" placeholder=" " />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicMessage">
                        <Form.Label className='nameStyle'>Message</Form.Label>
                        <Form.Control type="message" placeholder=" " />
                    </Form.Group>

                    <div className="submitButtonContainer">
                        <Button className='Namestyle' variant="primary" type="submit">
                            SUBMIT
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default ContactPage;
