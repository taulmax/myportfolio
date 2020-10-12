import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <img className="skill-img" src={`${process.env.PUBLIC_URL}/images/${skill}.png`} alt={skill} />
      <span className="skill-name">{skill}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills infoContainer" id="Skills">
      <span className="skills-title infoContainer-title">SKILLS</span>
      <div className="skill-box">
        <SkillCard skill="HTML5" />
        <SkillCard skill="CSS3" />
        <SkillCard skill="JavaScript" />
        <SkillCard skill="jQuery" />
        <SkillCard skill="React" />
        <SkillCard skill="Redux" />
        <SkillCard skill="Python" />
        <SkillCard skill="django" />
        <SkillCard skill="Bootstrap" />
      </div>
    </div>
  );
};

export default Skills;
