import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure this is imported once globally

const Hero = () => (
    <section
        id="hero"
        className="bg-primary text-white text-center d-flex flex-column justify-content-center align-items-center py-5 px-3"
        style={{ minHeight: "30vh" }}
    >
        <h1 className="display-4 fw-bold mb-3">
            Hi, I'm <span className="text-warning">Dhruv Patil</span>
        </h1>
        <p className="lead mb-4">
            Full Stack Developer | React & Spring Boot | DSA Enthusiast
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
                href="mailto:dhruvpatil31.2003@gmail.com"
                className="btn btn-outline-light btn-lg d-flex align-items-center gap-2"
                aria-label="Send Email"
            >
                <i className="bi bi-envelope-fill"></i> Email
            </a>
            <a
                href="https://linkedin.com/in/dhruv-patil-2003ja"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg d-flex align-items-center gap-2"
                aria-label="LinkedIn Profile"
            >
                <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a
                href="https://leetcode.com/u/dhruvpatil31/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg d-flex align-items-center gap-2"
                aria-label="LeetCode Profile"
            >
                <i className="bi bi-code-slash"></i> LeetCode
            </a>
            <a
                href="https://www.geeksforgeeks.org/user/dhruvpatij1at/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg d-flex align-items-center gap-2"
                aria-label="GeeksforGeeks Profile"
            >
                <i className="bi bi-book-half"></i> GFG
            </a>
        </div>
    </section>
);

export default Hero;
