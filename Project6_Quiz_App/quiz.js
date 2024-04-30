function Quiz(questionsP){
    this.questionsP=questionsP;
    this.questionIndex=0; 
    
}

Quiz.prototype.getQuestion = function(){
    return this.questionsP[this.questionIndex];
  
}

let quiz=new Quiz(questions);