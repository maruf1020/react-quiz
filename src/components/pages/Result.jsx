import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/UseAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location;
  const { questions } = state || {};

  const { loading, error, answers } = useAnswers(id);

  console.log("answers", answers, "questions", questions);

  function calculateScore() {
    console.log("calculateScore");
    let score = 0;
    const totalScore = 100;
    const scorePerQuestion = totalScore / questions.length;
    questions.forEach((question, index) => {
      const scorePerOption = scorePerQuestion / answers[index].options.length;
      question.options.forEach((option, i) => {
        if (
          (option.checked &&
            option.checked == true &&
            answers[index].options[i].correct == true) ||
          (option.checked == false && answers[index].options[i].correct == null)
        ) {
          score = score + scorePerOption;
        }
      });
    });

    return { totalScore, score };
  }

  if (answers && questions && questions.length > 0 && answers.length > 0) {
    console.log(calculateScore());
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {answers && questions && questions.length > 0 && answers.length > 0 && (
        <>
          <Summary score={() => calculateScore()}></Summary>
          <Analysis></Analysis>
        </>
      )}
    </>
  );
}
