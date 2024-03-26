import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../Modal.css';
import { Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function OrderScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [booking, setBooking] = useState({
    booking_id: null,
    start_date: '',
    end_date: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/book/order', {
        name: name,
        email: email,
        contactNumber: contactNumber,
      });
      console.log(response.data); // Log response for debugging
      // Handle success response
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

    const {id} = useParams();
  
    useEffect(() => {
    async function getBooking() {
      try{
        const {data} = await axios.get(`/book/bookingconfirm/${id}`);
        setBooking(data)
      } catch (error) {
        console.error('Error fetching booking data:', error);
      }
    }
    if (id){
      getBooking()
    }
  }, [id]);

  const[modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />
  
        <label htmlFor="contact">Contact Number:</label><br />
        <input type="tel" id="contact" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} pattern="[0-9]{10}" required /><br /><br />
  
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />
        <input type="submit" value="Submit" onClick={openModal} />
      </form>

      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>
              Here are your details:<br />
              Name: {name}<br />
              Email: {email}<br />
              Contact Number: {contactNumber}<br />
              
              Start Date: {booking.start_date}<br />
              End Date: {booking.end_date}<br />

              Are these the correct details?<br />
            </p>
            <span className="close" onClick={closeModal}>Go Back</span><br /><br />
            <Button>
              <Link to="ordersummary/">Confirm</Link>
            </Button>
          </div>
        </div>

      )}
    </div>
  );
}

export default OrderScreen;
