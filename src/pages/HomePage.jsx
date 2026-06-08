import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../data/projects";

function HomePage() {
  return (
    <main>
      <section className="content-card">
        <SectionHeader
          eyebrow="Overview"
          title="Junior MERN Stack Developer"
          description="I build full-stack JavaScript applications with React, Node.js, Express and MongoDB, with supporting Java and SQL experience."
        />

        <div className="summary-grid">
          <div>
            <span>Primary stack</span>
            <strong>MERN</strong>
          </div>

          <div>
            <span>Supporting</span>
            <strong>Java + SQL</strong>
          </div>

          <div>
            <span>Projects</span>
            <strong>Live apps, GitHub repos and case studies</strong>
          </div>
        </div>
      </section>

      <section className="content-card">
        <SectionHeader
          eyebrow="Technical skills"
          title="Technical Skills"
          description="Technologies I have used across completed full-stack, database and deployment projects."
        />

        <div className="skills-panel">
          <div className="primary-skill-row">
            <div>
              <h3>Primary stack</h3>
              <p>My main full-stack JavaScript focus.</p>
            </div>

            <div className="skill-chip-group">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
          </div>

          <div className="skill-category-grid">
            <article className="skill-chip-card">
              <h3>Frontend</h3>

              <div className="skill-chip-group">
                <span>JavaScript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
                <span>Formik</span>
                <span>Responsive design</span>
              </div>
            </article>

            <article className="skill-chip-card">
              <h3>Backend</h3>

              <div className="skill-chip-group">
                <span>REST APIs</span>
                <span>JWT authentication</span>
                <span>Middleware</span>
                <span>Nodemailer</span>
                <span>Java</span>
                <span>JDBC</span>
              </div>
            </article>

            <article className="skill-chip-card">
              <h3>Databases</h3>

              <div className="skill-chip-group">
                <span>MongoDB</span>
                <span>Mongoose</span>
                <span>MariaDB</span>
                <span>SQL</span>
                <span>Relational design</span>
                <span>Foreign keys</span>
              </div>
            </article>

            <article className="skill-chip-card">
              <h3>Tools & Deployment</h3>

              <div className="skill-chip-group">
                <span>Git</span>
                <span>GitHub</span>
                <span>Docker</span>
                <span>Docker Compose</span>
                <span>Render</span>
                <span>Postman</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="content-card">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Projects"
          description="Full-stack, database and API integration projects I have built and deployed."
        />

        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;