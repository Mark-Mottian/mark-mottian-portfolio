import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentText, HiOutlineMail } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function PortfolioSidebar() {
  const resumeUrl = "/documents/01-cv-mark-mottian-june-2026-draft-02.pdf";

  return (
    <aside className="portfolio-sidebar">
      <div className="sidebar-card">
        <div className="sidebar-profile">
          <div className="avatar-wrap">
            <img
              src="/media/profile/mark-mottian.jpg"
              alt="Mark Mottian"
              className="avatar"
            />
          </div>

          <h1>Mark Mottian</h1>
          <p>Junior MERN Stack Developer</p>
        </div>

        <hr />

        <section className="sidebar-section">
          <h2>Menu</h2>

          <nav className="sidebar-nav">
            <NavLink to="/" end>
              Overview
            </NavLink>

            <NavLink to="/projects">Projects</NavLink>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </section>

        <section className="sidebar-section">
          <h2>Contact</h2>

          <ul className="sidebar-list">
            <li>
              <span>
                <HiOutlineMail aria-hidden="true" />
                Email
              </span>

              <a href="mailto:mark.mottian@gmail.com">mark.mottian@gmail.com</a>
            </li>

            <li>
              <span>
                <FaGithub aria-hidden="true" />
                GitHub
              </span>

              <a
                href="https://github.com/Mark-Mottian"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Mark-Mottian
              </a>
            </li>

            <li>
              <span>
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </span>

              <a
                href="https://www.linkedin.com/in/mark-mottian"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/mark-mottian
              </a>
            </li>

            <li>
              <span>
                <HiOutlineDocumentText aria-hidden="true" />
                Resume
              </span>

              <a href={resumeUrl} target="_blank" rel="noreferrer">
                Open resume
              </a>
            </li>
          </ul>
        </section>

        <section className="sidebar-section">
          <h2>Primary stack</h2>

          <div className="sidebar-tags">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
          </div>
        </section>

        <section className="sidebar-section">
          <h2>Supporting</h2>

          <div className="sidebar-tags">
            <span>Java</span>
            <span>SQL</span>
            <span>Docker</span>
            <span>Render</span>
          </div>
        </section>
      </div>
    </aside>
  );
}

export default PortfolioSidebar;