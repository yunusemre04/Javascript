var now=new Date();
console.log(now);
console.log(now.getFullYear());
var present=now.getFullYear();
now.setDate(5);
console.log(now);
now.setFullYear("2028");
let future= now.getFullYear();
console.log(future);
console.log(present);
var age=future-present;
console.log(age);
