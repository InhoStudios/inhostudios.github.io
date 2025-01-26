import React, { useRef, useState } from "react";
import "./styles.scss";
import { ProjectCard } from "~/pages/Home/ProjectCard";
import { Projects } from "~/portfolio/projects";

export function ProjectsPage() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projRef = useRef<HTMLDivElement>(null);

  return (
    <section>
      <div className="container-page">
        <div className="scroll-anchor" id="home" ref={homeRef}></div>
        <div className="row home">
          <div className="col-xxl-10 offset-xxl-1 projects">
            <h1>Featured Project</h1>
            <div className="row">
              <div className="col-lg-8">
                <iframe
                  className="round column-video mb-5"
                  src="https://www.youtube.com/embed/GIavsfXtE-w"
                  title="how we made difficult conversations easier."
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={true}
                ></iframe>
              </div>
              <div className="col-lg-4 featured-project">
                <ProjectCard project={Projects[0]} fullWidth={true} />
              </div>
            </div>
            <div className="scroll-anchor" id="projects" ref={projRef}></div>
            <h1 className="mt-5">Other Projects</h1>
            <div className="row">
              {Projects.slice(1).map(project => (
                <ProjectCard project={project} />
              ))}
              <div className="col-sm-3 project-card"></div>
              <div className="col-sm-3 project-card"></div>
              <div className="col-sm-3 project-card"></div>
              <div className="col-sm-3 project-card"></div>
              <div className="col-sm-3 project-card"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
