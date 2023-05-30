import { useRef, useState } from "react";
import image from "../assets/images/3.jpg";
import classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer() {
  const buttonRef = useRef();
  const [open, setOpen] = useState(false);

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
      <img src={image} alt="ALT rag" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}
