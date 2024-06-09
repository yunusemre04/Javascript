const list1 = document.querySelector("#list1");
const list2 = document.querySelector("#list2");
const calculateBtn = document.querySelector("#cBtn");
const amount = document.querySelector("#amount");
const result=document.querySelector(".number");

let currencies;
connectServer("USD","TRY","item1");
connectServer("EUR","TRY","item2");
connectServer("EUR","USD","item3");
connectServer("EUR","GBP","item4");


fetch(`https://api.frankfurter.app/currencies`)
  .then(res => res.json())
  .then(data => {
   
    currencies = data;
    console.log(currencies);    
    for (let currency in currencies) {
      const option = `<option value="${currency}">${currency}</option>`;
      list1.insertAdjacentHTML("beforeend", option);
      list2.insertAdjacentHTML("beforeend", option);
    }
 });

calculateBtn.addEventListener("click", () => {
  console.log(list1.value, list2.value); 

  fetch(`https://api.frankfurter.app/latest?amount=${amount.value}&from=${list1.value}&to=${list2.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(Object.values(data.rates));
        let a=Object.values(data.rates);
        result.textContent=`${amount.value} ${list1.value}=${(Object.values(data.rates))} ${Object.keys(data.rates)}`;
        result.parentElement.classList.remove("d-none");
    });
});


function connectServer(currency1,currency2,location){
  fetch(`https://api.frankfurter.app/latest?amount=1&from=${currency1}&to=${currency2}`)
  .then(res=>res.json())
  .then(data=>{
   document.querySelector(`#${location}`).innerHTML=`<h3> 1 ${currency1} = ${Object.values(data.rates)} ${currency2}</h3>`;
  })
}