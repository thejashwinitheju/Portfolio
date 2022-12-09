import "./AboutContentStyle.css";

import React from "react";
import { Link } from "react-router-dom";
import project5 from "../assets/project5.jpg";
import project4 from "../assets/project4.webp";


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a react font-end developer. I create responsive secure website for
          my clients.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={project4} className="img" alt="true" />
          </div>

          <div className="img-stack bottom">
            <img src={project5} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutContent;
