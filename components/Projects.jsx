import React from "react";

function Projects() {
  const projects = [
    { title: "Project 1", description: "Description of project 1." },
    { title: "Project 2", description: "Description of project 2." },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
