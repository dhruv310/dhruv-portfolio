import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  SiReact,
  SiDocker,
  SiMongodb,
  SiLinux,
} from "react-icons/si";  

const skillIcons = {
  Java: <i className="bi bi-cup-hot text-primary me-2"></i>,
  C: <i className="bi bi-terminal text-primary me-2"></i>,
  JavaScript: <i className="bi bi-filetype-js text-primary me-2"></i>,
  "Spring Boot": <i className="bi bi-box text-primary me-2"></i>,
  Hibernate: <i className="bi bi-grid-3x3-gap text-primary me-2"></i>,
  HTML: <i className="bi bi-filetype-html text-primary me-2"></i>,
  CSS: <i className="bi bi-filetype-css text-primary me-2"></i>,
  SQL: <i className="bi bi-database text-primary me-2"></i>,
  DSA: <i className="bi bi-diagram-3 text-primary me-2"></i>,
  DBMS: <i className="bi bi-hdd-stack text-primary me-2"></i>,
  OS: <i className="bi bi-windows text-primary me-2"></i>,
  Git: <i className="bi bi-git text-primary me-2"></i>,
  GitHub: <i className="bi bi-github text-primary me-2"></i>,
  Postman: <i className="bi bi-send-check text-primary me-2"></i>,
  Eclipse: <i className="bi bi-easel2 text-primary me-2"></i>,
  "IntelliJ IDEA": <i className="bi bi-lightbulb text-primary me-2"></i>,
  "VS Code": <i className="bi bi-code-square text-primary me-2"></i>,
  React: <SiReact className="text-primary me-2" />,
  Docker: <SiDocker className="text-primary me-2" />,
  MongoDB: <SiMongodb className="text-primary me-2" />,
  Linux: <SiLinux className="text-primary me-2" />,
};

const Skills = () => (
  <section className="container py-5" id="skills">
    <h2 className="mb-4 text-success fw-bold">Technical Skills</h2>
    <ul className="row list-unstyled">
      {Object.entries(skillIcons).map(([skill, icon]) => (
        <li key={skill} className="col-6 col-md-3 mb-3 d-flex align-items-center">
          {icon}
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
