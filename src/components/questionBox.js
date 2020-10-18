import React, { useState } from "react";

const QuestionBox = ({ question, option, selected }) => {
  const [ans, setAns] = useState(option);

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      <div className="btndiv">
        {ans.map((text, index) => (
          <button
            key={index}
            className="answerBtn"
            onClick={() => {
              setAns([text]);
              selected(text);
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionBox;
