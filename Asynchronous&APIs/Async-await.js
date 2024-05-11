//                                         ******** PART 4 ASYNC & AWAIT ********


// const serverStatus= true;

// function login(username,password){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(serverStatus){
//                 resolve({userName:username,country:"turkey",passWord:password});
//             }else{
//                 reject("Couldn't find server");
//             }
//         },2000)
//     })
// }



// function getPosts(username){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(serverStatus){
//                 resolve(["post1","post2","post3"]);
//             }else{
//                 reject("Couldn't find server");
//             }
//         },2000)
//     })
// }

// function postInfo(post){
//     console.log(`${post} has been reached`);
// }
// ;
// displayLogin();
// async function displayLogin(){
//     try{
//         let user= await login("yunus emre","9855632");
//         console.log(user);
    
//         let posts = await getPosts(user.userName) ;
//         console.log(posts);
        
//         postInfo(posts[0]);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

const sInput=document.querySelector("#sc");
const sBtn=document.querySelector(".searchBtn");
const box = document.querySelector(".box");
const mainCountry=document.querySelector(".mainCountry");
const neighboorCountries=document.querySelector(".neighboor");
const mainBox= document.querySelector(".mainBox");
const alert=document.querySelector(".alert");




async function displayCountry(country){
    try{
        let server= await fetch("https://restcountries.com/v3.1/name/" + country);
        
        if(!server.ok){
            alert.classList.remove("d-none");
            throw new Error("Country is not found");            
        }else{
            let countryData=await server.json();
            setCountry(countryData[0]);
            let countries=countryData[0].borders;
            if(!countries){
                alert.classList.remove("d-none");
                throw new Error("Neighbour country is not found");
            }
            let response= await fetch("https://restcountries.com/v3.1/alpha?codes=" + countries.toString());
            let countriesData= await response.json();
            console.log(countriesData);
            setCountry(countriesData);
        } 
    }
    catch(error){
        displayError(error);
    }
}

function setCountry(countryData) {
    if (Array.isArray(countryData)) {
        for (let country of countryData) {
            let html = `
                
                <div class="card w-25 my-1 cardbox">               
                    <div class="card-header">
                        <div class="country-name">  
                            ${country.name.common}
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="flag">  
                            <img class="img-fluid" src="${country.flags.png}">     
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="info">   
                            <h6>Capital:<br>${country.capital}</h6>  
                            <hr>
                            <h6> Population<br>${country.population}</h6>  
                        </div>
                    </div>
                </div>    
                
            `;
            neighboorCountries.parentElement.insertAdjacentHTML("beforeend", html);
        }
    } else {
        let html = `
            <div class="card  mx-1 my-2 cardbox">               
                <div class="card-header">
                    <div class="country-name">  
                        ${countryData.name.common}
                    </div>
                </div>
                <div class="card-body">
                    <div class="flag">  
                        <div class="row">
                            <img class="img-fluid col-4 text-center" src="${countryData.flags.png}"> 
                                <ul class="list-group col-8" style="list-style:none">
                                    <li class="list-group-item h4 text-center bg-dark text-light">COUNTRY INFO</li>
                                    <li class="list-group-item h6 text-center">NAME : ${countryData.name.official}</li>
                                    <li class="list-group-item h6 text-center">LANGUAGES : ${Object.values(countryData.languages)}</li>
                                    <li class="list-group-item h6 text-center">CAPİTAL : ${countryData.capital}</</li>
                                    <li class="list-group-item h6 text-center">POPULATİON : ${countryData.population}</li>
                                    <li class="list-group-item h6 text-center">CONTİNENTS : ${Object.values(countryData.continents)}</li>
                                </ul>
                        </div>    
                    </div>
                </div>
                <hr>
                <h3 class="text-center ">Neighboor Countries</h3>
            </div>    
            
        `;
        
        mainCountry.parentElement.insertAdjacentHTML("beforeend", html);
    }
}
sBtn.addEventListener("click",()=>{
    document.querySelectorAll(".cardbox").forEach((card)=>{
       card.remove();
    });

    let value=sInput.value.toLowerCase();
    displayCountry(value);
    
})

function displayError(error){
    alert.innerText=`${error.message}`;
    setTimeout(()=>{
        alert.innerText="";
        alert.classList.add("d-none");
    },3000)

}