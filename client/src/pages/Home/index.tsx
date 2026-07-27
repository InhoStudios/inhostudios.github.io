import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "~/components/Navbar";
import "./styles.scss";
import { ProjectCard } from "./ProjectCard";
import { TagChip } from "~/components/TagChip";
import { Jobs, Projects, SoftSkills, TechLangs, TechSkills } from "~/projects";
import { minScroll, useScroll } from "~/utilities/useScroll";
import { JobCard } from "./JobCard";
import { AboutMe } from "./AboutMe";

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
              <AboutMe hidden={scrolledToExp} />
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
