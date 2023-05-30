import Questions from "./Questions";

// eslint-disable-next-line react/prop-types
export default function Analysis({ analysisData, score, totalScore }) {
  return (
    <div className="analysis">
      <h1>Question Analysis</h1>
      <h4>
        You answered {score} out of {totalScore} questions correctly
      </h4>
      <Questions answers={analysisData}></Questions>
    </div>
  );
}
