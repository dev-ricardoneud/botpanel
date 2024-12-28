'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <h1>Dev Portfolio</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Intro Section */}
        <section id="intro" className="intro">
          <h2>Welcome to My Developer Portfolio</h2>
          <p>I am a passionate developer who builds innovative and efficient solutions.</p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <h2>My Projects</h2>
          <div className="project-cards">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Brief description of Project 1.</p>
              <a href="#" className="btn">View Project</a>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>Brief description of Project 2.</p>
              <a href="#" className="btn">View Project</a>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>Brief description of Project 3.</p>
              <a href="#" className="btn">View Project</a>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="about">
          <h2>About Me</h2>
          <p>
            I am a web developer with experience in front-end and back-end technologies.
            My expertise lies in building dynamic web applications with a focus on user experience and performance.
          </p>
          <h3>Skills:</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML/CSS</li>
            <li>SQL</li>
            <li>Git</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <h2>Contact</h2>
          <p>If you'd like to work together or have any questions, feel free to reach out!</p>
          <a href="mailto:developer@example.com" className="btn">Contact Me</a>
        </section>
      </main>

      <footer className="footer">
        <div>
          <p>&copy; 2024 Developer Portfolio</p>
        </div>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Arial', sans-serif;
          color: #333;
          background-color: #fafafa;
          margin: 0;
          padding: 0;
        }

        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem;
          background-color: #333;
          color: #fff;
        }

        .logo h1 {
          margin: 0;
          font-size: 2rem;
        }

        .navbar ul {
          list-style: none;
          display: flex;
          gap: 2rem;
        }

        .navbar ul li a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
        }

        .navbar ul li a:hover {
          text-decoration: underline;
        }

        /* Main Content */
        main {
          padding: 3rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Intro Section */
        .intro {
          text-align: center;
          margin-bottom: 3rem;
        }

        .intro h2 {
          font-size: 2.5rem;
          color: #333;
        }

        .intro p {
          font-size: 1.2rem;
          color: #555;
        }

        /* Projects Section */
        .projects {
          margin-bottom: 3rem;
        }

        .projects h2 {
          font-size: 2.5rem;
          color: #333;
          text-align: center;
          margin-bottom: 2rem;
        }

        .project-cards {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
        }

        .project-card {
          background-color: #fff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 30%;
          text-align: center;
        }

        .project-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .project-card p {
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }

        .btn {
          background-color: #0070f3;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          text-align: center;
        }

        .btn:hover {
          background-color: #005bb5;
        }

        /* About Section */
        .about {
          margin-bottom: 3rem;
        }

        .about h2 {
          font-size: 2.5rem;
          color: #333;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .about p {
          font-size: 1.125rem;
          color: #555;
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .about ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        .about ul li {
          font-size: 1rem;
          color: #333;
        }

        /* Contact Section */
        .contact {
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact h2 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .contact p {
          font-size: 1.125rem;
          color: #555;
          margin-bottom: 1.5rem;
        }

        /* Footer */
        .footer {
          background-color: #333;
          color: #fff;
          text-align: center;
          padding: 2rem;
        }

        .footer p {
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
