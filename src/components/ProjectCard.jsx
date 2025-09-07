// src/components/ProjectCard.jsx
import React from 'react';

export default function ProjectCard({ project }) {
  const { title, description, tech, links } = project;
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech.join(', ')}</p>
      <p>
        {links?.repo && <a href={links.repo} target="_blank" rel="noreferrer">Repo</a>}
        {links?.live && (
          <>
            {links.repo && " • "}
            <a href={links.live} target="_blank" rel="noreferrer">Live</a>
          </>
        )}
      </p>
    </article>
  );
}