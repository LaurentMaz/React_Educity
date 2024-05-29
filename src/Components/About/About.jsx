import React, { useState } from "react";

import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import "./About.css";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const About = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>About university</h3>
        <h2>Nurturing Tommerow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus
          nisi dolore aliquam quia debitis ipsam error. Eligendi dolorum saepe,
          sunt inventore, praesentium est molestias numquam iusto placeat
          dignissimos voluptatum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus
          nisi dolore aliquam quia debitis ipsam error. Eligendi dolorum saepe,
          sunt inventore, praesentium est molestias numquam iusto placeat
          dignissimos voluptatum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus
          nisi dolore aliquam quia debitis ipsam error. Eligendi dolorum saepe,
          sunt inventore, praesentium est molestias numquam iusto placeat
          dignissimos voluptatum?
        </p>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default About;
