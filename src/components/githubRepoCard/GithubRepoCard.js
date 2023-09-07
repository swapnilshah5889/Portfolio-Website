import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import DateSvg from "../../assests/images/date.svg";
import ProjectIcon from "../../assests/images/project.png";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="repo-card-div">
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id} onClick={() => openRepoinNewTab(repo.url)}>
          <div className="repo-name-div">
            <img
              src={ProjectIcon}
              style={{ maxWidth: "30px", marginRight: "10px" }}
              alt="Project"
            />
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>

          <div className="div-project-date">
            {/* <img style={{maxWidth:"17px", marginRight:"10px"}} src={DateSvg} alt="date"/> */}

            <p className="repo-creation-date">
              Created on: {repo.createdAt.split("T")[0]}
            </p>
          </div>

          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}
