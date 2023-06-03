import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import classes from "../styles/MiniPlayer.module.css";

// eslint-disable-next-line react/prop-types
export default function MiniPlayer({ id, title }) {
  const buttonRef = useRef();
  const [open, setOpen] = useState(false);
  console.log(id);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer() {
    if (!open) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setOpen(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setOpen(false);
    }
  }

  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}>
      <span
        className={`material-icons-outlined ${classes.open}`}
        onClick={toggleMiniPlayer}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniPlayer}>
        {" "}
        close{" "}
      </span>
      {/* <img src={image} alt="ALT rag" /> */}
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="100%"
        height="100%"
        playing={open}
        controls={true}
      />
      <p>{title}</p>
    </div>
  );
}
