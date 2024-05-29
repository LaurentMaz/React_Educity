import React, { useRef } from "react";

import video from "../../assets/college-video.mp4";
import "./VideoPlayer.css";

const VideoPlayer = ({ playState, setPlayState }) => {
  const videoPlayerRef = useRef(null);

  const closePlayer = (e) => {
    if (e.target === videoPlayerRef.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      ref={videoPlayerRef}
      className={`video-player ${!playState && "hide"}`}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
