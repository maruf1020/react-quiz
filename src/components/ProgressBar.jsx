import { useRef, useState } from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function ProgressBar({ next, prev, submit, parentage }) {
  const [tooltip, setTooltip] = useState(false);
  const toolTipRef = useRef();

  function toggleTooltip() {
    if (tooltip) {
      setTooltip(false);
      toolTipRef.current.style.display = "none";
    } else {
      setTooltip(true);
      toolTipRef.current.style.display = "block";
      toolTipRef.current.style.left = `calc(${parentage}% - 65px)`;
    }
  }

  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip} ref={toolTipRef}>
          {parentage}% Complete!
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${parentage}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}></div>
        </div>
      </div>
      <Button
        className={classes.next}
        onClick={parentage === 100 ? submit : next}>
        <span>{parentage === 100 ? "Submit Questions" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward</span>
      </Button>
    </div>
  );
}
