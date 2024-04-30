let correctAnswerNumber=0;
startButton.addEventListener("click",function(){
    if(quiz.questionsP.length>quiz.questionIndex){
        startTimer(20);
        startTimeLine(20);
        quizBox.classList.add("active");
        let myQuestion=quiz.getQuestion();
        displayQuestions(myQuestion);
        quiz.questionIndex++;
        rightIcon.classList.remove("show");
        leftIcon.classList.remove("show");
        let numberInfo=`<span style="font-size: 25px;" class="mx-2" id="questionNumber">${quiz.questionIndex}/${questions.length}</span>`
        number.innerHTML=numberInfo;
        start.classList.add("d-none");
        
    }

});

rightIcon.addEventListener("click",function(){
    if(quiz.questionsP.length>quiz.questionIndex){
            quizBox.classList.add("active");
            let myQuestion=quiz.getQuestion();
            displayQuestions(myQuestion);
            quiz.questionIndex++;
            rightIcon.classList.remove("show");
            leftIcon.classList.remove("show");
            let numberInfo=`<span style="font-size: 25px;" class="mx-2" id="questionNumber">${quiz.questionIndex}/${questions.length}</span>`
            number.innerHTML=numberInfo;
            clearInterval(Interval);
            clearInterval(Interval2);
            startTimer(20);
            startTimeLine(20);
        }else{
            quizQuestion.innerHTML="<h2>Quiz is Over</h2>";
            let message="";
            bgColor="";
            if(correctAnswerNumber<(optionList.length-1)/2){
                message="Maybe Next Time";
                bgColor="bg-danger";
                
            }else{
                message="Congratulations";
                bgColor="bg-success";
            }
            quizOptions.innerHTML=`
            <i class="bi bi-trophy" style="font-size:70px"></i>
            <div class="h2 ${bgColor} border" style="border-radius:10px">${message}</div>
            <br>
            <h4 class="${bgColor} border"style="border-radius:10px">You have ${correctAnswerNumber} true answer by ${questions.length} questions</h3>
            `
            quizOptions.style.color="white";
            quizOptions.style.textAlign="center";  
           
            number.innerHTML="";
            rightIcon.classList.remove("show");
            document.querySelector(".playAgain").parentElement.classList.remove("d-none");
            document.querySelector(".playAgain").classList.add("active");
            
            
        }
});
leftIcon.addEventListener("click",function(){
    if(0<=quiz.questionIndex){
        quizBox.classList.add("active");
        let myQuestion=quiz.getQuestion();
        displayQuestions(myQuestion);
        quiz.questionIndex--;
        rightIcon.classList.remove("show");
        leftIcon.classList.remove("show");
        }else{
            quiz.questionIndex=1;
        }
});
 

let quest = quiz.getQuestion();


function optionSelected(selectedOpt) {
    let item = selectedOpt.querySelector(".opt").textContent;
   
    console.log(quest);
    
    if (quest.answerControl(item)) {
        selectedOpt.classList.add("correct");
        selectedOpt.insertAdjacentHTML("beforeend", correctIcon);
        correctAnswerNumber++;
    } else {
        selectedOpt.classList.add("incorrect");
        selectedOpt.insertAdjacentHTML("beforeend", incorrectIcon);
    }

    for (let i = 0; i < optionList.length; i++) {
        optionList[i].classList.add("disabled");
    }
    rightIcon.classList.add("show");
    quest=quiz.getQuestion();
    clearInterval(Interval);
    clearInterval(Interval2);
}

document.querySelector(".playAgain").addEventListener("click",function(){
    window.location.reload();
});

let Interval;

function startTimer(time){
    timeElement.textContent=time;
   
    Interval=setInterval(timer,1000);
        function timer(){
            timeElement.textContent=time;
            time--;
            if(time<0){
                clearInterval(Interval);
                
                
                let answer = quiz.getQuestion().correctAnswer;
                   
                for(let option of optionList){
                    if(option.querySelector(".opt").textContent== quest.correctAnswer){
                        option.classList.add("empty");
                        option.insertAdjacentHTML("beforeend", correctIcon);
                    }
                    option.classList.add("disabled");
            }
            quest=quiz.getQuestion();
            rightIcon.classList.add('show');            
        }
    }
}
let Interval2;
function startTimeLine(time){

    let lineWidth=0;
    Interval2= setInterval(timer,21);

    function timer(){
        lineWidth+=0.1;
        timeLine.style.width=lineWidth+ "%"
        if(lineWidth>99.9){
            clearInterval(Interval2);
        }
    }

}