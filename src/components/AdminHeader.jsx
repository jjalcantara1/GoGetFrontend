import React from "react";

function AdminHeader() {
  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout logic goes here');
  };

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
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}

export default AdminHeader;
