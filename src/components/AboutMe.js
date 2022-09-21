import React from "react";
import "../components/AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <div className="container">
      <div className="col-1"></div>
        <div className="col-2">
          <h2>Me, Myself, And I</h2>
          <span className="line"></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default AboutMe;
