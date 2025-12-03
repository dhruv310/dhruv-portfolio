import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-3 shadow-sm">
    <div className="container-fluid">
      <a className="navbar-brand fw-bold fs-4" href="#">
        Dhruv Patil
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
          {/* Add more nav items here if needed */}
          <li className="nav-item">
            <a
              href="https://drive.google.com/file/d/1DxZ98z5Wv_C69xqGVPwIgKNclFthdQSZ/view?usp=sharing"
              className="btn btn-outline-light"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
