import CheckBox from "../components/CheckBox";
import classes from "../styles/Answers.module.css";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <CheckBox className={classes.answer} text="A New Hope 1"></CheckBox>
      <CheckBox className={classes.answer} text="A New Hope 1"></CheckBox>
      <CheckBox className={classes.answer} text="A New Hope 1"></CheckBox>
      <CheckBox className={classes.answer} text="A New Hope 1"></CheckBox>
      <CheckBox className={classes.answer} text="A New Hope 1"></CheckBox>
      <CheckBox className={classes.answer} text="A New Hope 1"></CheckBox>
      <CheckBox className={classes.answer} text="A New Hope 1"></CheckBox>
      <CheckBox className={classes.answer} text="A New Hope 1"></CheckBox>
      <CheckBox className={classes.answer} text="A New Hope 1"></CheckBox>
    </div>
  );
}
