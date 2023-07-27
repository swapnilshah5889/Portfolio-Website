import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { skillList } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  const type = props.type;
  const skills = skillList[type - 1];
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            {skills.title}
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} skills={skills} />
    </div>
  );
}
