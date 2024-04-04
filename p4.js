var array= ["apple","banana","pear","strawberry"];
//array lengts
console.log(array.length);
//first element of array
console.log(array[0]);
//last element of array
console.log(array[array.length-1]);
//Does array include an Object 
console.log(array.includes("apple"));
//Adding last element to array
array.push("cherry");
//delete last two element
console.log(array.splice(array.length-2,2));
var student1=["Yiğit Bilgi",2010,70,60,80];
var student2=["Ada Bilgi",2012,80,80,90];
var student3=["Ahmet Turan",2009,60,60,70];

var average1=(student1[2]+student1[3]+student1[4])/3;
var average2=(student2[2]+student2[3]+student2[4])/3;
var average3=(student3[2]+student3[3]+student3[4])/3;

console.log(average1.toFixed(2));
console.log(average2.toFixed(2));
console.log(average3.toFixed(2));
