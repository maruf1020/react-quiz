import classes from "../styles/Question.module.css";
import Answers from "./Answers";

export default function Questions(answers = { answers: [] }) {
  let data = answers.answers;
  console.log(data);
  return data.map((answer, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options}></Answers>
    </div>
  ));
}
