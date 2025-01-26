import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { minScroll, useScroll } from "~/utilities/useScroll";
import { Project, ProjectBody, ProjectParagraph } from "~/portfolio/types";
import { useNavigate, useParams } from "react-router-dom";
import { ProjectPages } from "~/portfolio/projectbodies";
import { Projects } from "~/portfolio/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faXmark } from "@fortawesome/free-solid-svg-icons";

export function ProjectPage() {
  const { stuck, scrollPosition } = useScroll(minScroll);
  const params = useParams();
  const navigate = useNavigate();

  const [navExpanded, setNavExpanded] = useState(false);
  const [projIntro, setProjIntro] = useState<Project>();
  const [project, setProject] = useState<ProjectBody>();
  const [index, setIndex] = useState(-1);
  const [sections, setSections] = useState<string[]>([]);

  const [activeSection, setActiveSection] = useState("intro");

  const titleRef = useRef<HTMLHeadingElement>(null);

  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (project?.sections) {
      const sections: string[] = [];
      project.sections.map(section => {
        if (section.title) {
          sections.push(section.title);
          return section.title;
        }
      });
      setSections(sections);
      setActiveSection(sections[0]);
    }
  }, [project]);

  useEffect(() => {
    let lowestY = 0;
    for (let i = sectionRefs.current.length - 1; i > 0; i--) {
      const ref = sectionRefs.current[i];
      const rect = ref.getBoundingClientRect();
      lowestY = rect.top;
      if (rect.top < 300) {
        setActiveSection(sections[i]);
        break;
      }
    }
    if (lowestY > 300) {
      setActiveSection(sections[0]);
    }
  }, [scrollPosition]);

  useEffect(() => {
    if (titleRef.current) navigateToRef(titleRef.current);
    const _idx = parseInt(params.index as string);
    setIndex(_idx);
    setProjIntro(Projects[_idx]);
    setProject(ProjectPages[Projects[_idx].id]);
  }, [params.index]);

  const mapProjectSection = (section: ProjectParagraph, index: number) => {
    const heading = section.title ? (
      <h2
        ref={el => {
          const index = sections.findIndex(elem => elem == section.title);
          if (el) sectionRefs.current[index] = el;
        }}
      >
        {section.title}
      </h2>
    ) : undefined;
    if (section.body) {
      if (section.imageURL) {
        if (section.imageFirst) {
          return (
            <div className="row mb-3">
              {heading}
              <div className="col-xxl-6">
                <img className="mb-3 img-fluid" src={section.imageURL} alt="" />
              </div>
              <div className="col-xxl-6">
                <p>{section.body}</p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="row mb-3">
              {heading}
              <div className="col-xxl-6">
                <p>{section.body}</p>
              </div>
              <div className="col-xxl-6">
                <img className="mb-3 img-fluid" src={section.imageURL} alt="" />
              </div>
            </div>
          );
        }
      } else {
        return (
          <div className="row mb-3">
            {heading}
            <p>{section.body}</p>
          </div>
        );
      }
    } else if (section.imageURL) {
      return (
        <div className="row mb-3">
          {heading}
          <img className="mb-3 img-fluid" src={section.imageURL} alt="" />
        </div>
      );
    }
  };

  const scrollOffset = "9rem";

  const navigateToRef = (ref: HTMLDivElement) => {
    if (sectionRefs) {
      ref.style.scrollMargin = scrollOffset;
      ref.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!project) {
    return (
      <div className={`container-page ${stuck ? "stuck" : ""}`}>
        <div className="scroll-anchor" id="top-of-page"></div>
        <div className={`project pb-5 full-height`}>
          <h2 className={`title`} ref={titleRef}>
            404: Project not found :(
          </h2>
        </div>
        <div>
          <button
            className={`nav-button ${navExpanded ? "expanded" : ""}`}
            onClick={() => setNavExpanded(navExpanded => !navExpanded)}
          >
            {navExpanded ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faList} />
            )}
          </button>
        </div>
        <div className={`info-nav-panel ${navExpanded ? "expanded" : ""}`}>
          <h6>More Projects</h6>
          <hr />
          <div className="more-projects">
            {Projects.map((proj, _index) => {
              if (Object.keys(ProjectPages).includes(proj.id)) {
                return (
                  <p>
                    <a
                      href={`inho.ca/#/project/index`}
                      onClick={e => {
                        e.preventDefault();
                        navigate(`/project/${_index}`);
                      }}
                    >
                      {proj.title}
                    </a>
                  </p>
                );
              } else {
                return undefined;
              }
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`container-page ${stuck ? "stuck" : ""}`}>
      <div className="scroll-anchor" id="top-of-page"></div>
      <div className={`project pb-5`}>
        <div className="row">
          <div className="col-auto flex-fill"></div>
          <div className="col-auto">
            <h1 className={`title`} ref={titleRef}>
              {project.title}
            </h1>
            <div className="section-nav">
              {sections.map((section, idx) => (
                <a
                  href="/"
                  className={activeSection === section ? "active" : ""}
                  onClick={e => {
                    e.preventDefault();
                    navigateToRef(sectionRefs.current[idx]);
                  }}
                >
                  {section}
                </a>
              ))}
            </div>
            <div className="section-spacer"></div>
            <div className={`body-content`}>
              {project.sections ? (
                <div>{project.sections.map(mapProjectSection)}</div>
              ) : undefined}
            </div>
          </div>
          <div className="col-auto flex-fill"></div>
        </div>
      </div>
      <div>
        <button
          className={`nav-button ${navExpanded ? "expanded" : ""}`}
          onClick={() => setNavExpanded(navExpanded => !navExpanded)}
        >
          {navExpanded ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faList} />
          )}
        </button>
      </div>
      <div className={`info-nav-panel ${navExpanded ? "expanded" : ""}`}>
        <h6>More Projects</h6>
        <hr />
        <div className="more-projects">
          {Projects.map((proj, _index) => (
            <p>
              <a
                href={proj.url ? proj.url : "/"}
                target="_blank"
                rel="noreferrer"
                className={_index === index ? "active" : ""}
                onClick={e => {
                  (!proj.url || proj.localUrl) && e.preventDefault();
                  proj.localUrl && proj.url && navigate(`/project/${_index}`);
                }}
              >
                {proj.title}
              </a>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
