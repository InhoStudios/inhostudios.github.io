import React from "react";
import { TagChip } from "~/components/TagChip";
import { Project } from "~/portfolio/types";
import { CursorTooltip } from "~/components/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
  fullWidth?: boolean;
}

export function ProjectCard({ project, fullWidth }: ProjectCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className={`info mb-3 ${fullWidth ? "wide" : ""} ${project.url ? "" : "disabled"}`}
    >
      <a
        href={project.url ? project.url : "/"}
        target="_blank"
        rel="noreferrer"
        onClick={e => {
          (!project.url || project.localUrl) && e.preventDefault();
          project.localUrl && project.url && navigate(project.url);
        }}
      >
        {" "}
        <CursorTooltip content={project.url ? "Learn more" : "Unavailable"}>
          <p className="project-date">
            {project.subtitle_date}
            <hr />
            {project.url ? (
              <FontAwesomeIcon
                className="learn-more-icon"
                icon={faCircleInfo}
              />
            ) : undefined}
          </p>
          <h3>{project.title}</h3>
          <h4>{project.subtitle_objective}</h4>
          <p>
            {project.body.split(".")[0]}.{" "}
            <strong>{project.body.split(".")[1]}</strong>
          </p>
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
