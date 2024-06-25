let numbers=[1,5,7,15,3,25];
for (let i = 0; i < numbers.length; i++) {
     console.log(numbers[i]*numbers[i]);
}

for(let number of numbers){
    if (number%5==0) {
        console.log(`${number} can divide five`);
    }

}
 
var sum=0;
for(let number in numbers){
   if(numbers[number]%2==0){ sum+=numbers[number];
   }
}
console.log(`Odd numbers summation is ${sum}`);

let products=["iphone 12","iphone 13","samsung S22","xiaomi note 12"];
  let i=0;
 for(let product of products){
    if(product.includes("samsung")){
        i++;
    }
  }
  console.log(`products contain  searched word ${i} times `);

  for(let product of products){
        console.log(product.toUpperCase());
  }
  

let students =[
    {"name":"kerem","lastname":"bilgi","grades":[60,70,70]},
    {"name":"ada","lastname":"bilgi","grades":[65,80,85]},
    {"name":"metin","lastname":"bilgi","grades":[85,55,26]},    
]
sum=0;
for(student of students){
    for (let i = 0; i < student.grades.length; i++) {
        sum+=student.grades[i];
    }
    let average=sum/3;
    console.log(`average of ${student.name} is ${average.toFixed(2)}`);
    sum=0;
}