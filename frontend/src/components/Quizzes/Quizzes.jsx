import React from "react";
import "./Quizzes.css";
import { Link } from "react-router-dom";
const Quizzes = () => {
  return (
    <div>
      <section className="quizzes" id="quizzes">
          <div className="card">
            <p className="heading"> الفيزياء</p>
            <Link to="/Physics" className="btton go-test">
              الاختبارات
            </Link>

            <p className="All-test">2 sec</p>
          </div>

          <div className="card">
            <p className="heading">الكيمياء</p>
            <a href="/Chemistry" className="btton go-test">
              الاختبارات
            </a>

          
            <p className="All-test">2 sec</p>
          </div>

          <div className="card">
            <p className="heading">الاحياء</p>
            <a href="/Biology" className="btton go-test">
              الاختبارات
            </a>

            <p></p>
            <p className="All-test">2 sec</p>
          </div>

          <div className="card">
            <p className="heading">اللغة العربية</p>
            <a href="/Arabic" className="btton go-test">
              الاختبارات
            </a>

            <p></p>
            <p className="All-test">2 sec</p>
          </div>

          <div className="card">
            <p className="heading">اللغة الفرنسية</p>
            <a href="/French" className="btton go-test">
              الاختبارات
            </a>

            <p></p>
            <p className="All-test">2 sec</p>
          </div>

          <div className="card">
            <p className="heading">اللغة الانجليزية</p>
            <a href="/English" className="btton go-test">
              الاختبارات
            </a>

            <p></p>
            <p className="All-test">2 sec</p>
          </div>

          <div className="card">
            <p className="heading">الرياضيات البحتة</p>
            <a href="/Puremathematics" className="btton go-test">
              الاختبارات
            </a>

            <p></p>
            <p className="All-test">2 sec</p>
          </div>

          <div className="card">
            <p className="heading">الرياضيات التطبيقية</p>

            <a href="/AppliedMathematics" className="btton go-test">
              الاختبارات
            </a>

            <p></p>
            <p className="All-test">2 sec</p>
          </div>
  
      </section>
    </div>
  );
};

export default Quizzes;
