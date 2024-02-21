import React from "react";
import "./About.css";
import Header from "../components/Header";
import LandingPageWallpaper from "../LandingPageWallpaper.jpg";
import AboutUs1 from "../AboutUsPics/AboutUs1.jpg";
import AboutUs2 from "../AboutUsPics/AboutUs2.jpg";
import AboutUs3 from "../AboutUsPics/AboutUs3.jpg";

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

function AboutUs() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={AboutStyle}>
        <Header />
      </div>
      <div style={OverlayAboutStyle}>
        <h1 className="About">About Us</h1>
        <div>
          <h3 className="AboutText">
            Welcome to Goget (a room), your cozy retreat nestled in the heart of
            Angeles City, Philippines.
          </h3>
          <h3 className="AboutText">
            At Goget, we believe in providing our guests with an unforgettable
            experience, where comfort meets convenience. Our hotel is designed
            to cater to the needs of both leisure and business travelers alike,
            offering a tranquil escape from the bustling city life while keeping
            you connected to all the excitement and attractions Angeles City has
            to offer.
          </h3>
          <h3 className="AboutText">
            Step into our thoughtfully designed rooms, where modern amenities
            blend seamlessly with warm Filipino hospitality. Each of our rooms
            is tastefully appointed with plush bedding, sleek furnishings, and
            contemporary comforts to ensure a restful night's sleep.
          </h3>
          <h3 className="AboutText">
            Whether you're here for a weekend getaway, a romantic escape, or a
            productive business trip, our dedicated team is committed to making
            your stay unforgettable. From personalized concierge services to
            impeccable attention to detail, we strive to exceed your
            expectations at every turn.
          </h3>
          <h3 className="AboutText">
            Indulge your taste buds at our onsite restaurant, where our talented
            chefs whip up an array of mouthwatering dishes inspired by both
            local flavors and international cuisines. Or unwind with a
            refreshing cocktail at our stylish bar, the perfect spot to relax
            and socialize after a day of exploring.
          </h3>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={AboutUs1} alt="About Us 1" className="AboutImage" />
          <img src={AboutUs2} alt="About Us 2" className="AboutImage" />
          <img src={AboutUs3} alt="About Us 3" className="AboutImage" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
