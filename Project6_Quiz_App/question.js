
function Questions(question,options,correctAnswer){
    this.question=question;
    this.options=options;
    this.correctAnswer=correctAnswer;
}

let questions=[
    ques1= new Questions("Which one capital of France?",{A:"Lille",B:"Paris",C:"Lyon",D:"Luksemburg"},"B"),
    ques2= new Questions("Which one main character on Witcher books?",{A:"Yennefer",B:"Ciri",C:"Geralt",D:"Dandalion"},"C"),
    ques3= new Questions("Which one not a programming language?",{A:"pyhton",B:"java",C:"javascript",D:"css"},"D"),
    ques4= new Questions("Which one not a movie?",{A:"Star Wars",B:"Breaking Bad",C:"Django",D:"Matrix"},"B"),
    ques5= new Questions("Which one not a game?",{A:"God of War",B:"Crysis",C:"Jumanji",D:"Far Cry"},"C"),
];

Questions.prototype.answerControl= function(answer){
    return answer==this.correctAnswer;
};