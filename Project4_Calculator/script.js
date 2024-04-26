const display= document.querySelector("#display");
const keys= document.querySelector(".calculator");
const clear=document.querySelector(".clear");

let firstElement=null;
let operator=null;
let waitingSecond=false;

let dpValue="0";

updateDisplay();
function updateDisplay(){
    display.value=dpValue;
};

keys.addEventListener("click",function(e){
    let selectedElement=e.target;
    if(!selectedElement.matches("button")){
        return;
    }
    if(selectedElement.classList.contains("operator")){
        console.log("operator",selectedElement.value);
        handleOperator(selectedElement.value);
        return;
    }
    if(selectedElement.classList.contains("decimal")){
        console.log("decimal",selectedElement.value);
        inputDecimal(selectedElement);
        return;
    }
    if(selectedElement.classList.contains("clear")){
        console.log("clear",selectedElement.value);
        return;
    }
    
    inputNumber(selectedElement);
    
});

clear.addEventListener("click",function(){
    dpValue="0";
    updateDisplay();
})

function inputNumber(element){
    if(waitingSecond){
        dpValue=element.value;
        waitingSecond=false;
    }else{
        dpValue= dpValue ==="0" ? element.value : dpValue+element.value;
    }
    
    updateDisplay();
}

function inputDecimal(element){
   if(!dpValue.includes(".")){
   dpValue= dpValue+".";
   updateDisplay();
   }
}

function handleOperator(newOperator){
    const value= parseFloat(dpValue);
    if(firstElement===null){
        firstElement=value;
    }
    if(operator && waitingSecond){
        operator=newOperator;
        return;
    }
    else if(operator){
        const result= calculate(firstElement,value,operator);
        dpValue=`${parseFloat(result.toFixed(5))}`;
        firstElement=result;
    }
    waitingSecond = true;
    operator = newOperator;
    updateDisplay();
}

function calculate(first,second,operator){
    if(operator==="+"){
        return first+second;
    }
    else if(operator==="-"){
        return first-second;
    }
    else if(operator==="*"){
        return first*second;
    }
    else if(operator==="/"){
        return first/second;
    }
    else{
        return second;
    }
}