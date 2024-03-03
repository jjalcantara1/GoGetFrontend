import React, { useState } from 'react';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ContactPage.css';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Email sent successfully');
                // Optionally, you can redirect the user or show a success message
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <>
            <Header />

            <div className="form-container">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-5" controlId="formBasicName">
                        <Form.Label className='nameStyle'>Name</Form.Label>
                        <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className='nameStyle'>Email</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
                    </Form.Group>
                    
                    <Form.Group className="mb-5" controlId="formBasicSubject">
                        <Form.Label className='nameStyle'>Subject</Form.Label>
                        <Form.Control type="text" name="subject" value={formData.subject} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group className="mb-5" controlId="formBasicMessage">
                        <Form.Label className='nameStyle'>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} />
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