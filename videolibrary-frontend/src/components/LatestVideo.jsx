import { AppContext } from "../App";
import React, { useContext, useEffect } from "react";

function LatestVideo() {
  const { latestVideo, setLatestVideo } = useContext(AppContext);

  useEffect(() => {
    fetch("http://localhost:3001/latest")
      .then((response) => response.json())
      .then((data) => {
        setLatestVideo(data.image_url);
      })
      .catch((error) => console.error(error));
  }, [latestVideo]);

  return (
    <div>
      <img src={latestVideo} alt="latest video" className="latest-video" />
    </div>
  );
}

export default LatestVideo;