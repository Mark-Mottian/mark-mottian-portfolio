import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  const stackItems = project.stackSignal.split(", ");

  return (
    <article className="project-card">
      <div className="project-banner">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="project-banner-image"
        />
      </div>

      <div className="project-card-body">
        <span className="project-category">{project.category}</span>

        <h3>{project.title}</h3>

        <p className="project-one-liner">{project.oneLiner}</p>

        <div className="stack-line">
          <span>Stack</span>

          <div className="stack-chip-group">
            {stackItems.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </div>

        <div className="project-built">
          <h4>What I built</h4>

          <ul>
            {project.cardHighlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
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

          <Button
            as={Link}
            to={`/projects/${project.slug}`}
            variant="outline-primary"
          >
            Case Study
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;