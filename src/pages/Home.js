import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h1>Hi, I'm <span>Ranjan Kushwaha</span></h1>
        <p>MERN Stack Developer</p>
        <div className="socials">
          <a href="https://github.com/ranjan986?tab=repositories">GitHub</a>
          <a href="https://linkedin.com/in/ranjan-kushwaha-374b00253">LinkedIn</a>
        </div>
        <div className="resume-download">
          <a href="https://portfolio-backend-6bqy.onrender.com/api/resume/download" className='resume-button'>Download Resume</a>
        </div>

      </div>
    </section>
  );
};

export default Home;
