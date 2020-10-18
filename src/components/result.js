import React from "react";
const Result = ({ score, playagain }) => {
  return (
    <div className="score-board">
      <div className="score"> You score {score}/ 5 correct answers!</div>
      <button className="playBtn" onClick={playagain}>
        PlayAgain
      </button>
    </div>
  );
};

export default Result;
