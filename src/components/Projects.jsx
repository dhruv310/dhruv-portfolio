import React from "react";
import { FaFolderOpen, FaCheckCircle } from "react-icons/fa";

const projects = [
  {
    name: "SuperKart E-Commerce Web Application",
    desc: [
      "Developed a full-stack e-commerce platform with user-friendly browsing, cart, and secure purchasing functionality.",
      "Integrated product management for admins to add, update, and remove items.",
      "Implemented secure JWT-based authentication and RESTful APIs for user and order management.",
      "Used Hibernate and MySQL for optimized data operations and persistence.",
      "Built a responsive front end using Angular to enhance user interaction.",
      "Followed clean architecture principles ensuring scalability and maintainability.",
    ],
  },
  {
    name: "Blogging Application",
    desc: [
      "Designed and implemented a RESTful backend for managing blog posts and user roles.",
      "Enabled authenticated users to create, update, and delete posts securely.",
      "Built role-based access control and integrated robust exception handling.",
      "Optimized MySQL queries and API performance to ensure fast response times.",
      "Emphasized modular and maintainable backend code using Spring Boot.",
    ],
  },
];

const ProjectCard = ({ name, desc }) => (
  <div className="card mb-4 shadow-sm border-0">
    <div className="card-body">
      <h5 className="card-title text-primary">
        <FaFolderOpen className="me-2" />
        {name}
      </h5>
      <ul className="list-unstyled mt-3">
        {desc.map((point, idx) => (
          <li key={idx} className="mb-2 text-muted">
            <FaCheckCircle className="text-success me-2" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center text-warning fw-bold mb-5">Projects</h2>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} name={project.name} desc={project.desc} />
      ))}
    </div>
  </section>
);

export default Projects;
