const myform = document.getElementById("form");
const email= document.getElementById("mail");
const username = document.getElementById("username");
const phone= document.getElementById("phone");
const password = document.getElementById("password");
const repassword= document.getElementById("repassword");

function validControl(input){
    if(input.value===''){
        input.classList.add("is-invalid");
        let message=input.nextElementSibling;
        message.classList.add("invalid-feedback");
        message.classList.add("ms-2");
        message.innerText="You can't leave it blank";
    } else{
        input.classList.add("is-valid");
    }
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
function error(input,message){
    input.classList.add("is-invalid");
    let div=input.nextElementSibling;
        div.classList.add("invalid-feedback");
        div.classList.add("ms-2");
        div.innerText=message;
}
function success(input){
    input.classList.add("is-valid");
}

myform.addEventListener('submit',function(event){
   
    
    validControl(username);
    
    if(validateEmail(email.value)){
        success(email);
    }else{
        error(email,"Email is written Wrong");
    }
    // validControl(phone);
    // validControl(password);
    // validControl(repassword);
    // if(password.value.length<5){
    //     error(password,"You must enter least five character");
    // }else{
    //     success(password);
    // }
    multiplyControl([phone,password,repassword]);
    checkPasswords(password,repassword);
    checkLength(username,5,10);
    checkLength(password,5,15);
    checkLength(repassword,5,15);
    checkPhone(phone);
    event.preventDefault();
});

function multiplyControl(inputs){
    inputs.forEach(function(input){
        if(input.value ===''){
            error(input,"can't leave blank");
        }else{
            success(input);
        }
    })
}

function checkPasswords(password,repassword){
    if(password.value!==repassword.value){
        error(password,"Password and repassword are not match");
        error(repassword,"Password and repassword are not match");
    }
}

function checkLength(input,min,max){
    if(input.value.length<min){
        error(input,`Length of ${input.id} must be minimum ${min}`);
    }
    else if(input.value.length>max){
        error(input,`Length of ${input.id} must be maximum ${max}`);
    }
    else{
        success(input);
    }
}
function checkPhone(phone){
    var exp= /^\d{10}$/;
    if(!exp.test(phone.value)){
        error(phone,"Phone Number is written Wrong");

    }
    else{
        success(phone);
    }
}