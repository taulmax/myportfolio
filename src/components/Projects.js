import React from 'react';

const Project = ({ href, img, people, title, period, description, skills }) => {
  return (
    <div className="projectBox">
      <a href={href}><img className="projectImg" src={img} alt={title} /></a>
      <div className="projectInfo">
        <span className="projectTitle">{title}</span>
        <span className="projectPeriod">개발기간 : {period}</span>
        <span className="projectDescription">{description}</span>
        <span className="projectSkills">{skills}</span>
        <span className="projectPeople">{people}</span>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects infoContainer" id="Project">
      <span className="projects-title infoContainer-title">PROJECT</span>
      <Project href={"https://github.com/PrrrStar/ProjectNP"} img={"/images/myside_preview.png"} people={"팀 프로젝트 (6명)"} title={"내편 - 내 손 안에 모든 편의점"} period={"2020.9.2 ~ 진행중"} description={"DRF + React를 이용하여 제작중인 전국 편의점 상품 공유 웹서비스"} skills={"#React #Redux #python #django #DRF"} />
      <Project href={"https://github.com/taulmax/portfolio"} img={"/images/portfolio_preview.png"} people={"개인 프로젝트"} title={"포트폴리오 웹 사이트"} period={"2020.10.3 ~ 2020.10.13"} description={"React로 개발한 포트폴리오 웹 사이트"} skills={"#React #SCSS"} />
    </div>
  );
};

export default Projects;