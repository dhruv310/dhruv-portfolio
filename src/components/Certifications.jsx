import React from "react";
import { FaLink } from "react-icons/fa";

const achievements = [
  {
    title: "Secured All India Rank 557: In CCAT (C-DAC Common Admission Test), 2024.",
  },
  {
    title: "Secured 1st Ranking: In my institution on GeeksforGeeks for solving DSA problems, 2024.",
  },
  {
    title: "Solved 700+ Problems: Across platforms including LeetCode and GeeksforGeeks, 2024.",
  },
  {
    title: "LeetCode Badge: Received the ‘50 Days Badge 2024’ on LeetCode (top 6.9%).",
  },
  {
    title: "LeetCode Badge: Received the ‘100 Days Badge 2024’ on LeetCode (top 4.2%).",
  },
  {
    title: "Java Certificate - HackerRank",
   
  }
];

const AchieveCard = ({ title, desc, link }) => (
  <div className="card mb-4 shadow-sm border-0">
    <div className="card-body">
      <h5 className="card-title text-primary">🏆 {title}</h5>
      {desc && <p className="card-text">{desc}</p>}
      <div className="d-flex flex-wrap gap-2 mt-3">
        {link && (
          <a
            href={link}
            className="btn btn-sm btn-outline-danger"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink className="me-1" />
            Certificate
          </a>
        )}
      </div>
    </div>
  </div>
);

const Achievements = () => (
  <section id="achievements" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center text-warning fw-bold mb-5">
        Achievements & Certifications
      </h2>
      {achievements.map((achieve, idx) => (
        <AchieveCard
          key={idx}
          title={achieve.title}
          desc={achieve.desc}
          link={achieve.link}
        />
      ))}
    </div>
  </section>
);

export default Achievements;
