const quizBd = [
    {
        question: " Q1: What is the meaning of life in your opinion?",
        a:"Live happily.",
        b:"Makes the family happy.",
        c:"Become an honest  human.",
        d:"Live with someone happily.",
        ans: "ans4",
    },
    {
        question: " Q2: In the below's which name do you like?",
        a:"Queen.",
        b:"king.",
        c:"Selfish.",
        d:"Ugly.",
        ans: "ans4",
    },
    {
        question: " Q3: How do you spend your time?",
        a:"Smoothly.",
        b:"Weakly",
        c:"Not bad.",
        d:"Good.",
        ans: "ans4",
    },
    {
        question: " Q4: If 1=3, 2=3, 3=5 📝 Then, 4= ?",
        a:"4.",
        b:"5",
        c:"3",
        d:"6",
        ans: "ans1",
    },
    {
        question: " Q5: Sally is 54 years old and her mother is 80, how many years ago was Sally’s mother times her age?",
        a:"44.",
        b:"39",
        c:"13",
        d:"26",
        ans: "ans1",
    },
   
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const  loadQuestion = () => {
    const questionList = quizBd[questionCount];
  question.innerText = questionList.question;
  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;

}
loadQuestion ();

const   getCheckAns = () =>{
    let answer;
     answers.forEach((currentElement) => {
       if(currentElement.checked){
           answer = currentElement.id;
           currentElement.checked = false;
       }
     });
     return answer;
}

submit.addEventListener('click' , () => {
 const checkedAns =  getCheckAns();
 console.log(checkedAns);
   if (checkedAns ===quizBd[questionCount].ans) {
       score++;
   };
   questionCount ++;
   if(questionCount < quizBd.length){
    loadQuestion ();
   }
else{
     showScore.innerHTML = `
      <h3> Your score is ${score}/${quizBd.length} ✌</h3>
      <button class="btn" onclick="location.reload()"> Try Again</button>
     `
     showScore.classList.remove("scoreArea");
   }
})