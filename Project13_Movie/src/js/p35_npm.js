

// let x=0;

// let persons=[];

// const personadd=(name)=>{
//     persons.push(name);
// }

// const showPersons=()=>{
//     console.log(persons);
// }

// personadd("ali");
// personadd("selin");
// showPersons();

//                                         ES6  MODULE

// import {sum,multiply} from "./library";

// console.log(sum(6,8,7,87,35));

import mylib from "./library";

const lib =new mylib();

console.log(lib.sum(6,8,7,87,35));
console.log(lib.multiply(6,8,7));