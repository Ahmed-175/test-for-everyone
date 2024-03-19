import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Test3_sec.css";

const matiral = ["Physics", "AppliedMathematics", "Arabic", "Biology", "Chemistry", "Englich", "French", "Puremathematics"];

const MaterialComponent = ({ materialIndex }) => {
  const [object, setObject] = useState({});

  useEffect(() => {
    const getExamData = async () => {
      const AllExamInData = await axios.get(
        `/api/getsubjects/${matiral[materialIndex]}`
      );
      setObject(AllExamInData.data);
    };
    getExamData();
  }, [materialIndex]);

  return (
    <div className="All-page-The">
      <div className="AreaExam-of-mongodb">
        {Object.values(object).map((exam, index) => (
          <div className="card-exam-of-mongodb" key={index}>
            <div className="hIncard">
              <h2>{exam.NameOfExam}</h2>
            </div>
            <div className="btnIncard">
              <Link to={`/${matiral[materialIndex]}/Test/${index}`} className="btton">
                اختبر نفسك
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialComponent;