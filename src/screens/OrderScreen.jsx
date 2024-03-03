import React, {useState, useEffect} from 'react';
import axios from 'axios';

function OrderScreen(){
  const [name, setName] = useState([])
  const [email, setEmail] = useState([])
  const [contact_number, setContactNumber] = useState([])
  useEffect(() => {
    async function CreateOrder(){
      const {data} = await axios.post(
        'http://127.0.0.1:8000/book/',
        { 
          'name' : name,
          'email' : email,
          'contact number' : contact_number
        },
      )
      setName(data)
      setEmail(data)
      setContactNumber(data)

    }
    CreateOrder()
  }, [])
  return(
    <>
      <div>
        <form>
          <label for="name">Name:</label><br />
          <input type="text" id="name" name={name} onSubmit={setName} required /><br /><br />
    
          <label for="contact">Contact Number:</label><br />
          <input type="tel" id="contact" name={contact_number} onSubmit={setContactNumber} pattern="[0-9]{10}" required /><br /><br />
    
          <label for="email">Email:</label><br />
          <input type="email" id="email" name={email} onSubmit={setEmail} required /><br /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
 
  )
}

export default OrderScreen
