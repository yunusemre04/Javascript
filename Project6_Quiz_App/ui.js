const startButton= document.querySelector("#getQuestionButton");
const quizBox=document.querySelector(".quizBox");
const totalQuestion=document.querySelector("#totalQuestion");
const questionNumber=document.querySelector("#questionNumber");
const rightIcon=document.querySelector("#right");
const leftIcon=document.querySelector("#left");
const quizQuestion=document.querySelector(".card-header");
const quizOptions=document.querySelector(".quiz-options");
const optionList= quizOptions.children;
const correctIcon='<i class="mx-2 bi bi-check2 isCorrectIcon"></i>';
const incorrectIcon='<i class="mx-2 isCorrectIcon bi bi-x"></i>';
const number=document.querySelector('.numberInfo');
const timeElement=document.querySelector(".timeInfo");
const remainTimeElement=document.querySelector(".remainTime");
const timeLine=document.querySelector(".timeLine");
const start=document.querySelector(".start");

function displayQuestions(questionElement){
    let quesText= `<h3>${questionElement.question}</h3>`
    
    let option ="";
    for(let answer in questionElement.options){
    option+=`<div class="option"><span class="h6 option-item"><span class="h6 opt">${answer}</span> ) <span>${questionElement.options[answer]}</span></div>`
    
    }
    quizQuestion.innerHTML=quesText;
    quizOptions.innerHTML=option;
    
    
    for(let opt of optionList){
        opt.setAttribute("onclick","optionSelected(this)"); 
    }
} 
