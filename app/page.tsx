'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </header>

      <main className="main-content">
        <section className="intro">
          <h1 className="title">Welcome to Next.js</h1>
          <p className="description">
            Build blazing fast websites and apps with React and Next.js.
            Get started with the best developer experience.
          </p>
        </section>

        <section className="cta">
          <div className="cta-buttons">
            <a
              className="cta-button deploy-btn"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy Now
            </a>
            <a
              className="cta-button docs-btn"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the Docs
            </a>
          </div>
        </section>

        <section className="resources">
          <div className="resources-links">
            <a
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              Learn Next.js
            </a>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              Next.js Documentation
            </a>
            <a
              href="https://vercel.com/templates?framework=next.js"
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              Vercel Templates
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">Built with ❤️ by the Next.js team</p>
        </div>
      </footer>

      <style jsx>{`
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: #fafafa;
          padding: 2rem;
          font-family: 'Helvetica', sans-serif;
        }

        .header {
          margin-bottom: 2rem;
        }

        .logo {
          filter: invert(1);
        }

        .main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 3rem;
        }

        .intro {
          margin-bottom: 2rem;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 1rem;
        }

        .description {
          font-size: 1.125rem;
          color: #555;
          max-width: 700px;
        }

        .cta {
          margin-top: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        .cta-button {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-size: 1rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .deploy-btn {
          background-color: #000;
          color: #fff;
        }

        .deploy-btn:hover {
          background-color: #333;
        }

        .docs-btn {
          background-color: #0070f3;
          color: #fff;
        }

        .docs-btn:hover {
          background-color: #005bb5;
        }

        .resources {
          margin-top: 3rem;
        }

        .resources-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .resource-link {
          color: #0070f3;
          font-size: 1.125rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .resource-link:hover {
          color: #005bb5;
        }

        .footer {
          margin-top: 5rem;
          padding: 1rem;
          background-color: #333;
          color: #fff;
          width: 100%;
          text-align: center;
        }

        .footer-text {
          font-size: 1rem;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
