// let question={
//     ques:"Which one your favorite color?",
//     options:{a:"red",b:"blue",c:"brown",d:"green"},
//     correctAnswer:"a",
//     answerControl: function (answer){
//         return answer===this.correctAnswer;
//     }
// }

// console.log(question.ques);
// console.log(question.answerControl("a"));

function Questions(ques,options,correctAnswer){
    this.ques=ques;
    this.options=options;
    this.correctAnswer=correctAnswer;
    // this.answerControl= function(answer){
    //     return answer==this.correctAnswer;
    // }
}

Questions.prototype.answerControl= function(answer){
    return answer==this.correctAnswer;
}
let ques1= new Questions("Which one your favorite color?",{a:"red",b:"blue",c:"brown",d:"green"},"a");
let ques2= new Questions("Which one most popular progrogramming language at artifical intelligante?",{a:"Java",b:"Pyhton",c:"C#",d:"Javascript"},"b");

// console.log(ques1.ques);
// console.log(ques1.correctAnswer);
// console.log(ques1.answerControl("a"));

// console.log(ques2.ques);
// console.log(ques2.correctAnswer);
// console.log(ques2.answerControl("b"));

console.log(ques1.answerControl("a"));