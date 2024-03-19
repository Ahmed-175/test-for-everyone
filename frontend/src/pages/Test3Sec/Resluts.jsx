import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const matiral = [
  "Physics",
  "AppliedMathematics",
  "Arabic",
  "Biology",
  "Chemistry",
  "Englich",
  "French",
  "Puremathematics",
];
const Results = ({materialIndex}) => {
  const { id } = useParams();
  const combinedObject = JSON.parse(decodeURIComponent(id));
  const { questions, selectedAnswers, correctAnswers } = combinedObject;
  let correctindex = 0;

  for (let i = 0; i < correctAnswers.length; i++) {
    if (selectedAnswers[i] === correctAnswers[i]) {
      correctindex++;
    }
  }
  return (
    <div className="results-of-exam">
      <div className="number-of-wrongs">
        <h1>
          نتائج الاختبار : %
          {Number.parseInt((correctindex / correctAnswers.length) * 100)}
        </h1>
        {/* <h1>لقد أجبت علي  {correctindex}  أسئلة صحيحة من أصل  {correctAnswers.length}</h1> */}
      </div>

      <div>
        {correctAnswers.map((item, index) => {
          if (selectedAnswers[index] === item) {
            return (
              <div className="all-question-and-answers" key={index}>
                <h1 className="heading-of-answered">
                  {index + 1}_ {questions[index]}
                </h1>
                <h2 className="selectRightAnswer">{item}</h2>
              </div>
            );
          } else {
            return (
              <div className="all-question-and-answers" key={index}>
                <h1 className="heading-of-answered">
                  {index + 1}_ {questions[index]}
                </h1>
                <h2 className="wrongAnswer"> {selectedAnswers[index]}</h2>
                <h2 className="RightAnswer">
                  الاجابة الصحيحة هي : <span>{item}</span>
                </h2>
              </div>
            );
          }
        })}
      </div>
      <div className="divbtns">
          <Link to={`/${matiral[materialIndex]}`} className="btton">
            الرجوع الي الاختبارات
          </Link>
      </div>
    </div>
  );
};
export default Results;