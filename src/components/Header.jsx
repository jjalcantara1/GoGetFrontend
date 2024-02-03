import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          GoGet
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
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item item1">
              <a className="nav-link" href="#">
                About
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item item2">
              <a className="nav-link" href="selectroom">
                Rooms
              </a>
            </li>
            <li className="nav-item item3">
              <a className="nav-link" href="#">
                FAQs
              </a>
            </li>
            <li className="nav-item item4">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;