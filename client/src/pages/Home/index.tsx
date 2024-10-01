import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "~/components/Navbar";
import "./styles.scss";
import { ProjectCard } from "./ProjectCard";
import { TagChip } from "~/components/TagChip";
import { Jobs, Projects, SoftSkills, TechLangs, TechSkills } from "~/projects";
import { minScroll, useScroll } from "~/utilities/useScroll";
import { JobCard } from "./JobCard";

export function Home() {
  const { scrollPosition, stuck } = useScroll(minScroll);
  const [scrolledToExp, setScrolledToExp] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const projRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);

  const scrollOffset = "6rem";

  const scrollHome = () => {
    setScrolledToExp(false);
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  };
  const scrollProj = () => {
    setScrolledToExp(false);
    if (projRef.current) {
      projRef.current.style.scrollMargin = scrollOffset;
      projRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollExp = () => {
    setScrolledToExp(scrolled => !scrolled);
    if (expRef.current) {
      expRef.current.style.scrollMargin = scrollOffset;
      expRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        scrollHome={scrollHome}
        scrollProj={scrollProj}
        scrollExp={scrollExp}
      />
      <section>
        <div className="container-page">
          <div className="scroll-anchor" id="home" ref={homeRef}></div>
          <div className="row home">
            <div
              className={`col-xxl-4 intro hide-scroll ${stuck ? "stuck" : ""}`}
            >
              <div className="row">
                <div
                  className={`about-me ${scrolledToExp ? "hide-about" : ""}`}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/headshot.jpg`}
                    alt="headshot"
                  />
                  <h1 className="name">Andy Zhao.</h1>
                  <h2 className="sub-heading">
                    Engineering for social <s>goof</s>
                    <u>good.</u>
                  </h2>
                  <p className="about-me-bio">
                    Hi, I'm <strong>Andy</strong>, a research assistant and a
                    prospective software engineer. Currently, I'm building a
                    clinical image gallery as a visual companion for the ICD-11.
                    Previously, I've conducted{" "}
                    <strong>computer vision research</strong> in{" "}
                    <strong>clinical and radiologic (SPECT/CT) imaging</strong>,
                    leading to several awards at research conferences. In 2021,
                    I invited 48 high school students from across my city to
                    participate in{" "}
                    <strong>
                      Vancouver's premiere high school hackathon, vhHacks.
                    </strong>
                  </p>
                </div>
                <div
                  className={`row mt-5 about about-me-skills ${scrolledToExp ? "hide-skills" : ""}`}
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
              <div className="scroll-anchor" id="experience" ref={expRef}></div>
              <div
                className={`row about-me-experience ${scrolledToExp ? "show-exp" : "mt-5"}`}
              >
                <h1>Experience</h1>
                <div className="row">
                  {Jobs.map(job => (
                    <JobCard job={job} />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-xxl-8 offset-xxl-4 projects">
              <h1>Featured</h1>
              <div className="row">

              <div className="col-lg-8">
                <iframe
                  className="round column-video"
                  src="https://www.youtube.com/embed/GIavsfXtE-w"
                  title="how we made difficult conversations easier."
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={true}
                ></iframe>
              </div>
              <div className="col-lg-4">
                <ProjectCard project={Projects[0]} fullWidth={true} />
                </div>
              </div>
              <div className="scroll-anchor" id="projects" ref={projRef}></div>
              <h1 className="mt-5">Projects</h1>
              <div className="row">
                {Projects.slice(1, 7).map(project => (
                  <ProjectCard project={project} />
                ))}
                <div className="col-sm-3 project-card"></div>
                <div className="col-sm-3 project-card"></div>
                <div className="col-sm-3 project-card"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
