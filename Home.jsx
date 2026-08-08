import { Link } from "react-router-dom";
import heroBg from "../assets/hero-bg.png";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})`,
        }}
      >
        <div className="overlay">

          <h1>Build Your Professional Developer Portfolio</h1>

          <p>
            Create, manage and showcase your skills, projects,
            achievements and portfolio with CodeFolio.
          </p>

          <div className="hero-buttons">

            <Link to="/login">
              <button className="btn btn1">
                Get Started
              </button>
            </Link>

            <Link to="/portfolio">
              <button className="btn btn2">
                View Portfolio
              </button>
            </Link>

          </div>

        </div>
      </section>

      <section className="features">

        <h2>Why Choose CodeFolio?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>💻 Skills</h3>
            <p>Showcase your technical skills professionally.</p>
          </div>

          <div className="feature-card">
            <h3>📂 Projects</h3>
            <p>Display your best React and Full Stack projects.</p>
          </div>

          <div className="feature-card">
            <h3>📄 Portfolio</h3>
            <p>Create your own professional portfolio website.</p>
          </div>

          <div className="feature-card">
            <h3>🚀 Career</h3>
            <p>Get noticed by recruiters and companies.</p>
          </div>

        </div>

      </section>

      <section className="about">

        <h2>About CodeFolio</h2>

        <p>
          CodeFolio is a modern portfolio builder designed for
          students and developers to build professional
          portfolio websites easily.
        </p>

      </section>

    </div>
  );
}

export default Home;