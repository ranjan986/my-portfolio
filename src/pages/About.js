import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>Hello! I’m <strong>Ranjan Kushwaha</strong>, a passionate MERN Stack Developer based in India.</p>
      <p>I love building web apps with modern UI, robust backend, and MongoDB as a database. I'm always ready to learn new technologies and improve my skills.</p>

      <div className="skills">
        <h3>Skills</h3>
        <ul>
          <li>HTML / CSS / JavaScript</li>
          <li>React.js / Redux</li>
          <li>Node.js / Express.js</li>
          <li>MongoDB / Mongoose</li>
          <li>Git / GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
