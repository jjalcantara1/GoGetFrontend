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

    const showSubmissionMessage = () => {
        const messageElement = document.createElement('div');
        messageElement.textContent = 'Your response has been successfully submitted. Thank you!';
        messageElement.style.backgroundColor = 'lightblue';
        messageElement.style.color = 'black';
        messageElement.style.padding = '10px';
        messageElement.style.marginTop = '20px';
        messageElement.style.textAlign = 'center';
        messageElement.style.fontFamily = 'Arial';
        messageElement.style.fontWeight = 'bold';

        const formContainer = document.querySelector('.form-container');
        formContainer.appendChild(messageElement);

        setTimeout(() => {
            formContainer.removeChild(messageElement);
        }, 5000); 
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
                showSubmissionMessage();
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
