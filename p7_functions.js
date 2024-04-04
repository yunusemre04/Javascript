function write(word,times){
    for(var i=0;i<times;i++){
       console.log(word);
    }
}
write("software",3);

function rectangular(tall_part,short_part){
    var perimeter=(tall_part+short_part)*2;
    var area=tall_part*short_part;
    console.log(`Perimeter of Rectangular is ${perimeter}`);
    console.log(`Area of Rectangular is ${area}`);
}

rectangular(5,6);

function heads_or_tails(){
    var number= parseInt(Math.random()*2);
    if(number==0){
        console.log("heads");
    }
    else{
        console.log("tails");
    }
}
heads_or_tails();

function divide(number){
    var array=[];
    let k=0;
    for (let i = 1; i <= number; i++) {
    
        if(number%i==0){
            array[k]=i;
            k++;
        }
    }
console.log(`number can divide ${array}`);
}

divide(35);

function total(){
    let total=0;
    for(let i=0;i<arguments.length;i++){
           total+=arguments[i];
    }
    return total;
}
console.log(`total is ${total(5,6,8)}`);