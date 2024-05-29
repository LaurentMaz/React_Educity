import React from "react";

import dark_arrow from "../../assets/dark-arrow.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          facilisis massa eu odio gravida tincidunt. Integer elementum imperdiet
          orci vulputate finibus.
        </p>
        <button className="btn">
          En savoir plus <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
