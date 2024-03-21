import React from "react";
import { useNavigate } from 'react-router-dom';
import HotelLogo from "../AboutUsPics/HotelLogo.png";

function NavLogOut() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Here you would clear any auth tokens or user data stored in localStorage/sessionStorage
    localStorage.removeItem('loginInfo'); // Example, adjust according to your app's auth token key
    // And then redirect to the login page or any other page
    navigate('/');
    
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
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
          ></button>
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavLogOut;
