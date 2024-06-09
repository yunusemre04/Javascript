let currencies =[];
fetch(`https://api.frankfurter.app/latest?currencies`)
.then(res=>res.json())
.then(data =>{
    
    document.querySelector("#item2").innerHTML=`<h3>  1€ = ${data.rates.TRY.toFixed(3)}₺</h3>`;
    document.querySelector("#item3").innerHTML=`<h3>  1€ = ${data.rates.USD.toFixed(3)}$</h3>`;
    document.querySelector("#item4").innerHTML=`<h3>  1€ = ${data.rates.GBP.toFixed(3)}£</h3>`
    let options;
    // fix that
    for (let i=0;i<data.rates.length;i++) {
        currencies.push({});
        options+=`<option value="${data.rates[currency]}></option>"`
    }
    console.log(currencies);
    
}
);

fetch(`https://api.frankfurter.app/latest?amount=1&from=USD&to=TRY`)
.then(res=>res.json())
.then(data=> {
    console.log(document.querySelector("#item1"));
    document.querySelector("#item1").innerHTML=`<h3>1$ = ${Object.values(data.rates)}₺</h3>`
})
//https://www.frankfurter.app/docs/
//fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)