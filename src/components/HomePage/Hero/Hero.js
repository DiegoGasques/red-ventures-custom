import React from "react";
import { Link } from "react-router-dom";
import nextArrow from "../../../assets/next-arrow.svg";
import homeModelR from "../../../assets/home-model.png";

export const Hero = () => {
  return (
    <div className="Hero">
      <div className="heading">
        <div>Build your</div>
        <div>
          Model <span>R</span>
        </div>
      </div>
      <div className="homeModelR">
        <img src={homeModelR} alt="Model R" />
      </div>
      <button className="call">
        <Link to={`model-r/custom/1`}>
          Begin <img src={nextArrow} alt="Next arrow" />
        </Link>
      </button>
    </div>
  );
};

export default Hero;
