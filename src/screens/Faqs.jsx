import React from "react";
import "./About.css";
import Header from "../components/Header";
import LandingPageWallpaper from "../LandingPageWallpaper.jpg";
import AboutUs4 from "../AboutUsPics/AboutUs4.jpg";
import AboutUs5 from "../AboutUsPics/AboutUs5.jpg";
import AboutUs6 from "../AboutUsPics/AboutUs6.jpg";

const AboutStyle = {
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

const OverlayAboutStyle = {
  position: "relative", // Change to relative
  top: "10vh",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0, 31, 63, 0.5)", // Semi-transparent black background
  color: "#fff", // White text color
  display: "block", // Change from 'flex' to 'block'
  height: "600px", // Add a fixed height
  padding: "70px",
};

function Faqs() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={AboutStyle}>
        <Header />
      </div>
      <div style={OverlayAboutStyle}>
        <div>
          <h1 className="About">FAQs</h1>
        </div>
        <div>
          <h2 className="questions">
            What are the check-in and check-out times at your hotel?
          </h2>
          <h2 className="AboutText">
            Our standard check-in time is at 3:00 PM, and check-out is at 12:00
            PM. Early check-in and late check-out options may be available upon
            request and are subject to availability. Please contact our front
            desk for more information
          </h2>
          <h2 className="questions">Do you offer airport shuttle services?</h2>
          <h2 className="AboutText">
            Yes, we do offer airport shuttle services for our guests. Kindly
            provide us with your flight details at least 24 hours prior to your
            arrival, and our team will make arrangements accordingly. Additional
            charges may apply, so please inquire with our reservation desk for
            pricing and availability.
          </h2>
          <h2 className="questions">
            Is Wi-Fi available at your hotel, and is it complimentary?
          </h2>
          <h2 className="AboutText">
            Yes, complimentary Wi-Fi is available throughout the hotel premises,
            including guest rooms, restaurants, and public areas. Enjoy
            high-speed internet access during your stay to stay connected with
            loved ones or to catch up on work.
          </h2>
          <h2 className="questions">Are pets allowed at your hotel?</h2>
          <h2 className="AboutText">
            Unfortunately, we do not allow pets at our hotel, with the exception
            of service animals for guests with disabilities. We apologize for
            any inconvenience this may cause and recommend contacting local
            pet-friendly accommodations for your furry friends.
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={AboutUs4} alt="About Us 4" className="FaqsImage" />
          <img src={AboutUs5} alt="About Us 5" className="FaqsImage" />
          <img src={AboutUs6} alt="About Us 6" className="FaqsImage" />
        </div>
      </div>
    </div>
  );
}

export default Faqs;
