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
  const totalScore = 100;
  const minusMarkingPoint = 2;
  let score = 0;
  let analysisData = [];

  function calculateScore() {
    let score = 0;
    const scorePerQuestion = totalScore / questions.length;
    questions.forEach((question, index) => {
      const scorePerOption =
        scorePerQuestion /
        answers[index].options.filter((option) => option.correct).length;
      question.options.forEach((option, i) => {
        if (
          option.checked &&
          option.checked == true &&
          answers[index].options[i].correct == true
        ) {
          score = score + scorePerOption;
        } else if (
          option.checked == true &&
          answers[index].options[i].correct == null
        ) {
          score = score - minusMarkingPoint;
        }
      });
    });
    // make 2 digit decimal
    return Math.round(score * 100) / 100;
  }

  function resultAnalysis() {
    // have to marge two arrays
    return questions.map((question, index) => {
      const options = question.options.map((option, i) => {
        let temp = {
          ...option,
          ...answers[index].options[i],
        };
        return !temp.correct ? { ...temp, correct: false } : temp;
      });
      return {
        ...question,
        options,
      };
    });
  }

  if (answers && questions && questions.length > 0 && answers.length > 0) {
    score = calculateScore();
    analysisData = resultAnalysis();
  }

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {answers && questions && questions.length > 0 && answers.length > 0 && (
        <>
          <Summary score={score} totalScore={totalScore}></Summary>
          <Analysis
            analysisData={analysisData}
            score={score}
            totalScore={totalScore}></Analysis>
        </>
      )}
    </>
  );
}
