import React from "react";
import LandingPageWallpaper from "../LandingPageWallpaper.jpg";
import Header from "../components/Header";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { button } from "react-bootstrap";

const LandingStyle = {
  position: "absolute", // Change to absolute
  top: "0px",
  left: "0px",
  right: "0px",
  bottom: "0px",
  backgroundImage: `url(${LandingPageWallpaper})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const OverlayStyle = {
  position: "relative", // Change to relative
  top: "40vh",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 31, 63, 0.5)", // Semi-transparent black background
  color: "#fff", // White text color
  display: "block", // Change from 'flex' to 'block'
  height: "60px", // Add a fixed height
  padding: "70px",
};

function LandingPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={LandingStyle}>
        <Header />
      </div>
      <div style={OverlayStyle}>
        <h1 className="HotelName">GoGet</h1>

        <div className="button">
          <Link to="/booknow" className="bookNow">
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
