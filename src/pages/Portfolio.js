import React from 'react';
import './Portfolio.css'; // For updated styling

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Welcome to My Portfolio</h1>
        <p>Your Name | DSA Expert & Software Engineer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate software engineer with expertise in Data Structures
          and Algorithms (DSA). I have worked with top tech companies like Google,
          Amazon, and Microsoft. This portfolio showcases my journey and projects.
        </p>
      </section>

      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-cards">
          <div className="card">
            <h3>Awesome Project 1</h3>
            <p>A brief description of Awesome Project 1.</p>
            <a href="https://github.com/yourgithub/awesome-project" target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
          </div>
          <div className="card">
            <h3>Awesome Project 2</h3>
            <p>A brief description of Awesome Project 2.</p>
            <a href="https://github.com/yourgithub/another-project" target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>
          You can reach out to me via <a href="mailto:youremail@example.com" className="email">email</a> or on LinkedIn:
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="linkedin">LinkedIn Profile</a>
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Your Name</p>
      </footer>
    </div>
  );
};

export default Portfolio;
