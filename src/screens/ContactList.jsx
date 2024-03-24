import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('/api/contacts/');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {contacts.map(contact => (
          <div key={contact.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Subject:</strong> {contact.subject}</p>
            <p><strong>Message:</strong> {contact.message}</p>
            <Link to={`/reply/${contact.id}`}><button>Reply</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
