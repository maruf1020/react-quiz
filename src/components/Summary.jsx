import image from "../assets/images/success.png";
import classes from "../styles/Summary.module.css";

// eslint-disable-next-line react/prop-types
export default function Summary({ score, totalScore }) {
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {totalScore}
        </p>
      </div>

      <div className={classes.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
}
