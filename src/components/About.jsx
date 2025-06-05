import React from 'react';
import dhruvPhoto from '../assets/images/dhruv-photo.jpeg';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-4 text-center mb-4">
            <img
              src={dhruvPhoto}
              alt="Dhruv Patil"
              className="img-fluid rounded-circle border border-4 border-white shadow-lg"
              style={{ maxWidth: '280px' }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-primary mb-3">About Me</h2>
            <p className="text-muted">
              I'm <strong>Dhruv Patil</strong>, a passionate and results-driven Full Stack Developer with expertise in <strong>Java</strong>, <strong>Spring Boot</strong>, and <strong>React</strong>. I have a strong foundation in <strong>Object-Oriented Programming</strong>, <strong>Data Structures & Algorithms</strong>, and core computer science concepts.
            </p>
            <p className="text-muted">
              I thrive on solving complex problems, building efficient systems, and writing clean, maintainable code. I actively participate in competitive programming and regularly challenge myself with new projects to stay up-to-date with modern development practices.
            </p>
            <p className="text-muted">
              I’m eager to contribute to impactful software solutions and grow alongside a collaborative development team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
