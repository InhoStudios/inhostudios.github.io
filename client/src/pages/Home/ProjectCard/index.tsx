import React from "react";
import { TagChip } from "~/components/TagChip";
import "./styles.scss";
import { Project } from "~/projects";
import { CursorTooltip } from "~/components/Tooltip";

interface ProjectCardProps {
  project: Project;
  fullWidth?: boolean;
}

export function ProjectCard({ project, fullWidth }: ProjectCardProps) {
  return (
    <div
      className={`info mb-3 ${fullWidth ? "wide" : ""} ${project.url ? "" : "disabled"}`}
    >
      <a
        href={project.url ? project.url : "/"}
        target="_blank"
        rel="noreferrer"
        onClick={e => {
          !project.url && e.preventDefault();
        }}
      >
        {" "}
        <CursorTooltip content={project.url ? "Learn more" : "Unavailable"}>
          <p className="project-date">{project.subtitle_date}</p>
          <h3>{project.title}</h3>
          <h4>{project.subtitle_objective}</h4>
          <p>{project.body}</p>
          <strong>
            Built with:{" "}
            {project.techused.map(tech => (
              <TagChip index={0} value={tech} deletable={false} />
            ))}
          </strong>
        </CursorTooltip>
      </a>
    </div>
  );
}
