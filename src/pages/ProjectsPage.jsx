import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../data/projects";

function ProjectsPage() {
  return (
    <main>
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

export default ProjectsPage;