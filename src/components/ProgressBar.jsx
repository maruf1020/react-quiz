import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function ProgressBar({ next, prev, submit, parentage }) {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>{parentage}% Complete!</div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${parentage}%` }}></div>
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
