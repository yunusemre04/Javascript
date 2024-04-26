const container=document.querySelector(".container");
const amount = document.getElementById("amount");
const totalPrice= document.getElementById("price");
const seats=document.querySelectorAll(".seat:not(full)");
getFromLocaleStorage();
container.addEventListener('click',function(e){
    
    if(e.target.classList.contains("seat")&& !e.target.classList.contains("full") ){
        e.target.classList.toggle('selected');
    }

    let selectedSeat=document.querySelectorAll(".selected");
    let amountNumber= selectedSeat.length;
    amount.innerText=amountNumber;
    let price=document.querySelector("select").value;
    totalPrice.innerText= price*amountNumber;

    const selectedSeatArray=[];
    const seatsArray=[];

    selectedSeat.forEach(function(seat){
        selectedSeatArray.push(seat);
    })
    console.log(selectedSeatArray);
    
    seats.forEach(function(seat){
        seatsArray.push(seat);
    });

    let selectedSeatsIndex= selectedSeatArray.map(function(seat){
        return seatsArray.indexOf(seat);
    })
    console.log(selectedSeatsIndex);

    saveToLocalStorage(selectedSeatsIndex);
    
})

function saveToLocalStorage(indexs){
    localStorage.setItem("selectedSeats",JSON.stringify(indexs));
 
    
}

function getFromLocaleStorage(){
    const selectedSeats=JSON.parse(localStorage.getItem("selectedSeats"));
    if(selectedSeats != null && selectedSeats.length>0)
        seats.forEach(function(seat,index){
        if(selectedSeats.indexOf(index)>-1){
        seat.classList.add("selected");
    }
    })
}

