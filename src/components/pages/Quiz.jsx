// import { cloneDeep } from "lodash-es";
import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestions from "../../hooks/UseQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;

    case "answer": {
      const questions = [...state];
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;
    }
    default:
      return state;
  }
};

export default function Quiz() {
  const id = useParams();
  const { loading, error, questions } = useQuestions(id.id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [quesAndAns, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion - 1);
    }
  };

  async function handleAnswerSubmit() {
    const uid = currentUser.uid;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}/${id.id}`); // this is the way to update the existing node
    await set(resultRef, quesAndAns);

    navigate(`/result/${id.id}`, {
      state: {
        questions: quesAndAns,
      },
    });
  }

  const parentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && !quesAndAns && <div>No questions found!</div>}
      {!loading && !error && quesAndAns && quesAndAns.length === 0 && (
        <div>No questions found!</div>
      )}
      {!loading && !error && quesAndAns && quesAndAns.length > 0 && (
        <>
          <h1>{quesAndAns[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answers
            input={true}
            options={quesAndAns[currentQuestion].options}
            handleChange={handleAnswerChange}></Answers>
          <ProgressBar
            next={handleNextQuestion}
            prev={handlePreviousQuestion}
            parentage={parentage}
            submit={handleAnswerSubmit}></ProgressBar>
          <MiniPlayer id={id.id} title="not ok yet"></MiniPlayer>
        </>
      )}
    </>
  );
}
