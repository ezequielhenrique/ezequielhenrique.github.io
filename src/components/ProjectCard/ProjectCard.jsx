import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image-container">
        <img
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          className="project-image"
        />

        <span className="project-number">
          {String(project.id).padStart(2, '0')}
        </span>
      </div>

      <div className="project-content">
        <span className="project-category">
          {project.category}
        </span>

        <h3 className="project-title">
          {project.title}
        </h3>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-technologies">
          {project.technologies.map((technology) => (
            <span
              className="project-technology"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub />
              GitHub
              <span>↗</span>
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaExternalLinkAlt />
              Live Demo
              <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
