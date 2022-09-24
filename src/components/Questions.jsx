import React from "react";
import Button from "./Button";

function Questions({ questions, show, isheld, handleNewPage, handlePage }) {
  return (
    <>
      {questions.map((questions, index) => {
        const { incorrect_answers, correct_answer, question } = questions;

        return (
          <div key={index} className="Question__span">
            <p className="Question__text">{question}</p>
            <div className="Question__div">
              <Button
                incorrect_answers={incorrect_answers}
                correct_answer={correct_answer}
                isheld={isheld}
              />
            </div>
            {show && (
              <span className="Question__answer">
                correct answer : {correct_answer}
              </span>
            )}
          </div>
        );
      })}
      {!show ? (
        <button className="Game__link" onClick={handleNewPage}>
          Submit
        </button>
      ) : (
        <button className="Game__link" onClick={handlePage}>
          Restart
        </button>
      )}
    </>
  );
}

export default Questions;
