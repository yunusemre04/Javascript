//export : Provide turn to public a defined array or other item

// export function sum(...numbers){
//     return numbers.reduce((total,number)=> number+total,0);
// }
// export function multiply(...numbers){
//     return numbers.reduce((total,number)=> number*total,1);
// }

export default class{
    constructor(){};
    sum(...numbers){
        return numbers.reduce((total,number)=> number+total,0);
    }
    multiply(...numbers){
        return numbers.reduce((total,number)=> number*total,1);
    }
}