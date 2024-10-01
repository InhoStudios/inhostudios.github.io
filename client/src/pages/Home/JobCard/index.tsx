import React, { useState } from "react";
import { Job } from "~/projects";
import "./styles.scss";
import { CursorTooltip } from "~/components/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

interface JobCardProps {
  job: Job;
  fullWidth?: boolean;
}

export function JobCard({ job, fullWidth }: JobCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`info wide mb-3`}>
      <a
        href="/"
        onClick={e => {
          e.preventDefault();
          setExpanded(expanded => !expanded);
        }}
      >
        <CursorTooltip content={expanded ? "Collapse" : "See more"}>
          <p className="project-date">{job.date}</p>
          <h3 className="flex-fill">
            {job.title}&ensp;
            {expanded ? (
              <FontAwesomeIcon
                className="expand-icon expanded"
                icon={faCaretUp}
              />
            ) : (
              <FontAwesomeIcon className="expand-icon" icon={faCaretDown} />
            )}
          </h3>
          <h4>{job.company}</h4>
          <p className="location">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            &ensp;<strong>{job.location}</strong>
          </p>
          <div className={`responsibilities ${expanded ? "expanded" : ""}`}>
            {job.body.map(resp => (
              <p className="responsibility">&ensp;·&ensp;{resp}</p>
            ))}
          </div>
        </CursorTooltip>
      </a>
    </div>
  );
}
