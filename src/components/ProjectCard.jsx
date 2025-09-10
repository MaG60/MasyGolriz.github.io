// src/components/ProjectCard.jsx
import React from 'react';

// export default function ProjectCard({ projects }) {
//   // if (projects===null )  {
//   //   return <div className="project-card-empty">No projects available.</div>;}
//   // const { title, description, links } = projects;
//   // return (
//   //   <article className="card">
//   //     <h3>{title}</h3>
//   //     <p>{description}</p>
//   //     <p>{links}</p>
//       {/* <p><strong>Tech:</strong> {tech.join(', ')}</p> */}
//       {/* <p>
//         {links?.repo && <a href={links.repo} target="_blank" rel="noreferrer">Repo</a>}
//         {links?.live && (
//           <>
//             {links.repo && " • "}
//             <a href={links.live} target="_blank" rel="noreferrer">Live</a>
//           </>
//         )}
//       </p> */}
//     </article>
//   );
// }

export default function ProjectCard({ projects = [] }) {
  if (!Array.isArray(projects)) {
    return <div>Invalid project data.</div>;
  }

  return (
    <section className="card" aria-label="Projects">
      {projects.map((p, idx) => (
        <article key={idx} className="card">
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          {/* Optional: render links or tech if present */}
          {p.links && <a href={p.links}>Repo</a>}
        </article>
      ))}
    </section>
  );
}