import React from "react";


function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            GoGet
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item item1">
                <a class="nav-link" href="#">
                  About
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item item2">
                <a class="nav-link" href="#">
                  Rooms
                </a>
              </li>
              <li class="nav-item item3">
                <a class="nav-link" href="#">
                  FAQs
                </a>
              </li>
              <li class="nav-item item4">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <button type="button" class="btn btn-info">
                Log In
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
