import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure this is imported once in your app

const skillIcons = {
  Java: "bi bi-cup-hot",
  C: "bi bi-terminal",
  JavaScript: "bi bi-filetype-js",
  "Spring Boot": "bi bi-box",
  Hibernate: "bi bi-grid-3x3-gap",
  HTML: "bi bi-filetype-html",
  CSS: "bi bi-filetype-css",
  SQL: "bi bi-database",
  DSA: "bi bi-diagram-3",
  DBMS: "bi bi-hdd-stack",
  OS: "bi bi-windows",
  Git: "bi bi-git",
  GitHub: "bi bi-github",
  Postman: "bi bi-send-check",
  Eclipse: "bi bi-easel2",
  "IntelliJ IDEA": "bi bi-lightbulb",
  "VS Code": "bi bi-code-square",
};

const Skills = () => (
  <section className="container py-5" id="skills">
    <h2 className="mb-4 text-success fw-bold">Technical Skills</h2>
    <ul className="row list-unstyled">
      {Object.keys(skillIcons).map((skill) => (
        <li key={skill} className="col-6 col-md-3 mb-3 d-flex align-items-center">
          <i className={`${skillIcons[skill]} me-2 text-primary`}></i>
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
