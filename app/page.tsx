'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="page-container">
      <header className="header">
        <div className="logo">
          <h1>John Doe</h1>
          <p>Software Engineer | Web Developer</p>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Intro Section */}
        <section id="intro" className="intro">
          <div className="intro-content">
            <h2>Welcome to My Portfolio</h2>
            <p>
              I create innovative digital solutions with a focus on performance and user experience. Let's build something great together.
            </p>
            <a href="#projects" className="btn-primary">See My Work</a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects">
          <h2 className="section-title">Featured Projects</h2>
          <div className="project-cards">
            <div className="project-card">
              <div className="project-image">
                <Image src="/project1.png" alt="Project 1" width={500} height={300} />
              </div>
              <h3>Project 1</h3>
              <p>A cutting-edge e-commerce platform with real-time updates.</p>
              <a href="#" className="btn-secondary">View Project</a>
            </div>

            <div className="project-card">
              <div className="project-image">
                <Image src="/project2.png" alt="Project 2" width={500} height={300} />
              </div>
              <h3>Project 2</h3>
              <p>Fully responsive web app with dynamic data visualizations.</p>
              <a href="#" className="btn-secondary">View Project</a>
            </div>

            <div className="project-card">
              <div className="project-image">
                <Image src="/project3.png" alt="Project 3" width={500} height={300} />
              </div>
              <h3>Project 3</h3>
              <p>A modern SaaS application with a clean, minimalist UI.</p>
              <a href="#" className="btn-secondary">View Project</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate developer with 5+ years of experience building beautiful, performant web applications.
                I specialize in full-stack development and love solving complex problems with elegant solutions.
              </p>
              <h3>Skills & Technologies:</h3>
              <ul>
                <li>JavaScript (React, Node.js)</li>
                <li>HTML, CSS (SASS, Tailwind CSS)</li>
                <li>Database (SQL, MongoDB)</li>
                <li>Version Control (Git, GitHub)</li>
                <li>Cloud (AWS, Google Cloud)</li>
                <li>Agile Development</li>
              </ul>
            </div>
            <div className="about-image">
              <Image src="/profile.jpg" alt="Profile" width={300} height={300} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <h2 className="section-title">Contact</h2>
          <p>If you want to collaborate or just say hi, feel free to reach out!</p>
          <a href="mailto:developer@example.com" className="btn-primary">Contact Me</a>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 John Doe | All Rights Reserved</p>
        </div>
      </footer>

      <style jsx>{`
        /* Page Container */
        .page-container {
          font-family: 'Arial', sans-serif;
          background-color: #f7f7f7;
          color: #333;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #222;
          color: white;
          padding: 2rem 4rem;
        }

        .logo h1 {
          margin: 0;
          font-size: 2.5rem;
          font-weight: 700;
        }

        .logo p {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 400;
        }

        .navbar ul {
          display: flex;
          list-style: none;
        }

        .navbar ul li {
          margin-right: 3rem;
        }

        .navbar ul li a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          font-size: 1rem;
        }

        .navbar ul li a:hover {
          color: #00bcd4;
        }

        /* Intro Section */
        .intro {
          background: linear-gradient(135deg, #00bcd4, #2196f3);
          color: white;
          padding: 6rem 4rem;
          text-align: center;
        }

        .intro h2 {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .intro p {
          font-size: 1.5rem;
          max-width: 800px;
          margin: 0 auto;
          margin-bottom: 2rem;
        }

        .btn-primary {
          background-color: #00bcd4;
          color: white;
          padding: 1rem 2rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        .btn-primary:hover {
          background-color: #0097a7;
        }

        /* Projects Section */
        .projects {
          padding: 6rem 4rem;
          background-color: white;
        }

        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 600;
        }

        .project-cards {
          display: flex;
          justify-content: space-between;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .project-card {
          background-color: #fff;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          overflow: hidden;
          width: 30%;
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-card h3 {
          padding: 1.5rem;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .project-card p {
          padding: 0 1.5rem;
          font-size: 1rem;
          color: #555;
        }

        .btn-secondary {
          display: block;
          text-align: center;
          padding: 1rem;
          margin: 1.5rem 0 2rem;
          background-color: #2196f3;
          color: white;
          border-radius: 25px;
          text-decoration: none;
        }

        /* About Section */
        .about {
          padding: 6rem 4rem;
          background-color: #f7f7f7;
        }

        .about-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .about-text {
          width: 50%;
        }

        .about-text p {
          font-size: 1.125rem;
          color: #555;
          line-height: 1.6;
        }

        .about-image {
          width: 40%;
          border-radius: 50%;
          overflow: hidden;
        }

        /* Contact Section */
        .contact {
          padding: 6rem 4rem;
          text-align: center;
        }

        /* Footer */
        .footer {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 2rem;
        }

        .footer-content {
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}
