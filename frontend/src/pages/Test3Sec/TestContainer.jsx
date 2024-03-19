import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import sweetalert from 'sweetalert'

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
const TestContainer = ({ materialIndex }) => {
  const { id } = useParams();
  const [test, setTest] = useState([]);
  const [indextest, setIndexTest] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const resluts = { questions, selectedAnswers, correctAnswers };
  const Obj = encodeURIComponent(JSON.stringify(resluts));

  const AllAnswersSelected = () => {
    const selectedRadioButtons = Array.from(
      document.querySelectorAll('input[type="radio"]:checked')
    );
    const selectedValues = selectedRadioButtons.map(
      (radioButton) => radioButton.value
    );
    setSelectedAnswers(selectedValues);

    if (selectedValues.length < indextest.length) {
      sweetalert("اكمل حل جميع الاسئلة", "يجب عليك حل جميع الاسئلة", "error");
      return;
    }

    location.href = `/${matiral[materialIndex]}/reslut/${Obj}`;
  };

  const formonChange = () => {
    const selectedRadioButtons = Array.from(
      document.querySelectorAll('input[type="radio"]:checked')
    );
    const selectedValues = selectedRadioButtons.map(
      (radioButton) => radioButton.value
    );
    setSelectedAnswers(selectedValues);
  };

  useEffect(() => {
    const getOfExam = async () => {
      try {
        const AllExamInData = await axios.get(
          `/api/getsubjects/${matiral[materialIndex]}`
        );
        const exam = AllExamInData.data[id];
        setTest(exam);
        setIndexTest(exam.exam);
        setQuestions(exam.exam.map((q) => q.question));
        setAnswers(exam.exam.map((a) => a.answers));
        setCorrectAnswers(exam.exam.map((r) => r.rightAnswer));
      } catch (error) {
        console.log(error);
      }
    };
    getOfExam();
  }, [id]);

  return (
    <div>
      <div className="All-page-The">
        <div className="ContanerOfFormExam">
          <div className="heading-of-exam-in-test">
            <h1 className="span-name-of-exam">{test.NameOfExam}</h1>
            <h1 className="span-number-of-exam">
              عدد الاسئلة: {indextest.length}
            </h1>
          </div>
          <form
            className="form-exam"
            onChange={() => {
              formonChange();
            }}
          >
            {questions.map((question, index) => (
              <div className="one-question-get" key={index}>
                <div className="h1-one-get-q">
                  <h1>
                    <span className="SpanNumberofqu">{index + 1}_</span>
                    {question}
                  </h1>
                </div>
                <div className="h1-one-get-a">
                  {answers[index].map((ans, ansIndex) => (
                    <div className="one-answer-a" key={ansIndex}>
                      <input
                        type="radio"
                        id={`answer${ansIndex + 1}_${index}`}
                        name={`question${index + 1}`}
                        value={ans}
                      />
                      <label
                        htmlFor={`answer${ansIndex + 1}_${index}`}
                        className="label-answer"
                      >
                        {ans}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </form>

          <div className="divbttonsendr">
            <button
              className="btton test-correction"
              onClick={() => AllAnswersSelected()}
            >
              تصحيح الاختبار
            </button>

            <Link
              to={`/${matiral[materialIndex]}`}
              className="btton Link back-btn"
            >
              الرجوع إلى الاختبارات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestContainer;
