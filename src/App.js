import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./assets/style.css";
import quizeService from "./quizService";
import QuestionBox from "./components/questionBox";
import Result from "./components/result";

function App() {
  const [que, setQue] = useState([]);
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState(0);

  var temp = 0;
  const getQuestion = () => {
    quizeService().then((question) => {
      setQue(question);
    });
  };

  useEffect(() => {
    getQuestion();
  }, []);

  const computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setScore(score + 1);
    }
    setResponse(response < 5 ? response + 1 : 5);
  };

  const again = () => {
    getQuestion();
    setScore(0);
    setResponse(0);
  };
  return (
    <div className="container">
      <div className="title">QuizeBee</div>
      {que.length > 0 &&
        response < 5 &&
        que.map(({ question, answers, correct, questionId }) => (
          <QuestionBox
            question={question}
            option={answers}
            key={questionId}
            selected={(answer) => computeAnswer(answer, correct)}
          />
        ))}
      {response == 5 ? <Result score={score} playagain={again} /> : null}
    </div>
  );
}

export default App;
