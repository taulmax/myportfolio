import React from 'react';

const Contact = () => {
  return (
    <div className="contact infoContainer" id="Contact">
      <span className="contact-title infoContainer-title">Contact</span>
      <div className="contactBox">
        <div className="emailBox">
          <i className="fas fa-envelope"></i>
          <span className="emailBoxTitle">Email</span>
          <span className="emailBoxContents">taulmax@naver.com</span>
        </div>
        <div className="githubBox">
          <a href="https://github.com/taulmax"><i className="fab fa-github-square"></i></a>
          <span className="emailBoxTitle">Github</span>
          <span className="emailBoxContents">taulmax</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;