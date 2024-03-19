import React from 'react'
import './AddExam.css';
import AddQuestionAll from './AddQuestion';
import DeleteLastQuestion from './DeleteLastQuestion';
function AppliedMathematicsAdd({IndexMatrail}) {

  const matiral = ["Physics" , "AppliedMathematics" , "Arabic" , "Biology" , "Chemistry"  ,
 "Englich" , "French"  , "Puremathematics"] 

 const nameOfsubArabic = ["الفيزياء" ,  "الرياضيات التطبيقية",   "اللغة العربية" , "الاحياء" ,  "الكيمياء" ,
 "اللغة الانجليزية" , "اللغة الفرنسية" , "الرياضيات البحته" ]

const SendThisData = async () => {
    const AllQuestions = document.querySelectorAll('.one-question');
    const exam = [];
    const questionsData = [];
    const NameOfExam = document.querySelector('.nameOfExam').value;
    questionsData.push({ exam, NameOfExam });
    AllQuestions.forEach((questionElement) => {
      const question = questionElement.querySelector('.quetions').value;
      const answers = Array.from(questionElement.querySelectorAll('.answers')).map((answerElement) => answerElement.value);
      const rightAnswer = questionElement.querySelector('.inp-right-answer').value;
      Array.from(question).map((item) => {
        if(!item){
          alert('لم يتم اضافة السؤال');
          return
        }
      })
      const questionData = {
        question: question,
        answers: answers,
        rightAnswer: rightAnswer
      };
      exam.push(questionData);
    });
    try {
       await fetch(`http://localhost:5000/api/addtestssubjects/add${matiral[IndexMatrail]}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({exam , NameOfExam}),
			}).then((res) => {
        swal("جيد جدا", "تم حفظ الاختبار", "success");
        const dddd = document.querySelectorAll('.one-question');
        const oneQuestion =Array.from(dddd);
        oneQuestion.forEach((x) => x.remove());
        const nameOfExam = document.querySelector('.nameOfExam');
        nameOfExam.value = '';
        })
    } catch (error) {
      console.error(error);
      swal(" خطأ", "هناك خطأ في الاتصال بالخادم", "error");
    }
  };
  return (
    <div>
          <div className="AreaExam">
        <div className="headingExam">
          <input type="textarea"  placeholder="اسم الامتحان"  className="nameOfExam"/>
          <h1 className='mat-exam'>{nameOfsubArabic[IndexMatrail]}</h1>
        </div>
        <div className="bodyOfExam">
        </div>
        <div className="add-delete">
            <div className="Add-quetion" onClick={AddQuestionAll}><i className="fa-solid fa-plus"></i></div>
            <div className="Delete-quetion" onClick={DeleteLastQuestion}><i className="fa-solid fa-xmark"></i></div>
        </div>
        <div className="Send-data-div">
        <button className="btton btn-send-exam" onClick={SendThisData}>ارسال الامتحان</button>
        </div>
      </div>
    </div>
  )
}

export default AppliedMathematicsAdd;