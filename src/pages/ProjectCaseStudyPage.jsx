import { Button, Carousel, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import { projects } from "../data/projects";

function ProjectCaseStudyPage() {
  const { projectSlug } = useParams();
  const project = projects.find((item) => item.slug === projectSlug);

  if (!project) {
    return (
      <main>
        <section className="content-card">
          <h1>Project not found</h1>
          <p>The project you are looking for does not exist.</p>
          <Button as={Link} to="/projects" variant="primary">
            Back to Projects
          </Button>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="content-card">
        <p className="section-eyebrow">Case study</p>

        <h1 className="case-title">{project.title}</h1>

        <p className="case-lead">{project.oneLiner}</p>

        <div className="case-summary-grid">
          <div>
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{project.status}</strong>
          </div>

          <div>
            <span>Focus</span>
            <strong>{project.focus}</strong>
          </div>
        </div>

        <div className="project-actions">
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              variant="primary"
            >
              Live Demo
            </Button>
          )}

          <Button
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline-dark"
          >
            GitHub
          </Button>

          <Button as={Link} to="/projects" variant="outline-primary">
            All Projects
          </Button>
        </div>
      </section>

      <section className="content-card">
        <div className="case-media-wrapper">
          {project.video && (
            <video className="case-study-video" controls poster={project.image}>
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}

          {!project.video && (
            <img
              src={project.heroImage}
              alt={`${project.title} screenshot`}
              className="case-study-image"
            />
          )}
        </div>

        <div className="case-section">
          <h2>Summary</h2>
          <p>{project.value}</p>
        </div>

        <div className="case-section">
          <h2>What I built</h2>

          <ul>
            {project.details.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-card">
        <h2 className="content-title">Technical decisions</h2>

        <div className="decision-list">
          {project.technicalDecisions.map((decision) => (
            <article key={decision.title} className="decision-card">
              <h3>{decision.title}</h3>
              <p>{decision.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-card">
        <h2 className="content-title">Challenges</h2>

        <div className="decision-list">
          {project.challenges.map((challenge) => (
            <article key={challenge.title} className="decision-card">
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-card">
        <h2 className="content-title">Screenshots</h2>

        <Carousel className="screenshot-carousel" interval={null}>
          {project.screenshots.map((screenshot) => (
            <Carousel.Item key={screenshot.src}>
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="carousel-screenshot"
              />

              <Carousel.Caption>
                <p>{screenshot.caption}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      <section className="content-card">
        <Row className="g-4">
          <Col lg={8}>
            <h2 className="content-title">What I would improve next</h2>
            <p>{project.nextSteps}</p>
          </Col>

          <Col lg={4}>
            <h2 className="content-title">Stack</h2>

            <div className="tech-tags">
              {project.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </Col>
        </Row>
      </section>
    </main>
  );
}

export default ProjectCaseStudyPage;