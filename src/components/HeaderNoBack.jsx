import React from "react";
import "./Header.css";
import HotelLogo from "../AboutUsPics/HotelLogo.png"; // Import your logo file
import { useNavigate } from "react-router-dom"; // Import useNavigate hook to navigate back

function BlankHeader() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle back button click
  const handleBackButtonClick = () => {
    navigate(-1); // Use navigate(-1) to navigate back
  };

  return (
    <nav className="navbar navbar-expand bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={HotelLogo} alt="Hotel Logo" className="hotel-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default BlankHeader;

