
const DeleteLastQuestion = () => {
  let AllQuestion = Array.from(document.querySelectorAll('.one-question'));
  let lastQuestion = AllQuestion.pop();
  lastQuestion.remove();
}

// the below code fragment can be found in:
export default DeleteLastQuestion