import { AppContext } from "../App";
import React, { useContext } from "react";

function FileForm() {
  const { latestVideo, setLatestVideo } = useContext(AppContext);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();

    data.append("video[:title]", event.target.title.value);
    data.append("video[:movie]", event.target.video.files[0]);
    submitToAPI(data);
  }
  function submitToAPI(data) {
    fetch("http://localhost:3001/videos", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        setLatestVideo(data.image_url);
      })
      .catch((error) => console.error(error));
  }
  return (
    <div>
      <h1>File Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <br />

        <label htmlFor="video">Video</label>
        <input type="file" name="video" id="video" />
        <br />

        <button type="submit">Upload video</button>
      </form>
    </div>
  );
}

export default FileForm;