import { Link } from "react-router-dom";
import useVideoList from "../hooks/UseVideoList";
import classes from "../styles/Videos.module.css";
import Video from "./Video";

export default function Videos() {
  // eslint-disable-next-line no-unused-vars
  const { loading, error, videos } = useVideoList();
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((video) => (
          <Link to="/quiz" key={video.youtubeID}>
            <Video
              title={video.title}
              id={video.youtubeID}
              noq={video.noq}></Video>
          </Link>
        ))}
      {videos.length === 0 && !loading && <p>No Videos Available</p>}
      {loading && <div>Loading...</div>}
      {error && <div>There was an error</div>}
    </div>
  );
}
