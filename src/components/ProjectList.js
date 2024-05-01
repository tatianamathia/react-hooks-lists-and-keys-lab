import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const ProjectItems = projects.map((projecct) =>(
    <ProjectItem
    key={projects.id}
    name={projecct.name}          
    about={projecct.about}
    technologies={projecct.technologies}
   />
  ));
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{ ProjectItems}</div>
    </div>
  );
}

export default ProjectList;
