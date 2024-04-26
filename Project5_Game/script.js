const wordElement= document.querySelector(".word"); 
const modal= document.querySelector("#popup");
const wrongLetters= document.querySelector(".wrong");
const items=document.querySelectorAll(".item");


const correctLetter=[];
const wrongLetterArray=[];
let selectedWord=selectWord();
let content=modal.innerHTML;

displayWord();
function selectWord(){
    const options=["java","kotlin","swift","phyton","css"];

    return options[Math.floor(Math.random()*options.length)];
    ;
}

function displayWord(){
    
    wordElement.innerHTML=`
    ${selectedWord.split('').map(letter=>
        `<span class="word-letter">${correctLetter.includes(letter) ? letter:'_'}</span>`
    ).join('')}`;
    
    const word= wordElement.innerText.replace(/\n/g,'');
    if(word==selectedWord){
        modal.innerHTML=content;
        modal.style.backgroundColor="green";
        modal.style.display="flex";
    }
}

function updateWrongLetter(){
    wrongLetters.innerHTML=`
    ${wrongLetterArray.map(letter=> `<span class="wrong-letter text-light">${letter}</span>`)}
    `
    
    items.forEach((item,index)=>{
        
        const wrongCount= wrongLetterArray.length;
        
        if(index<wrongCount){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
        
    });

    if(wrongLetterArray.length>=7){
        modal.style.display="flex";
        
        modal.innerHTML=`
            <div class="model-header pb-3">
            <h3 class="text-center mt-2 text-dark ">You Have Failed</h3>
            <button type="submit" class="btn  btn-sm btn-primary" id="playAgain">Play Again</button>
            </div>`
        modal.style.backgroundColor="red";
    }
    
     
}

function letterControl(){
    modal.style.display="flex";
    modal.style.backgroundColor="yellow";
    modal.innerHTML=`<h2>You have push same letter</h2>`;
    setTimeout(function(){
        modal.style.display="none";
    },1000);
}

window.addEventListener('keydown',function(e){
    let letter= e.key;
    
    if(/^[a-zA-Z]$/.test(letter)){
        if(selectedWord.includes(letter)){
            if(!correctLetter.includes(letter)){
                correctLetter.push(letter);
                displayWord();
            }else{
                letterControl();
            }
        }else{
            if(!wrongLetterArray.includes(letter)){
                wrongLetterArray.push(letter);
                updateWrongLetter();
            }else{
                letterControl();
        
            }
            
        }
    }
})

let btn = document.getElementById("popup");


btn.addEventListener('click', function() {
    correctLetter.splice(0);
    wrongLetterArray.splice(0);
    selectedWord = selectWord();
    modal.style.display = "none";

    displayWord();
    updateWrongLetter();
});
