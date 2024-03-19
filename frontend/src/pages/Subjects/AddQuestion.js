const AddQuestionAll = () =>{
  const AllQuestion = document.querySelectorAll('.one-question')
  const BodyOfExam = document.querySelector('.bodyOfExam');
  let OneQuestion = document.createElement('div');
  OneQuestion.className = 'one-question';
  BodyOfExam.appendChild(OneQuestion);
  let AreaQuestion = document.createElement('div');
  AreaQuestion.className = 'AreaQuetion';
  let InputQuestion = document.createElement('input');
  InputQuestion.className = 'quetions';
  InputQuestion.placeholder = 'اضافة سؤال';
  let SpaNumerQuestion = document.createElement('span');
  SpaNumerQuestion.className ='span-numer-question';
  for(let i = 0 ; i <= AllQuestion.length ; i++){
      SpaNumerQuestion.innerHTML = `${i+1}-`
  }
  OneQuestion.appendChild(AreaQuestion);
  AreaQuestion.appendChild(SpaNumerQuestion);
  AreaQuestion.appendChild(InputQuestion);
  let AreaAnswer = document.createElement('div');
  AreaAnswer.className = 'AreaAnswer';
  let Answer1 = document.createElement('input');
  Answer1.className = 'answers';
  Answer1.placeholder = 'اضافة الاختيار';
  let Answer2 = document.createElement('input');
  Answer2.className = 'answers';
  Answer2.placeholder = 'اضافة الاختيار ';
  let Answer3 = document.createElement('input');
  Answer3.className = 'answers';
  Answer3.placeholder = 'اضافة الاختيار ';
  let Answer4 = document.createElement('input');
  Answer4.className = 'answers';
  Answer4.placeholder = 'اضافة الاختيار ';
  OneQuestion.appendChild(AreaAnswer);
  AreaAnswer.appendChild(Answer1);
  AreaAnswer.appendChild(Answer2);
  AreaAnswer.appendChild(Answer3);
  AreaAnswer.appendChild(Answer4);
  let RightAns = document.createElement('div');
  RightAns.className = 'RightAns';
  let InputRightAnswer = document.createElement('input');
  InputRightAnswer.className = 'inp-right-answer';
  InputRightAnswer.placeholder = 'اضافة الاختيار الصحيح';
 OneQuestion.appendChild(RightAns);
 RightAns.appendChild(InputRightAnswer);
}


export default AddQuestionAll;