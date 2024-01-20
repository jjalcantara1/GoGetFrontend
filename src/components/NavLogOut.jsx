import React from "react";
import { Link } from 'react-router-dom';

function NavLogOut() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
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
          ></button>
          <Link to="/">
            <button className="btn btn-outline-light">
              Logout
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavLogOut;
