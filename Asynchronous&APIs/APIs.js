//                    **************  PART 2 API's ***************
const sInput=document.querySelector("#sc");
const sBtn=document.querySelector(".searchBtn");
const box = document.querySelector(".box");
const mainCountry=document.querySelector(".mainCountry");
const neighboorCountries=document.querySelector(".neighboor");
const mainBox= document.querySelector(".mainBox");


function displayCountry(country) {
    const request = new XMLHttpRequest();
    request.open("GET", "https://restcountries.com/v3.1/name/" + country);
    request.send();

    request.addEventListener('load', function(){
        const data = JSON.parse(request.responseText);
        console.log(data);
        setCountry(data[0]);

        if (data[0].hasOwnProperty('borders')) {
            const countries = data[0].borders.toString();

            const newRequest = new XMLHttpRequest();
            newRequest.open("GET", `https://restcountries.com/v3.1/alpha?codes=` + countries);
            newRequest.send();
            newRequest.addEventListener("load", function () {
                const newData = JSON.parse(this.responseText);
                console.log(newData);
                setCountry(newData);
            });
        }
    });
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


let isEmpty=true;
sBtn.addEventListener("click",()=>{
    document.querySelectorAll(".cardbox").forEach((card)=>{
       card.remove();
    });

    let value=sInput.value.toLowerCase();
    displayCountry(value);
    
})
