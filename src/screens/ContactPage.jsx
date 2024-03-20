// ContactPage.jsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'; // Import Modal component
import './ContactPage.css';

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false); // State to control the modal visibility

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) {
            return; // Prevent multiple submissions
        }

        setIsSubmitting(true);

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
                setShowModal(true); // Show the modal upon successful submission
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                console.error('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeModal = () => {
        setShowModal(false); // Function to close the modal
    };

    return (
        <>
            <Header />
            <div className="form-container">
                <h1 className="ContactTitle">Contact Form</h1>
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
                            {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                        </Button>
                    </div>
                </Form>
            </div>
            {/* Modal for submission message */}
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Submission Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your response has been successfully submitted. Thank you!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ContactPage;
