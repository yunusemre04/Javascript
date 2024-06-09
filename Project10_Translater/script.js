const fromLang=document.querySelector("#fromLang");
const toLang=document.querySelector("#toLang");
const fromText=document.querySelector("#fromTEXT");
const toText=document.querySelector("#toTEXT");
const trBtn=document.querySelector("#trBtn");
const changeIcon=document.querySelector("#change");
const leftCpy=document.querySelector("#leftcpy");
const rightCpy=document.querySelector("#rightcpy");
const leftVoice=document.querySelector("#leftVoice");
const rightVoice=document.querySelector("#rightVoice");

for(let lan in languages){
    let option=`<option value="${lan}">${languages[lan]}</option>`;
    fromLang.insertAdjacentHTML("beforeend",option);
    toLang.insertAdjacentHTML("beforeend",option);
}

trBtn.addEventListener("click",()=>{
    textValue=fromText.value;
    fromValue=fromLang.value;
    toValue=toLang.value;
    fetch(`https://api.mymemory.translated.net/get?q=${textValue}&langpair=${fromValue}|${toValue}`)
    .then(res=> res.json())
    .then( response=>{
        console.log(response);
        fromValue="";
        if(response.responseStatus!=200){
            
            toValue=fromValue;
        }else{
            toValue=response.responseData.translatedText;
        }
        toText.value=toValue;
    });

})

changeIcon.addEventListener("click",()=>{
    temp=fromLang.value;
    fromLang.value=toLang.value;
    toLang.value=temp;

    temp2=fromText.value;
    fromText.value=toText.value;
    toText.value=temp2;

    trBtn.click();
})

rightCpy.addEventListener("click",()=>{
    navigator.clipboard.writeText(toText.value);
})

leftCpy.addEventListener("click",()=>{
    navigator.clipboard.writeText(fromText.value);
})

let voice;

rightVoice.addEventListener("click",()=>{
    voice = new SpeechSynthesisUtterance(toText.value);
    voice.lang=toLang.value;
    speechSynthesis.speak(voice);
})

leftVoice.addEventListener("click",()=>{
    voice = new SpeechSynthesisUtterance(fromText.value);
    voice.lang=fromLang.value;
    speechSynthesis.speak(voice);
})




