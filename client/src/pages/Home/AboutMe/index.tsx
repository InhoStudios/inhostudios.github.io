import {
  faBriefcase,
  faDesktop,
  faDiagramProject,
  faGamepad,
  faMicroscope,
  faPersonChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { TagChip } from "~/components/TagChip";
import { CursorTooltip } from "~/components/Tooltip";
import { SoftSkills, TechLangs, TechSkills } from "~/projects";

interface AboutMeProps {
  hidden?: boolean;
}

export function AboutMe({ hidden }: AboutMeProps) {
  return (
    <div className="row">
      <div className={`about-me ${hidden ? "hide-about" : ""}`}>
        <img src={`${process.env.PUBLIC_URL}/headshot.jpg`} alt="headshot" />
        <h1 className="name">Andy Zhao</h1>
        {/* <h2 className="sub-heading">
          Engineering for social <s>goof</s>
          <u>good.</u>
        </h2> */}
        <div className="row text-center align-items-center py-3 mb-3 qualification-bar">
          <div className="col-lg-3">
            <CursorTooltip content="Explainable AI for Skin Disease Diagnosis @ UBC">
              <h2>
                <FontAwesomeIcon icon={faMicroscope} />
              </h2>
              <span>Biomedical Engineering</span>
            </CursorTooltip>
          </div>
          <div className="col-lg-3">
            <CursorTooltip content="Deep Learning and Computer Vision @ SCI-PHI Lab">
            <h2>
              <FontAwesomeIcon icon={faDiagramProject} />
            </h2>
            <span>
              AI + Medical Imaging
            </span>
            </CursorTooltip>
          </div>
          <div className="col-lg-3">
            <CursorTooltip content="Engineering Team Lead @ The ILDS Dermatology Gallery">
            <h2>
              <FontAwesomeIcon icon={faDesktop} />
            </h2>
            <span>Software Engineer</span>
            </CursorTooltip>
          </div>
          <div className="col-lg-3">
            <CursorTooltip content="Interaction Design @ UBC">
            <h2>
              <FontAwesomeIcon icon={faPersonChalkboard} />
            </h2>
            <span>Teaching Assistant</span>
            </CursorTooltip>
          </div>
        </div>
        <p className="about-me-bio">
          👋 Hi, I'm <strong>Andy</strong>, a graduate student in{" "}
          <strong>biomedical engineering</strong>, a research assistant studying{" "}
          <strong>AI and medical imaging</strong>, a{" "}
          <strong>software engineering lead</strong> for the ILDS Gallery, and a{" "}
          <strong>teaching assistant</strong> in computer science.
        </p>
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
