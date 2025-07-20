import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Local Services Booking",
      description: "Service provider and customer portal using MERN + real-time chat.",
      live: "https://local-services-frontend-flax.vercel.app/",
      github: "https://github.com/ranjan986/local-services-frontend.git"
    },
     {
      title: "Instagram Clone",
      description: "Full-featured Instagram clone using MERN stack.",
      live: "#",
      github: "#"
    },
    {
      title: "Free Fire Tournament Website",
      description: "UPI QR code payments and player leaderboard system.",
      live: "https://free-fire-frontend.vercel.app/",
      github: "https://github.com/ranjan986/free-fire-frontend.git"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, idx) => (
          <div className="card" key={idx}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="links">
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
