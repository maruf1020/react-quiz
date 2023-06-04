import { useMemo } from "react";
import successImage from "../assets/images/success.png";
import useFetch from "../hooks/UseFetch";
import classes from "../styles/Summary.module.css";

// eslint-disable-next-line react/prop-types
export default function Summary({ score, totalScore }) {
  const getKeyword = useMemo(() => {
    (25 / 50) * 100;
    if ((score / totalScore) * 100 < 50) {
      return "failed";
    } else if ((score / totalScore) * 100 < 75) {
      return "good";
    } else if ((score / totalScore) * 100 < 100) {
      return "very good";
    } else {
      return "excellent";
    }
  }, [score, totalScore]);

  const { loading, error, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    "GET",
    {
      Authorization: import.meta.env.VITE_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : successImage;
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {totalScore}
        </p>
      </div>
      {loading && <div className={classes.badge}>Loading your badge...</div>}

      {error && <div className={classes.badge}>An error occurred!</div>}

      {!loading && !error && (
        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}
