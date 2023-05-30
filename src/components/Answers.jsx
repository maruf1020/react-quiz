import { Fragment } from "react";
import CheckBox from "../components/CheckBox";
import classes from "../styles/Answers.module.css";

// eslint-disable-next-line react/prop-types
export default function Answers({ options = [], handleChange, input }) {
  console.log(input);
  return (
    <div className={classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input == true ? (
            <CheckBox
              key={index}
              className={classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}></CheckBox>
          ) : (
            <CheckBox
              key={index}
              className={`${classes.answer} ${
                option.correct
                  ? classes.correct
                  : option.checked
                  ? classes.wrong
                  : ""
              }`}
              text={option.title}
              value={index}
              defaultChecked={option.checked}
              disabled></CheckBox>
          )}
        </Fragment>
      ))}
    </div>
  );
}
