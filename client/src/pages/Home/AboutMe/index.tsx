import {
  faDesktop,
  faDiagramProject,
  faMicroscope,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TagChip } from "~/components/TagChip";
import { CursorTooltip } from "~/components/Tooltip";
import { SoftSkills, TechLangs, TechSkills } from "~/projects";
import { Tooltip } from "@mui/material";

interface AboutMeProps {
  hidden?: boolean;
}

export function AboutMe({ hidden }: AboutMeProps) {
  return (
    <div className="row">
      <div className={`about-me ${hidden ? "hide-about" : ""}`}>
        <img src={`${process.env.PUBLIC_URL}/headshot.jpg`} alt="headshot" />
        <h1 className="name">Andy Zhao</h1>
        <h2 className="sub-heading">
          Engineering for social <s>goof</s>
          <u>good.</u>
        </h2>
        <p className="about-me-bio">
          👋 Hi, I'm <strong>Andy</strong>, a graduate student in{" "}
          <strong>biomedical engineering</strong>, a research assistant studying{" "}
          <strong>AI and medical imaging</strong>, a{" "}
          <strong>software engineering lead</strong> for the ILDS Gallery, and a{" "}
          <strong>teaching assistant</strong> in computer science.
        </p>
        <div className="row text-center align-items-center py-3 mb-3 qualification-bar">
          <Tooltip
            title="Explainable AI for Skin Disease Diagnosis @ UBC"
            placement={"top"}
          >
            <div className="col-3 item">
              <h2>
                <FontAwesomeIcon icon={faMicroscope} />
              </h2>
              <span className="d-none d-sm-block">Biomedical Engineering</span>
            </div>
          </Tooltip>
          <Tooltip
            title="Deep Learning and Computer Vision @ SCI-PHI Lab"
            placement={"top"}
          >
            <div className="col-3 item">
              <h2>
                <FontAwesomeIcon icon={faDiagramProject} />
              </h2>
              <span className="d-none d-sm-block">AI + Medical Imaging</span>
            </div>
          </Tooltip>
          <Tooltip
            title="Engineering Team Lead @ The ILDS Dermatology Gallery"
            placement={"top"}
          >
            <div className="col-3 item">
              <h2>
                <FontAwesomeIcon icon={faDesktop} />
              </h2>
              <span className="d-none d-sm-block">Software Engineer</span>
            </div>
          </Tooltip>
          <Tooltip title="Interaction Design @ UBC" placement={"top"}>
            <div className="col-3 item">
              <h2>
                <FontAwesomeIcon icon={faPersonChalkboard} />
              </h2>
              <span className="d-none d-sm-block">Teaching Assistant</span>
            </div>
          </Tooltip>
        </div>
      </div>
      <div
        className={`row mt-5 about about-me-skills ${hidden ? "hide-skills" : ""}`}
      >
        <h1>Skills</h1>
        <div className="col-xxl-8">
          <p>
            {SoftSkills.map(skill => (
              <TagChip index={0} value={skill} deletable={false} />
            ))}
          </p>
          <p>
            {TechLangs.map(skill => (
              <TagChip index={0} value={skill} deletable={false} />
            ))}
          </p>
          <p>
            {TechSkills.map(skill => (
              <TagChip index={0} value={skill} deletable={false} />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
