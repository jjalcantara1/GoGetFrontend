import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./HotelDetails.css";
import BlankHeader from "../components/BlankHeader";

const HotelDetails = () => {
  const [hotel, setHotel] = useState({
    name: "",
    address: "",
    description: "",
    contact_no: "",
    email: "",
    image: null, // Assuming you will handle image as a file
  });
  const navigate = useNavigate();
  //   const { id } = useParams(); // If you have multiple hotels

  useEffect(() => {
    // Fetch the hotel details
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/hotels/1/`); // Adjust for single hotel
        setHotel(response.data);
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };

    fetchHotelDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (const key in hotel) {
      if (key !== "image") {
        formData.append(key, hotel[key]);
      }
    }
    if (hotel.image instanceof File) {
      formData.append("image", hotel.image);
    }
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/hotels/1/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Hotel updated successfully!");
      navigate("");
    } catch (error) {
      console.error("Error updating hotel:", error);
      alert("Failed to update hotel");
    }
  };

  // If you need to handle image changes
  const handleImageChange = (e) => {
    setHotel({ ...hotel, image: e.target.files[0] });
  };

  return (
    
    <>
    <BlankHeader />
    <div>
      <h2 className="hoteldetailstitle">Edit Hotel Details</h2>
      <div className="hotel-display">
        {/* Edit form */}
        <form onSubmit={handleSubmit}>
          {/* Form inputs */}
          <div>
            <h3>Updated Hotel Details:</h3>
            <div className="form-group">
              <div className="input-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  className="input-field"
                  name="name"
                  value={hotel.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  className="input-field"
                  name="address"
                  value={hotel.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  className="input-field"
                  name="description"
                  value={hotel.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="contact_no">Contact Number:</label>
                <input
                  type="text"
                  id="contact_no"
                  className="input-field"
                  name="contact_no"
                  value={hotel.contact_no}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  name="email"
                  value={hotel.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="image">Image:</label>
                {hotel.image && (
                  <img
                    src={hotel.image}
                    alt="Hotel"
                    style={{ maxWidth: "200px" }}
                  />
                )}
                <input
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <br />
            <button type="submit">Update Hotel</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default HotelDetails;
